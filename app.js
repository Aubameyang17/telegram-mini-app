const tg = window.Telegram.WebApp;
tg.ready();

tg.MainButton.setText("SEND");

tg.MainButton.show();

tg.MainButton.onClick(() => {
alert("query_id = " + tg.initDataUnsafe?.query_id);

  tg.sendData("PING_FROM_GITHUB");
});
