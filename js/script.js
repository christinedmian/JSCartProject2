let userInfo = document.querySelector("#user_info");
let userData = document.querySelector("#user");

let links = document.querySelector("#link");

if (localStorage.getItem("firstName")) {
    links.remove();
    userInfo.style.display = "flex";
    userData.innerHTML = localStorage.getItem("firstName")
}
else {
    userInfo.style.display = "none"
}
let logOutBtn = document.querySelector("#logout")

logOutBtn.addEventListener("click", function (e) {
    localStorage.clear();
    setTimeout(() => {
        window.location = "login.html";

    }, 1500)
})

/************************************************************************** */

let allProducts = document.querySelector(".products")

let products = [
    {
        id: 1,
        name: "Crunchy",
        category: "Checken Sandwich",
        price: "9$",
        imgUrl: "images/Checken-crunchy sandwich.webp"
    },
    {
        id: 2,
        name: "Hot Dog",
        category: "Pizza",
        price: "11$",
        imgUrl: "images/Pizza Hot Dog.jpg"
    },
    {
        id: 3,
        name: "Oreo Milkshake",
        category: "Drink",
        price: "17$",
        imgUrl: "images/Drink-Oreo Milkshake.jpg"
    },

    {
        id: 4,
        name: "Wrap",
        category: "Checken Sandwich",
        price: "8.30$",
        imgUrl: "images/Chicken Wrap.jpg"
    },
    {
        id: 5,
        name: "Burger",
        category: "Checken Sandwich",
        price: "9$",
        imgUrl: "images/chicken-burger.jpg"
    },
    {
        id: 6,
        name: "Fried",
        category: "Checken BOX",
        price: "5$",
        imgUrl: "images/Checken Box.jpg"
    },
    {
        id: 7,
        name: "fahita",
        category: "Checken Sandwich",
        price: "8$",
        imgUrl: "images/chickens-fahita.webp"
    },
    {
        id: 8,
        name: "Chikoo MilkShake",
        category: "Drink",
        price: "18$",
        imgUrl: "images/Drink-Chikoo MilkShake.webp"
    },

    {
        id: 10,
        name: "cola",
        category: "Drink",
        price: "5$",
        imgUrl: "images/Drink-cola.jpg"
    },
    {
        id: 11,
        name: "Malted Milkshake",
        category: "Drink",
        price: "14$",
        imgUrl: "images/Drink-Malted Milkshake.webp"
    },
    {
        id: 12,
        name: "FIL-A",
        category: "Checken Menu",
        price: "13$",
        imgUrl: "images/CHICK-FIL-A.avif"
    },
    {
        id: 13,
        name: "seven",
        category: "Drink",
        price: "5$",
        imgUrl: "images/Drink-seven.jpg"
    },
    {
        id: 14,
        name: "Strawberry Milkshake",
        category: "Drink",
        price: "15$",
        imgUrl: "images/Drink-Strawberry Milkshake.jpg"
    },
    {
        id: 15,
        name: "Italian",
        category: "Meat Sandwiich",
        price: "10$",
        imgUrl: "images/Italian Sub Sandwich.webp"
    },
    {
        id: 16,
        name: "Kids Fast",
        category: "Checken Menu",
        price: "8$",
        imgUrl: "images/Kids-Fast Food Meals.jpg"
    },
    {
        id: 17,
        name: "Double Burger",
        category: "Meat Sandwiich",
        price: "15$",
        imgUrl: "images/Meat-burger.jpg"
    },
    {
        id: 18,
        name: "Kids Fast",
        category: "Meat Menu",
        price: "9$",
        imgUrl: "images/Kids-Fast food.webp"
    },
    {
        id: 19,
        name: "Burritos",
        category: "Meat Sandwiich",
        price: "10$",
        imgUrl: "images/Meat-Burritos.webp"
    },
    {
        id: 20,
        name: "Quesadilla",
        category: "Meat Sandwiich",
        price: "11$",
        imgUrl: "images/Meat-Quesadilla.jpg"
    },
    {
        id: 21,
        name: "Shawarma",
        category: "Meat Sandwiich",
        price: "9$",
        imgUrl: "images/Meat-Shawarma Sandwich.jpg"
    },
    {
        id: 22,
        name: "TACOS",
        category: "Meat Sandwiich",
        price: "12$",
        imgUrl: "images/Meat-TACOS.jpeg"
    },
    {
        id: 23,
        name: "Shawarma",
        category: "Checken Meal",
        price: "18$",
        imgUrl: "images/Checken-Shawarma Sandwich.jpg"
    },

    {
        id: 24,
        name: "Neapol",
        category: "Pizza",
        price: "12$",
        imgUrl: "images/Pizza-Neapol.jpg"
    },
    {
        id: 25,
        name: "Pepperoni",
        category: "Pizza",
        price: "15$",
        imgUrl: "images/Pizza-Pepperoni.webp"
    },
    {
        id: 26,
        name: "Goddess Chicken",
        category: "Salad",
        price: "9.50$",
        imgUrl: "images/Salad- Goddess Chicken.webp"
    },
    {
        id: 27,
        name: "Pasta",
        category: "Salad",
        price: "7$",
        imgUrl: "images/Salad- Pasta.jpg"
    },
    {
        id: 28,
        name: "Summer Fruit",
        category: "Salad",
        price: "9$",
        imgUrl: "images/Salad- Summer Fruit.jpg"
    },
    {
        id: 29,
        name: "Caesar",
        category: "Salad",
        price: "10$",
        imgUrl: "images/Salad-Caesar.jpg"
    },
    {
        id: 30,
        name: "Panini",
        category: "Meat Sandwich",
        price: "8$",
        imgUrl: "images/Schinken-Panini.webp"
    },
    {
        id: 31,
        name: "Simple Green",
        category: "Salad",
        price: "6$",
        imgUrl: "images/Salad-Simple Green.jpg"
    }
]
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []
let countItem = localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : []
let favorite = localStorage.getItem("fav") ? JSON.parse(localStorage.getItem("fav")) : []

