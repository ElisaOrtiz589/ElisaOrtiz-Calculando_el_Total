let precio = 400000;

let precioSpan = document.querySelector(".precio_inicial");

precioSpan.innerHTML = precio;

// A la clase 'valor-total' se le asigna un 0 adentro, asi la página siempre empieza mostrando un total de 0.
document.querySelector(".valor_total").innerHTML = 0;
