const validPin = 1234;
document.getElementById("add-money-btn")
    .addEventListener("click", function (e) {

        e.preventDefault();

        console.log("add money btn clicked");

        const bank = document.getElementById("bank").value;
        const accountNumber = document.getElementById("account-number").value;
        const amount = parseInt(document.getElementById("add-amount").value);
        const pin = parseInt(document.getElementById("add-pin").value)

        console.log(bank, accountNumber, amount, pin);

        const availableBalance =
            parseInt(document.getElementById("available-balance").innerText);

        console.log(availableBalance);

        if (accountNumber.length < 11) {
            alert("Please provide valid account number")
            return;
        }

if (pin !==  validPin){
    alert("please valid pin number")
    return;

}

        const totalNewAvailableBalance = amount + availableBalance;

        document.getElementById("available-balance").innerText =
            totalNewAvailableBalance;
    });