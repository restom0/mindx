let a=prompt("Enter a:");
let b=prompt("Enter b:");
let c=prompt("Enter c:");
if(a==0 && b==0 && c==0){
    alert("Infinite solution");
}
else if(a==0 && b==0){
    alert("No solution");
}
else if(a==0){
    alert("Only one solution:"+-c/b);
}
else{
    let delta = b*b-4*a*c;
    if(delta<0){
        alert("No solution");
    }
    else if(delta==0){
        alert("One double solution x1 = x2 ="+-b/(2*a));
    }
    else{
            let x1 = (-b+Math.sqrt(delta))/(2*a);
            let x2 = (-b-Math.sqrt(delta))/(2*a);
            alert("Two different solutions x1 ="+x1+", x2 ="+x2);
        }
}