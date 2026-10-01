function factorial(n) {
  let fact=1;
  for (let i=1;i<=n;i++) 
    fact*=i;
  return fact;
}

function fibonacci(n) {
  let a=0,
    b=1,
    result="";

  while(a<=n) {
    result+=a+" ";
    let c=a+b;
    a=b;
    b=c;
  }
  return result;
}

function prime(n) {
  let result="";

  for (let i=2;i<=n;i++) {
    let flag=true;

    for (let j=2;j<=Math.sqrt(i);j++) {
      if (i%j==0) {
        flag=false;
        break;
      }
    }

    if (flag)
     result+=i +" ";
  }

  return result;
}

function palindrome(n) {
  let rev=0,
    temp=n;

  while(temp >0) {
    rev=rev*10+(temp%10);
    temp = Math.floor(temp/10);
  }

  if(rev==n) 
    return "Palindrome";
  else return "Not Palindrome";
}

function display() {
  let n = Number(prompt("Enter Number"));
  document.getElementById("demo").innerHTML =
    "<b>Factorial :</b> " +
    factorial(n) +
    "<br><br><b>Fibonacci :</b> " +
    fibonacci(n) +
    "<br><br><b>Prime Numbers :</b> " +
    prime(n) +
    "<br><br><b>Palindrome :</b> " +
    palindrome(n);
}