function regexDemo(){
    let text="JavaScript Programming";
    let pattern=/Script/;
    let result=pattern.test(text);
    document.getElementById("show").innerHTML=
    "Text  :"+
    text +
    "<br> Pattern: "+
    pattern +
    "<br> Pattern found : "+
    result;
}