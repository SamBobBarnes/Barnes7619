var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  document.getElementById("maincsshome").href = "CSS/mainmobile.css";
  document.getElementById("maincss").href = "../CSS/mainmobile.css";
}
