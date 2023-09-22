function numberOneTriangle() {
    let n = parseInt(document.getElementById("n").value);
    if(n<1||n>10){
      alert("Invalid number");
      return false;
    }
    else{
      for (let i = 1; i <= n; i++) {
        let string = "";
        for (let x = 0; x < i; x++) {
          string += "*";
        }
        const star = document.createElement("p");
        star.textContent = string;
        document.getElementsByClassName("result")[0].appendChild(star);
      }
    return false;
  }
  }
  