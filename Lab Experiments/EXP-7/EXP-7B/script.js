function windowObject(){
    alert("Window Object Demo");
    let name=prompt("Enter your name:");
    let choice=confirm("Do you want to continue ");
    document.getElementById("display").innerHTML="Name:" +name+" <br> Confirmation: "+choice;
}