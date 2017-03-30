// Saves options to chrome.storage
function get_checked_radio(radios) {
    for (var i = 0; i < radios.length; i++) {
        var current = radios[i];
        if (current.checked) {
            
            return i;
        }
    }
}
function save_options() {
color = document.getElementsByName('group');
	
	value = (get_checked_radio(color));
  	
  chrome.storage.sync.set({
    userChoice: value
  
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

document.getElementById('save').addEventListener('click',
    save_options);