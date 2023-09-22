const array=prompt("Nhập mảng:");
if(array.length==0){
    alert("["+array+"] không phải mảng đối xứng");
    console.log("["+array+"] không phải mảng đối xứng");
} 
let check=true;
for(let i=0; i<array.length/2; i++){
    if(array[i]!=array[array.length-1-i]){
        check=false;
    }
}
if(!check){
    alert("["+array+"] không phải mảng đối xứng");
    console.log("["+array+"] không phải mảng đối xứng");
}
else{
    alert("["+array+"] là mảng đối xứng");
    console.log("["+array+"] là mảng đối xứng");
}