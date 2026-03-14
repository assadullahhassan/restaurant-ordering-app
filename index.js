import {menuArray, couponsArray} from "./data.js";

const closeModalBtn = document.getElementById("close-modal");
const orderBtn = document.getElementById("order-btn");
const discountBtn = document.getElementById("discount-btn");
const closeDiscountModalBtn = document.getElementById("close-discount-modal");
const cardDetails = document.getElementById("card-details");
const discountForm = document.getElementById("discount-form")
const cardModal = document.getElementById("card-modal");

let orderArray = []
let newTotalPrice = 0

document.addEventListener("click", function(e) {
    if (e.target.dataset.increase) {
        handleIncrease(e.target.dataset.increase)
    }
    else if (e.target.dataset.decrease) {
        handleDecrease(e.target.dataset.decrease)
    }
    else if (e.target.dataset.orderbtn) {
        handleOrder(e.target.dataset.orderbtn)
    } else if (e.target.id === "order-btn") {
        const modal = document.getElementById("card-modal");
        modal.style.display = "block";
    } else if (e.target.id === "discount-btn") {
        const modal = document.getElementById("discount-modal");
        modal.style.display = "block";
    } else if (e.target.dataset.removeorder) {
        const orderId = e.target.dataset.removeorder
        handleRemoveOrder(orderId)
    }

})


closeModalBtn.addEventListener("click", function() {
    const cardModal = document.getElementById("card-modal");
    cardModal.style.display = "none";
});

closeDiscountModalBtn.addEventListener("click", function() {
    const discountModal = document.getElementById("discount-modal");
    discountModal.style.display = "none";
});


cardDetails.addEventListener('submit', function(e){
    console.log(e)
    e.preventDefault()

    const formDatas = new FormData(cardDetails)
    const cardName = formDatas.get("cardName")
    const cardNumber = formDatas.get("cardNumber")
    const expirationDate = formDatas.get("expirationDate")
    const cvv = formDatas.get("cvv")  
    
    const modal = document.getElementById("card-modal");
    modal.style.display = "none";
    document.getElementById("prices").innerHTML = `
                 <div class="final-msg">
                    <p>Thanks, ${cardName}! Your order is on its way.</p>
                </div>`
    console.log(cardName, cardNumber, expirationDate, cvv)
})

discountForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const formDatas = new FormData(discountForm)
    const discountCode = formDatas.get("discountCode")

    const coupon = couponsArray.find(item => item.code === discountCode.toUpperCase())
    if (coupon) {
        // Apply discount logic here
        console.log("Discount applied:", coupon.discount)
        applyDiscount(coupon)
        const modal = document.getElementById("discount-modal");
        modal.style.display = "none";
    } else {
        document.getElementById("discount-message").textContent = "Invalid discount code"
        setTimeout(() => {
            document.getElementById("discount-message").textContent = ""
        }, 1000);
    }
})

function applyDiscount(coupon) {
    let price = 0
    let newpricesHtml = ""
    orderArray.forEach(function(orderItem) {
       price += orderItem.price * (1 - coupon.discount)
       console.log("price after discount:", price)
    })
    newpricesHtml = `
        <div class="total-price">
                    <p class="label">Subtotal:</p>
                    <p class="price">$${newTotalPrice.toFixed(2)}</p>
        </div>
        <div class="total-price">
            <p class="label">Discount(${coupon.code}):</p>
            <p class="price">-$${(newTotalPrice * coupon.discount).toFixed(2)}</p>
        </div>
        <div class="total-price">
             <p class="label">Total:</p>
             <p class="price">$${(price).toFixed(2)}</p>
        </div>
        <button class="order-btn" id="order-btn">Complete order</button>
    `
    document.getElementById("prices").innerHTML = newpricesHtml
}


function handleIncrease(id) {
    console.log("increase", id)
    const menuItem = menuArray.find(item => item.id == id)
    if (menuItem) {
        menuItem.qty++
        renderMenu()
    }

}

function handleDecrease(id) {
    console.log("decrease", id)
    const menuItem = menuArray.find(item => item.id == id)
    if (menuItem) {
        menuItem.qty--
        if (menuItem.qty < 0) {
            menuItem.qty = 0
        }
        renderMenu()
    }
}

function handleOrder(id) {
    console.log("order", id)
    let orderId = 0
        const menuItem = menuArray.find(item => item.id == id)
        if (menuItem) {
            const orderItem = {
                id: orderId++,
                name: menuItem.name,
                price: menuItem.price * menuItem.qty,
                qty: menuItem.qty
            }
            orderArray.push(orderItem)
            initializeOrder()
            renderTotalPrices()
        }
}

function handleRemoveOrder(id) {

    const orderItemIndex = orderArray.findIndex(item => item.id == id)
    if (orderItemIndex !== -1) {
        orderArray.splice(orderItemIndex, 1)
        initializeOrder()
        renderTotalPrices()
    }
}


function renderMenu() {
    let menuHtml = ""
    menuArray.forEach(function(menuItem) {
        menuHtml += `
            <div class="menu-item">
                        <div class="left-section">
                        <img src="${menuItem.img}" alt="${menuItem.alt}">
                        <div class="food-info">
                            <h3>${menuItem.name}</h3>
                            <p class="description">${menuItem.ingredients.join(", ")}</p>
                            <p class="price">$${menuItem.price.toFixed(2)}</p>
                        </div>
                    </div>
                    
                    <i class="fa-solid fa-minus" data-decrease="${menuItem.id}"></i>
                    <span id="qty-${menuItem.id}">${menuItem.qty}</span>
                    <i class="fa-solid fa-plus" data-increase="${menuItem.id}"></i>
                    <img src="assets/add-btn.png" data-orderbtn="${menuItem.id}" class="add-to-order-btn" alt="add to order">
             </div> 
        `
    })
    document.getElementById("menu").innerHTML = menuHtml
}

function initializeOrder() {
    let orderData = ""
    orderArray.forEach(function(orderItem) {
        orderData += `
            <div class="container-order">
                    <div class="left-section">
                    <div class="food-info">
                         <h3>${orderItem.name}</h3>
                        <p class="description">${orderItem.qty} qty</p>
                    </div>
                  </div>
                  <div class="price-remove">
                    <p class="price">$${orderItem.price}</p>
                    <i class="fa-regular fa-circle-xmark" data-removeorder="${orderItem.id}"></i>
                  </div>
                 </div>
                 `
    })
    renderOrder(orderData)
}

function renderOrder(orderData) {
    let orderHtml = ''
    orderHtml = 
    `
    <h3 class="title">Your order</h3>
    ${orderData}
    
    `
    document.getElementById("order").innerHTML = orderHtml
}

function renderTotalPrices() {
    let totalPrice = 0
    let pricesHtml = ""
    orderArray.forEach(function(orderItem) {
        totalPrice += orderItem.price
    })
    newTotalPrice= totalPrice
    pricesHtml = `
        <div class="total-price">
                    <p class="label">Total price:</p>
                    <p class="price">$${totalPrice.toFixed(2)}</p>
                </div>
        <button class="order-btn-discount" id="discount-btn">Apply discount</button>
        <button class="order-btn" id="order-btn">Complete order</button>
    `
    document.getElementById("prices").innerHTML = pricesHtml
}


renderMenu()