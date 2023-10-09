// Seleção de elementos

const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator!");
const multiplicationTable = document.querySelector("#multiplication-operation");

// Funções

const createTable = (number, multiplicatorNumber) => {

    multiplicationTable.innerHTML = "";

    for(i=1; i <= multiplicatorNumber; i++) {

        const result = number * i

        const template = `<div class="row"><div class="operation">${number} x ${i} = </div>
                    <div class="result">${result}</div>
                    </div>`;
    }

}

//Eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.ariaValueNow;
    const multiplicatorNumber = +multiplicatorInput.ariaValueNow;

    if(!multiplicationNumber || !multiplicatorNumber) return;




})