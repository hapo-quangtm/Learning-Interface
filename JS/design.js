function messButton() {
  var messbtns = document.getElementById("box-chat");
  if (messbtns.style.display == "block") {
    messbtns.style.display = "none";
  } else {
    messbtns.style.display = "block";
  }
}

function closeButton() {
  var closebtns = document.getElementById("box-chat");
  closebtns.style.display = "none";
}