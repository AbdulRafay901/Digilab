const nav = document.querySelector("#l");
const home = document.querySelector("#link");
const menu = document.querySelector("#menu");
const toggle = document.querySelector("#toggle");


 toggle.addEventListener("click", (() => {

  nav.classList.toggle("left");
  menu.classList.toggle("menu-top");

  home.classList.toggle("opac");

}))

// function toggle() {
//   nav.classList.toggle("left");
//   menu.classList.toggle("menu-top");

//   home.classList.toggle("opac");
// }

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");

const content = document.querySelector("#content");






btn1.addEventListener("click", (() => {

  content.style.opacity = 0;

  setTimeout(() => {

   document.getElementById("content").innerHTML = "<div> <img src='images/new-product.png'>  <h1 id='h1'>Business Strategy</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button> </div>";
     content.style.opacity = 1;
   },500)

}))



btn2.addEventListener("click", (() => {
  content.style.opacity = 0;

  setTimeout(() => {

  document.getElementById("content").innerHTML = "<img src='images/laboratory.png'>  <h1 id='h1'>Research</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button>";
  content.style.opacity = 1;
   },500)
}))
btn3.addEventListener("click", (() => {

  content.style.opacity = 0;

  setTimeout(() => {

  document.getElementById("content").innerHTML = "<img src='images/research.png'>  <h1 id='h1'>Data Analysis</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button>";
  content.style.opacity = 1;
   },500)
}))
btn4.addEventListener("click", (() => {
   content.style.opacity = 0;

  setTimeout(() => {

  document.getElementById("content").innerHTML = "<img src='images/web-design.png'> <h1 id='h1'>UI Design</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button>";
 content.style.opacity = 1;
   },500)
}))

btn5.addEventListener("click", (() => {
  content.style.opacity = 0;

  setTimeout(() => {

  document.getElementById("content").innerHTML = " <img src='images/front-development.png'>  <h1 id='h1'>UX Design</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button>";
 content.style.opacity = 1;
   },500)
}))
btn6.addEventListener("click", (() => {
  content.style.opacity = 0;

  setTimeout(() => {

  document.getElementById("content").innerHTML = "<img src='images/lamp.png'>  <h1 id='h1'>Technology</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button>";
 content.style.opacity = 1;
   },500)
}))
btn7.addEventListener("click", (() => {
  content.style.opacity = 0;

  setTimeout(() => {

  document.getElementById("content").innerHTML = "<img src='images/creative.png'>  <h1 id='h1'>Creative</h1>  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur</p> <p>Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.</p>  <button>Learn More</button>";
 content.style.opacity = 1;
   },500)
}))


const counter = document.getElementById("#twenty");

zero = 0;

intervalid = setInterval(() => {
  zero++;


  if(zero > 20){
    clearInterval(intervalid);
  }

  else{
    document.getElementById("twenty").innerHTML = zero;
  }

  

},400)



window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar-center");
  // const digi = document.querySelector("#digi");
  // const home = document.querySelector("#home");






   if (window.scrollY > 150) {

  

      // home.style.display = "none";

    

       
       
    // home.classList.add("black");
    navbar.classList.add("scrolled");
    // digi.classList.add("digi-change")
   
    
  } else {
    navbar.classList.remove("scrolled");
    // home.style.display = "block";
     
    // digi.classList.remove("digi-change")

    
   
  }
});








// <!-- Initialize Swiper -->
  
    var swiper = new Swiper(".mySwiper", {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      loop: true,
 
    });


    // section 4 slider  Start//

    var swiper = new Swiper(".SecSwiper", {
      slidesPerView: 3,
      loop:true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
    992: {  
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: { 
      slidesPerView: 3,
      spaceBetween: 10,
    },
    425: {  
      slidesPerView: 1,
      spaceBetween: 30,
    },
    0: {    
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
    });


     // section 4 slider  End//



      var swiper = new Swiper(".Thirdswiper", {
        slidesPerView: 3,
        loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
       breakpoints: {
    992: {  
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: { 
      slidesPerView: 3,
      spaceBetween:30,
    },
    583: {  
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {    
      slidesPerView: 1,
      spaceBetween: 0,
    }
  }
      
    });
