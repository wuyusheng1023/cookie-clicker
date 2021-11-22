var n = 0;
var cpc = 1;

function plusOne() {
	n += cpc;
	document.getElementById("coockies").innerHTML = `${n} cookies`;
}

function reinforcedIndexFinger() {
	if (n > 99) {
		cpc = 2;
		document.getElementById("upgrade001").style.visibility = 'hidden';
		document.getElementById("upgrade002").style.visibility = 'visible';
		n -= 100
		document.getElementById("coockies").innerHTML = `${n} cookies`;
	}
}
function carpalTunnelPreventionCream() {
	if (n > 499) {
		cpc = 4;
		document.getElementById("upgrade002").style.visibility = 'hidden';
		n -= 500
		document.getElementById("coockies").innerHTML = `${n} cookies`;
	}
}