const grid = document.querySelector("#grid")

function gridElements (PixelAmount){
    for (let i = 0; i <  PixelAmount; i++){
        for (let j = 0; j < PixelAmount; j++){
            console.log(i)
            console.log(j)
            let pixel = document.createElement("div")
            pixel.classList.add("cell")
            pixel.style.height =  `${460/PixelAmount}px`
            pixel.style.width =  `${460/PixelAmount}px`
            console.log(pixel.style.width)
            console.log(pixel.style.height)
            grid.appendChild(pixel)
        }
    }
}
gridElements(10)

