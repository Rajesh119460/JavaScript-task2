fetch("https://fakestoreapi.com/products")
.then((bonus)=>{
    return bonus.json()
})
.then((jsbonus)=>{
    console.log(jsbonus);

    jsbonus.forEach((c) => {
        console.log(c);

        let task=document.querySelector(".api")
        let task1=document.createElement("div")

        task1.className="card"

        task1.innerHTML=`
    <h3>Title:${c.title}</h3>
     <img src = "${c.image}" 
    <p>Category:${c.category}</p>
     <p>Description:${c.description}</p>
    <button>Price:$${c.price}</button>
     <p>Rating:${c.rating.rate}</p>
      <p>Reviews:${c.rating.count}</p>
       
        `
        task.append(task1)
        
        
    });
    

})