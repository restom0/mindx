const num=[1,2,4,6,7,9,12,15];
function binarySearch(k,num,start,end){
    if(start>end){
            return -1;
    }
    let mid=Math.floor((start+end)/2);
    if(num[mid]==k){
        return mid;
    }
    else if(num[mid]<k){
        return binarySearch(k,num,mid+1,end);
    }
    else{
        return binarySearch(k,num,start,mid-1);
    }
}
let k=prompt("Enter the number: ");
if(binarySearch(k,num,0,num.length-1)==-1){
    console.log("The number does not exist in the array");    
}
else{
    console.log("Index of the search number is: "+binarySearch(k,num,0,num.length-1));
}