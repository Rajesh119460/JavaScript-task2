//Student Registration

let studentdetails=
{
    studentname:"Rajesh",
    studentage:26,
    studentdept:"ECE",
    coursefee:100000
};

console.log("Student Name:",studentdetails.studentname);
if(studentdetails.studentage>=18)
{
    console.log("Student Age:", "Eliglible");
}
else
{
   console.log("Student Age:", "Not Eliglible");
}
console.log("Student Department:",studentdetails.studentdept);
console.log("Student Coursefee:",studentdetails.coursefee);

//Employee Salary Calculator

function salcal( basicsal,bonus,deduction)
{
  let totalsal=basicsal+bonus-deduction

  console.log("Total Salary:",totalsal);
  
}
salcal(50000,5000,2500)

//Shopping Cart

let cart=["Laptop","Mouse","Keyboard","Headphone"]

cart.unshift("Monitor")
console.log(cart);
cart.pop()
console.log(cart);
console.log("Total Products:",cart.length);

cart.forEach((c,i,t)=>{
    console.log(c);
    
})
console.log("First Product:",cart[0]);
console.log("Last Product:",cart[cart.length-1]);

//Login Validation

let username="admin"
password="12345"
if(username=="admin" && password=="12345")
{
    console.log("Login Success");
    
}
else{
    console.log("Invalid Username or Password");
    
}

//Movie Booking
let age1=18

 let result=age1>=18?"Eliglible":"Not Eliglible";
 console.log(result);

 //Employee Search

let employee=
 [
{name:"Arun",salary:25000},
{name:"Kavin",salary:40000},
{name:"Ravi",salary:55000}
]

let search =employee.find((c,i,t)=>{

    return  c.name="kavin"
})
console.log(search);

let products=[
    {name:"Mouse",price:300},
    {name:"Keyboard",price:800},
    {name:"Headphones",price:450}
]


let filter=products.filter((c,i,t)=>{
    return c.price<=500
})


console.log(filter);


//Student Marks 

let marks=[
    45,56,67,89
]

marks.map((c,i,t)=>{

    console.log("New Marks:",c+5);
    
})

//Attendance checker 

let attmarks=[90,85,70,65]

let score=attmarks.every((c,i,t)=>{
    return c>50
})
console.log(score);

//OTP Generator

let otp=Math.floor(100000+Math.random()*900000);
console.log("OTP:",otp);

//Password Strength Checker 

let input="Abc@1234"

let minchar=input.length>=8
let num=/[0-9]/.test(input)
let uppercase=/[A-Z]/.test(input)
let splchar=/[!@#$%^&*]/.test(input)
if(minchar && num && uppercase && splchar)
{
    console.log("Strong Password");
    
}
else{
     console.log("Weak Password");
}

//Product Search
let prod=["Laptop","Mobile","Watch","Camera"]

if(prod.includes("Mobile"))
{
console.log("Return Available");
}
else 
{
    console.log("Return Not  Available");
}

//Current Digital Clock 

/*setInterval(()=>{

let data = new Date()
console.log(data());

},1000)*/

//Countdown Timer

let count=10
let interval =setInterval(()=>{

    console.log(count);
    count--
    if(count<0)
    {
       clearInterval(interval)
    }
    
},1000)



// Fake API Product Viewer

let api="https://fakestoreapi.com/products"
fetch(api)

.then((data)=>{

  console.log(data);
  
    return data.json()
})

.then((view)=>{
console.log(view);
view.forEach((c,i,t)=>{

    console.log("Product Name:",c.title);
     console.log("Price:",c.price);
       console.log("Price:",c.image);
})

})

// Employee Dashboard 
 
let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 },
    { name: "Priya", salary: 30000 }
];

let emp=employees.reduce((totalsal,c,i,t) =>{

    return totalsal+c.salary

   
},0)

console.log("Total Salary:",emp);

let avgsal=emp/employees.length
console.log("Average Salary:",avgsal);

let highestsal=employees.reduce((highest,c)=>{


    if(c.salary>highest)
    {
        return c.salary
    }
    else
    {
        return highest
    }    
},0);

console.log("Highest Salary:",highestsal);

//Online Food Order

let menu = ["Pizza", "Burger", "Shawarma", "Fries"];

menu.push("Sandwich")
console.log(menu);
menu.pop()
let bill=100+300+200+100
console.log(menu);

console.log("Total Items:",menu.length);
console.log("Total Bill:",bill);

//Bank Account

let account={
    accholder:"Rajesh",
    bal:30000,


deposit(amount)
{
    this.bal=this.bal+amount
    console.log("Deposited Amount:",amount);
    
},
withdraw(amount)
{
    this.bal=this.bal-amount
    console.log("Withdraw Amount:",amount);
    
},
checkBalance()
{
    console.log("Balance:",this.bal);
    
}
};
account.deposit(5000)
account.withdraw(3000)
account.checkBalance()

//To-Do-List

let list=[]

function addtask(task)
{
    list.push(task)
     console.log("Task Added:",task)
}
function deletetask(){
    let deleted =list.pop()
    console.log("Deleted Task:",deleted);
    
}
function showtask()
{
    console.log("Show Task:",list);
    
}

addtask("Learn JS")
addtask("Practice Array")
addtask("Complete Task")
showtask()
deletetask()
showtask()

//Mini E-Commerce Product Management 

let obj=[
    {
        name:"Laptop",price:50000,category:"Electronics",stock:5
    },
    {
         name:"Phone",price:20000,category:"Electronics",stock:10
    }

];
obj.push({
    name:"Shirt",price:2000,category:"Clothing",stock:20
});
console.log("Add Product:",obj);

let sea=obj.find((c,i,t)=>{

    return  c.name=="Shirt"
})

console.log("Search Product:",sea);

let fil=obj.filter((c,i,t)=>{

    return c.category=="Electronics"
})

console.log("Filter by category:",fil);

let sto=obj.reduce((total,c)=>{
    return total+c.stock
},0)

console.log("Total Stock:",sto);

let inv=obj.reduce((inv,c)=>{

    return inv+c.stock*c.price

},0)
  console.log("Total Inventory Value:",inv);






























