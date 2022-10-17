const grid = document.querySelector("#grid")
const menuButtons = document.querySelectorAll(".menu-button") 
const randomColourButton = document.querySelector(".random-button")


let click = false


document.addEventListener("mousedown",() => {
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
randomColourButton.addEventListener("mouseenter",() => {
    let subRandom = document.createElement("div")
    subRandom.textContent = "click for random"
    subRandom.classList.add
    randomColourButton.appendChild(subRandom)

})
gridElements(25)


