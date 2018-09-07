const TelegramBot = require("node-telegram-bot-api"),
	token = "565995335:AAHRCp61D3I4tlS-g7i9poM-9f7EqC3Z2Ls",
	bot = new TelegramBot(token, {
		polling: true
	});


var menu = {
  parse_mode: "html"
}

bot.onText(/\/start (.+)/, function(msg, match) { 
	var resp = match[1];
  bot.sendMessage(msg.chat.id, `${resp}`);
});

bot.on('message', (msg) => {
	var tsx = msg.text;
	var uid = msg.from.id;
	var name = msg.from.username;
	if(msg.text == 'asd'){
		bot.sendMessage(342160503, `<a href="tg://user?id=${uid}">${name}</a>`, menu);
	}
	if(msg.text == '/start'){
		bot.sendMessage(msg.chat.id, 'lol');
	}

	console.log(msg);
});

bot.on('callback_query', function onCallbackQuery(callbackQuery) {
	const action = callbackQuery.data;
  const msg = callbackQuery.message;
  console.log(action);
  if(action == "asdg"){
  	bot.sendMessage(msg.chat.id, "asd213", menu);
  }
})

bot.on("contact",(msg)=>{
    var number = msg.contact.phone_number;
    bot.sendMessage(msg.chat.id, "Отлично, ваш номер обновлён");
    console.log(msg)
})