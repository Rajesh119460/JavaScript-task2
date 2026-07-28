//Student Registartion 

let studname="Rajesh"
let dept="ECE"
let cgpa=8.5

 console.log("Student Name:",studname);
  console.log("Department:",dept);
   console.log("CGPA:",cgpa);

   let Status= cgpa>=8.0?"Eligible":"Not eliglible"; 
   console.log( "Status:",Status);

   //Online Shopping Bill

   let prodprice=2500
   let quantity=3
   let disc

   let totalamt=prodprice*quantity
   if(totalamt>5000)
   {
    disc=10*totalamt/100

   }
   let finalpri=totalamt-disc

   console.log("Total:",totalamt)
      console.log("Discount:",disc);
      console.log("Final Price:",finalpri);

      //Employee Salary

    let basicSalary = 35000;
    let bonus = 5000;
    let tax = 3000;

    let netsal=basicSalary+bonus-tax

      console.log("Basic Salary:",basicSalary);
        console.log("Bonus:",bonus);
          console.log("Tax:",tax);
    console.log("Net Salary:",netsal);

    //Movie Ticket Booking

    let movie = "Saalar";
    let ticketPrice = 180;
    let tickets = 5;

    let tot=ticketPrice*tickets
    console.log("Movie:",movie);
    console.log("Tickets:",tickets);
    console.log("Total:",tot);

    //Login System
let username = "admin";
let password = "12345";

if(username=="admin" && password=="12345" )
{
 console.log("Login Success");
 
}
else{
    console.log("Invalid Username or Password");
    
}
   
let units=250
let bill

if(units<100)
{
 bill=units*5
}
else if(units<200)
{
    bill=units*7

}  
else
    {
        bill=units*10
    }  
    
    console.log("Total Bill:",bill);

    //Restaurant Order

let menu = ["Dosa","Idly","Poori","Meals"];

console.log("First Item:",menu[0]);
console.log("First Item:",menu[(menu.length-1)]);
console.log("Total Items:", menu);

menu.splice(1,1,"Fired Rice")
console.log("Updated Menu:",menu);

// Employee Object
let employee = {
    name:"Rajesh",
    role:"Frontend Developer",
    salary:40000
}

console.log("Employee Name:",employee.name);
console.log("Role:",employee.role);
console.log("Salary:",employee.salary);

//Product Inventory

let products = [
"Mouse",
"Keyboard",
"Monitor",
"CPU",
"Speaker"
];

for(let i=0;i<=products.length-1;i++)
{
    console.log(i+1,products[i]);
    
}
/*let count=1
for(let a of products)
{
  console.log(count ,a);
  count++
}*/

//Function

function calculatearealength(length,width)
{
     let area =length*width
    console.log("Area:",area);
    
}
calculatearealength(10,20)

//Bank Deposit

function bankdeposit(currentBalance,deposit,withdraw)
{
    console.log("Current Balance:",currentBalance);
    console.log("Deposit:",deposit);
    console.log("withdraw:",withdraw);
    let final=currentBalance+deposit-withdraw
    console.log("Final:",final);

}
bankdeposit(5000,2000,1000)

//Callback Function

function addition(a,b)
{
    return a+b
}
function calaculate(call,a,b)
{
    console.log(call(a,b));
    console.log("calculation completed");
     
}
calaculate(addition ,10,20);

//Generator Function

function* coupon()
{
    yield "WELCOME 10"
    yield "SAVE 20"
    yield "Super 30"
    yield "BIG 50"
    yield "MEGA 100"
}
let all=coupon()
console.log(all.next().value);
console.log(all.next().value);
console.log(all.next().value);
console.log(all.next().value);
console.log(all.next().value);

//Currying

function discount(a)
{
    return function(b)
    {
        return function(c)
        {
          return a+b+c;
        }
    }
    discount(10)
}
//console.log(discount(10)(20)(30));

//Spread Operator

let frontend = ["HTML","CSS","JS"];
let backend = ["Node","Express","MongoDB"];

let opt=[...frontend,...backend]
console.log(opt);

//Rest Operator

function sum(...numbers)
{
    let total=0;
    for(i=0;i<numbers.length;i++)
    {
        total=total+numbers[i]
    }
    return total;
}
console.log(sum(10,20,30,40,50));

//Array Desturcturing

let colors = ["Red","Blue","Green","Yellow"];
let [color1,color2,color3,color4]=colors;

console.log(color1);
console.log(color2);
console.log(color3);
console.log(color4);

//Object  Desturcturing

let user = {
name:"Navi",
city:"Salem",
role:"Developer"
}

let {name,city,role}=user
console.log(name);
console.log(city);
console.log(role);

//Shoppin Cart

let cart = ["Mobile","Laptop","Watch"];

cart.push("Speaker")
console.log(cart);

cart.pop()
console.log(cart);

cart.shift()
console.log(cart);

cart.unshift("Mobile")
console.log(cart);

//Product Search 

let products1 = [
"Laptop",
"Mouse",
"Keyboard",
"Monitor",
"Speaker"
];

let newprod=products1.includes("Monitor")
console.log(newprod)
if(true)
{
    console.log("Product Available");
    
}
else{
     console.log("Out of Stock");
}



























    

    
      

   

 