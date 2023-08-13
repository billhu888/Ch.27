var box_status = document.getElementById("show_password");
var words = document.getElementById("password");
box_status.addEventListener ("click", function() {
    if (words.type == "password") {
        words.type = "text";
    } else {
        words.type = "password";
    }
});