var img = document.createElement("img");
img.src = "xyz.jpg";
img.onerror = "alert(1)";

var body = document.getElementsByTagName("body")[0];
