// SPREAD + REST
/* 
Exercise 1: Viết hàm sumOnlyNumbers() có thể nhận bất kỳ số lượng đối số nào (bao gồm cả số hoặc chuỗi) và chỉ trả về tổng của các số.
*/
const sumOnlyNumbers = (...numbers) => {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (!isNaN(numbers[i])) sum += numbers[i];
  }
  return sum;
};
// console.log(sumOnlyNumbers(1, "cat", 3, 4, "dog", 9)); // 8

/* 
Exercise 2: Viết hàm updateObject() trả về object mới với key và value
*/
const cat = { name: "Tom", color: "yellow", age: 3 };
const updateObject = (obj, key, value) => ({
  ...obj,
  [key]: value,
});
// console.log(updateObject(cat, "age", 4)); // {name: 'Tom', color: 'yellow', age: 4}

// DESTRUCTURING
/* 
Exercise 3: Viết một hàm gọi là displayName() in ra họ và tên của người đó. 
*/
const person = {
  first: "Elon",
  last: "Musk",
  gmail: "elonmusk@gmail.com",
  company: "Space X",
};
const displayName = ({ first, last }) => {
  console.log(` My Name is ${first} ${last}`);
};
// displayName(person); // Elon Musk

/* 
Exercise 4: Viết hàm calcaculeSalesTotals() trả về objects có keys mới (sale và total). 
- sale: giá gốc (original) - giá gốc (original) * giảm giá (discount).
- total: số lượng tồn kho (stock) * giá bán (sale)
*/
const products = [
  { item: "PS4 Pro", stock: 3, original: 400 },
  { item: "Xbox One X", stock: 1, original: 500, discount: 0.1 },
  { item: "PS2 Console", stock: 1, original: 300, discount: 0.8 },
];

const calculateProductTotals = (products) => {
  return products.map(({ item, stock, original, discount = 0 }) => {
    const sale = original - original * discount;
    const total = stock * sale;
    return { item, original, sale, stock, discount, total };
  });
};

console.log(calculateProductTotals(products));
/* EXPECTED OUTPUT (array of objects):
[
  {
    item: "PS4 Pro",
    original: 400,
    sale: 400,
    stock: 3,
    total: 1200
  },
  
    discount: 0.1,
    item: "Xbox One X",
    original: 500,
    sale: 450,
    stock: 1,
    total: 450
  },
  {
    discount: 0.8,
    item: "PS2 Console",
    original: 300,
    sale: 60,
    stock: 1,
    total: 60
  }
*/

// DATA TYPES
let a1 = 1;
let a2 = 1;
console.log(a1 === a2); // true

let obj1 = { number: 1 }; // [0, 1, 2]
let obj2 = { number: 1 }; // [0, 1, 2]
console.log(obj1 === obj2); // false

let a3 = a1; // a3 = 1
console.log(a1 === a3); // true
a3 = 3;
console.log(a1 === a3); // a3 = 3, a1 = 1 -> false

let obj3 = obj1;
console.log(obj3 === obj1); // true
obj3.number = 3;
console.log(obj3 === obj1); // true

let obj4 = { ...obj1 }; // obj1 = {number: 3}
console.log(obj4 === obj1); // false

// ARRAY METHODS
/* 
Exercise 5: Viết hàm squareAndAverageNums() bình phương và trả về giá trị trung bình của mảng (dùng map, reduce). 
*/
let numbers5 = [2, 4, 5, 7, 8, 9];
const squareAndAverageNums = (nums) => {
  const squaredNums = nums.map((num) => num * num);
  return squaredNums.reduce((acc, curr) => acc + curr, 0) / nums.length;
};
console.log(squareAndAverageNums(numbers5));

/* 
Exercise 06: Viết hàm sumEven() tính tổng số chẳn (filter, reduce).
*/
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumEven = (numbers6) => {
  return numbers6
    .filter((number) => number % 2 === 0)
    .reduce((a, b) => a + b, 0);
};
console.log(sumEven(numbers6)); // 30

