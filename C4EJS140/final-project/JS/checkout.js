var discount = 0.0;
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
function displayCartItems(cartItems) {
  let discount = JSON.parse(localStorage.getItem("discount")) || 0.0;
  const cartContainer = document.getElementById("cartContainer");
  let cartHTML = "";
  let tong = 0;
  cartItems.forEach((item) => {
    cartHTML += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <div class="row">
              <div class="col">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Số lượng</td>
                      <td>${item.count}</td>
                      <td>Giá</td>
                      <td>${item.price.toLocaleString("en-US")} ₫</td>
                      <td>Thành tiền</td>
                      <td>${(
        parseFloat(item.price) *
        Math.pow(10, 6) *
        item.count
      ).toLocaleString("en-US")} ₫
                      </td>
                      <td><button class="btn btn-primary" onclick="deleteItem('${item.name}')">Xóa</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        </div>
      `;
    tong += parseFloat(item.price) * Math.pow(10, 6) * item.count;
  });
  cartHTML += `
    <div class="card mb-3">
          <div class="card-body">
            <div class="row">
              <div class="col">
              <div class="col-sm-4">
                <div class="input-group" >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập mã giảm giá"
                    id="discountInput"
                  />
                  <button class="btn btn-outline-secondary" style="margin-right:20vh" onclick ="applyDiscount()">Áp dụng</button>
                </div>
              </div>
                <table class="table">
                  <tbody>
                    <tr>
                        <td style="font-size:20pt;width:66%"><b>Tổng phụ (Chưa bao gồm VAT)</b></td>
                        <td style="font-size:20pt"> ${tong.toLocaleString(
    "en-US"
  )} ₫</td>
                    </tr>
                    <tr>
                    <td style="font-size:20pt;width:66%"><b>Discount</b></td>
                    <td style="font-size:20pt onchange="applyDiscount()"> ${Math.ceil(discount * 100)} %</td>
                    </tr>
                    <tr>
                    <td style="font-size:20pt;width:66%"><b>Tổng chính (10% VAT)</b></td>
                    <td style="font-size:20pt"> ${(
      tong *
      (1 - discount) *
      1.1
    ).toLocaleString("en-US")} ₫</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        </div>
    `;
  cartContainer.innerHTML = cartHTML;
}
var check15 = 0, check30 = 0;
function applyDiscount() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const discountInput = document.getElementById("discountInput");
  const discountValue = discountInput.value;
  if (discountValue == "discount15" && check15 == 0) {
    discount += 0.15;
    check15 = 1;
  } else if (discountValue == "discount30" && check30 == 0) {
    discount += 0.3;
    check30 = 1;
  }
  else if ((discountValue == "discount15" && check15 == 1) || (discountValue == "discount30" && check30 == 1)) {
    alert("Bạn đã nhập mã này rồi");
  }
  else {
    alert("Mã bạn nhập không tồn tại");
  }
  localStorage.setItem("discount", JSON.stringify(discount));
  displayCartItems(cartItems)
}
document.addEventListener("DOMContentLoaded", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const cartItemsJson = queryParams.get("cartItems");

  const cartItems = JSON.parse(decodeURIComponent(cartItemsJson));
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCartItems(cartItems);
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
  const hr = document.createElement("hr");
});
function showContent2() {
  const showIcon = document.getElementById("qAndA");
  showIcon.classList.toggle("show");
}
function deleteItem(x) {
  let arr1 = [];
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];;
  cartItems.forEach((el) => {
    if (el.name != x) {
      arr1.push(el);
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(arr1));
  displayCartItems(arr1);
}
function deleteAllItem() {
  alert("Thanh toán thành công");
  let arr1 = [];
  localStorage.setItem("cartItems", JSON.stringify(arr1));
  discount = 0.0;
  localStorage.setItem("discount", JSON.stringify(discount));
  displayCartItems(arr1);
}
