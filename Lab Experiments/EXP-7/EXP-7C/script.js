function arrayObject(){
    let sports=["Football","Cricket","Hockey","Tennis"];
    sports.push("Kabbadi");
    sports.sort();
    document.getElementById("display").innerHTML=
    "<br><br><br> Array Elements: "+
    sports+
    "<br><br><br> length: "+
    sports.length+
    "<br><br><br> First Elment of the array: "+
    sports[0];
    
}