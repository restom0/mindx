let n=prompt("Enter n:")
let string="";
for(let i=0;i<n;i++){
    if(i<=1){
        continue;
    }
    else if(i==2){
        string+=(i+" ");
    }
    else{
        let check=false;
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                check=true;
                break;
            }
        }
        if(check==false){
            string+=(i+" ");
        }
    }    
}
alert(string);
