let card="https://fakestoreapi.com/products"

fetch(card)
.then((prod)=>{
    console.log(prod);
    return prod.json()
})
.then((jsprod)=>{
    console.log(jsprod);

    jsprod.forEach((c) => {

        let task=document.querySelector(".api")
        let task1=document.createElement("div")
        task1.className="card"

        task1.innerHTML=`
    <img src = "${c.image}" 
    <h1>Title:${c.title}</h1>
    <p>Category:${c.category}</p>
     <p>Description:${c.description}</p>
    <button>Price:$${c.price}</button>
     <p>Rating:${c.rating.rate}</p>
      <p>Reviews:${c.rating.count}</p>
        <button>BUY NOW</button>
        `
        task.append(task1)
    });
    

})