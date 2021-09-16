console.log("Hi Natasha");
let burgerMenu = document.getElementsByClassName("header_burger")[0];
burgerMenu.classList.toggle("active");
let navigationMenu = document.getElementsByClassName("navigation")[0];
navigationMenu.classList.toggle("active");
let TegNav = document.getElementsByTagName("nav")[0];
TegNav.classList.toggle("active");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
navigationMenu.classList.toggle("active");
TegNav.classList.toggle("active")
}
);
// $(document).ready(function() {
//     $('.header_burger').click(function(event) {
//         $('.header_burger,nav,.navigation').addClass('active');

//     })
// })
