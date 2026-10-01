function calculateDenominations() {
    let amount = Number(prompt("Enter the amount:"));
    let denominations = [100,50,20,10,5,2,1];
    let result="";

    for (let i=0;i<denominations.length;i++) {
        let count = Math.floor(amount/denominations[i]);
        if (count>0) {
            result+=count+" x "+denominations[i]+"<br>";
            amount-=count*denominations[i];
        }
    }

    document.getElementById("result").innerHTML = result;
}