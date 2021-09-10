function showDatetime(){
    let element = document.getElementsByTagName("button")[0];
    element.innerText = 'Hiển thị ngày tháng'; 
    element.style.backgroundColor='red'; 
    element.style.fontSize= '40px';
    element.style.color='white';
}

function changeValue(r){
    let label = document.getElementsByClassName("rangeClass")[0];
    // let range = document.getElementsByTagName("input")[1];
    label.innerText = r.value;
    document.getElementsByTagName('label')[0].style.fontSize = r.value/10 + "px";
}