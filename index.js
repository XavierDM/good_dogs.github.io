let container = document.querySelector('container')
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
        alert("We're sorry, this a cat free zone! Here's a random good dog to show you the light!")
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(result => {
                console.log(result)
                image.src = result.message
            })
            .catch(err => console.log(err))
    } else if (insertionVL === "chihuahua") {
        alert("You will be shown a mutated rat. Viewer discretion is advised")
        fetch(`https://dog.ceo/api/breed/${insertionVL}/images/random/`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                image.src = result.message
            })
            .catch(err => console.log(err))
    } else {
        fetch(`https://dog.ceo/api/breed/${insertionVL} / images / random / `)
            .then(res => res.json())
            .then(result => {
                if (result.status === "error") {
                    alert(`Sorry, ${insertionVL}  isn't a dog breed`)
                } else {
                    console.log(result)
                    alert(`Aren't ${insertionVL} the best?`)
                    image.src = result.message
                }

            })

    }
})