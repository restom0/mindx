function Student(id, name, age, gender, major) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
    this.displayInfo= function() {
        console.log("Mã sinh viên: " + this.id);
        console.log("Tên: " + this.name);
        console.log("Giới tính: " + this.gender);
        console.log("Năm: " + this.age);
        console.log("Ngành học: " + this.major);
    };
    this.changeMajor=function(newMajor){
        this.major = newMajor;
    };
}
const student= new Student("SV001","Nguyễn Văn A",20,"Nam","Công nghệ thông tin")
student.displayInfo();
console.log("");
student.changeMajor("Kinh tế");
student.displayInfo();