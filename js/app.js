const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');


document.addEventListener('DOMContentLoaded',()=>{
    evento();
    servicios();
});

const evento = () => {
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () => {
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length>0)return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btn-cerrar');
    // while(navegacion.children[4]){
    //     navegacion.removeChild(navegacion.children[4]);
    // }
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const imagen = entry.target;
            observer.unobserve(imagen);
        }
    })
});

imagenes.forEach(imagen=>{
    imagen.src = imagen.dataset.src;
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) => {
    boton.addEventListener('click', () =>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick= function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}

const servicios = () => {
    let serviciosArrays = [];
    const servicios = document.querySelectorAll('.servicio');
    
    servicios.forEach(servicio=>serviciosArrays = [...serviciosArrays,servicio])
    
    // const 
}