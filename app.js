


    
  


// !!!!!!!!!! add count to shop-cart !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let countProducts = document.getElementById("count-products");  // get element with count products in shop-cart
let addToCartBtns = document.querySelectorAll(".add-to-cart");  // get element btn "add to cart"

for(let i = 0 ; i < addToCartBtns.length ; i++){                // add loop for itarate every btn "add to cart"
    addToCartBtns[i].addEventListener('click' , function() {    //event click on btn "add to cart"
        let prevCountProducts = +countProducts.textContent;
        countProducts.textContent = prevCountProducts + 1;      // update count in shop-cart
    })
} 


// !!!!!!!! add like to product item !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let likeProductItem = document.querySelectorAll('.like-item');              // get element like-icon on product
let likeProductBtn = document.querySelectorAll('.fokus-like_border-bot');   // get element btn with like

for(let i = 0 ; i < likeProductBtn.length ; i++){                           // add loop for itarate every btn with like
    let changeLikeColor = () => {                                           // function which change icon-color and background-color
        let srcLikeProduct = likeProductItem[i].getAttribute('src');
        if(srcLikeProduct === 'img/white-like.png'){
            likeProductItem[i].setAttribute('src' , 'img/blue-like.png');
            // likeProductBtn[i].setAttribute('style' , 'background-color: none');  // change inline style
            likeProductBtn[i].classList.remove('liked');                            // removed class with styles
        } else {
            likeProductItem[i].setAttribute('src' , 'img/white-like.png');
            // likeProductBtn[i].setAttribute('style' , 'background-color: #2c71b8'); // change inline style
            likeProductBtn[i].classList.add('liked');                                 // added class with styles
        }
    }

    likeProductBtn[i].addEventListener('click' , changeLikeColor);          // event click on btn "like".
}

// !!!!!!!!!!!! add modal window "more details" !!!!!!!!!!!!!!!!!!!!!!!!!!

let modalWindow = document.getElementById("modal")                  //get modal window as element
let btnsMoreDetails = document.querySelectorAll(".details_btn");    //get "more-details"-btn as element
let closeModalBtn = document.querySelector(".btn-close");           //get "close"-btn as element
let openModal = () => {
    // modalWindow.classList.add("modal-visible");          //added class
    modalWindow.style.display = "block";                    //changed style
}
let closeModal = () => {
    // modalWindow.classList.remove("modal-visible");       //removed class
    modalWindow.style.display = "none";                     //changed style
}
modalWindow.addEventListener("click" , function(e) {        //closed modal when clicked out of form
    if(e.target === modalWindow){
        closeModal();
    }
})
closeModalBtn.addEventListener("click" , closeModal);       //closed modal when clicked on "close-btn" - X
for(let i = 0 ; i < btnsMoreDetails.length ; i++){          //iterated every btn "more details"
    btnsMoreDetails[i].addEventListener("click" , openModal);
}

// !!!!!!!!!!!! change product quantity !!!!!!!!!!!!!!!!!!!!!!!!!!

let incrementBtn = document.querySelectorAll(".increment-btn");
let decrementBtn = document.querySelectorAll(".decrement-btn");
let productQuantityEl = document.querySelectorAll(".product-quantity input");



function Counter(incrementButton , decrementButton , inputField){
    this.domRef = {
        incrementButton,
        decrementButton,
        inputField,
    }

    this.disableBtnCountFunc = function() {
        let count = this.domRef.inputField.value;
        this.domRef.decrementButton.disabled = count <= 1;        // disable btn when count is 1
        this.domRef.incrementButton.disabled = count >= 5;        // disable btn when count is 5
    }
    
    
    this.increment = function(){
        let currentCount = +this.domRef.inputField.value;
        let nextCount = currentCount + 1;
        this.domRef.inputField.value = nextCount;
        this.disableBtnCountFunc();
    }

    
    this.decrement = function(){
        let currentCount = +this.domRef.inputField.value;
        let nextCount = currentCount - 1;
        this.domRef.inputField.value = nextCount;
        this.disableBtnCountFunc();
    }

    
    this.disableBtnCountFunc();
    this.domRef.incrementButton.addEventListener('click' , this.increment.bind(this));
    this.domRef.decrementButton.addEventListener('click' , this.decrement.bind(this));
}

const counters = [];
productQuantityEl.forEach( function(countItem , i) {
    counters[i] = new Counter(incrementBtn[i] , decrementBtn[i] , countItem); 
})

$('.slider-block').slick({
    dots: true,
});


let obj = {
    name:"alex",
    age:25,
    skills:{
        html:5
    }
}






