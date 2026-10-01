function checkArmstrong() {
    let num=prompt("Enter a number: ");
    let sum=0;
    let temp=num;
    while(temp>0){
        let digit=temp%10;
        sum+=digit**3;
        temp=Math.floor(temp/10);
    }
    if(sum==num){
        document.getElementById("result").innerHTML=num + " is an Armstrong number.";
    }
    else{
        document.getElementById("result").innerHTML=num + " is not an Armstrong number.";
    }
}