const grid = document.querySelector("#grid")
const menuButtons = document.querySelectorAll(".menu-button") 
const randomColourButton = document.querySelector(".random-button")
const pixelSlider = document.querySelector(".pixel-slider")
const blackColourButton = document.querySelector(".black-button")
const whiteColourButton = document.querySelector(".white-button")
let savedSliderValue = "50"
let pickRandom = true
let customColour = false
let pickBlack = false
let pickWhite = false

let click = false



grid.addEventListener("mousedown",() => {
    if (click === false){
       click = true
    }else if (click === true){
        click = false
    }
    console.log(click)
    console.log("that was click")
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
            
            pixel.addEventListener("mouseenter", function(e) {
                if (pickRandom === true){
                    //generates random colours
                    const RGBR = Math.floor(Math.random()*256)
                    const RGBG = Math.floor(Math.random()*256)
                    const RGBB = Math.floor(Math.random()*256)
                    //checks if drawing is toggled on 
                    if (click == true){
                        e.target.style.background = `rgb(${RGBR}, ${RGBG}, ${RGBB})`
                    }
                }else if (pickBlack === true){
                    RGBR = 0
                    RGBG = 0
                    RGBB = 0
                    if (click == true){
                        e.target.style.background = `rgb(${RGBR}, ${RGBG}, ${RGBB})`
                    }
                }else if (pickWhite === true){
                    RGBR = 255
                    RGBG = 255
                    RGBB = 255
                    if (click == true){
                        e.target.style.background = `rgb(${RGBR}, ${RGBG}, ${RGBB})`
                    }
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
    let subRandom = document.createElement("button")
    subRandom.textContent = "click for random"
    subRandom.classList.add("sub-random-button")
    // this is gives the argument for wether or not we use a random colour
    subRandom.addEventListener("click", () => {
        if (pickRandom === true){
            pickRandom = false
        }else if (pickRandom === false){
            pickRandom = true
        }
        //this makes sure there are no conflicting arguments
        customColour = false
        pickBlack = false
        pickWhite = false
    })
    randomColourButton.appendChild(subRandom)

})
randomColourButton.addEventListener("mouseleave", () =>{
    let child = randomColourButton.lastElementChild
    randomColourButton.removeChild(child)
})

//this event listener is for weather or no the colour is black
blackColourButton.addEventListener("mouseenter",() => {
    let subBlack = document.createElement("button")
    subBlack.textContent = "click for black"
    subBlack.classList.add("sub-random-button")//!!!!!!!!!!!!!!!!to be changed
    // this is gives the argument for wether or not we use a black
    subBlack.addEventListener("click", () => {
        if (pickBlack === true){
            pickBlack = false
        }else if (pickBlack === false){
            pickBlack = true
        }
        //this makes sure there are no conflicting arguments
        customColour = false
        pickRandom = false
        pickWhite = false
    })
    blackColourButton.appendChild(subBlack)

})
blackColourButton.addEventListener("mouseleave", () =>{
    let child = blackColourButton.lastElementChild
    blackColourButton.removeChild(child)
})

// this is for the rubber whcih is white
whiteColourButton.addEventListener("mouseenter",() => {
    let subWhite = document.createElement("button")
    subWhite.textContent = "rubber"
    subWhite.classList.add("sub-random-button")//!!!!!!!!!!!!!!!!to be changed
    // this is gives the argument for wether or not we use white
    subWhite.addEventListener("click", () => {
        if (pickWhite === true){
            pickWhite = false
        }else if (pickWhite === false){
            pickWhite = true
        }
        //this makes sure there are no conflicting arguments
        customColour = false
        pickRandom = false
        pickBlack = false
    })
    whiteColourButton.appendChild(subWhite)

})
whiteColourButton.addEventListener("mouseleave", () =>{
    let child = whiteColourButton.lastElementChild
    whiteColourButton.removeChild(child)
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

gridElements(50)
