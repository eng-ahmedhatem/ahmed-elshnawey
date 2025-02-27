const freemaninit = function () {
  "use strict";
  var header = document.querySelector('#headermain');
  var typedText = document.querySelector("#typed-text");
  var cursor = document.querySelector(".cursor");
  var textArrayIndex = 0;
  var charIndex = 0;
  var textArray = ["تصميم وبرمجة المواقع", " الدعايا والإعلان", "التسويق الإلكتروني"];
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    } };
  const loadder = function (e) {
    setTimeout(() => {
      document.querySelector(".preloader").style.display = "none";
    }, 1000);
  };
  const erase = function (e) {
    if (charIndex > 0) {
      cursor.classList.remove('blink');
      typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 80);
    } else {
      cursor.classList.add('blink');
      textArrayIndex++;
      if (textArrayIndex > textArray.length - 1) {
        textArrayIndex = 0;
      }
      setTimeout(typeanimation, 1000);
    };
  };
  const typeanimation = function (e) {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
      cursor.classList.remove('blink');
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeanimation, 120);
    } else {
      cursor.classList.add('blink');
      setTimeout(erase, 1000);
    }
  };
  const scrollpage = function (e) {
    if (window.pageYOffset > 0) {
      header.classList.add('fixid');
    } else {
      header.classList.remove('fixid');
    }
  };
  const bindEvents = function (e) {
    window.onbeforeunload = function (e) {
      window.scrollTo(0, 0);
    };
    window.addEventListener('load', () => {
      loadder();
    });
    window.addEventListener('DOMContentLoaded', () => {
      typeanimation();
    });
    window.addEventListener("scroll", () => {
      scrolspy();
      scrollpage();
      counternumber();
    });
  };
  const AppInit = function (e) {
    bindEvents();
  };
  return {
    AppInit: AppInit };
}();
freemaninit.AppInit();