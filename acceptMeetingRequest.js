
        // Get the modal
        var modal = document.getElementById('acceptMeetingModal');

        // Get the button that opens the modal
        var btn = document.getElementById("AcceptBtn");

        var accept = document.getElementById("acceptMeeting");

        var cancel = document.getElementById("RejectMeeting");

        var form = document.getElementById("form");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal

        btn.onclick = function() {
            modal.style.display = "block";
        }

        accept.onclick = function() {
            form.style.display = "block";
        }

        cancel.onclick = function() {
            modal.style.display = "none";
            alert("Request cancled");
        }


        function validateForm() {
            var x = document.forms["acceptMeetingModal"]["Date"].value;
            var y = document.forms["acceptMeetingModal"]["Time"].value;

            if (x == null || x == "") {
                alert("Date must be filled out");
                return false;
            }

            else 
		        if (y == null || y == "") {
                	alert("Time must be filled out");
                	return false;
                }
                       else {
                            modal.style.display = "none";
                            alert("Request sent");
                        }

        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            form.style.display= "none";
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                form.style.display= "none";
                modal.style.display = "none";
            }
        }