const mineflayer = require('mineflayer')

var options = {
  host: "serverip",
  port: 25565,
  version: "1.12.2",
  viewDistance: 16,
  auth: 'microsoft', 
  username: "username",

};

function startBot() {
  const bot = mineflayer.createBot(options)

  //console to minecraft chat
  bot.once("spawn", async () => {
    rl.on("line", async (line) => {
      bot.chat(line)
    })
  })
  const readline = require("node:readline");
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  //minecraft chat to console
  bot.on('message', (message) => {
    console.log(message.toAnsi())
  })


  bot.on("login", () => { console.log(`${bot.username} connected to server at ${new Date}`) });
  bot.once("spawn", () => { console.log(`bot spawned at ${bot.entity.position}`) });
  bot.on("end", (reason) => {
    console.log(`Disconnected: ${reason}`)
    setTimeout(() => { startBot() }, 20000)
  });
  bot.on("kicked", (reason) => { console.log(`bot kicked for: ${reason}`) });
  bot.on("error", (err) => { console.error(`Bot error: ${err}`) });
}

setTimeout(() => {
  startBot()
}, 10000);
