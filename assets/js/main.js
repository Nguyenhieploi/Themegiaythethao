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