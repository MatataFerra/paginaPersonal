function crearLink (id, link, isBlank) {
    let linkElement = document.getElementById(id);
    linkElement.setAttribute("href", link);

    if(isBlank) {

        linkElement.setAttribute('target', "_blank");
    }
}

crearLink('linkedin', "https://www.linkedin.com/posts/matiasgf_orgullo-logro-rrhh-activity-6643160459614699520-wYCz", true);

const animation = 'animate__bounceIn'

const transition = (idFather, idChild, linkChild, animate, isBlank) => {

    const element = document.getElementById(idFather)
    const child = document.getElementById(idChild)
    console.log(element);
    const event = ()=>{
        crearLink(idChild, linkChild, isBlank)
        child.classList.add('animate__animated');
        child.classList.add(animate);
    }

    const eventLeave = ()=>{
        child.classList.remove('animate__animated');
        child.classList.remove(animate);
    }

    element.addEventListener('mouseenter', event)
    element.addEventListener('mouseleave', eventLeave)
}


transition('fotoContainerFather--4', 'fotoContainerChild--4', 'trabajos.html', animation, false)
transition('fotoContainerFather--3', 'fotoContainerChild--3', 'https://github.com/MatataFerra/delilah.git', animation, true)
transition('fotoContainerFather--2', 'fotoContainerChild--2', 'https://matataferra.github.io/podcastacamica/', animation, true)
transition('fotoContainerFather--1', 'fotoContainerChild--1', 'https://matataferra.github.io/GifOs/', animation, true)