/* 
Exercise 7 - Dang Nguyen: Viết hàm capitalize() trả về một chuỗi viết hoa tất cả 
*/
const capitalize = (...str) => {
  let result = [];
  str.forEach((char) => {
    result.push(char.toUpperCase());
  });
  return result.join("");
};
console.log(capitalize("oh hey my friends")); // OH HEY MY FRIENDS

/*
Exercise 8 - Uyen Nhi: Viết hàm countLetters trả về một đối tượng đại diện cho số lượng ký tự cho mỗi chữ cái (reduce)
*/
let string12 = "abcdebccdddeeee";
const countLetters = (string) => {
  const result = {};
  const letterArr = [...string];
  return letterArr.reduce((acc, letter) => {
    acc.hasOwnProperty(letter) ? acc[letter]++ : (acc[letter] = 1); // acc[letter] ~ false
    return acc;
  }, result);
};
console.log(countLetters(string12)); // {a:1, b:2, c:3, d:4, e:5}

/*
Exercise 9 - Ngoc Rang: Viết hàm getAverageAge(users) tính trung bình tuổi của các users
*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [john, pete, mary];

const getAverageAge = (users) => {
  let result = 0.0;
  users.forEach((el) => {
    result += el.age;
  });
  return result / users.length;
};

console.log(getAverageAge(users)); // 28

/*
Exercise 10 - Thinh: Viết hàm sumPositiveNumber(numbers) tính tổng các số dương, nếu không có thì trả về 0. (filter, reduce)
*/
const numbers14 = [1, -4, 12, 0, -3, 29, -150];
const sumPositiveNumber = (numbers) => {
  const positiveNumbers = numbers.filter((num) => num > 0);
  return positiveNumbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumPositiveNumber(numbers14)); // 42

/*
Exercise 11 - Dat: Viết hàm getNameInitials(name) lấy lên viết tắt và in hoa (split, map, join)
*/
const name15 = "Truong Cong Hieu";
const getNameInitials = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase());
  return initials.join("");
};
console.log(getNameInitials(name15)); // TCH

/*
Exercise 12 - Khanh: Viết hàm countElementsOf2DArray(array) đếm số lần xuất hiện của các phần tử riêng biệt trong mảng 2D
*/
const array16 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const countElementsOf2DArray = (array) => {
  const count = {};
  for (const row of array) {
    for (const element of row) {
      if (count[element] === undefined) {
        count[element] = 1;
      } else {
        count[element]++;
      }
    }
  }
  return count;
};
console.log(countElementsOf2DArray(array16));

/*
Expect output: 
{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
}
*/
/*
Exercise 13 - Phiet: Viết hàm findHighPerformers() trả về một mảng chỉ chứa những sinh viên có điểm trung bình trên 90.
*/
const students = [
  { name: "John", scores: [70, 85, 92] },
  { name: "Adam", scores: [75, 85, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];
const findHighPerformers = (students) => {
  const highPerformers = [];

  for (const student of students) {
    const { name, scores } = student;
    const avarage = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    if (avarage > 90) {
      highPerformers.push({ name, avarage });
    }
  }

  return highPerformers;
};
console.log(findHighPerformers(students));

/* Expected output:
[ 
    { name: 'Jack', average: 100 }
]
*/
/*
Exercise 14 - Rang + Nhi: Viết hàm findHighPricedCategories() tính giá trung bình của các sản phẩm trong từng danh mục, sau đó trả về một mảng đối tượng chỉ chứa các danh mục có giá trung bình trên 50
*/
const products14 = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Food" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];
const findHighPricedCategories = (products) => {
    const sumCategory = {};
    const count = {};
  
    for (const product of products) {
      const { category, price } = product;
      if (sumCategory[category]) {
        sumCategory[category] += price;
        count[category]++;
      } else {
        sumCategory[category] = price;
        count[category] = 1;
      }
    }
  
    const highPricedCategories = [];
  
    for (const category in sumCategory) {
      const average = sumCategory[category] / count[category];
      if (average > 50) {
        highPricedCategories.push({ category, average });
      }
    }
  
    return highPricedCategories;
  };

  console.log(findHighPricedCategories(products14))
/* Expected output:
[ 
    { category: 'Clothes', average: 55 },
    { category: 'Electronics', average: 60 }
]
*/
