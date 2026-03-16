// SLIDER //
const slide = document.querySelectorAll('.slides')
const next = document.querySelector('.next')
const previous = document.querySelector('.prev')

let etape = 0;
let img = slide.length

const removeActiveImg = () => {
    for (let i = 0; i < img; i++) {
        slide[i].classList.remove('active')

    }
}


next.addEventListener('click', () => {
    etape++;
    if (etape >= img) {
        etape = 0;
    }
    removeActiveImg()
    slide[etape].classList.add('active');
})
previous.addEventListener('click', () => {
    etape--;
    if (etape < 0) {
        etape = img - 1
    }
    removeActiveImg()
    slide[etape].classList.add('active');
})

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".attestation img");

    elements.forEach(function(el) {

        el.addEventListener("click", function(e) {

            e.stopPropagation();

            if (el.classList.contains("active")) {
                el.classList.remove("active");
            } else {

                elements.forEach(function(item){
                    item.classList.remove("active");
                });

                el.classList.add("active");
            }

        });

        el.addEventListener("mouseleave", function() {
            el.classList.remove("active");
        });

    });

});