let buttonId = "add_to_cart";
let buttonDefaultValue = "add to cart";

function butonClass(id) {

    if (addedItem.length != 0) {
        let selected = addedItem.find((item) => item.id === id)
        if (selected) {
            return buttonId = "removeFromCart";


        }
        else {
            return buttonId = "add_to_cart";
        }


    }
    else {
        return buttonId = "add_to_cart";
    }
}
function buttonValue(id) {

    if (addedItem.length != 0) {
        let selected = addedItem.find((item) => item.id === id)
        if (selected) {
            return buttonDefaultValue = "Remove From Cart";


        }
        else {
            return buttonDefaultValue = "add to cart"
        }


    }
    else {
        return buttonDefaultValue = "add to cart"
    }
}

function drawItem(x=products) {
    let iTem = x.map((item) => {
        return `<div class="product_item">
        <img class="product_item_img" src="${item.imgUrl}" alt="">
        <div class="product_item_desc">
            <h2>${item.name}</h2>
            <p>${item.category}</p>
            <span>${item.price}</span>
        </div>
        <div class="product_item_action">
            <button class="${butonClass(item.id)}" onClick="addToBadge(${item.id},this)">${buttonValue(item.id)}</button>
            <i class="fa-solid fa-heart fav ${favorite.some(fav => fav.id === item.id) ? 'favRed' : ''}" onClick="addToFav(${item.id},this)" ></i>
        </div>
    </div>`
    })
    allProducts.innerHTML = iTem.join(' ')
}
drawItem()

let cartProductsContent = document.querySelector(".carts_products div");
let badge = document.querySelector(".badge");
drawCart(0)
function drawCart(newOrRemove) {
    if (newOrRemove === 1) {
        cartProductsContent.innerHTML = null

    }
    if (addedItem.length != 0) {

        addedItem.map(item => {
            let count = countItem.find((ele) => ele.id === item.id)

            cartProductsContent.innerHTML += `
        <div class="product-info">
            <div class="itemName">${item.name}  </div>
            <div class="addOrRemove">
                <span class="number">${count.currentItemCount}</span><i class="plus fa-solid fa-plus" onClick="plusMinus(${item.id}, 'plus')"></i><i class="minus fa-solid fa-minus"  onClick="plusMinus(${item.id}, 'minus')"></i>
            </div>
        </div>`

        })
        badgeNumber()
    }
    else {
        console.log("addedItem===0")

        badge.style.display = "none"

    }

}
function badgeNumber() {
    let badgeCount = 0

    itemCount = countItem.forEach(element => {
        badgeCount += element.currentItemCount
    });
    badge.style.display = "block"
    badge.innerHTML = badgeCount;
}

