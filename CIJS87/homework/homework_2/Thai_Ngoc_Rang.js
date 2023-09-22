// HOMEWORK

/* 
Homework 1: Viết hàm calculateDays() để in số ngày còn lại từ hôm nay cho đến ngày Tết Dương lịch 01/01 năm sau
*/
function calculateDays() {
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    const timeDifference = nextYear - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
}
const daysLeft = calculateDays();
console.log(`Days left until New Year: ${daysLeft}`);

/* 
Homework 2: Viết hàm getDate() để lấy ngày hiện tại theo style sau: dd-mm-yy
*/
function getDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString().slice(-2);
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

const currentDate = getDate();
console.log(`Current Date: ${currentDate}`);
