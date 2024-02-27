

//===== ANIMATION ON SCROLL

AOS.init();

//======= END OF ANIMATION ON SCROLL



// ======== TO RUN A NUMBER UPTO 500

const number = document.getElementById('number');

const updateCount = () =>{
    const value =parseInt(number.dataset.value);
    let initialValue = 0;

    const increaseCount = setInterval(() =>{
        initialValue += 1;

        if (initialValue > value){
            number.textContent = `${value}`;
            clearInterval(increaseCount);
            return;
        }

        number.textContent = `${initialValue}`;
    }, 1);
};

updateCount()

// ========== END OF NUMBER GERATOR



// Swiper JS Code


var Swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false, 
      },

      breakpoints: {
        0: {
            slidesPerView : 1,
        },
        650: {
            slidesPerView : 2,
        },
        992: {
            slidesPerView : 3,
        }
      },




      
});