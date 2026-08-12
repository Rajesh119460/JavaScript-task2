let card="https://fakestoreapi.com/products"

fetch(card)

.then((details)=>{
console.log(details);
return details.json()

})

.then((jsdetails)=>{

    console.log(jsdetails);

    jsdetails.forEach((c) => {

        let api=document.querySelector(".api")
        let api1=document.createElement("div")
        
        api1.className="card"

        api1.innerHTML=`

        <h2>Product Title:${c.title}</h2>
    <img src = "${c.image}" 
    <p>Discription:${c.description.slice(0,50)}</p>
    <p>Category:${c.category}</p>
    <button>Price:$${c.price}</button>
     <p>Rating:${c.rating.rate}</p>
        `
        api.append(api1)


    });
    
})