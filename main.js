let thumbs = new Swiper(".thumbsSlider", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
new Swiper(".swiperSlider", {
    spaceBetween: 10,
    thumbs: {
        swiper: thumbs,
    },
});

const decrease = document.querySelector(".product .decrease")
const increase = document.querySelector(".product .increase")
const inputQuantityCart = document.querySelector(".product .form-cart input[name='quantity']");

decrease.addEventListener("click", () => {
    let value = parseInt(inputQuantityCart.value)
    if (value <= 1) return
    inputQuantityCart.value = --value;
})

increase.addEventListener("click", () => {
    let value = parseInt(inputQuantityCart.value)
    inputQuantityCart.value = ++value;
})