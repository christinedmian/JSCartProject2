let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");

let links = document.querySelector("#link");

if (localStorage.getItem("firstName")) {
    links.remove();
    userInfo.style.display = "flex";
}
else {
    userInfo.style.display = "none"
}



let productInCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

let allproducts = document.querySelector(".productsAll");

let countItem = localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : []


let totalPrice = document.querySelector(".total")


if (productInCart) {

    drawItem()
}
function drawItem() {
    let numericString = 0
    let total=0
    let y = productInCart.map((item) => {
        let count = countItem.find((ele) => ele.id === item.id)
        numericString = item.price.replace('$', '').trim();
        total+=Number(numericString)*count.currentItemCount;
        return `
        <div class="product_itemAll">
            <img class="product_item_imgAll" src="${item.imgUrl}" alt="">
            <div class="product_item_descAll">
                <h2>${item.name}</h2>
                <p>${item.category}</p>
                <p>${item.price}</p>
            </div>
            <div class="product_item_actionAll">
                <span class="number">${count.currentItemCount}</span>
                <i class="plus fa-solid fa-plus" onClick="plusMinus(${item.id}, 'plus')"></i>
                <i class="minus fa-solid fa-minus" onClick="plusMinus(${item.id}, 'minus')"></i>
                <button class="removeFromCart" onClick="remove(${item.id})">Remove</button>
            </div>
        </div>
        `
    })
    allproducts.innerHTML = y.join(' ');
    totalPrice.innerHTML=`total price : ${total} $`

}

function remove(id) {
    let removeItemIndex = productInCart.findIndex((item) => item.id === id)
    if (removeItemIndex != -1) {
        let countItemRemove = countItem.findIndex((item) => item.id === id)
        countItem.splice(countItemRemove, 1)
        localStorage.setItem("count", JSON.stringify(countItem))
        productInCart.splice(removeItemIndex, 1);
        localStorage.setItem("productsInCart", JSON.stringify(productInCart))
        drawItem()
    }

}


function plusMinus(id, change) {
    let item = countItem.find((ele) => ele.id === id)

    if (item != -1) {
        if (change === "plus") {
            let number = item.currentItemCount + 1;
            let updatedItem = { id: id, currentItemCount: number }
            countItem = countItem.map(item => {
                if (item.id === id) {
                    return updatedItem;
                }
                return item;
            });
            localStorage.setItem("count", JSON.stringify(countItem));
            drawItem()

        }

        else {
            console.log("minus")

            let number = item.currentItemCount - 1;
            console.log("number", number);

            if (number != 0) {
                console.log("number != 0");

                let updatedItem = { id: id, currentItemCount: number }
                countItem = countItem.map(item => {
                    if (item.id === id) {
                        return updatedItem;
                    }
                    return item;
                });
                localStorage.setItem("count", JSON.stringify(countItem));
                drawItem()
            }
            else {
                remove(id)
            }
        }
    }
}


/***********************************  FAV   ****************************  */
let favoriteStorage = localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []

let favDiv=document.querySelector(".swiper-wrapper");

function drawFav(){
    let favs=favoriteStorage.map((item)=>{
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        return `
        <div class="swiper-slide">
            <img class="fav_item_img" src="${item.imgUrl}" alt="">
                <h2>${item.name}</h2>
                <p>${item.category}</p>
                <div class="favIcons">
                <i class="fa-solid fa-heart favRed" onClick="removeFav(${item.id})" ></i>
                </div>
        </div>
        `
    })
    favDiv.innerHTML=favs.join(' ')
}
drawFav()


function removeFav(id){
    let favoriteStorageIndex=favoriteStorage.findIndex((item)=>item.id===id);
    if(favoriteStorageIndex!=-1){
        favoriteStorage.splice(favoriteStorageIndex,1)
        localStorage.setItem("fav",JSON.stringify(favoriteStorage))
        drawFav()
    }

}