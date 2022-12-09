window.onload = function() {

    const currentdate = new Date();
    var datetime = currentdate.getDate() + "-" +
        (currentdate.getMonth() + 1) + "-" +
        currentdate.getFullYear() + "  " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();
    document.getElementById("datetime").innerHTML = datetime;

}

noClose = false;

function openDrawer() {
    document.getElementById("drawer").style.display = "block";
    document.getElementById("drawer-child").style.width = "300px";
}

function closeDrawer(event) {
    if (noClose === false) {
        document.getElementById("drawer").style.display = "none";
        document.body.style.backgroundColor = "white";
    } else
        noClose = false;
}
function clickCheckboxAll(source){
    checkboxes = document.getElementsByName('btn-checkbox');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
}
