
//显示子菜单里的内容
function displaySubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "block";
}
//隐藏子菜单里的内容
function hideSubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "none";
}
