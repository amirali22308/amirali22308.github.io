function log_in(){
    var name = document.getElementById("in_").value;
    localStorage.setItem("name",name);
    if (name != ""){
        localStorage.setItem("loged",1);
    }
    else{
        localStorage.setItem("loged",0);
    }
    window.location.href = "../pages/home.html";
}
function on_load(){
    var loged = localStorage.getItem("loged");
    if (loged != 1){
        var newUrl = "not_loged_in.html";
        window.location.href = newUrl;
    }else{
        document.getElementById("hi").innerHTML = "سلام بر تو ای " + localStorage.getItem("name")
    }
}