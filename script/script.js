function crearLink (id, link) {
    let linkElement = document.getElementById(id);
    linkElement.setAttribute("href", link);
    linkElement.setAttribute('target', "_blank");
}

crearLink('linkedin', "https://www.linkedin.com/posts/matiasgf_orgullo-logro-rrhh-activity-6643160459614699520-wYCz");
crearLink('inFoto', 'https://www.linkedin.com/posts/matiasgf_selecciaejn-vacacionesenlaescuela-activity-6587750401183932416-lhTI')



