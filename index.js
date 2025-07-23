let tabs = document.getElementsByClassName("tabs");
console.log(tabs);
let tabContents = document.getElementsByClassName("tabs-content");
console.log(tabContents);

function opentab(tabname) {
  for (let tab of tabs) {
    tab.classList.remove("active-tab");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab-contents");
  }
  event.currentTarget.classList.add("active-tab");
  document.getElementById(tabname).classList.add("active-tab-contents");
}
