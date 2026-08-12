let api="https://fakestoreapi.com/products"
fetch(api)

.then((data3)=>{

console.log(data3);

return data3.json()

})

.then((jsdata)=>{


    console.log(jsdata);

    jsdata.forEach((c) => {
        console.log(c);

        let image=document.querySelector(".api")
        let image1=document.createElement("img")

        image1.src=c.image 
        image1.width=150
      image.append(image1)


    });
    
})