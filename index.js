import menuArray from "./data.js";

const closeModalBtn = document.getElementById("close-modal");
const orderBtn = document.getElementById("order-btn");
const discountBtn = document.getElementById("discount-btn");
const closeDiscountModalBtn = document.getElementById("close-discount-modal");
const cardDetails = document.getElementById("card-details")
const cardModal = document.getElementById("card-modal");

closeModalBtn.addEventListener("click", function() {
    const cardModal = document.getElementById("card-modal");
    cardModal.style.display = "none";
});

closeDiscountModalBtn.addEventListener("click", function() {
    const discountModal = document.getElementById("discount-modal");
    discountModal.style.display = "none";
});

orderBtn.addEventListener("click", function() {
    const modal = document.getElementById("card-modal");
    modal.style.display = "block";
});

discountBtn.addEventListener("click", function() {
    const modal = document.getElementById("discount-modal");
    modal.style.display = "block";
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