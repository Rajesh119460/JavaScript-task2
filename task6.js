//Employee Management

let employee="Rajesh"

let joiningdate=new Date()

joiningdate.setFullYear(2026)
joiningdate.setMonth(6)
joiningdate.setDate(22)


let year=joiningdate.getFullYear()
let month=joiningdate.getMonth()
let date=joiningdate.getDate()

console.log("Employee Name:",employee);
console.log("Joining Year:",year);
console.log("Joining Month:",month);
console.log("Joining Date:",date);

//Age Calculator

let birthyear=2000
let currentyear=new Date()
let year1 =currentyear.getFullYear()

let age=year1-birthyear

console.log("Age:",age);

//Greeting Based on time

let time=new Date()
let hour=time.getHours()

if(hour<12)
{
    console.log("Good Morning");
    
}
else if(hour<17)
{
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}

//Weekend or Weekday

let day=new Date()
let weekend=day.getDay()

if(weekend==0 || weekend==6)
{
    console.log("Weekend");
    
}
else{
    console.log("Weekday");
    
}

//Employee Attedence Checker

let att=new Date(2026,7,6,9,45)

if(att.getHours()<=9 && att.getMinutes()<=45)
{
    console.log("On time");  
}
else{
    console.log("Late");
    
}

//Movie Ticket Booking 

let movie="Saalar"
let tktprice=200
let tkts=5

let totalprice=tkts*tktprice

let bookingdate=new Date(2026,7,6,7,45)

console.log("Movie Name:",movie);
console.log("Ticket Price:",tktprice);
console.log("Total Tickets:",tkts);
console.log("Total Price:",totalprice);
console.log("Booking Date:",bookingdate);

//Employee Experience Calc

let joindate=new Date(2025,4,22)
let dt=joindate.getFullYear()
let curryr=new Date().getFullYear()


let exp=curryr-dt

console.log("Experince",exp,"Years");


// Salary Day Checker

let sal=new Date().getFullYear()

if(sal.getDate==1)
{
    console.log("Credited");
    
}
else{
    console.log("Not Credited");
    
}


//Birthday Checker 

let bday=new Date(2000,7,27)
let today =new Date()

if(bday.getMonth()==today.getMonth() && bday.getDate()==today.getDate())
{
    console.log("Happy Birthday");
    
}
else{
    console.log("Today is not your birthday ");
    
}


//Hospital Appointment 

let patitentname="Rahul"
let appdate=new Date()

appdate.setFullYear(2026)
appdate.setMonth(7)
appdate.setDate(7)

let year2=appdate.getFullYear()
let month2=appdate.getMonth()
let day2=appdate.getDate()

console.log("Patitent Name:",patitentname);
console.log("Appointment Year:",year2);
console.log("Appointment Month:",month2);
console.log("Appointment date:",day2);



//Exam Timetable

let exam="---Exam Timetable---"

let table=new Date()
table.setFullYear(2026)
table.setMonth(3)
table.setDate(13)
table.setHours(9)
table.setMinutes(15)
table.setSeconds(0)

let examyr=table.getFullYear()
let exammon=table.getMonth()
let examdate=table.getDate()
let examhour=table.getHours()
let exammin=table.getMinutes()
let examsec=table.getSeconds()

console.log(exam);

console.log("Exams Start Year:",examyr);
console.log("Exams Start Month:",exammon);
console.log("Exams Start Day:",examdate);
console.log("Exams Start Hour:",examhour);
console.log("Exams Start Minutes:",exammin);
console.log("Exams Start Seconds:",examsec);


//Gas Connection Payment 

let custname="Rajiv"
let Cusnum=600751
let amnt=980


let conn=new Date()

conn.setFullYear(2026)
conn.setMonth(7)
conn.setDate(6)
conn.setHours(10)
conn.setMinutes(30)
conn.setSeconds(25)

let gasyr=conn.getFullYear()
let gasmon=conn.getMonth()
let gasdate=conn.getDate()
let gashour=conn.getHours()
let gasmin=conn.getMinutes()
let gassec=conn.getSeconds()

console.log("Customer Name:",custname);
console.log("Customer Id:",Cusnum);
console.log("Bill Amount:",amnt);
console.log("Payment Year:",gasyr);
console.log("Payment Month:",gasmon);
console.log("Payment Date:",gasdate);
console.log("Payment Hours:",gashour);
console.log("Payment Minjutes:",gasmin);
console.log("Payment Seconds:",gassec);

console.log("Payment Successfull");






























