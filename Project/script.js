function showList(o) {
    hideList("nav-submenu" + o.id);
    document.getElementById("nav-submenu-" + o.id).classList.toggle("show");
}
 
 
function hideList(option) {
    var dropdowns = document.getElementsByClassName("nav-submenu");
     
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.id != option) {
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
 
 
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        hideList("");
    }
}