function changeColor(){
    let red = Number(document.getElementById('red').value);
    let green = Number(document.getElementById('green').value);
    let blue = Number(document.getElementById('blue').value);
    let alpha = Math.round(Number(document.getElementById('alpha').value)/100 * 10)/10;

    document.getElementById("red-value").innerText = red;
    document.getElementById("green-value").innerText = green;
    document.getElementById("blue-value").innerText = blue;
    document.getElementById("alpha-value").innerText = alpha;

    let colorArea = document.getElementById("color-area");
    colorArea.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    colorArea.innerText = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

changeColor();