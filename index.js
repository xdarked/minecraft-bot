const mineflayer = require('mineflayer');
const { once } = require('events')
const bot = mineflayer.createBot({
  
  // login 
  "user"      : 'account username',
  "host"      : 'serverip',
  "port"      : 'port',
  "version"   : '1.12.2',
  auth:'microsoft' //for onlinemode=on servers

  
})



//mc chat > terminal
bot.on('chat', (username, message) => {
  var now = new Date();
  console.log(now.toUTCString(), '|||', username, ':',message)
})

//terminal > mc chat
bot.once("spawn", async () => {
  rl.on("line", async (line) => {
      bot.chat(line)
  })
})
const readline = require("node:readline");
const { version } = require('os');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Log errors and kick reasons
bot.on('kicked', console.log)
bot.on('error', console.log)

