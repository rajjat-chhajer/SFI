

function shownotificationFunction() {
    document.getElementById("mydropnotificationdown").classList.toggle("shownotification");   
}

function notificationOccures()
{
    document.getElementById("yolo").style.backgroundColor = "#3b5998";
}

// Close the dropnotificationdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropnotification')) {

    var dropnotificationdowns = document.getElementsByClassName("dropnotificationdown-content");
    var i;
    for (i = 0; i < dropnotificationdowns.length; i++) {
      var opendropnotificationdown = dropnotificationdowns[i];
      if (opendropnotificationdown.classList.contains('shownotification')) {
        opendropnotificationdown.classList.remove('shownotification');
      }
    }
  }
}

