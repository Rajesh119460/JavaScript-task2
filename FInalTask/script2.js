let product="https://fakestoreapi.com/products"

fetch(product)
.then((data1)=>{

    console.log(data1);
    return data1.json()
})

.then((jsdata1)=>{

console.log(jsdata1);

jsdata1.forEach((c) => {

    let link=document.querySelector(".api")
    
   let api1=document.createElement("div")
  api1.className="card"

    api1.innerHTML=`
    <h3>Title:${c.title}</h3>
   
    <p>Description:${c.description.slice(0,50)}</p>
    <p>Price:$${c.price}</p>
    `

     link.append(api1);
})
     


})

