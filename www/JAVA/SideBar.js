function google(){
  var onfocustext1 = "if(this.value==this.defaultValue)this.value=''; this.style.color='black';";
  var onfocustext2 = "if(this.value=='')this.value=this.defaultValue;";

  var googlesearch =
    "<div class='google'>" +
      "<form method='get' action='http://www.google.com/search'>" +
      "<table border='0' align='center' cellpadding='0'>" +
      "<tr><td>" +
        "<input type='text'   name='q' size='25' style='color:#808080;'" +
        "maxlength='255' value='Google site search'" +
        "onfocus='" + onfocustext1 + "' onblur='" + onfocustext2 + "'/>" +
        "<input type='submit' value='Go!' />" +
        "<input type='hidden' name='sitesearch' /></td></tr>" +
      "</table>" +
    "</div>";

  return googlesearch;
}

function itemSamuelBarnes(first){
  var html = "<div class='sidebaritem ComicSans20' id='itemSamuelBarnes'>Samuel Barnes</div>";
  var fhtml = "<div class='sidebaritem ComicSans20' id='itemSamuelBarnes' style='margin-top: 10px;')'>Samuel Barnes</div>";
  if (first) return fhtml;
  else return html;
}

function itemAundreaBarnes(first){
  var html = "<div class='sidebaritem ComicSans20' id='itemAundreaBarnes'>Aundrea Barnes</div>";
  var fhtml = "<div class='sidebaritem ComicSans20' id='itemAundreaBarnes' style='margin-top: 10px;')'>Aundrea Barnes</div>";
  if (first) return fhtml;
  else return html;
}

function itemHome(first){
  var html = "<div class='sidebaritem ComicSans20' id='itemHome'>Home</div>";
  var fhtml = "<div class='sidebaritem ComicSans20' id='itemHome' style='margin-top: 10px;')'>Home</div>";
  if (first) return fhtml;
  else return html;
}
