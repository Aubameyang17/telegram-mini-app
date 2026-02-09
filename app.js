const tg = window.Telegram.WebApp;
tg.ready();

tg.MainButton.setText("SEND");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.sendData("PING_FROM_GITHUB");
});
