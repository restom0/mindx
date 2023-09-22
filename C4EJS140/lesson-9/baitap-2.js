const B=[5,3,8,1,2,4];
const odd=[],even=[];
for(let i=0;i<B.length;i++){
    if(B[i]%2==0){
        even.push(B[i]);
    }else{
        odd.push(B[i]);
    }
}
for(let i=0;i<odd.length;i++){
    for(let j=i+1;j<odd.length;j++){
        if(odd[i]>odd[j]){
            let temp=odd[i];
            odd[i]=odd[j];
            odd[j]=temp;
        }
    }
}
for(let i=0;i<even.length;i++){
    for(let j=i+1;j<even.length;j++){
        if(even[i]<even[j]){
            let temp=even[i];
            even[i]=even[j];
            even[j]=temp;
        }
    }
}
console.log(odd.concat(even));