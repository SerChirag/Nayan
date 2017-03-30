var startService = function() {

	/*code to implement background process to work on all tabs*/


	};



chrome.tabs.onActivated.addListener(function() {
	startService();
});
chrome.tabs.onUpdated.addListener(function() {
	startService();
});