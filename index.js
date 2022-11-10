let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-contianer");
let searchClose = document.querySelector("#searchClose");

searchBtn.addEventListener("click", () =>{
    
    // searchBtn.classList.toggle("uil-times");
    // searchBar.classList.toggle("active");
    searchBar.style.display = "block";
    searchBtn.style.display = "none";
    searchClose.style.display = "inline";
});
searchClose.addEventListener("click", () =>{
    searchBar.style.display = "none";
    searchBtn.style.display = "inline";
    searchClose.style.display = "none";
});

$("#bars").click(()=>{
    $("#navbar").slideToggle(1000);
    $("#bars").css("display","none");
    $("#closeBtn").css("display","block");
});
$("#closeBtn").click(()=>{
    $("#navbar").slideToggle(1000);
    $("#bars").css("display","block");
    $("#closeBtn").css("display","none");
});

var videoBtn = document.querySelectorAll(".video-btn");
videoBtn.forEach( btn => {
    btn.addEventListener("click", () =>{
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
})


$("#user-btn").click( () =>{
    $(".login-container").css("display","block");
});
$(".login-close").click(()=>{
    $(".login-container").css("display","none");
});
window.onscroll = () =>{
    $(".login-container").css("display","none");
    $(".search-bar-contianer").css("display" , "none");
    $("#searchClose").css("display" , "none");
    $("#search-btn").css("display" , "block");
    // $("#navbar").slideUp(1000);
    // $("#bars").css("display","block");
    // $("#closeBtn").css("display","none");
}

// var swiper = new Swiper(".mySwiper", {});
// var swiper = new Swiper(".mySwiper" , {
//     spaceBetween : 20,
//     loop: true,
//     autoplay:{
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints:{
//         640:{
//             slidesPerView: 1,
//         },
//         768:{
//             slidesPerView: 2,
//         },
//         1024:{
//             slidesPerView: 3,
//        },
//     },
// });
