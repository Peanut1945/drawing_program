const grid = document.querySelector("#grid")
const menuButtons = document.querySelectorAll(".menu-button") 
const randomColourButton = document.querySelector(".random-button")
const pixelSlider = document.querySelector(".pixel-slider")
let savedSliderValue = "50"

let click = false


grid.addEventListener("mousedown",() => {
    if (click === false){
       click = true
    }else if (click === true){
        click = false
    }
})


//this function creates the pixels and gives them there propities
function gridElements (PixelAmount){
    for (let i = 0; i <  PixelAmount; i++){
        for (let j = 0; j < PixelAmount; j++){
            let pixel = document.createElement("div")
            // gives the cell perameters
            pixel.classList.add("cell")
            pixel.style.height =  `${500/PixelAmount}px`
            pixel.style.width =  `${500/PixelAmount}px`
            pixel.addEventListener("mouseout", function(e) {
                //generates random colours
                const RGBR = Math.floor(Math.random()*256)
                const RGBG = Math.floor(Math.random()*256)
                const RGBB = Math.floor(Math.random()*256)
                //checks if drawing is toggled on 
                if (click == true){
                    e.target.style.background = `rgb(${RGBR}, ${RGBG}, ${RGBB})`
                }
            })
            pixel.addEventListener("mouseenter", function(e) {
                const RGBR = Math.floor(Math.random()*256)
                const RGBG = Math.floor(Math.random()*256)
                const RGBB = Math.floor(Math.random()*256)
                if (click == true){
                    e.target.style.background = `rgb(${RGBR}, ${RGBG}, ${RGBB})`
                }
            })
            
            grid.appendChild(pixel)
        }
    }
}

//adding menu button event listeners
menuButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("outer-button-hover")
    })
})
menuButtons.forEach(button => {
    button.addEventListener("mouseleave", () => {
        button.classList.remove("outer-button-hover")
    })
})
//here i am adding specific event listeners
//this first one is for the random colour button
randomColourButton.addEventListener("mouseenter",() => {
    let subRandom = document.createElement("div")
    subRandom.textContent = "click for random"
    subRandom.classList.add("sub-random-button")
    randomColourButton.appendChild(subRandom)

})
randomColourButton.addEventListener("mouseleave", () =>{
    let child = randomColourButton.lastElementChild
    randomColourButton.removeChild(child)
})
//this next one is for the pixel slider
pixelSlider.addEventListener("mouseenter",() =>{
    let slider = document.createElement("input")
    slider.type = "range"
    slider.min = "1"
    slider.max = "100"
    slider.value = savedSliderValue
    //this prints out the grid size
    let sizeDispalay = document.createElement("div")
    sizeDispalay.textContent = `${slider.value} x ${slider.value}` 

    slider.classList.add("slider")
    //this part re-makes the grid
    slider.addEventListener("mouseup", () => {
        console.log(slider.value)
        savedSliderValue = slider.value
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        gridElements(slider.value)
        //this prints out what the grid size is
        sizeDispalay.textContent = `${slider.value} x ${slider.value}` 
        pixelSlider.append(sizeDispalay)
    })
    pixelSlider.appendChild(slider)
    pixelSlider.append(sizeDispalay)
})
pixelSlider.addEventListener("mouseleave", () =>{
    for (let i = 0; i<2; i++){
        let child = pixelSlider.lastElementChild
        pixelSlider.removeChild(child)
    }
    
})




//gridElements(25)


