const mineflayer = require('mineflayer');
const { once } = require('events')


const bot = mineflayer.createBot({
  
  // login 
  "user"      : 'psautoelectrics@btinternet.com',
  "master"    : 'none',
  "host"      : '0b0t.org',
  //"port"      : '59936',
  "version"   : '1.12.2',
  auth:'microsoft'
  
})



//mc chat in terminal
bot.on('chat', (username, message) => {
  var now = new Date();
  console.log(now.toUTCString(), '|||||', username, ':',message)
})


bot.once("spawn", async () => {
  rl.on("line", async (line) => {
      bot.chat(line)
  })
})
const readline = require("node:readline");
const command = require('vorpal/dist/command');
const { version } = require('os');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Log errors and kick reasons
bot.on('kicked', console.log)
bot.on('error', console.log)

//test command
setInterval(() => {bot.chat("t")},1000 * 1 * 8)

// tpa commands  
bot.on('messagestr', (message) => {
  if (message.includes('xdarked wants to teleport to you.')) {
    bot.chat('/tpy xdarked')
  }
})
bot.on('messagestr', (message) => {
  if (message.includes('1snipzz2 wants to teleport to you.')) {
    bot.chat('/tpy 1snipzz2')
  }
})
