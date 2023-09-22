quanLyDonHang=[
    {
        maDH: "DH001",
        sanPham: "Áo thun",
        soLuong: 3,
        donGia: 200000,
    },
    {
        maDH: "DH002",
        sanPham: "Quần jeans",
        soLuong: 2,
        donGia: 500000,
    },
    {
        maDH: "DH003",
        sanPham: "Giày thể thao",
        soLuong: 1,
        donGia: 800000,
    }
]
function hienThiDanhSachDonHang(){
    for(let i = 0; i <quanLyDonHang.length; i++){
        console.log("Mã đơn hàng: "+quanLyDonHang[i].maDH);
        console.log("Tên sản phầm: "+quanLyDonHang[i].sanPham);
        console.log("Số lượng: "+quanLyDonHang[i].soLuong);
        console.log("Đơn giá: "+quanLyDonHang[i].donGia);
        console.log("\n");
    }
}
function chinhSuaDonHang(maDH,soLuong){
    for(let i = 0; i <quanLyDonHang.length; i++){
        if(quanLyDonHang[i].maDH == maDH){
            quanLyDonHang[i].soLuong = soLuong;
        }    
    }
}
function tinhTongGiaTriDonHang(){
    let sum=0;
    for(let i = 0; i <quanLyDonHang.length; i++){
        sum+=quanLyDonHang[i].donGia*quanLyDonHang[i].soLuong;    
    }
    console.log(sum);
}
function timSP(maDH){
    for(let i = 0; i <quanLyDonHang.length; i++){
        if(maDH == quanLyDonHang[i].maDH){
            console.log("Mã đơn hàng: "+quanLyDonHang[i].maDH);
            console.log("Tên sản phầm: "+quanLyDonHang[i].sanPham);
            console.log("Số lượng: "+quanLyDonHang[i].soLuong);
            console.log("Đơn giá: "+quanLyDonHang[i].donGia);
        }   
    }
}
function themDH(maDH,sanPham,soLuong,donGia){
    quanLyDonHang.push({maDH,sanPham,soLuong,donGia});
    nameProduct.push(sanPham);
    console.log(nameProduct);
}
const nameProduct =[];
for(let i=0;i<quanLyDonHang.length;i++){
    nameProduct.push(quanLyDonHang[i].sanPham);
}
console.log(nameProduct);