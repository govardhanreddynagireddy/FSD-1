function factorial() {
    let n=Number(document.getElementById("num").value);
    let fact=1;
    for(let i=1;i<=n;i++) {
        fact*=i;
    }
    document.getElementById("demo").innerHTML =
        "<b>Factorial :</b> " + fact;
}
function fibonacci() {
    let n=Number(document.getElementById("num").value);
    let a=0;
    let b=1;
    let result="";
    while(a<=n) {
        result+=a+" ";
        let c=a+b;
        a=b;
        b=c;
    }
    document.getElementById("demo").innerHTML +=
        "<br><b>Fibonacci :</b> " + result;
}


function prime() {
    let n=Number(document.getElementById("num").value);
    let result="";
    for(let i=2;i<=n;i++) {
        let flag=true;
        for(let j=2;j<=Math.sqrt(i);j++) {
            if(i%j==0) {
                flag=false;
                break;
            }
        }
        if(flag) {
            result+=i+" ";
        }
    }
    document.getElementById("demo").innerHTML +=
        "<br><b>Prime :</b> " + result;
}
function palindrome() {
    let n=Number(document.getElementById("num").value);
    let rev=0;
    let temp=n;
    while(temp>0) {
        rev=rev*10+(temp%10);
        temp=Math.floor(temp/10);
    }
    if(rev==n) {
        document.getElementById("demo").innerHTML +=
            "<br><b>Palindrome :</b> Palindrome";
    }
    else {
        document.getElementById("demo").innerHTML +=
            "<br><b>Palindrome :</b> Not Palindrome";
    }
}