/* let btn = document.getElementById('searchBtn') */
//let image = document.getElementById('image')
/* let breed = inputVal.value */
/* let knop = document.getElementById('subtmit'); */
//var insertion = document.querySelector("inputVal");
/* let breed = document.querySelector("inputVal") */
/* var breed = insertion.value */
/* var breed = document.querySelector('inputVal').value */
/* console.log(insertion) */


/* btn.addEventListener('click', () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
    .catch(err=>console.log(err))
    console.log(insertion)
}) */

/* knop.addEventlistener('click', (event)=>{
fetch(`https://dog.ceo/api/${breed}/hound/images`)
    .then(response => response.json())
    .then((data) => {
        img.src = event.image
        console.log(data);
    })
    .catch(err=>console.log(err))
}); */
/* const form = document.querySelector("#form")
form.addEventListener('submit', (e) => {
    
    var input = document.querySelector("#inputVal")
    document.write(input.value)
    console.log(input.value)
    e.preventDefault
}) */

let container = document.querySelector('container')
console.log(container)
let btn = document.getElementById('searchBtn')
btn.addEventListener('click', () => {
    var insertion = document.querySelector("#inputVal")
    var insertionV = insertion.value
    var insertionVL = insertionV.toLowerCase()
    console.log(insertion.value)
    if (insertionVL == "") {
        alert("You forgot to enter a dog breed, here's a random dog image.")
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                image.src = result.message
            })
            .catch(err => console.log(err))
    } else if (insertionVL === "cat" || insertionVL === "cats") {
        alert("We're sorry this a cat free zone, here's a random dog image!")
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                image.src = result.message
            })
            .catch(err => console.log(err))
    } else if (insertionVL === "chihuahua") {
        alert("You will be shown a mutated rat. Viewer discretion is advised")
        fetch(`https://dog.ceo/api/breed/${insertionVL}/images/random`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                image.src = result.message
            })
            .catch(err => console.log(err))
    }
    else {
        alert(`Aren't ${insertionVL} the best?`)
        fetch(`https://dog.ceo/api/breed/${insertionVL}/images/random`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                image.src = result.message
            })
            .catch(err => console.log(err))
    }
})


/* form.addEventListener('submit', () => {
    var insertion = document.querySelector("#inputVal")
    var insertionV = insertion.value
    var insertionVL = insertionV.toLowerCase()
    console.log(insertion.value)
    fetch(`https://dog.ceo/api/breed/${insertionVL}/images/random`)
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src = result.message
        })
        .catch(err => console.log(err))
}) */