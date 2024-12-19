document.addEventListener("DOMContentLoaded", ()=>{
    const btnAgregar = document.querySelectorAll(".divs-button");
    btnAgregar.forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            const nombre = btn.getAttribute("data-nombre");
            const precio = btn.getAttribute("data-precio");
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push({ nombre, precio });
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`${nombre} agregado al carrito.`);
        });
    });
});
