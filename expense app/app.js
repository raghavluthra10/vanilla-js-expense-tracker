// get all the refernces here

const inputText = document.querySelector("#inputText");

const inputNumber = document.querySelector("#inputNumber")

const addBtn = document.querySelector("#button")

const displayExp = document.querySelector("#displayExp")

const containerId = document.querySelector("#containerId")

const expHolderId = document.querySelector("#expHolderId");

const btnDlt = document.querySelector("#btnDlt")


// array that would contain all the expenses
const allXpensArr = [];

// add and event listener which would read input text and number and display on displayExp
let totalExp = 0;

addBtn.addEventListener("click", readExp);


function readExp () {
    const currentVal = {};

    // read value from inputText
    const readText = inputText.value;

    // read value from inputNumber
    const readNum = inputNumber.value;

    //convert readNum from string into number using parseInt
    const intXp = parseInt(readNum)

// display both desc and amt values in expHolderId
if(readText === '' || intXp ==='') {
    alert('Please fill in the boxes!')

    // not push it into allExpensArr
        
    } else {
        //push both values into the currentVal obj
        currentVal.desc = readText;
        currentVal.amt = intXp;
    
        let date = new Date();
        currentVal.id = date.valueOf();
    
        let dateValue = currentVal.id;
    
        // push currentVal obj into allXpensArr
        allXpensArr.push(currentVal)
    
        displayTotal(intXp);
    
        display()
        console.log(allXpensArr)

    }

}

// make a delete button
function dltExp(dateValue, amount) {

const newExpArr = [];

for(let i = 0; i < allXpensArr.length; i++){
    if(allXpensArr[i].id.valueOf() === dateValue) {
        //pushes clicked item into newExpArr
        newExpArr.push(allXpensArr[i]);

        // removed the clicked item from allXpenseArr (using splice)
        allXpensArr.splice(i, 1)

        }
    }

// make it loop over newExpArr
let allXpensArrHtml = allXpensArr.map(currentVal => createExp(currentVal));
let join = allXpensArrHtml.join('');
expHolderId.innerHTML = join;

// sub deleted xpense value from total
displayTotalNew(amount);



}

function displayTotalNew(intXp) {
    // display currentExp on displayExp
    totalExp = totalExp - intXp;
    console.log(totalExp);
    updateBalance(totalExp);
    let html = `Total : ${totalExp}`;
    displayExp.innerHTML = html;
}

// function for displaying total expenses
function displayTotal(intXp) {
    // display currentExp on displayExp
    totalExp = totalExp + intXp;
    console.log(totalExp);
    updateBalance(totalExp);
}

// string of displayTotal
function updateBalance(totalExp) {
    let html = `Total : ${totalExp}`;
    displayExp.innerHTML = html;
    console.log(totalExp)
}


function display(){

    let allXpensArrHtml = allXpensArr.map(currentVal => createExp(currentVal));
    let join = allXpensArrHtml.join('');
    expHolderId.innerHTML = join;
}

function createExp({desc, amt, id}) {
    return `
    <div class="containerCl p-3 mb-2 bg-light text-dark" id="containerId">
    <h2 class="inline expPosition"> ${desc} </h2>
    <h2 class="amountCl inline amtPosition" id="amountId"> ${amt} </h2>
    <button class="dltPosition inline" id="btnDlt" onclick="dltExp(${id}, ${amt})">  <i class="material-icons text-dark">delete</i> </button>
    </div>
    `}







