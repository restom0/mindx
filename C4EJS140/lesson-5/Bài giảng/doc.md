# display: (hiển thị)
- cách thức hiển thị của các phần tử (html)
- có nhiều kiểu display: 
    + block: kích thước của phần tử luôn luôn đạt 100% chiều dài  của phần tử cha
           : có thể thay đổi được kích thước
           : sử dụng được được đầy đủ các hướng (4) của box (margin)
    + inline:   kích thước của các thẻ có display: inline: sẽ phụ thuộc vào nội dung bên trong của thẻ, không thể thay đổi được
            + margin sẽ chỉ áp dụng được với left và right
            + nếu như có nhiều inline gần nhau -> chúng sẽ nằm trên 1 hàng
    + inline-block: khi dùng, thì mặc định sẽ áp dụng tính của thuộc tính inline trước
            -> thẻ sẽ mang đầy đủ tính chất chung nhất của block và inline