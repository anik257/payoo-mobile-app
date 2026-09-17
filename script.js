document.getElementById("loginButton")
    .addEventListener("click", function (e) {
        e.preventDefault()

        const mobileNumber = 01761890561
        const pinNumber = 1234
        const mobileNumberValue = document.getElementById("mobile-number").value
        const mobileNumberValueConverted = parseInt(mobileNumberValue)

        const pinNumbervalue = document.getElementById("pin-number").value
        const pinNumbervalueConverted = parseInt(pinNumbervalue)

        console.log(mobileNumberValueConverted, pinNumbervalueConverted)

        if (mobileNumberValueConverted === mobileNumber
            && pinNumbervalueConverted === pinNumber) {


            //console.log("All value matched")


            window.location.href = "./home.html"
        }

        else {

            alert("Invalid Credentials")
        }


    }) 