function slider(){
    let content = document.querySelector('.content')
    content.addEventListener('slider', onload)

    content.style.opacity = "1"
    content.style.transform = "translateX(0)"
}

