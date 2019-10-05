if(!isMobileDevice) {
  window.location.replace("http://m.barnes7619.com");
  document.addEventListener("DOMContentLoaded",function(event){
    document.getElementById("body").innerHTML = "Im a phone";
  });
} /*else {
  document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("body").innerHTML = "Not a Phone";
  });
}*/
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
