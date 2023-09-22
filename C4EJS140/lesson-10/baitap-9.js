let n=prompt("Enter n: ");
function factorial(n){
    if(n<0){
        return -1;
    }
    if(n==1||n==0){
        return 1;
    }
    return n*factorial(n-1);
}
alert(factorial(n));