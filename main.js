const menu_email=document.querySelector(".nav-email");
menu_email.addEventListener("click",mostrarDesktopMenu);
const desktop_menu=document.querySelector(".ocultar-menu");

function mostrarDesktopMenu(){
    desktop_menu.classList.toggle("ocultar-menu");
}


const nav_menu=document.querySelector(".nav-menu");
const mobile_menu=document.querySelector(".mobile-menu");
nav_menu.addEventListener("click",mostrarMobileMenu);


const carrito=document.querySelector(".nav-shopping");
const aside=document.querySelector(".ocultar-orden");
carrito.addEventListener("click",mostrarCarrito);



function mostrarMobileMenu(){
    if(aside.classList.contains("ocultar-orden")){
        mobile_menu.classList.toggle("ocultar-menu");
    }else{
        aside.classList.add("ocultar-orden");
        mobile_menu.classList.toggle("ocultar-menu");
    }
}

function mostrarCarrito(){
    if(mobile_menu.classList.contains("ocultar-menu")){
        aside.classList.toggle("ocultar-orden");
    }else{
        mobile_menu.classList.add("ocultar-menu");
        aside.classList.toggle("ocultar-orden");
    }
}

function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

const imagenes_avion=[];

imagenes_avion.push("https://images.pexels.com/photos/1089303/pexels-photo-1089303.jpeg?cs=srgb&dl=pexels-pascal-renet-1089303.jpg&fm=jpg");
imagenes_avion.push("https://images.pexels.com/photos/70955/pexels-photo-70955.jpeg?cs=srgb&dl=pexels-daniel-kist-70955.jpg&fm=jpg");
imagenes_avion.push("https://images.pexels.com/photos/2888355/pexels-photo-2888355.png?cs=srgb&dl=pexels-matheus-cenali-2888355.jpg&fm=jpg");
imagenes_avion.push("https://images.pexels.com/photos/76959/supersonic-fighter-aircraft-jet-jet-fighter-76959.jpeg?cs=srgb&dl=pexels-pixabay-76959.jpg&fm=jpg");
imagenes_avion.push("https://images.pexels.com/photos/1046493/pexels-photo-1046493.jpeg?cs=srgb&dl=pexels-thierry-fillieul-1046493.jpg&fm=jpg");

const imagenes_bici=[];

imagenes_bici.push("https://images.pexels.com/photos/5446297/pexels-photo-5446297.jpeg?cs=srgb&dl=pexels-cottonbro-5446297.jpg&fm=jpg");
imagenes_bici.push("https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?cs=srgb&dl=pexels-pixabay-104842.jpg&fm=jpg");
imagenes_bici.push("https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg");
imagenes_bici.push("https://images.pexels.com/photos/1595483/pexels-photo-1595483.jpeg?cs=srgb&dl=pexels-adam-dubec-1595483.jpg&fm=jpg");
imagenes_bici.push("https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?cs=srgb&dl=pexels-leandro-boogalu-1149601.jpg&fm=jpg");

const imagenes_carro=[];

imagenes_carro.push("https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?cs=srgb&dl=pexels-mike-b-116675.jpg&fm=jpg");
imagenes_carro.push("https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?cs=srgb&dl=pexels-albin-berlin-919073.jpg&fm=jpg");
imagenes_carro.push("https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=pexels-alexgtacar-1592384.jpg&fm=jpg");
imagenes_carro.push("https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?cs=srgb&dl=pexels-pixabay-358070.jpg&fm=jpg");

const productos=[];

function llenarProductos(){
    var productos_contenedor=document.querySelector(".cards-container");
    var num_bike=10;
    var num_car=10;
    var num_avion=10;


    for(i=0;i<num_bike;i++){
    
        productos.push(
            {
                nombre:"Bike",
                precio:generateRandomInt(1000,3000),
                imagen:imagenes_bici[generateRandomInt(0,imagenes_bici.length-1)]
            }
        );
    }

    for(i=0;i<num_car;i++){
        
        
        productos.push(
            {
                nombre:"car",
                precio:generateRandomInt(4000,20000),
                imagen:imagenes_carro[generateRandomInt(0,imagenes_carro.length-1)]
            
            }
        );
    }


    for(i=0;i<num_avion;i++){
        
        productos.push(
            {
                nombre:"airplane",
                precio:generateRandomInt(50000,100000),
                imagen:imagenes_avion[generateRandomInt(0,imagenes_avion.length-1)]
                
            }
        );
    }
    for(product of productos){

        var indice=generateRandomInt(0,2);

        const producto_contain=document.createElement("div");
        producto_contain.classList.add("product-card");

        const imagen=document.createElement("img");
        imagen.src=product.imagen;

        const producto_info=document.createElement("div");
        producto_info.classList.add("product-info");
    
        const producto_info_div=document.createElement("div");
        
        const precio=document.createElement("p");
        precio.innerText="$"+product.precio;

        const nombre=document.createElement("p");
        nombre.innerText=product.nombre;

        const figure=document.createElement("figure");
        const figureImg=document.createElement("img");

        figureImg.src="icons/bt_add_to_cart.svg";


        producto_contain.appendChild(imagen);
        producto_contain.appendChild(producto_info);

        producto_info.appendChild(producto_info_div);
        producto_info.appendChild(figure);

        producto_info_div.appendChild(precio);
        producto_info_div.appendChild(nombre);

        figure.appendChild(figureImg);

        productos_contenedor.appendChild(producto_contain);
    // console.log(product.nombre);
    }


}
llenarProductos();