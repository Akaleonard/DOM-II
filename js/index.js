// Your code goes here
const img_name = document.querySelector(".logo-heading");
img_name.addEventListener("mouseenter", () => {
    img_name.style.transform="scale(1.2)"; 
    img_name.style.transition="all 0.3s";
});

img_name.addEventListener("mouseleave", () => {
    img_name.style.transform="scale(1.0)";
});

const footer_img = document.querySelector(".footer");
footer_img.addEventListener("dblclick", (event) => {
    event.target.style.color="blue";
});

const nearend_img = document.querySelector(".intro h2");
nearend_img.addEventListener("mouseover", () => {
    nearend_img.style.transform="scale(1.5)";
});

const p_stuff = document.querySelector(".intro p");
p_stuff.addEventListener("click", () => {
    p_stuff.style.display="none";
});

const nav_stuff = document.querySelector(".content-destination img");
nav_stuff.addEventListener("mouseup", () => {
    nav_stuff.style.display="none";
});

const content_h2 = document.querySelector(".content-destination h2");
content_h2.addEventListener("contextmenu", () => {
    content_h2.style.transform="scale(1.3)";
});

const content_p = document.querySelector(".content-destination p");
content_p.addEventListener("mousemove", () => {
    content_p.style.transform="scale(.5)";
});

const content_img = document.querySelector(".intro img");
content_img.addEventListener("wheel", () => {
    content_img.style.display="none";
});

const final_img = document.querySelector(".img-content img");
final_img.addEventListener("mousedown", () => {
    final_img.style.transform="scale(0.3)";
});

const nav_As = document.querySelector('nav');
nav_As.addEventListener('click', (event) => {
    event.target.style.color="blue";
    event.preventDefault();
})

const btn_stuff = document.querySelector('.btn');
btn_stuff.addEventListener('click', (event) => {
    event.target.style.backgroundColor="yellow";
    event.stopPropagation();

})
