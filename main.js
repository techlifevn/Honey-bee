function debounce(func, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
}


document.addEventListener("DOMContentLoaded", () => {
    let thumbs = new Swiper(".thumbsSlider", {
        spaceBetween: 10,
        slidesPerView: 3,
        breakpoints: {
            768: {
                slidesPerView: 5,
            },
            580: {
                slidesPerView: 4,
            }
        },
        freeMode: true,
        watchSlidesProgress: true,
    });
    new Swiper(".swiperSlider", {
        spaceBetween: 10,
        thumbs: {
            swiper: thumbs,
        },
    });
    new Swiper(".slideBestSeller", {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1280: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            560: {
                slidesPerView: 2,
            }
        }
    });

    $(".menu-mobile").metisMenu();

    new Swiper(".slideBanner", {});

    const backTop = document.querySelector(".back-top")
    const decrease = document.querySelector(".product .decrease")
    const increase = document.querySelector(".product .increase")
    const inputQuantityCart = document.querySelector(".product .form-cart input[name='quantity']");
    const productSize = document.querySelectorAll(".product .product-size ul li")
    const openMenuMobile = document.querySelector(".icon-bars")

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

            productSize.forEach((ele) => {
                ele.classList.remove('active')
            })

            product.classList.add('active')

            const originPrice = document.querySelector(".product .product-price .origin-price")
            const salePrice = document.querySelector(".product .product-price .sale-price")
            const promotionPrice = document.querySelector(".product .product-price .promotion-price")

            switch (size) {
                case 200: {
                    originPrice.classList.remove('hidden')
                    originPrice.textContent = '1.500.000₫'

                    salePrice.classList.remove('hidden')
                    salePrice.textContent = '1.000.000₫'

                    promotionPrice.classList.remove('hidden')
                    promotionPrice.textContent = '-500.000₫'
                    break
                }
                case 500: {
                    originPrice.textContent = '2.500.000₫'
                    salePrice.classList.add('hidden')
                    promotionPrice.classList.add('hidden')
                    break
                }
                default: {
                    originPrice.classList.add('hidden')
                    salePrice.classList.add('hidden')
                    promotionPrice.classList.add('hidden')
                    break
                }
            }
        })
    })

    window.addEventListener('scroll', debounce(() => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backTop.style.display = 'flex'
        } else {
            backTop.style.display = 'none'
        }
    }, 200))

    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Cuộn mượt
        });
    })

    document.documentElement.addEventListener("click", (e) => {
        if (e.target.closest('.menu-mobile')) {
            return
        }

        if (e.target.closest('.overlay')) {
            const menuMobile = document.querySelector(".menu-mobile")
            const overlay = document.querySelector(".overlay")
            menuMobile.classList.remove("open")
            overlay.classList.remove("fixed")
            return
        }
    })

    openMenuMobile.addEventListener("click", () => {
        const menuMobile = document.querySelector(".menu-mobile")
        const overlay = document.querySelector(".overlay")
        menuMobile.classList.add("open")
        overlay.classList.add("fixed")
    })
})