alert()

//Employee Login System
let username="admin"
let password="12345"

if(username==prompt("enter username") && password==prompt("enter password"))
{
console.log("Login Succesfull");

}
else{
    console.log("Invalid Username or Password")
}

//E-Commerce Discount Scenario

let amount= 4999

if(amount>=5000)
{
    console.log("20% Discount is applied")
    let discount = amount/20;
    let finalamount=amount+discount
    console.log("Final Amount:",finalamount)
}
else{
    console.log("Discount not applied")
}

//ATM withdraw

let balance=10000
let withdraw=4000
if(withdraw<=balance)
{
    balance -= withdraw
    console.log("Transaction Sucess")
    console.log("Balance:",balance)
}
else{
    console.log("Insufficient Balance")
}

//Student Grade System

let mark=prompt("enter marks")

if(mark>=90)
{
    console.log("Grade A")
}
else if(mark>=80)
    {
          console.log("Grade B")
    }
    else if(mark>=60)
    {
          console.log("Grade c")
    }
    else 
    {
          console.log("Fail")
    }

    //Traffic Signal

    let signal="blue"
    
    switch(signal)
    {
        case "red":
        console.log("Stop")
        break;
        case "yellow":
        console.log("Ready")
        break;
        case "green":
        console.log("Go")
        break;

        default:
            console.log("Invalid")
            break;

    }

    //Online Shopping Delivery Charge

    let order =1000

    if(order>=1000)
    {
        console.log("Free Delivery")
    }
    else 
    {
        let delivery=80
        let total = order+delivery

        console.log("Order Amount:",order)
        console.log("Delivery:",delivery)
        console.log("Total:",total)

    }

    //User age verfication
let age=18
if(prompt("enter age")>=18)
{
    console.log("Eligible")
}
else 
{
     console.log("Not Eligible")
}
//Find Largest Number

let a=10
let b=20
let c=30

if(a>b && a>c)
{
    console.log(a)
}
else if(b>a && b>c)
{
    console.log(b)
}
else if(c>a && c>b)
{
       console.log(c)
}

//Mobile Password
let pin="1234"

if(pin.length==4)
{
    console.log("Valid Pin")
}
else{
 console.log("Invalid Pin")
}


// product stock 
let stock =0
if(stock==0)
{
    console.log("Out of Stock")
}
else 
{
    console.log("Stock is Available")
}
//Employee Salary Bonus

let salary = prompt("enter salary")

if(salary>=50000)
{
    let bonus =10000
    console.log("Bonus:",bonus)
}
else if(salary>=30000)
{
    let bonus=5000
     console.log("Bonus:",bonus)

}
else 
{
     let bonus=2000
     console.log("Bonus:",bonus)
}

//Electriccity Bill

let units=150
let bill;

if(units<=100)
{
    bill=units*2
}
if(units<=200)
{
    bill=units*4
}
if(units>200)
{
    bill=units*6
}

console.log("Total Bill:",bill)

//Movie ticket booking
let age1=5
if(age1<5)
{
    console.log("free")
}
else if(age1<=18)
{
     console.log("100rs")
}
else if(age1>18)
{
     console.log("200rs")
}

//hospital token system

let hos="normal"

switch(hos)
{
    case "emergency":
        console.log("Token1")
    break;
    case "senior citizen":
        console.log("Priority")
        break;
        case "normal":
            console.log("Regular Queue")
            break;

            default:
                console.log("invalid")
                break;

}

let status="leave"

switch(status)
{
    case "present":
        console.log("Working")
        break;
        case "leave":
            console.log("Leave Approved")
            break;
            case "absent":
                console.log("salary deduction")
                break;
                default:
                    console.log("Invalid")
                    break;
}
//grocery  cart total

let rice=500;
let sugar=300;
let oil=250;

let total=rice+sugar+oil
console.log("Total:",total)

if(total>1000)
{
    let discount =total/10
    console.log("Discount:",discount)
}

//Array Task

let products=["laptop","Mouse","Keyboard","Monitor"]

for(let i=0;i<=3;i++)
{
    console.log(products[i])
}

//employee database

let employee1=
{
    name:"Rajesh",
    role:"Developer",
    salary:50000
};

for(let a in employee1)
{
    console.log(employee1[a])
}

//Type Casting
let num=100
console.log("Number",(num))

console.log("Boolean",Boolean(num))

console.log("String",String(num))

//Banking menu
let menu= "deposit"
switch(menu)
{
    case "deposit":
        console.log("deposit")
        break;
        case "withdraw":
            console.log("withdraw")
            break;
            case "balance":
                console.log("balance")
                break;
                case "exit":
                    console.log("exit")
                    break;
                    
                    default:
                        console.log("invalid")
                        break;
}

//Employee management system

let system=6;
let employee2=
{
    name:"Rajesh",
    id:101,
    salary:50000,
    attedence:50
};
switch(system)
{
    case 1:
        console.log("Employee Added")
        break; 
    case 2:
        console.log("Employee Details")
       for(a in employee2)
       {
        console.log(employee2[a])

       }
        break;
        case 3:
            if(employee2.salary>=50000){
               let bonus = employee2.salary1*0.10
             console.log("Bonus:",bonus)
            }
            else if(salary<50000)
            {
                let bonus =employee2.salary*0.05
             console.log("Bonus:",bonus)
            }
            break;
            case 4:
                if(employee2.attedence>=50)
                {
                    console.log("Attendence is Good")
                }
                else 
                {
                    console.log("Attendence is Average") 
                }
                break;
                case 5:
                console.log("Salary:",employee2.salary)
                break;
                case 6:
                    console.log("Exit")
                    break;

                    default:
                        console.log("Invalid Choice")
                        break;


}