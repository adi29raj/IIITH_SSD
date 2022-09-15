let theme  = 0;
const inputHandler = function(e) {
    let suname =  e.target.value;
    error = document.getElementById('error');
    let uc=0,n=0;
    for (let i = 0; i < suname.length; i++) {
        if(suname[i].toUpperCase() === suname[i]){
            uc=1;
        }
        if(!isNaN(suname[i])){
            n=1;
        }
    }
    if(uc ===1 && n===1){
       error.innerHTML=""; 
    }else{
        error.innerHTML="Invalid Entry!"; 
    }
}

window.onload=function(){
    let sUname  = document.getElementById('suname');
    if(sUname){
        sUname.addEventListener(
            'input',
            inputHandler,
          );
    }
    function KeyPress(e) {
        var evtobj = window.event? event : e
        if (evtobj.keyCode == 90 && evtobj.ctrlKey) {
            if(theme === 0 ){
                document.body.style.background = "black";
                document.body.style.color = "white";
                theme = 1;
            }else{
                document.body.style.background = "white";
                document.body.style.color = "black";
                theme =0;
            }

        };
   }
  
    document.onkeydown = KeyPress;
}

function testCnfmPswd(){
    let pswd = document.getElementById("pswd").value; 
    let cpswd = document.getElementById("cpswd").value; 
    if(pswd !== cpswd)  {
        alert("Confirm password and password is not matching!");
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function onSubmit(){
    let mname = document.getElementById("mname").value;
    let email = document.getElementById("email").value;
    let hasAt = false;
    for (let i = 0; i < email.length; i++) {
        if(email[i]==='@'){
            hasAt=true;
        }
    }
    let suname = document.getElementById("suname").value; 
    let pswd = document.getElementById("pswd").value; 
    let cpswd = document.getElementById("cpswd").value; 
    let tlead = document.getElementById("tlead").value;
    if(!mname || !email || !suname || !pswd || !cpswd || !hasAt || !tlead){
        return ;
    }
    if(pswd !== cpswd)  {
        alert("Confirm password and password is not matching");
        return;
    }
    let display = {
        "Manager Name"  : mname,
        "Email" :  email ,
        "Server Username" : suname, 
        "Team Lead": tlead,
    }
    alert(JSON.stringify(display));
}