//alert()

let studentname="Rajesh"
let age=25
let dept="ECE"
let cgpa=7.44

console.log("Student Name:", studentname)
console.log("Age:", age)
console.log("Department:", dept)
console.log("CGPA:", cgpa)

// Employee Details

let emp=
{
    empid:101,
    empname:"Rajesh",
    dept:"ECE",
    salary:50000
};

console.log("Employee Name:",emp.empname);
console.log("Salary:",emp.salary);

//Shopping Cart  Requirements

let cart=["Laptop","Mouse","Keyboard","Monitor","Headset"]

console.log("First Product:",cart[0]);
console.log("Last Prodcut:",cart[4]);
console.log("Total products:",cart);

//Student Marks

let english=60
let maths=65
let physics=55
let social=50
let chemistry=70

let total=english+maths+physics+social+chemistry

console.log("Total:",total);

let avg=total/5
console.log("Average:",avg);

//Age Checker

let age2=17
if(age2>=18){
 console.log("Eliglible for vote");
}
else{
    console.log("Not Eliglible");
    
}

//Login System

let username="admin"
let password="12345"

if(username=="admin" && password=="12345")
{
    console.log("Login Succesfull");
    
}
else{
    console.log("Invalid username or password");
    
}

//calculator

let num1=10
let num2=30

let addition=num1+num2
console.log("Addition:",addition);
let sub=num1-num2
console.log("Subtraction:",sub);
let mul=num1*num2
console.log("Multipcation:",mul);
let div=num1/num2
console.log("Divison:",div);
let mod=num1%num2
console.log("Modulus:",mod);

//Electricity Bill

let cusname=prompt("enter name ")
let unit=prompt("enter units")
let bill
if(unit<=100)
{
    bill=unit*2
    
}
else if(unit<=200)
{
   bill= unit*4

}
else if(unit>200){
   bill= unit*6
}

console.log("Customer Name:",cusname);
console.log("Units:",unit);
console.log("Bill Amount:", bill);

//Employee Salary

let basicsalary=50000
let bonus=5000

let gross = basicsalary+bonus
console.log("Gross Salary:",gross);

//Movie Ticket Price
let tktprice=200
let numoftkts=3

let total1=tktprice*3

console.log("Total Amount:",total1);

//product discount

let prodname="mobile"
let price=2000
let discount

console.log("Original Price:",price);
if(price>5000)
{
   discount=20*price/100
   console.log("Discount:",discount);
   let finalprice=price-discount
   console.log("Final Price:",finalprice);
  
}
else{
    discount=10*price/100
   console.log("Discount:",discount);
   let finalprice=price-discount
   console.log("Final Price:",finalprice);
}

//Function Practice

function studentdetails(name ,department,CGPA)
{
    console.log(name);
     console.log(department);
      console.log(CGPA);
    
}
studentdetails("Rajesh","ECE",7.5)

//Bank Balance

let accuntholder=prompt("enter account holder name")
let currentblnce=prompt("enter current balance")
let withdraw=prompt("enter withdraw amount")

let remblnce=currentblnce-withdraw
console.log("Remaining Balance:",remblnce);

// Mobile Recharge

let mobilenum=prompt("enter mobile num")
let rech=prompt("enter Recharge Amount")

console.log("Mobile Number:",mobilenum);
console.log("Recharge Amount:",rech);
console.log("Recharge Succesfull");

//Restuarent Bill

/*let food="Biryani"
let quan="Full"
let price1=300
let total2=quan*price1

console.log("Food Name:",food);
console.log("Quantity:",quan);
console.log("Total Bill:",price1);*/

function restuarent(food,quantity,price)
{
    let totalbill=quantity*price
    console.log("Total Bill:",totalbill)
   console.log("Food Name:",food);
   console.log("Qunatity:",quantity);
    console.log("Price:",price);
    
}
restuarent("Biryani",2,300)


//Employee Management System Mini Project

let employeeinfo=
{
    name:"Rajesh",
    id:101,
    role:"Fullstack Developer",
    experience:2,
    salary:50000,
     skills: ["JavaScript", "Python", "HTML", "CSS"]
};

let bonussal=0;
console.log("----Employee Details----");

function displaydetails()
{
    console.log("Employee Name:",employeeinfo.name);
     console.log("ID:",employeeinfo.id);
      console.log("Role:",employeeinfo.role);
       console.log("Experience:",employeeinfo.experience);
        console.log("Salary:",employeeinfo.salary);
         console.log("Skills:",employeeinfo.skills);
        
 
}
displaydetails(employeeinfo);

function salarycalculate(){
    if(employeeinfo.salary>=50000)
    {
         bonussal=5000
    }
    else
    {
        bonussal=4000
    }
    
    let totalsal=employeeinfo.salary+bonussal
    console.log("Total Salary:",totalsal)
}

salarycalculate(employeeinfo)

function employeeexp()
{
    if(employeeinfo.experience>=3 && employeeinfo.salary>=50000)
    {
        console.log("Associate Software Engineer")
    }
    else if(employeeinfo.experience<3 && employeeinfo.salary>=40000)
    {
         console.log("Software Engineer")
    }
    else
    {
         console.log("Fresher")
    }
    
}
employeeexp(employeeinfo)























    









