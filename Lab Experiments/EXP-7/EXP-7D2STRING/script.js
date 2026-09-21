function StringMethods(){
    let str="Web Development";
    document.getElementById("display").innerHTML=
    "Given String : "+
    str +
    "<br><br> Length of the String : "+
    str.length+
    "<br><br> uppercase letters: "+
    str.toUpperCase()+
    "<br><br> lower case letters: "+
    str.toLowerCase()+
    "<br><br> Substring : "+
    str.substring(0,3)+
    "<br><br> replace Function:  "+
     str.replace("Web", "JavaScript");
}