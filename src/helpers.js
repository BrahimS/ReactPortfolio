// @flow 
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

if (isChrome) {
  alert("You are using Chrome!");
} else if (isSafari) {
  alert("You are using Safari!");
} else {
  const btnWidget = document.querySelector('.project_btn');
  btnWidget.style.visibility = 'hidden';
}
