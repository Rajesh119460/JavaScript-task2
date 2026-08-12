let button="https://fakestoreapi.com/products"
fetch(button)
.then((content)=>{
    console.log(content);
    return content.json()
})
.then((jscontent)=>{
    console.log(jscontent);
    
    jscontent.forEach((c) => {

        let api=document.querySelector(".api")
        let api1=document.createElement("div")

        api1.className="card"

        api1.innerHTML=`

    <h2>Title:${c.title}</h2>
    <img src = "${c.image}" 
    <p>Category:${c.category}</p>
    <button>Buy for $${c.price}</button>
     <p>Rating:${c.rating.rate}</p>
        `
        api.append(api1)
    });

})