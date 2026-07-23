alert()
let name = "Rajesh"
let employeeid = 'EMP1001'
let department = "frontend"
const salary = 25000
const ispermanent = true

console.log("Name:",name);
console.log("Employee ID:", employeeid)
console.log("Department:",department)
console.log("Salary:",salary)
console.log("Permanent:",ispermanent)

//Student Details

let student = {
    name:"Rajesh",
    Age: 25,
    course:"ECE",
    college:"ABC ",
    passed:true
};


console.log("Student Name:", student.name)
console.log("Course:",student.course)
console.log("Passed Status:",student.passed)

//Shopping Cart

let cart=["Milk","Rice","Oil","Sugar","Soap"]

console.log(cart[0])
console.log(cart[2])
console.log(cart[4])
console.log(cart)

// Company Employee Database

let employee={
    name:"Rajesh",
    designation:"Frontend ",
    salary:25000,
    skills:["HTML","CSS","JS"]
};

console.log("Employee Name:",employee.name)
console.log("Designation:",employee.designation)
console.log("Second Skill:",employee.skills[1])

//Salary Calculation

const basicsalary= 25000
let bonus=5000

const excpeted=basicsalary+bonus

console.log("Excepted:",excpeted)

//GST calculator

let productprice=4500
let gst= 4500/18

let totalamount=productprice+gst

console.log("GST Amount:",gst)
console.log("Total Amount:",totalamount)

//Even or Odd


25?console.log("odd number"):console.log("even number")

//Login System

let username = "admin";
let password = "12345";
if( username=="admin" && password =="123456")
{
console.log("Login Succesful");
}
else{
    console.log("Invalid Credentials");
}

//Voting Eligliblity

let age=17

age>=18?console.log("Eliglible for Vote"):console.log("Not Eliglible")

//EMI Eligliblity

const sal = 40000
let experience = 3

if(sal>30000 && experience>=2)
{
    console.log("Eligible");

}
else{
    console.log("Not Eligible")
}

//Product Discount

let price=5000
let discount=5000/10

console.log("Discount Amount:",discount)

let finalprice = price+discount
console.log("Final Amount:",finalprice)

//User Registration

let nam = "Rajesh"
let email = "rajesh@"
const phone = 123456789
let city = "hyd"

console.log("----User Details---")
console.log("Name:",nam)
console.log("Email:",email)
console.log("Phone:",phone)
console.log("City:",city)

//Social Media Profile

let social ={
    username:"Rajesh",
    Followers:["raj", "gani","ram"],
    following:["raj", "gani"],
    posts:['1','2','3'],
    Verified:true
};

console.log("UserName:",social.username)
console.log("Follwers:",social.Followers)
console.log("Verified Status:",social.Verified)

//Restuarent Menu

let menu = ["Idly","Dosa","Poori","Meals","Parotta"]

console.log(menu[1])
console.log(menu[3])
console.log(menu[4])

//Banking System
let account=25000
let withdraw=8000
let rem=account-withdraw

console.log("Final Amount:",rem)

// Mobile Store

let mobileprice = 25000
let exchange = 5000
let coupon = 2000

let finalamount = mobileprice-exchange-coupon
console.log("Final Amount:",finalamount)

//Emplyoee Promotion

let exp = 4
let perf=true

if(exp>=5 && perf==true)
{
    console.log("Promotion is Approved")
}
else{
    console.log("Promotion Pending")
}

//Movie Ticket

let tktprice=180
let people=5
let totalamt=180/5

console.log("Total Amount:",totalamt)

//weather app
let temp=38
temp>=38?console.log("Hot Day"):console.log("Normal Weather")

//Mini HR Managment 

let emp ={
    empCode:"EMP1002",
    name:"Rajesh",
    department:"Frontend",
    designation:"Software Engineer",
    salary:28000,
    skills:["HTML","CSS","J.S","React"],
    permanent:true
};

console.log("Employee Code:",emp.empCode)
console.log("Employee Name:",emp.name)
console.log("Department:",emp.department)
console.log("Salary:",emp.salary)
console.log("Last Skill:",emp.skills[3])
console.log("Permanent Status:" ,emp.permanent)
console.clear();
    



    














