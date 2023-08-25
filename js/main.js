const data = [
    {
        id: 1,
        name: "Lira Earrings",
        price: "20,00",
        img: "../img/Img 01 (1).png"
    },
    {
        id: 2,
        name: "Hal Earrings",
        price: "20,00",
        img: "../img/Img 02.png"
    },
    {
        id: 3,
        name: "Kaede Hair Pin Set Of 3 ",
        price: "20,00",
        img: "../img/Img 04.png"
    },
    {
        id: 4,
        name: "Hair Pin Set of 3",
        price: "20,00",
        img: "../img/Img 05.png"
    },
    {
        id: 5,
        name: "Plaine Necklace",
        price: "20,00",
        img: "../img/Img 07.png"
    },
    {
        id: 6,
        name: "Yuki Hair Pin Set of 3",
        price: "25,00",
        img: "../img/Img 03.png"
    }
]

let wrap = document.querySelector(".wrap__card")

data.forEach((item) => {
    wrap.innerHTML += `
        <div class="cardd">
            <div class="cardd__img">
                <img src="${item.img}" alt="">
                <div class="img__hover">
                <img src="./img/Group (1).png" alt="">
                <img src="./img/Group (2).png" alt="">
                <img s src="./img/Vector (3).png" alt="">
                
                </div>
            </div>
            <div class="card__bodyy">
                <h4>${item.name}</h4>
                <p>$ ${item.price}</p>
            </div>
        </div>`;

})