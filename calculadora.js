const valor = (num) => {
    var myNum = document.getElementById(num);
    console.log(myNum);
    var Result = document.getElementById("input");

    if (myNum.textContent == ".") {
        Result.textContent += myNum.textContent;

    }
    else if (Result.textContent == "0") {
        Result.textContent = myNum.textContent;

    }
    else {
        Result.textContent += myNum.textContent;

    }}
const output = (num) => {
    var myNum = document.getElementById(num);
    var Result = document.getElementById("input");
    var numeros=0;
    


    //Para un punto despues de un numero
    if (myNum.textContent == ".") {
        Result.textContent += myNum.textContent;

    }
    else if (Result.textContent == "0") {
        Result.textContent = myNum.textContent;

    }
    else {
        Result.textContent += myNum.textContent;
    }

}

const suma = () => {
    var Result = document.getElementById("input");
    Result.textContent += "+";
}

const igual = ()=> {
8
    console.log(Number(document.getElementById("input").textContent));

        
    

}
