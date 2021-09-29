let products = [];

function init(){
    if(getLocalStorage("c08_products") == null){
        products = [
            "Sony Xperia", 
            "Samsung Galaxy", 
            "Nokia 6", 
            "iPhone 6 Plus"
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
    products.forEach(function(value, index){
        tbproduct.children[1].innerHTML += `<tr id="tr_${index}">
                                                <td>${value}</td>
                                                <td>
                                                    <a href="javascript:;" class="btn btn-success" onclick='editProduct(${index})'>Edit</a>
                                                    <a href="javascript:;" class="btn btn-warning d-none" onclick='saveProduct(${index})'>Update</a>
                                                    <a href="javascript:;" class="btn btn-success d-none" onclick='resetProduct(${index})'>Cancel</a>
                                                    <a href="javascript:;" class="btn btn-danger" onclick="removeProduct(${index})">Remove</a>
                                                </td>
                                            </tr>`
    });
    document.getElementsByClassName('thead-dark')[0].children[0].children[1].innerText = `${products.length} products`;
}

function addProduct(){
    let productName = document.getElementById("product_name").value;
    if(isNotExistProduct(productName) == -1){
        products.push(productName);
        saveLocalStorage("c08_products", products);
        showProduct();
    }
    else{
        alert(`${productName} is existing.`);
    }
    reset();
    
}

function reset(){
    document.getElementById("product_name").value = "";
}

function isNotExistProduct(productName){
    return products.indexOf(productName);
}

function editProduct(index){
    let tr = document.getElementById(`tr_${index}`);
    tr.children[0].innerHTML = `<input type='text' id="pn_${index}" value ='${products[index]}'>`;
    tr.children[1].children[0].classList.add("d-none");
    tr.children[1].children[1].classList.remove("d-none");
    tr.children[1].children[2].classList.remove("d-none");
    
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

function resetProduct(index){
    let tr = document.getElementById(`tr_${index}`);
    tr.children[0].innerText = `${products[index]}`;
    tr.children[1].children[0].classList.remove("d-none");
    tr.children[1].children[1].classList.add("d-none");
    tr.children[1].children[2].classList.add("d-none");
}

function removeProduct(index){
    let confirmed = window.confirm(`Are sure to want to remove ${products[index]}?`);
    if(confirmed){
        products.splice(index,1);
        showProduct();
        saveLocalStorage("c08_products", products);    
    }
}

function ready(){
    init();
    showProduct();
}

ready();
