let api="https://fakestoreapi.com/products"
fetch(api)

.then((display)=>{
    console.log(display);
    return display.json()
    
})
.then((displayjs)=>{
    console.log(displayjs);

    displayjs.forEach((c) => {

        console.log(c);

        let api=document.querySelector(".api")
        let api1=document.createElement("div")

        api1.innerHTML=`

    <h2>Title:${c.title.slice(0,30)}</h2>
    <p>Category:${c.category}</p>
    <p>Price:$${c.price}</p>

        `
        api.append(api1)
     
    });
    
})