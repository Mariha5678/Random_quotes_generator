let quote = document.getElementById("para_quote");

let author = document.getElementById("author");

let btn = document.getElementById("button");

btn.addEventListener("click", () => {
    let api = fetch("https://random-quotes-freeapi.vercel.app/api/random");

    api.then((Response) => {
        return Response.json()
    }).then((data) => {
        console.log(data);
       quote.innerText = data.quote || "random qoute";
       author.innerText = data.author || "not found";



    }).catch((error)=>{
         error = " not found"
    })
});

