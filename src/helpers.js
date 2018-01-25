// @flow
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
const isfireFox = /Mozilla/.test(navigator.userAgent);
const isMs = 'msAnimation' in document.documentElement.style;


if (isChrome) {
  console.log("You are using Chrome!");
} else if (isSafari) {
  console.log("You are using Safari!");
}
else if (isfireFox){
  console.log("You are using FireFox!");
} else if (isMs) {
 console.log('You are using ie!');
} else {
  console.log('i do not know');
}

