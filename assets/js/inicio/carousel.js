const controls = document.querySelector("#slides .carousel-controls")

controls.classList.add("d-none")

controls.parentElement.addEventListener("mouseover",() => {
    controls.classList.remove("d-none")
},false)

controls.parentElement.addEventListener("mouseout", () => {
    controls.classList.add("d-none")
},false)