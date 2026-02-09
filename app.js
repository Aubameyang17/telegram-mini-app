const tg = window.Telegram.WebApp;
tg.ready();

tg.MainButton.setText("Отправить");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.sendData("test123");
});
