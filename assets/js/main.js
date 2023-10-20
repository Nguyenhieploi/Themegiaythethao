/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu');

/*============== ===============Xử Lý Popop Search ====================================*/
function showSearchPopup() {
    var searchPopup = document.getElementById("searchPopup");
    searchPopup.style.display = "flex"; // Hiển thị popup khi click
}

function closeSearchPopup() {
    var searchPopup = document.getElementById("searchPopup");
    searchPopup.style.display = "none"; // Ẩn popup khi click vào nút Đóng
}

/*=============================== Xử lý slider ==============================*/
let swiperShoes = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


/* =================================== MUA NGAY ===================*/
  // JavaScript để hiển thị popup khi click vào "buy-now"
  // JavaScript để hiển thị popup và overlay
  const buyNowButtons = document.querySelectorAll('.buy-now'); // Lấy tất cả các nút "buy-now"

  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('close-popup');
  

  // Lặp qua tất cả các nút "buy-now" và thêm sự kiện click
  buyNowButtons.forEach((button) => {
      button.addEventListener('click', () => {
          popup.style.display = 'block';
       
      });
  });

  closePopupButton.addEventListener('click', () => {
      popup.style.display = 'none';
     
  });

// =================================== POPUP SLIDER ẢNH PRODUCT ================
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

//============================= Tính năng quantity =======================
const decreaseButton = document.getElementById('decrease');
        const increaseButton = document.getElementById('increase');
        const quantityInput = document.getElementById('quantity');

        decreaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 0) {
                quantityInput.value = (currentValue - 1).toString();
            }
        });

        increaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = (currentValue + 1).toString();
        });

// ============================== blog =======================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});