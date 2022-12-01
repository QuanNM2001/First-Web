window.onload = function() {

    const currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds();
        document.getElementById("datetime").innerHTML = datetime;

}
function openDrawer(){
    document.getElementById("drawer").style.display = "block";
    document.getElementById("drawer-child").style.width = "250px";

}
function closeDrawer(){
    document.getElementById("drawer").style.display = "none";
    document.body.style.backgroundColor = "white";
}