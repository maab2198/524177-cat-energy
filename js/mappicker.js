// isMobileDevice()
//https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
//при медленом интернете на телефоне все время будет рендериться карта заново при каждом касании экрана
// -> resize работает только если не телефон
// маленькая иконка только на телефоне
// иногда ошибка Uncaught Jb {message: "initMap is not a function", name: "InvalidValueError", stack: "Error↵    at new Jb (https://maps.googleapis.com/m…48pnHzd547KztMkZGV4ftU30s&callback=initMap:157:51"}
// если с гитхаба и открыть devTools - > телефон
window.addEventListener("resize", isMobileDevice, false);

function isMobileDevice() {
  if (
    (typeof window.orientation !== "undefined") ||
    (navigator.userAgent.indexOf('IEMobile') !== -1)
  ) {
    return;
  }
  mapResize();
};

var myLatlng = {
  center: { lat: 59.938931, lng: 30.323089 },
  right: { lat: 59.939014, lng: 30.319356 }
};

var map;
var marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatlng.center,
    mapTypeId: 'roadmap'
  });

  marker = new google.maps.Marker({
    position: myLatlng.center,
    icon: 'img/map-pin-small.png',
    map: map
  });
  isMobileDevice();
}

function mapResize() {
  if (window.innerWidth >= 1300) {
    map.panTo(myLatlng.right);

  } else {
    map.panTo(myLatlng.center);
  }
  marker.icon = 'img/map-pin.png';
}


