function largest(){
    let a=Number(prompt("Enter the 1st Number"))
    let b=Number(prompt("Enter the 2nd Number"))
    let c=Number(prompt("Enter the 3rd Number"))

    if(a==b && c==b){
        document.getElementById("show").innerHTML="ALL ARE EQUAL NUMBER";
        alert("<<  ALL ARE EQUAL  >>")
    }
    else{
        let outPut=Math.max(a,b,c);
        document.getElementById("show").innerHTML="Maximum of three NUMBER ( "+a+" "+b+" "+c+") is"+": "+outPut;
        alert("Largest Number is "+ outPut);
    }
}