function plusMinus(id, change) {
    let item = countItem.find((ele) => ele.id === id)

    if (item != -1) {
        if (change === "plus") {
            console.log("plus")

            let number = item.currentItemCount + 1;
            let updatedItem = { id: id, currentItemCount: number }
            countItem = countItem.map(item => {
                if (item.id === id) {
                    return updatedItem;
                }
                return item;
            });
            localStorage.setItem("count", JSON.stringify(countItem));
            drawCart(1)
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
                drawCart(1)
            }
            else 
            {
                Remove(id)
                drawItem()
            }
        }
    }
}

function Remove(id) {
    let removeItem = addedItem.findIndex((item) => item.id === id)
    if (removeItem != -1) {
        let countItemRemove = countItem.findIndex((item) => item.id === id)
        countItem.splice(countItemRemove, 1)
        localStorage.setItem("count", JSON.stringify(countItem))

        addedItem.splice(removeItem, 1)
        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
        drawCart(1)
    }

}

function addToBadge(id,button) {
    if (localStorage.getItem("firstName")) {

        if (button.innerHTML == "add to cart") {
            let chosenItem = products.find((item) => item.id === id)

            let currentItem = { id: id, currentItemCount: 1 }
            countItem = [...countItem, currentItem]
            localStorage.setItem("count", JSON.stringify(countItem))
            addedItem = [...addedItem, chosenItem];
            localStorage.setItem("productsInCart", JSON.stringify(addedItem))
            drawCart(1)
            button.innerHTML = "ٌRemove From Cart"
            button.className = "removeFromCart"

        }
        else {
            Remove(id, button)
            button.innerHTML = "add to cart"
            button.className = "add_to_cart"
        }
    }



    else {
        window.location = "login.html"
    }

}

function addToFav(id,button){
    console.log("addToFav")
    if(localStorage.getItem("firstName")){
        let chosenFav = favorite.find((item) => item.id === id)
        if(chosenFav){
             

            let chosenFavIndex=favorite.findIndex((item)=>item.id===id)
            favorite.splice(chosenFavIndex,1)
            localStorage.setItem("fav", JSON.stringify(favorite))
            button.classList.remove('favRed');
        }
        else{
            console.log("!chosenFav")
            let item= products.find((item) => item.id === id)
            favorite=[...favorite,item]
            localStorage.setItem("fav", JSON.stringify(favorite))
            button.classList.add('favRed');
        }
    }
}
/**************************** Display the added item onCLick  ***************************** */

let shopingCartIcon = document.querySelector(".shopping_cart .cartIcon")
let cartProducts = document.querySelector(".carts_products")

shopingCartIcon.addEventListener("click", openCart)

function openCart() {
    if (cartProductsContent.innerHTML != "") {
        if (cartProducts.style.display === "block") {
            cartProducts.style.display = "none";
        }
        else {
            cartProducts.style.display = "block"
        }
    }
}



/********************************************************** */

let category=document.querySelector("#search-category");
let search=document.querySelector("#search-query");

console.log("categ",category.value)
category.addEventListener('change',valueChanged)
function valueChanged(){
    if (search.value!=""){
        search.value=""
        drawItem()
    }
}

search.addEventListener('keyup',findSearch)

function findSearch(){
    console.log("findSearch")
    searchValue=search.value.toLowerCase();
    console.log("searchValue",searchValue)

    if(category.value==="category"){
    console.log("category",category.value)

        let iTem = products.filter(item => 
            item.category.toLowerCase().includes(searchValue)
        );
        drawItem(iTem)
    }
    else{
        console.log("category",category.value)

        let iTem = products.filter(item => 
            item.name.toLowerCase().includes(searchValue)
        );
        drawItem(iTem)
    }
}



/************************************************************  */

