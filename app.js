import { sectionOne } from "./info.js"
import { sectionTwo } from "./img.js"
import { card } from "./card.js"

//object
const data = {
    title  : "Hello I'm Adora Dumaog",
    para   : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus deleniti aperiam odio debitis sequi dignissimos, sint, temporibus sit ullam numquam ad quod accusantium, illo voluptatem. Animi, provident repellat? Animi, dolore.",
    btn    : "Click here",
    img    : "ddd.png",
}
const data2 = {
    title2 :"HELLO",
    image1   :"2.png",
    image2   :"bb.png",
    image3   :"b.png",
    para1  :"skdjshdksncsclmspcsiatur tenetur dolore, dolores corporis impedit sed labore!",
    para2  :"Lorem poris imdfdfjhsfhishfishfishfisifcbscpedit sed labore!",
    para3  :"skdjshdksncsclmspcsiatur tenetur dolore, dolores corporis impedit sed labore!",
}

//destructuring 
const { title, para, btn, img, } = data
const {title2,para1,para2,para3, image1,image2,image3 } = data2
//access 

let section = document.getElementById("sectionOne")
let section2 = document.getElementById("sectionTwo")

section.append(sectionOne(title , para, btn))
section.append(sectionTwo(img))
section.append(card(title2,para1,para2,para3, image1,image2,image3 ))


