const tg = window.Telegram.WebApp;
tg.ready();

tg.MainButton.setText("SEND");

tg.MainButton.show();

alert("query_id = " + tg.initDataUnsafe?.query_id);

tg.MainButton.onClick(() => {

  tg.sendData("PING_FROM_GITHUB");
});

