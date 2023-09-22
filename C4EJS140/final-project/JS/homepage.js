let slideshows = document.querySelectorAll('[data-component="slideshow"]');

function slide_tranlation(slideshow) {
  let slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  );
  let index = 0,
    time = 2000;
  slides[index].classList.add("active");
  setInterval(() => {
    slides[index].classList.remove("active");
    index++;
    if (index === slides.length) {
      index = 0;
    }
    slides[index].classList.add("active");
  }, time);
}
slideshows.forEach(slide_tranlation);
function changePage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartItemsJson = JSON.stringify(cartItems);

  const encodedCartItems = encodeURIComponent(cartItemsJson);

  window.location.href = "checkout.html?cartItems=" + encodedCartItems;
}
function hienThiGioHang() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let str = ``;
  let tong = 0;

  cartItems.forEach((item) => {
    let name = item.name;
    let price = parseInt(parseFloat(item.price) * Math.pow(10, 6));
    let count = item.count;

    str += `
    <tr class="">
      <td scope="row">${name}</td>
      <td>${price.toLocaleString("en-US")}</td>
      <td>${count}</td>
      <td>${(count * price).toLocaleString("en-US")}</td>
      <td><span onclick="deleteItem('${name}')"><i class='bx bxs-folder-minus'></i></span></td>
    </tr>
  `;

    tong += count * price;
  });

  str += `
  <tr>
    <td colspan="4"><span>Tổng cộng</span></td>
    <td>${tong.toLocaleString("en-US")}</td>
  </tr>
`;

  let result = document.getElementById("result");
  result.innerHTML = str;
}

function deleteItem(x) {
  let arr1 = [];

  arr.forEach((el) => {
    if (el.name !== x) {
      arr1.push(el);
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(arr1));
  hienThiGioHang();
}
var arr = JSON.parse(localStorage.getItem("cartItems")) || [];
hienThiGioHang();
