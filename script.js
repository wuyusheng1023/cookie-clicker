var n = 0;
var cpc = 1;

function plusOne() {
	n += cpc;
	document.getElementById("coockies").innerHTML = `${n} cookies`;
}

function reinforcedIndexFinger() {
	cpc = 2;
	document.getElementById("upgrade001").style.visibility = 'hidden';
	document.getElementById("upgrade002").style.visibility = 'visible';
}

function carpalTunnelPreventionCream() {
	cpc = 4;
	document.getElementById("upgrade002").style.visibility = 'hidden';
}