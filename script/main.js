function log_in(){
    localStorage.setItem("loged",1);
    window.location.href = "../pages/home.html";
}
function on_load(){
    var loged = localStorage.getItem("loged");
    if (loged != 1){
        var newUrl = "not_loged_in.html";
        window.location.href = newUrl;
    }
    localStorage.setItem("loged",0);
}