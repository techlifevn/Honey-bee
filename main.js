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
const productSize = document.querySelectorAll(".product .product-size ul li")

decrease.addEventListener("click", () => {
    let value = parseInt(inputQuantityCart.value)
    if (value <= 1) return
    inputQuantityCart.value = --value;
})

increase.addEventListener("click", () => {
    let value = parseInt(inputQuantityCart.value)
    inputQuantityCart.value = ++value;
})

productSize.forEach((product) => {
    product.addEventListener("click", () => {
        const size = parseInt(product.dataset.size)
        const originPrice = document.querySelector(".product .product-price .origin-price")
        const salePrice = document.querySelector(".product .product-price .sale-price")
        const promotionPrice = document.querySelector(".product .product-price .promotion-price")
    })
})