function generateMatrix(row, col, min, max){
    let matrix = [];
    for(let i=0;i<row;i++){
        let arr =[];
        for(let j=0;j<col; j++){
            arr[j] = Math.floor(Math.random()*(max - min + 1) + min);
        }
        matrix[i] = arr;
    }
    return matrix;
}

function printMatrix(matrix){
    let showMatrix = `<table border='1'>`;
    for(let i=0; i< matrix.length;i++){
        showMatrix += `<tr>`;
        for(let j=0;j< matrix[i].length; j++){
            showMatrix += `<td>${matrix[i][j]}</td>`
        }
        showMatrix +=`</tr>`;
    }
    showMatrix += "</table>";
    return showMatrix;
}

function totalMatrixValues(matrix){
    let total = 0;
    for(let i=0; i< matrix.length;i++){
        for(let j=0;j< matrix[i].length; j++){
            total += matrix[i][j];
        }
    }
    return total;
}

function findMaxValueInMatrix(matrix){
    let max = 0;
    for(let i=0; i< matrix.length;i++){
        for(let j=0;j< matrix[i].length; j++){
            if( max < matrix[i][j]){
                max = matrix[i][j];
            }
        }
    }
    return max;
}

function printPrimeMatrix(matrix){
    let showMatrix = `<table border='1'>`;
    for(let i=0; i< matrix.length;i++){
        showMatrix += `<tr>`;
        for(let j=0;j< matrix[i].length; j++){
            if(isPrime(matrix[i][j])){
                showMatrix += `<td>${matrix[i][j]}</td>`
            }
            else{
                showMatrix += `<td>-</td>`
            }
            
        }
        showMatrix +=`</tr>`;
    }
    showMatrix += "</table>";
    return showMatrix;
}

function isPrime(number){
    for(let i=2; i< number; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true && number >=2;
}

function printMatrixMaxValue(matrix){
    let max = findMaxValueInMatrix(matrix);
    let showMatrix = `<table border='1'>`;
    for(let i=0; i< matrix.length;i++){
        showMatrix += `<tr>`;
        for(let j=0;j< matrix[i].length; j++){
            // if(matrix[i][j] == max){
            //     showMatrix += `<td style="background-color:green">${matrix[i][j]}</td>`
            // }
            // else{
            //     showMatrix += `<td>${matrix[i][j]}</td>`
            // }
            showMatrix += `<td style="${matrix[i][j] == max ? 'background-color:green': ''}">${matrix[i][j]}</td>`
        }
        showMatrix +=`</tr>`;
    }
    showMatrix += "</table>";
    return showMatrix;
}

function countMaxValueInMatrix(matrix){
    let max = findMaxValueInMatrix(matrix);
    let count = 0;
    for(let i=0; i< matrix.length;i++){
        for(let j=0;j< matrix[i].length; j++){
            if(matrix[i][j] == max){
                count ++;
            }
        }
    }
    return count;
}

function process(){
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    let row = Number(document.getElementById("row").value);
    let column = Number(document.getElementById("column").value);

    let matrix = generateMatrix(row, column, min, max);

    document.getElementById("printMatrix").innerHTML = printMatrix(matrix);
    document.getElementById("printPrimeMatrix").innerHTML = printPrimeMatrix(matrix);
    document.getElementById("totalMatrixValues").innerHTML = `Total of values in matrix is: ${totalMatrixValues(matrix)}`;
    document.getElementById("countMaxValueInMatrix").innerHTML = 
            `${findMaxValueInMatrix(matrix)} is max value in matrix and it appear ${countMaxValueInMatrix(matrix)} times <br>`;
    document.getElementById("countMaxValueInMatrix").innerHTML += `${printMatrixMaxValue(matrix)}`;

}

function reset(){
    document.getElementById("min").value = 10;
    document.getElementById("max").value = 50;
    document.getElementById("row").value = 5;
    document.getElementById("column").value = 5;

    document.getElementById("printMatrix").innerHTML = "";
    document.getElementById("printPrimeMatrix").innerHTML = "";
    document.getElementById("totalMatrixValues").innerHTML = "";
    document.getElementById("countMaxValueInMatrix").innerHTML = "";
}

function main(){
    let matrix = generateMatrix(5, 5, 10, 20)
    console.log(matrix);
}

main();