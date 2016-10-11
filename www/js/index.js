var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() { //handler
        document.addEventListener("deviceready", onDeviceReady, false); //event listener
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    //
    function onDeviceReady() { //handler
		alert("device ready");
        
		document.addEventListener("resume", onResume, false); //event listener
		document.addEventListener("pause", onPause, false); //event listener
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() { //handler
		alert("pause");
		paused_count++;
		updateDisplay();
    }
	
	function onResume() { //handler
		alert("resume");
		resumed_count++;
		updateDisplay();
    }
