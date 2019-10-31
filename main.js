// JavaScript Document
window.onload=function(){
  document.getElementById("dash-button").click();
};

document.getElementById("dash-button").onclick = function() {
	document.getElementById("map").style["display"] = "none";
	document.getElementById("dashboard").style["display"] = "";
}

document.getElementById("map-button").onclick = function() {
	document.getElementById("dashboard").style["display"] = "none";
	document.getElementById("map").style["display"] = "";
}