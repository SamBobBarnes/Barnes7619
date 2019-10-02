document.addEventListener("DOMContentLoaded", function(event) {
  var sidebarhtml = "";
  var sidebartext = ["Samuel Barnes","Aundrea Barnes"];
  var sidebarhref = ["samuelbarnes.html", "aundreabarnes.html"];

  sidebarcreate(sidebartext, sidebarhref);


});

function sidebaritemcreate(text, href, first){
  var html = "<div class='sidebaritem ComicSans20'><a href='";
  var fhtml = "<div class='sidebaritem ComicSans20' style='margin-top: 10px;'><a href='"
  var htmlend = "'>";
  var end = "</a></div>";
  fhtml = fhtml + href + htmlend + text + end;
  html = html + href + htmlend + text + end;
  if (first == true) {return fhtml;}
  else {return html;}
}

function countbuttons(list){
  var lookup = "<a href";
  var lookuptxt = "";
  var num = 0;
  for (i = 0; i < list.length; i++){
    if (lookuptxt.length == 7){
      if (lookup == lookuptxt) num++;
      lookuptxt = lookuptxt[1] +  lookuptxt[2] + lookuptxt[3] + lookuptxt[4] + lookuptxt[5] + lookuptxt[6] + list[i];
    } else lookuptxt = lookuptxt + list[i];
  }
  return num;
}

function sidebarcreate(sidebartext, sidebarhref){

  var sidebaritemhtml = "";

  for (i = 0; i < sidebartext.length; i++){
    if (i == 0) {sidebaritemhtml = sidebaritemhtml + sidebaritemcreate(sidebartext[i],sidebarhref[i],true);}
    else {sidebaritemhtml = sidebaritemhtml + sidebaritemcreate(sidebartext[i],sidebarhref[i],false);}
  }

  var googlesearch = google();
  var stuff = sidebaritemhtml;
  var num = countbuttons(stuff);
  var height = 50;
  var height = height + num * 32;
  var sidebarhtml = googlesearch + stuff;//sidebarstuff;
  document.getElementById("sidebar").innerHTML = sidebarhtml;
  document.getElementById("sidebar").style.height = height + "px";
}

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
