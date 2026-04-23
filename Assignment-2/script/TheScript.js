/* Name: Gursimratpreet Kaur
Student ID: 991845418*/
const moreinfo1 = document.getElementById("info1");
const moreinfo2 = document.getElementById("info2");
const moreinfo3 = document.getElementById("info3");
const moreinfo4 = document.getElementById("info4");
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");
const order1 = document.getElementById("od1");
const order2 = document.getElementById("od2");
const order3 = document.getElementById("od3");
const order4 = document.getElementById("od4");
const price1 = document.getElementById("p1");
const price2 = document.getElementById("p2");
const price3 = document.getElementById("p3");
const price4 = document.getElementById("p4");
const totalAmount = document.getElementById("total");

moreinfo1.addEventListener("mouseover",overInfo1);
function overInfo1(){
    moreinfo1.innerHTML = "Top selling laptops and notebooks. Buy the best one for you from our collection."
}
moreinfo1.addEventListener("mouseout" , outInfo1);
function outInfo1(){
    moreinfo1.innerHTML = "More information."
}
moreinfo2.addEventListener("mouseover",overInfo2);
function overInfo2(){
    moreinfo2.innerHTML = "Top selling smartphones for you. Buy the best one for you from our collection."
}
moreinfo2.addEventListener("mouseout" , outInfo2);
function outInfo2(){
    moreinfo2.innerHTML = "More information."
}
moreinfo3.addEventListener("mouseover",overInfo3);
function overInfo3(){
    moreinfo3.innerHTML = "Great options and sales available for ipads. Buy one now!"
}
moreinfo3.addEventListener("mouseout" , outInfo3);
function outInfo3(){
    moreinfo3.innerHTML = "More information."
}
moreinfo4.addEventListener("mouseover",overInfo4);
function overInfo4(){
    moreinfo4.innerHTML = "Top brands of headphones availble. Browse and find the best one for you."
}
moreinfo4.addEventListener("mouseout" , outInfo4);
function outInfo4(){
    moreinfo4.innerHTML = "More information."
}
let cost1 = 0;
let cost2 = 0;
let cost3 = 0;
let cost4 = 0;
let amount = 0;
image1.addEventListener("click" , prompt1);
function prompt1(){
    if (confirm("Do you wish to purchase the product?")){
        let quantity = prompt("Enter the number of items: ", "Number of items");
        if (quantity.length === 0 || quantity === null || quantity === "Number of items"){
            alert("No quantity entered. Order not processed.")
            
        }else{
            
            order1.innerHTML = "Number of orders: " + quantity;
            cost1 = 700 * quantity;
            price1.innerHTML = "Price is: " + cost1;
            amount = cost1 + cost2 + cost3 + cost4;
            totalAmount.innerHTML = "Total Amount is : " + amount;
            window.sessionStorage.setItem("product1" , quantity);
            }
        }
    else{
        alert("Order not processed.");
    }
    
}
image2.addEventListener("click" , prompt2);
function prompt2(){
    if (confirm("Do you wish to purchase the product?")){
        let quantity = prompt("Enter the number of items: ", "Number of items");
        if (quantity.length === 0 || quantity === null || quantity === "Number of items"){
            alert("No quantity entered. Order not processed.")
            
        }else{
            
            order2.innerHTML = "Number of orders: " + quantity;
            cost2 = 500 * quantity;
            price2.innerHTML = "Price is: " + cost2;
            amount = cost1 + cost2 + cost3 + cost4;
            totalAmount.innerHTML = "Total Amount is: " + amount;
            window.sessionStorage.setItem("product2" , quantity);
            }
        }
    else{
        alert("Order not processed.");
    }
}
image3.addEventListener("click" , prompt3);
function prompt3(){
    if (confirm("Do you wish to purchase the product?")){
        let quantity = prompt("Enter the number of items: ", "Number of items");
        if (quantity.length === 0 || quantity === null || quantity === "Number of items"){
            alert("No quantity entered. Order not processed.")
            
        }else{
            
            order3.innerHTML = "Number of orders: " + quantity;
            cost3 = 1300 * quantity;
            price3.innerHTML = "Price is: " + cost3;
            amount = cost1 + cost2 + cost3 + cost4;
            totalAmount.innerHTML = "Total Amount is: " + amount;
            window.sessionStorage.setItem("product3" , quantity);
            }
        }
    else{
        alert("Order not processed.");
    }
}
image4.addEventListener("click" , prompt4);
function prompt4(){
    if (confirm("Do you wish to purchase the product?")){
        let quantity = prompt("Enter the number of items: ", "Number of items");
        if (quantity.length === 0 || quantity === null || quantity === "Number of items"){
            alert("No quantity entered. Order not processed.")
            
        }else{
            
            order4.innerHTML = "Number of orders: " + quantity;
            cost4 = 200 * quantity;
            price4.innerHTML = "Price is: " + cost4;
            amount = cost1 + cost2 + cost3 + cost4;
            totalAmount.innerHTML = "Total Amount is: " + amount; 
            window.sessionStorage.setItem("product4" , quantity);
            }
        }
    else{
        alert("Order not processed.");
    }
}
