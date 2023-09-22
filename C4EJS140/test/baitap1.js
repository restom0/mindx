function checkPrime(n) {
    if (n <= 1) return false;
    else if (n == 2) return true;
    else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
      }
      return true;
    }
  }
function calcTotal() { 
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let sum = 0;
    if (a > b) {
        alert("Invalid input");
    } else {
        for (let i = a; i <= b; i++) {
        if (checkPrime(i)) {
            sum += i;
        }
      }
      document.getElementById("result").value=sum; 
    }
    return false;
  }