let rating="https://fakestoreapi.com/products"

fetch(rating)
.then((rate)=>{
 
     console.log(rate);
     return rate.json()
     
})
.then((jsrate)=>{

    console.log(jsrate);

    jsrate.forEach((c) => {
        
        console.log(c);

        let api=document.querySelector(".api")
        let api1=document.createElement("div")

        api1.innerHTML=`
        <h2>Product Title:${c.title}</h2>
        <p>Rating:${c.rating.rate}</p>
        <p>Reviews:${c.rating.count}</p>
    
        `
        api.append(api1)
    });
})