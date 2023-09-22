// HOMEWORK

/* 
Homework 1: Viết hàm capitalizetString() chuyển đổi chữ cái đầu tiên của mỗi từ thành chữ hoa
*/
let string = 'the quick brown fox'
capitalizetString(string); // 'The Quick Brown Fox'
function capitalizetString(string) {
    let str = '';
    for (let i = 0; i < string.length; i++) {
        if (i == 0 || (i >= 1 && string.charAt(i - 1) == ' ')) {
            str += string.charAt(i).toUpperCase();
        }
        else {
            str += string.charAt(i);
        }
    }
    return str;
}

/* 
Homework 2: Viết hàm countVowels() trả về số nguyên âm trong chuỗi
*/
countVowel(string); // 5
function countVowel(string) {
    var count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'u' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'A' || string.charAt(i) == 'E' || string.charAt(i) == 'I' || string.charAt(i) == 'O' || string.charAt(i) == 'U') {
            count++;
        }
    }
    return count;
}
/* 
Homework 3: Viết hàm getKeysOfObject() lấy tất cả các key của object.
Solution: Dùng đệ quy
*/
const user = {
    name: 'John',
    age: 17,
    appearence: {
        hairColor: 'black',
        skin: 'white',
        height: 1700, // cm
        weigth: 75 // kb
    }
}
getKeysOfObject(user); // [name, age, appearence, hairColor, skin, height, weigth]
function getKeysOfObject(user) {
    var keys = [];
    return travesal(user, keys);
}
function travesal(user, keys) {
    Object.keys(user).forEach(key => {
        keys.push(key);
        if (typeof user[key] === 'object') {
            travesal(user[key], keys);
        }
    });
    return keys;
}