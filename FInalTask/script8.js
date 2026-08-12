let des="https://fakestoreapi.com/products"
fetch(des)

.then((char)=>{
    console.log(char);
    return char.json()
})
.then((jschar)=>{
    console.log(jschar);

    jschar.forEach((c) => {

        let api=document.querySelector(".api")
        let api1=document.createElement("div")

        api1.innerHTML=`
        <h3>Title:${c.title}</h3>
        <p>Decsription:${c.description.slice(0,20)}</p>
        `
        api.append(api1)
    });
    

})