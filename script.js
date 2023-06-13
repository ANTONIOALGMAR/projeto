
function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")
    //se tiver light mode, adicionar a imagem avatar1
    if(html.classList.contains("light")){
        //substituir imagem
        img.setAttribute("src", "./assets/avatar1.jpg")
    } else {
        //se tiver sem light
        img.setAttribute("src", "./assets/avatar.jpg")
    }
    

    
}   