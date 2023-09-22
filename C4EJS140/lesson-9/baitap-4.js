const name =["Nam","Thịnh","Hoa","Minh"];
name.push("Trung");
console.log("Câu a: "+name);
console.log(name);
name.push("Lan");
let temp=name[2];
name[2]=name[name.length-1];
name[name.length-1]=temp;
console.log("Câu b: "+name);
console.log(name);
name.pop();
const newArray=name;
console.log("Câu c: "+newArray);
console.log(name);
for(let i=0; i<name.length/2; i++){
    let temp=name[i];
    name[i]=name[name.length-i-1];
    name[name.length-i-1]=temp;
}
console.log("Câu d: "+name);
console.log(name);