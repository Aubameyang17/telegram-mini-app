const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

tg.MainButton.setText("Отправить");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.sendData("PING");
});
