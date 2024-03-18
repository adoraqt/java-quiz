
const card = (title2, para1, para2, para3, image1,image2,image3) => {
    let div = document.createElement("div")
    div.className = "card"
    div.innerHTML = `<h2>${title2}</h2>
                    <p>${para1}</p>
                    <p>${para2}</p>
                    <p>${para3}</p>
                    <img src="./img/${image1}">
                    <img src="./img/${image2}">
                    <img src="./img/${image3}">
        `
    return div
}

export { card }