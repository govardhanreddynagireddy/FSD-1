function checkEligibility(){
    let name=prompt("Enter your name:");
    let age=Number(prompt("Enter your age:"));
    let status;
    if(age>=18){
        status="eligible";
    }
    else{
        status="not eligible";
    }
    document.getElementById("result").innerHTML=
    "<table border='2' cellpadding='10'><tr><th>Name</th><th>Age</th><th>Status</th></tr><tr><td>"+name+"</td><td>"+age+"</td><td>"+status+"</td></tr></table>";
}