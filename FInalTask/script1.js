let apilink="https://fakestoreapi.com/products"

fetch(apilink)

.then((data)=>{

console.log(data);

return data.json()
})
.then((jsdata)=>{

  console.log(jsdata);
  jsdata.forEach((c) => {

    let api=document.querySelector(".api")
  let api1=document.createElement("div")
  api1.className="card"

    api1.innerHTML=`
    <h2>Title:${c.title}</h2>
    <img src = "${c.image}" 
    <p>Category:${c.category}</p>
    <button>Price:$${c.price}</button>
     <p>Rating:${c.rating.rate}</p>`
     ;

       api.append(api1);

  });
  
  });
    

 



