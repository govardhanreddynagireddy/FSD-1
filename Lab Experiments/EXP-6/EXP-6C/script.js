function getInput() {
    let name=prompt("Enter your name:");
    let age=document.getElementById("age").value;
    alert("Hello " + name + "! You are " + age + " years old.");
    document.getElementById("display").innerHTML="Age: " + age; 
}