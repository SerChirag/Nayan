var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

var nayan = function() {
	if (localStorage.getItem("serviceStatus") == "start") {
		nayan.startService();
	} else {
		nayan.stopService();
	}
}
nayan.startService = function() {
	localStorage.setItem("serviceStatus", "start");
	$(".disabled").style.display = "none";
	$(".enabled").style.display = "block";
	$("body").classList.add("on");
	chrome.storage.sync.set({
		serviceStatus: "start"
	});
}
nayan.stopService = function() {
	localStorage.setItem("serviceStatus", "stop");
	$(".disabled").style.display = "block";
	$(".enabled").style.display = "none";
	$("body").classList.remove("on");
	chrome.storage.sync.set({
		serviceStatus: "stop"
	});
}

_($("#enablenayan"), "click", function() {
	nayan.startService();
});
_($("#disablenayan"), "click", function() {
	nayan.stopService();
});

_(document, "DOMContentLoaded", function() {
	nayan();
});