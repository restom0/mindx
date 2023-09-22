function clearResult() {
    document.getElementById("input").value = "";
    document.getElementById("result").value = "";
  }
  
function clear1Char() {
    let input = document.getElementById("input").value;
    document.getElementById("input").value = input.slice(0, -1);
}

function input(value) {
    document.getElementById("input").value += value;
}

function calculateResult() {
    let input = document.getElementById("input").value;
    let result = eval(input);
    document.getElementById("result").value = result;
}