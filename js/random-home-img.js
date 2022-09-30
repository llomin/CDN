const index_imgs = [
    'https://bu.dusays.com/2022/09/23/632dd5472a947.jpg',
    'https://bu.dusays.com/2022/09/30/633684ae61e8c.jpg',
    'https://bu.dusays.com/2022/09/30/63368625ea43b.jpg'
]

var index_img_dom = document.querySelector(".full_page")
 
if (index_img_dom) {
    let index_img = index_imgs[Math.floor(Math.random() * index_imgs.length)]
    index_img_dom.style.backgroundImage = "url(" + index_img + ")"
    let footer_dom = document.querySelector("#footer")
    footer_dom.style.backgroundImage = "url(" + index_img + ")"
}
