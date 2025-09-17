document.addEventListener('DOMContentLoaded', () => {
    const consultaForm = document.getElementById("consultaForm");

    const renderConsultas = () => {
        const listaConsultas = document.getElementById("listaConsultas");
        if (!listaConsultas) return; 

   
        listaConsultas.innerHTML = '';

       
        const consultasPredefinidas = [
            { nombre: "Juan", mensaje: " ¿Quiénes van a seguir programación? No se si inscribirme en la UTN o la UNCuyo." },
            { nombre: "María", mensaje: "Los del profe Buenanueva, ¿saben que hay que hacer en el tp de biomoléculas?" }
        ];

        const consultasGuardadas = JSON.parse(localStorage.getItem("consultas")) || [];

        
        const todasLasConsultas = [...consultasPredefinidas, ...consultasGuardadas];

       
        todasLasConsultas.forEach(c => {
            const div = document.createElement("div");
            div.classList.add("consulta");
            div.innerHTML = `<strong>${c.nombre}:</strong> ${c.mensaje}`;
            listaConsultas.appendChild(div);
        });
    };

    if (consultaForm) {
        consultaForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const mensaje = document.getElementById("mensaje").value;

            
            const consultas = JSON.parse(localStorage.getItem("consultas")) || [];

            
            consultas.push({ nombre, mensaje });

           
            localStorage.setItem("consultas", JSON.stringify(consultas));

            alert("Consulta enviada:\nNombre: " + nombre + "\nMensaje: " + mensaje);

            consultaForm.reset();

            renderConsultas();
        });
    }

    renderConsultas();
});
