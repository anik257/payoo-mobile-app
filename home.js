const validPin = 1234;


//function get input value 


function getInputValueNumber(id) {

    const inputField = document.getElementById(id);

    const inputFieldValue = inputField.value;

    const inputFieldValueNumber = parseInt(inputFieldValue);



    return inputFieldValueNumber;
}

function getInputValue(id) {

    const inputField = document.getElementById(id);

    const inputFieldValue = inputField.value;

    return inputFieldValue
}


// function to get innertext

function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);

    return elementValueNumber;
}

// function to set innertext



function setInnerText(value) {
    console.log(value)
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value


}




//Add Money

document.getElementById("add-money-btn")
    .addEventListener("click", function (e) {

        e.preventDefault();

        console.log("add money btn clicked");

        const bank = document.getElementById("bank").value;
        const accountNumber = document.getElementById("account-number").value;

        const amount = getInputValueNumber("add-amount")


        const pin = getInputValueNumber("add-pin")

        console.log(bank, accountNumber, amount, pin);

        const availableBalance =
            getInnerText("available-balance");

        console.log(availableBalance);

        if (accountNumber.length < 11) {
            alert("Please provide valid account number")
            return;
        }

        if (pin !== validPin) {
            alert("please valid pin number")
            return;

        }

        const totalNewAvailableBalance = amount + availableBalance;

        setInnerText(totalNewAvailableBalance)
    });




// toggling feature

//add button

document.getElementById("add-button")
    .addEventListener("click", function () {

        const forms = document.getElementsByClassName("form")

        for (const form of forms) {

            form.style.display = "none"
        }
document.getElementById("add-money-parent")
.style.display = "block"

    })

// cash out


document.getElementById("cash-out-button")
    .addEventListener("click", function () {


  const forms = document.getElementsByClassName("form")

        for (const form of forms) {

            form.style.display = "none"
        }
document.getElementById("cash-out-parent")
.style.display = "block"



    })

// transfer money

document.getElementById("transfer-button").addEventListener("click", function () {

      const forms = document.getElementsByClassName("form")

        for (const form of forms) {

            form.style.display = "none"
        }
document.getElementById("transfer-money-parent")
.style.display = "block"


})


// get bonus
document.getElementById("bonus-button").addEventListener
("click",function(){
const forms = document.getElementsByClassName("form")

        for (const form of forms) {

            form.style.display = "none"
        }
document.getElementById("get-bonus-parent")
.style.display = "block"


})



//cashout money feature

document.getElementById("cash-out-btn")
    .addEventListener("click", function (e) {

        e.preventDefault()

        const amount = getInputValueNumber("cash-out-amount")

        const availableBalance = getInnerText("available-balance")

        const totalNewAvailableBalance = availableBalance - amount

        console.log(totalNewAvailableBalance)

        setInnerText(totalNewAvailableBalance)
    })



