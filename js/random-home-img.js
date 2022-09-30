const index_imgs = [
    'https://bu.dusays.com/2022/09/23/632dd5472a947.jpg',
    'https://bu.dusays.com/2022/09/30/633684ae61e8c.jpg',
    'https://bu.dusays.com/2022/09/30/63368625ea43b.jpg'
]

var index_img = index_imgs[Math.floor(Math.random() * index_imgs.length)]
document.querySelector(".full_page").style.backgroundImage = "url(" + index_img + ")"
