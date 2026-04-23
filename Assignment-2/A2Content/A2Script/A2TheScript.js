/* Name: Gursimratpreet Kaur
Student ID: 991845418*/
document.addEventListener("DOMContentLoaded",display);
const firstForm = document.forms[0];

const firstName = firstForm.firstName;
const lastName = firstForm.lastName;
const addresss = firstForm.addressInfo;
const city = firstForm.cityInfo;
const email = firstForm.emailInfo;
const paymentMethod = firstForm.radMethod;
const shipmentMethod = firstForm.selMethod;
const tDisplay = document.getElementById("txtDisplay");

/*To get values from 1st assignment*/
let prod1 = window.sessionStorage.getItem("product1");
let prod2 = window.sessionStorage.getItem("product2");
let prod3 = window.sessionStorage.getItem("product3");
let prod4 = window.sessionStorage.getItem("product4");
firstName.addEventListener("input" , display);
lastName.addEventListener("input" , display);
addresss.addEventListener("input" , display);
city.addEventListener("input", display);
email.addEventListener("input" , display);

shipmentMethod.addEventListener("click" , display);
for (const r of paymentMethod){
    r.addEventListener("change" , display);
}
function display(){
    if (prod1 === null){
        prod1 = 0;
    }
    if (prod2 === null){
        prod2 = 0;
    }
    if (prod3 === null){
        prod3 = 0;
    }
    if (prod4 === null){
        prod4 = 0;
    }
    tDisplay.innerHTML = "Product 1: " + prod1 +" units" + "<br>"+
    "Product 2: "+ prod2 + " units" + "<br>" +"Product 3: " + prod3 + " units" +"<br>" +
    "Product 4: " + prod4 + " units" +"<br>"+paymentMethod.value + "<br>" + shipmentMethod.value + "<br><br>"+firstName.value  + " " + lastName.value + "<br>"+ 
    address.value + "<br>" + city.value + "<br>"+ email.value;
}
