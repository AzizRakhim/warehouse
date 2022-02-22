let elSettingBtn = document.getElementById("settingBtn");
let elSettingMenu = document.getElementById("settingMenu");
let elCloseX = document.getElementById("closeX");
let elMenuPart = document.getElementById("menuPart");
let elShowBtn = document.getElementById("menuBtn");
let elDemoBtn = document.getElementById("demoBtn");
let elDemoBox = document.getElementById("demoBox");

elSettingBtn.addEventListener("click", function() {
  elSettingMenu.classList.toggle("appear");
})

elShowBtn.addEventListener("click", function() {
  elMenuPart.classList.toggle("move-it");
  document.body.classList.toggle("body-move");
})

elCloseX.addEventListener("click", function() {
  elMenuPart.classList.toggle("move-it");
  document.body.classList.toggle("body-move");
})

elDemoBtn.addEventListener("click", function() {
  elDemoBox.classList.toggle("move-it")
})
