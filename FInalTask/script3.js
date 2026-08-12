let list="https://fakestoreapi.com/products"

fetch(list)
.then((data2)=>{
    console.log(data2);
return data2.json()

})
.then((jsdata2)=>{

    console.log(jsdata2);

    jsdata2.forEach((c) => {
        
        let api=document.querySelector(".api")
        let api2=document.createElement("div")
        api2.className="list"

        api2.innerHTML=`
    <h3>Product:${c.title.slice(0,30)}</h3>
    <p>Price:$${c.price}</p>
     <p>Category:${c.category}</p>
        <img src = "${c.image}" width="150">
         
    `
    api.append(api2)



    });
    
})