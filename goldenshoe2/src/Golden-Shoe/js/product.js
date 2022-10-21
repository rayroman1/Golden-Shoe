
const urlParams = new URLSearchParams(window.location.search);
const product = urlParams.get("product");
const color = urlParams.get("color");
const size = urlParams.get("size");

let shoe = [];
let url = `${ENDPOINT}/product/${product}?color=${color}${size?`&size=${size}`:''}`;
fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => { shoe = data; init(); });
function init() {
    console.log(shoe);

    let root = document.getElementById("container");

    let column = document.createElement("div");
    column.classList.add("col-md-8");

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("shoes-img3");
    column.appendChild(imgWrapper);

    let img = document.createElement("img");
    img.src = shoe.img_url;
    img.style.width = "50%";
    imgWrapper.appendChild(img);


    let colorBtnWrapper = document.createElement("div");
    colorBtnWrapper.classList.add("btn-wrapper");
    let colorSelct = document.createElement("div");
    colorSelct.classList.add("consectetur_text");
    colorSelct.textContent = "Select Color";
    imgWrapper.appendChild(colorSelct);
    shoe.colors.forEach(color => {
        let colorBtn = document.createElement("button");
        colorBtn.style.backgroundColor = color;
        colorBtn.style.color = color;
        colorBtn.textContent = color;
        colorBtn.onclick = ()=>{
            window.location = `product.html?product=${product}&color=${color}`
        }
        colorBtnWrapper.appendChild(colorBtn);
    });
    imgWrapper.appendChild(colorBtnWrapper);

    let contentWrapper = document.createElement("div");
    contentWrapper.classList.add("col-md-4");

    let productName = document.createElement("div")
    productName.classList.add("consectetur_text");
    productName.textContent = shoe.name;
    contentWrapper.appendChild(productName);

    let productPrice = document.createElement("div")
    productPrice.classList.add("consectetur_text");
    productPrice.textContent = "£"+shoe.price;
    contentWrapper.appendChild(productPrice);

    let productSizeLabel = document.createElement("div");
    productSizeLabel.textContent = "Size";
    productSizeLabel.classList.add("consectetur_text");
    contentWrapper.appendChild(productSizeLabel);

    let productSize = document.createElement("select");
    productSize.classList.add("nice-select");
    productSize.textContent = "Select Size";

    let stock = document.createElement("div")
    stock.classList.add("consectetur_text");

    shoe.sizes.forEach(item => {
        let option = document.createElement("option");
        option.text = item.size;
        if(item.size===parseInt(size)){
            option.selected = "selected";
        }
        productSize.appendChild(option);
       
    });
    let buyBtn = document.createElement("button");
    buyBtn.classList.add("seemore");
    buyBtn.textContent = "Add to cart";

    productSize.onchange = ()=>{
        const selectedSize = parseInt(productSize.options[productSize.selectedIndex].text);
        let itemSize = shoe.sizes.find(item => item.size===selectedSize);
        window.location = `product.html?product=${product}&color=${color}&size=${selectedSize}`
    }
    let selectWrapper = document.createElement("div");
    selectWrapper.classList.add("select-wrapper");
    selectWrapper.appendChild(productSize);
    contentWrapper.appendChild(selectWrapper);

    if(shoe.stock>0){
        stock.textContent = "In Stock";
        buyBtn.disabled = false;
    }
    else{
        stock.textContent = "Out of Stock";
        buyBtn.disabled = true;
    }
    let cartAlert = document.createElement("div");
    cartAlert.textContent = "Item added to cart!";

    buyBtn.onclick = ()=>{
        shoe.totalPrice = shoe.price;
        shoe.count = 1;
        if(window.localStorage.getItem("cart")){
            let cart = JSON.parse(window.localStorage.getItem("cart"));
            let tempShoe = cart.find(item => item.id === shoe.id);
            if(tempShoe){
                tempShoe.count+=1;
            }
            else{
                tempShoe = shoe;
                cart.push(tempShoe);
            }
            window.localStorage.setItem("cart",JSON.stringify(cart));
        }
        else{
            window.localStorage.setItem("cart",JSON.stringify([shoe]));
        }
        cartAlert.classList.remove("hide");
        cartAlert.classList.add("show-ribbon");
        setTimeout(function() {
            cartAlert.classList.add("hide");
         }, 2000);
        contentWrapper.appendChild(cartAlert);

    };
    contentWrapper.appendChild(buyBtn);
    contentWrapper.appendChild(stock);

    let productDescriptionLabel = document.createElement("div")
    productDescriptionLabel.classList.add("consectetur_text");
    productDescriptionLabel.textContent = "Product Description";
    contentWrapper.appendChild(productDescriptionLabel);

    let productDescriptionDetail = document.createElement("div")
    productDescriptionDetail.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore";
    contentWrapper.appendChild(productDescriptionDetail);


    root.appendChild(column);
    root.appendChild(contentWrapper);
}
