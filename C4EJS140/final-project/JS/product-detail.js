var arr = JSON.parse(localStorage.getItem("cartItems")) || [];

let askAndanswer = [
  {
    ask: "Tôi có thể hủy đơn hàng hay không?",
    answer:
      "Trong trường hợp bạn muốn hủy đơn hàng, hãy liên hệ ngay với ASUS thông qua hotline hoặc chatbox trước khi đơn hàng được giao. Trong trường hợp đơn hàng được giao, bạn sẽ không thể hủy.",
  },
  {
    ask: "Những hình thức thanh toán nào được chấp nhận?",
    answer:
      "ASUS chấp nhận hầu hết các hình thức thanh toán phổ biến hiện nay: Thẻ ngân hàng, thẻ tín dụng, Chuyển khoản, Ví điện tử.",
  },
  {
    ask: "Tôi có thể thanh toán trả góp hay không?",
    answer:
      "Có. ASUS áp dụng hình thức thanh toán trả góp cho một số mã hàng trong gian hàng. Vui lòng kiểm tra thông tin trên sản phẩm bạn đặt mua.",
  },
  {
    ask: "Tôi có thể tạo tài khoản tại ASUS không?",
    answer:
      "Trong phiên bản đầu tiên này, ASUS chưa cung cấp tính năng thành viên. Bạn có thể mua hàng mà không cần đăng nhập tài khoản. Chúng tôi sẽ thông báo trong lần cập nhật tiếp theo với nhiều ưu đãi cho các thành viên",
  },
  {
    ask: "Tôi cần làm gì nếu không nhận được email thông báo đơn hàng",
    answer:
      "Bạn hãy đảm bảo địa chỉ email khi đặt hàng là chính xác. Ngoài ra, bạn có thể liên hệ qua email/hotline hoặc chat box, gặp tư vấn viên để kiểm tra thông tin đơn hàng.",
  },
  {
    ask: "Tôi có thể nâng cấp linh kiện hay sản phẩm khi mua hàng không?",
    answer: [
      "ASUS không cung cấp trực tiếp dịch vụ nâng cấp linh kiện hay sản phẩm khi bạn mua hàng trên website. Nếu bạn có nhu cầu nâng cấp hãy mang sản phẩm và linh kiện tới các Trung tâm dịch vụ của ASUS trên toàn quốc để được hỗ trợ.",
      "ASUS cũng khuyến cáo khách hàng không tự ý nâng cấp linh kiện vì có thể ảnh hưởng tới điều kiện bảo hành của sản phẩm",
    ],
  },
  {
    ask: "Chính sách bảo hành của ASUS?",
    answer:
      "ASUS áp dụng chính sách bảo hành 2 năm toàn cầu cho hầu hết các loại máy tính xách tay. Ngoài ra, bạn có thể kiểm tra thông tin khi mua máy hoặc gọi đến số hotline của ASUS để được hỗ trợ.",
  },
  {
    ask: "Có được áp dụng nhiều voucher trên 1 đơn hàng không?",
    answer:
      "Trong phiên bản đầu tiên này, khách hàng chị dùng được một voucher trên một đơn hàng. Chúng tôi sẽ cập nhật trong các phiên bản tiếp theo",
  },
  {
    ask: "Kiểm tra tình trạng đơn hàng như thế nào?",
    answer:
      "Bạn có thể kiểm tra tình trạng đơn hàng tại trang Đơn hàng của tôi, điền thông tin cá nhân: email, số điện thoại hoặc mã số đơn hàng. Ngoài ra, bạn cũng sẽ nhận được email thông báo về đơn hàng tại địa chỉ email đã đăng ký.",
  },
  {
    ask: "Tôi có phải trả phí giao hàng hay không?",
    answer:
      "Khi bạn đặt hàng, phí giao hàng sẽ được thông báo dựa trên đơn hàng cũng như địa chỉ hay thời gian giao hàng. Trong một số sự kiện, ASUS sẽ có những ưu đãi như miễn phí vận chuyển. Hãy thường xuyên ghé qua fanpage hoặc website của chúng tôi để được cập nhật.",
  },
  {
    ask: "Tôi sẽ nhận được hàng trong bao lâu?",
    answer:
      "Thông thường, những đơn hàng trong nội thành sẽ được giao từ 1-3 ngày làm việc, ngoại thành từ 5-7 ngày làm việc. Tuy nhiên thời gian giao hàng có thể sớm hoặc lâu hơn tùy vào tình trạng tồn kho của mã hàng bạn đặt. Bạn sẽ nhận được thông báo qua địa chỉ email đã đăng ký.",
  },
  {
    ask: "Tôi sẽ nhận được thông báo nếu đơn hàng bị trễ?",
    answer:
      "Trong trường hợp đơn hàng không được giao trong thời gian dự kiến, ASUS sẽ gửi thông báo tới bạn qua địa chỉ email đã đăng ký về tình trạng đơn hàng và thời gian giao hàng mới. Trong trường hợp khách không đồng ý với thời gian giao hàng mới thì có thể liên hệ chăm sóc khách hàng ASUS để hủy đơn.",
  },
  {
    ask: "Tôi có thể thay đổi thông tin giao hàng hay không?",
    answer:
      "Nếu bạn đã nhận được email thông báo về đơn đặt hàng nhưng chưa nhận được email thông báo về lịch giao hàng cụ thể, hãy liên hệ với ASUS sớm nhất có thể để thay đổi thông tin giao hàng. Khách hàng lưu ý nếu đơn hàng đang được giao thì sẽ không thể thay đổi địa chỉ giao hàng.",
  },
  {
    ask: "Chính sách của ASUS về việc hoàn đơn và đổi trả là như thế nào?",
    answer: [
      "ASUS luôn không ngừng cố gắng để cung cấp dịch vụ tốt nhất tới khách hàng. Chúng tôi khuyến cáo khách hàng đọc kỹ chính sách hoàn đơn và đổi trả tại mục Chính sách bán hàng trước khi đặt hàng để nắm rõ về những quyền lợi của mình.",
      "Chúng tôi cũng khuyến cáo khách hàng kiểm tra kỹ hàng hóa nhận được, đảm bảo đúng mẫu mã và chất lượng trong mô tả (khuyến cáo khách hàng quay lại video tình trạng bên ngoài của sản phẩm, tình trạng vỏ hộp bên ngoài. Sau đó, quay lại video trong quá trình mở hộp, và hình dáng bên ngoài của sản phẩm sau khi mở hộp. Nhằm mục đích cung cấp bằng chứng cụ thể, nếu sản phẩm có lỗi về mặt vật lý (móp mép, bể, vỡ..).",
    ],
  },
  {
    ask: "Tôi có thể trả lại sản phẩm khuyến mại không?",
    answer:
      "Bạn có thể trả lại sản phẩm khuyến mại trong trường hợp sản phẩm chính hoặc sản phẩm khuyến mại có lỗi từ phía nhà sản xuất hoặc đơn vị vận chuyển.",
  },
  {
    ask: "Tôi sẽ phải làm như thế nào để hoàn đơn hay đổi trả?",
    answer:
      "Nếu sản phẩm bạn nhận được đáp ứng quy định đổi trả của ASUS, xin vui lòng liên hệ chúng tôi trong vòng 7 ngày kể từ ngày bạn nhận được hàng.",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const productDescriptionElement =
    document.getElementById("productDescription");

  const queryParams = new URLSearchParams(window.location.search);
  const productJson = queryParams.get("product");
  const product = JSON.parse(productJson);
  const imgUrls = product.img;
  const nameProduct = product.nameProduct;
  const describe = product.describe;
  const price = product.price;
  const discount = product.discount;
  const SKU = product.SKU;
  const category = product.category;
  const id = product.productID;
  const brand = product.brand;
  const color = product.color;
  const sizeScreen = product.sizeScreen;
  const weight = product.weight;
  const status = product.status;
  const show = product.show;
  const sound = product.sound;
  const psu = product.PSU;
  const size = product.size;
  const connector = product.connector;

  const title = document.getElementById("title");
  title.textContent = product.nameProduct;
  title.style.fontWeight = "bold";
  title.style.width = "200vh";
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.style.textAlign = "center";

  const imgElement = document.createElement("img");
  imgElement.src = imgUrls[0];
  imgElement.style.width = "100%";
  imgElement.style.height = "auto";
  imageContainer.appendChild(imgElement);

  const description = document.createElement("div");
  description.style.marginLeft = "20vh";

  const nameElement = document.createElement("h1");
  nameElement.textContent = nameProduct;
  nameElement.style.fontSize = "40pt";

  const describeElement = document.createElement("div");
  for (let i = 0; i < describe.length; i++) {
    const describeText = document.createElement("p");
    describeText.textContent = describe[i];
    describeElement.appendChild(describeText);
  }
  describeElement.style.fontSize = "15pt";

  const priceElement = document.createElement("p");
  const d = document.createElement("span");
  const hr = document.createElement("hr");
  const VAT = document.createElement("p");
  d.textContent = "đ";
  d.style.textDecoration = "underline";
  VAT.textContent = "Bao gồm VAT";
  priceElement.textContent = price;
  priceElement.style.fontSize = "30pt";
  priceElement.style.fontWeight = "bold";
  priceElement.appendChild(d);
  priceElement.appendChild(VAT);
  priceElement.appendChild(hr);
  VAT.style.fontSize = "13pt";
  VAT.style.fontWeight = "normal";

  const discountElement = document.createElement("p");
  if (discount !== "") {
    discountElement.textContent = "Discount: " + discount + "%";
  }
  const skuElement = document.createElement("p");
  skuElement.textContent = "SKU: " + SKU;

  const quantity = document.createElement("div");
  quantity.style.width = "20%";
  quantity.style.border = "1px solid black";
  quantity.style.textAlign = "center";
  quantity.style.marginRight = "10px";
  const quantityInput = document.createElement("input");
  quantityInput.style.border = "none";
  quantityInput.style.appearance = "none";
  quantityInput.style.textAlign = "center";
  quantityInput.type = "number";
  quantityInput.value = 1;
  quantityInput.min = 1;

  const decreaseButton = document.createElement("button");
  decreaseButton.textContent = "-";
  decreaseButton.addEventListener("click", function () {
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });
  decreaseButton.style.width = "25%";
  decreaseButton.style.height = "5.8vh";
  decreaseButton.style.border = "none";
  decreaseButton.style.textAlign = "center";

  const increaseButton = document.createElement("button");
  increaseButton.textContent = "+";
  increaseButton.addEventListener("click", function () {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });
  increaseButton.style.width = "25%";
  increaseButton.style.height = "5.8vh";
  increaseButton.style.border = "none";
  increaseButton.style.textAlign = "center";

  const addToCartContainer = document.createElement("div");
  const addToCartButton = document.createElement("button");
  addToCartButton.textContent = "Thêm vào giỏ hàng";
  addToCartButton.addEventListener("click", function () {
    const quantity = parseInt(quantityInput.value);
    addToCart(nameProduct, price, quantity);
  });
  addToCartButton.style.width = "60%";
  addToCartButton.style.height = "5.8vh";
  addToCartButton.style.backgroundColor = "black";
  addToCartButton.style.color = "white";

  quantity.appendChild(decreaseButton);
  quantity.appendChild(quantityInput);
  quantity.appendChild(increaseButton);

  addToCartContainer.style.display = "flex";
  addToCartContainer.appendChild(quantity);
  addToCartContainer.appendChild(addToCartButton);

  productDescriptionElement.appendChild(imageContainer);
  description.appendChild(nameElement);
  description.appendChild(describeElement);
  description.appendChild(skuElement);
  description.appendChild(priceElement);
  description.appendChild(addToCartContainer);
  productDescriptionElement.appendChild(description);

  const productDetails = document.getElementById("product");

  const detailsContainer = document.createElement("div");
  skuElement.textContent = SKU;
  const categoryElement = document.createElement("p");
  categoryElement.textContent = category;

  const idElement = document.createElement("p");
  idElement.textContent = id;

  const brandElement = document.createElement("p");
  brandElement.textContent = brand;

  const colorElement = document.createElement("p");
  colorElement.textContent = color;

  const sizeScreenElement = document.createElement("p");
  sizeScreenElement.textContent = sizeScreen;

  const weightElement = document.createElement("p");
  weightElement.textContent = weight;

  const statusElement = document.createElement("p");
  statusElement.textContent = status;

  const showElement = document.createElement("p");
  showElement.textContent = show;

  const soundElement = document.createElement("p");
  soundElement.textContent = sound;

  const psuElement = document.createElement("p");
  psuElement.textContent = psu;

  const sizeElement = document.createElement("p");
  sizeElement.textContent = size;

  const connectorElement = document.createElement("p");
  connectorElement.textContent = connector;

  detailsContainer.appendChild(skuElement);
  detailsContainer.appendChild(categoryElement);
  detailsContainer.appendChild(idElement);
  detailsContainer.appendChild(brandElement);
  detailsContainer.appendChild(colorElement);
  detailsContainer.appendChild(sizeScreenElement);
  detailsContainer.appendChild(weightElement);
  detailsContainer.appendChild(statusElement);
  detailsContainer.appendChild(showElement);
  detailsContainer.appendChild(soundElement);
  detailsContainer.appendChild(psuElement);
  detailsContainer.appendChild(sizeElement);
  detailsContainer.appendChild(connectorElement);

  productDetails.appendChild(detailsContainer);
  productDetails.style.marginLeft = "40vh";

  const qAndA = document.getElementById("qAndA");
  for (let i = 0; i < askAndanswer.length; i++) {
    const ask = document.createElement("p");
    ask.textContent = askAndanswer[i].ask;
    ask.style.fontSize = "18pt";
    ask.style.fontWeight = "bold";
    ask.style.marginTop = "4vh";
    const answer = document.createElement("p");
    answer.textContent = askAndanswer[i].answer;
    answer.style.fontSize = "15pt";
    qAndA.appendChild(ask);
    qAndA.appendChild(answer);
  }
  hienThiGioHang();
});
function showContent() {
  var showIcon = document.getElementById("productDetails");
  showIcon.classList.toggle("show");
}
function showContent2() {
  const showIcon = document.getElementById("qAndA");
  showIcon.classList.toggle("show");
}
function addToCart(productName, price, quantity) {
  alert("Thêm vào giỏ hàng thành công");

  let item = {};
  item.name = productName;
  item.price = price;
  item.count = quantity;

  let check = false;

  for (let i = 0; i < arr.length; i++) {
    if (item.name == arr[i].name) {
      arr[i].count += quantity;
      check = true;
    }
  }
  if (!check) {
    arr.push(item);
  }

  localStorage.setItem("cartItems", JSON.stringify(arr));
  hienThiGioHang();
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
function changePage() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const cartItemsJson = JSON.stringify(cartItems);

  const encodedCartItems = encodeURIComponent(cartItemsJson);

  window.location.href = "checkout.html?cartItems=" + encodedCartItems;
}
