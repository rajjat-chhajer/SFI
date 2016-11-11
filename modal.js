
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }


        function validateForm() {
            var x = document.forms["myForm"]["receiver"].value;
            var y = document.forms["myForm"]["Subject"].value;
            var z = document.forms["myForm"]["message"].value;

            if (x == null || x == "") {
                alert("Name must be filled out");
                return false;
            }

            else 
		        if (y == null || y == "") {
                	alert("subject must be filled out");
                	return false;
                }

                else
                        if (z == null || z == "") {
                            alert("message must be filled out");
                            return false;
                        }

                        else {
                            modal.style.display = "none";
                            alert("Request sent");
                        }

        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }