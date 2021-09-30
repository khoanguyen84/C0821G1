class Product{
    constructor(id, productName, quantity, price, picture){
        this.productId = id,
        this.productName = productName,
        this.quantity = quantity,
        this.price = price,
        this.picture = picture
    }
}

// "Sony Xperia", 
// "Samsung Galaxy", 
// "Nokia 6", 
// "iPhone 6 Plus"
let products = [];

function init(){
    if(getLocalStorage("c08_products") == null){
        products = [
            new Product(
                productId = 1,
                productName = "Sony Xperia",
                quantity = 10,
                price = 700000,
                picture = "SonyXperia.jpg"
            ),
            new Product(
                productId = 2,
                productName = "Samsung Galaxy",
                quantity = 17,
                price = 850000,
                picture = "SamsungGalaxy.jpg"
            )
        ];
        saveLocalStorage("c08_products", products);
    }
    else{
        products = getLocalStorage("c08_products");
    }
}

function getLocalStorage(key){
    return JSON.parse(window.localStorage.getItem(key));
}

function saveLocalStorage(key, data){
    window.localStorage.setItem(key, JSON.stringify(data));
}

function showProduct(){
    let tbproduct = document.getElementById("tbProduct");
    tbproduct.children[1].innerHTML ="";
    products.forEach(function(prod, index){
        tbproduct.children[1].innerHTML += `<tr id="tr_${prod.productId}">
                                                <td>${prod.productId}</td>
                                                <td>${prod.productName}</td>
                                                <td class='text-center'><img class="picture" src="images/${prod.picture}"></td>
                                                <td class='text-right'>${formatCurrency(prod.price)}</td>
                                                <td class='text-right'>${prod.quantity}</td>
                                                <td class='text-right'>${formatCurrency(prod.price * prod.quantity)}</td>
                                                <td>
                                                    <a href="javascript:;" class="btn btn-success" onclick='editProduct(${prod.productId})'>Edit</a>
                                                    <a href="javascript:;" class="btn btn-warning d-none" onclick='saveProduct(${prod.productId})'>Update</a>
                                                    <a href="javascript:;" class="btn btn-success d-none" onclick='resetProduct(${prod.productId})'>Cancel</a>
                                                    <a href="javascript:;" class="btn btn-danger" onclick="removeProduct(${prod.productId})">Remove</a>
                                                </td>
                                            </tr>`
    });
    document.getElementsByClassName('thead-dark')[0].children[0].children[6].innerText = `${products.length} products`;
}

function addProduct(){
    let productId = getLastestProductId() + 1;
    let productName = document.getElementById("product_name").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);
    let picture = document.getElementById("picture").value;

    let product = new Product(productId, productName, quantity, price, picture);
    if(isNotExistProduct(product) == -1){
        products.push(product);
        saveLocalStorage("c08_products", products);
        showProduct();
    }
    else{
        alert(`${productName} is existing.`);
    }
    reset();
    
}

function getLastestProductId(){
    let prods = [...products];
    return prods.sort(function(prod1, prod2){
                    return prod2.productId - prod1.productId;
            })[0].productId;
            
}

function reset(){
    document.getElementById("product_name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value  = "";
    document.getElementById("picture").value = "";
}

function isNotExistProduct(product){
    return products.findIndex(function(item, index){ 
                return item.productName ==  product.productName}
            );
}

function editProduct(id){
    let tr = document.getElementById(`tr_${id}`);
    let product = products.find(function(item, index){
                        return item.productId = id;
                    })
    tr.children[1].innerHTML = `<input class="input-short" type='text' id="pn_${id}" value ='${product.productName}'>`;
    tr.children[2].innerHTML = `<input class="input-short" type='text' id="picture_${id}" value ='${product.picture}'>`;
    tr.children[3].innerHTML = `<input class="input-short" type='text' id="price${id}" value ='${product.price}'>`;
    tr.children[4].innerHTML = `<input class="input-short" type='text' id="quantity_${id}" value ='${product.quantity}'>`;
    tr.children[5].innerText = `${formatCurrency(product.price * product.quantity)}`;
    tr.children[6].children[0].classList.add("d-none");
    tr.children[6].children[1].classList.remove("d-none");
    tr.children[6].children[2].classList.remove("d-none");
    
}

function saveProduct(index){
    let new_productName = document.getElementById(`pn_${index}`).value;
    let newIndex = isNotExistProduct(new_productName);
    if(newIndex == -1 || newIndex == index){
        products[index] = new_productName;
        showProduct();
        saveLocalStorage("c08_products", products);    
        resetProduct(index);
    }
    else{
        alert(`${new_productName} is existing.`);
    }
}

function resetProduct(id){
    let tr = document.getElementById(`tr_${id}`);
    let product = products.find(function(item, index){
                        return item.productId = id;
                    })
    tr.children[1].innerText = `${product.productName}`;
    tr.children[2].innerHTML = `<img class="picture" src="images/${product.picture}">`;
    tr.children[3].innerText = `${formatCurrency(product.price)}`;
    tr.children[4].innerText = `${formatCurrency(product.quantity)}`;
    tr.children[5].innerText = `${formatCurrency(product.price * product.quantity)}`;
    tr.children[6].children[0].classList.remove("d-none");
    tr.children[6].children[1].classList.add("d-none");
    tr.children[6].children[2].classList.add("d-none");

}

function removeProduct(index){
    let confirmed = window.confirm(`Are sure to want to remove ${products[index]}?`);
    if(confirmed){
        products.splice(index,1);
        showProduct();
        saveLocalStorage("c08_products", products);    
    }
}

function formatCurrency(number){
    return number.toLocaleString('vi', {
        style: 'currency',
        currency: 'vnd',
      });
}

function ready(){
    init();
    showProduct();
}

ready();
