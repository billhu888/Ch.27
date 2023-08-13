function display() {
    var dispWin = window.open("", "dispWin", "menubar = no, toolbar = no, width = 400, height = 100");

    message = "<ul> <li> NAME: " + document.form1.name.value;
    message += "<li> ADDRESS: " + document.form1.address.value;
    message += "<li> PHONE: " + document.form1.phone.value;
    message += "</ul>";
    dispWin.document.write(message);
}
    document.getElementById("display").addEventListener("click", display);

