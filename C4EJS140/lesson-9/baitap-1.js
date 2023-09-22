const n=[1,3,12,0,5,-1,12,6,11,12]
let max=n[0];
const index=[];
for(let i=0;i<n.length;i++){
    if(n[i]>max){
        max=n[i];
    }
}
console.log(max);
for(let i=0;i<n.length;i++){
    if(n[i]==max){
        index.push(i);
    }
}
console.log(index);