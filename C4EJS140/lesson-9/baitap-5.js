const Array=[1,2,3,4,3,2,1,5];
const newArray=[];
let check=false;
for (let i=0; i<Array.length; i++){
    for(let j=0; j<newArray.length; j++){
        if(Array[i]==newArray[j]){
            check=true;
            break;
        }
    }
    if(check==true){
        check=false;
        continue;
    }
    newArray.push(Array[i]);
}
console.log(newArray);