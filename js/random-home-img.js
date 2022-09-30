const index_imgs = [
    'https://bu.dusays.com/2022/09/23/632dd5472a947.jpg',
    'https://bu.dusays.com/2022/09/30/633684ae61e8c.jpg',
    'https://bu.dusays.com/2022/09/30/63368625ea43b.jpg'
]

var index_img_dom = document.querySelector(".full_page")
let index_img
if (index_img_dom) {
    index_img = index_imgs[Math.floor(Math.random() * index_imgs.length)]
    index_img_dom.style.backgroundImage = "url(" + index_img + ")"
}
