var ngày = parseInt(prompt("Nhập ngày:"));
var tháng = parseInt(prompt("Nhập tháng:"));
var năm = parseInt(prompt("Nhập năm:"));
var n=(ngày+2*tháng+Math.floor(3*(tháng+1)/5)+năm+Math.floor(năm/4))%7;
alert("n = " +n);
console.log("n = " + (ngày+2*tháng+Math.floor((3*(tháng+1))/5)+năm+Math.floor(năm/4))%7);