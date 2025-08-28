const outings = [
    {
        id: 1,
        name: "Cena en el Restaurante Italiano",
        date: "2024-07-20",
        time: "20:00",
        location: "Restaurante Bella Italia",
        description: "Una noche de pizzas y pasta con los mejores amigos. ¡No te lo pierdas!",
        attendants: ["Ana", "Luis", "Marta"]
    },
    {
        id: 2,
        name: "Noche de Juegos de Mesa",
        date: "2024-07-25",
        time: "19:30",
        location: "Casa de Juan",
        description: "Prepara tus juegos favoritos para una noche épica de risas y competencia amistosa.",
        attendants: ["Juan", "Sofía", "Pedro", "Laura"]
    },
    {
        id: 3,
        name: "Senderismo en la Montaña",
        date: "2024-08-03",
        time: "08:00",
        location: "Parque Natural La Pedriza",
        description: "Una caminata para disfrutar de la naturaleza y las vistas impresionantes. Lleva calzado cómodo y agua.",
        attendants: ["Carlos", "Elena"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('outings-list')) {
        loadOutingsList();
    } else if (document.getElementById('outing-detail')) {
        loadOutingDetail();
    }
});

function loadOutingsList() {
    const outingsListDiv = document.getElementById('outings-list');
    outingsListDiv.innerHTML = ''; // Clear existing content

    outings.forEach(outing => {
        const outingCard = document.createElement('div');
        outingCard.classList.add('outing-card');
        outingCard.innerHTML = `
            <h2>🍽️ ${outing.name}</h2>
            <p><strong>📅 Fecha:</strong> ${outing.date}</p>
            <p><strong>⏰ Hora:</strong> ${outing.time}</p>
            <p><strong>📍 Lugar:</strong> ${outing.location}</p>
            <p><strong>📝 Descripción:</strong> ${outing.description.substring(0, 100)}...</p>
            <a href="detail.html?id=${outing.id}">🔍 Ver Detalles</a>
        `;
        outingsListDiv.appendChild(outingCard);
    });
}

function loadOutingDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const outingId = parseInt(urlParams.get('id'));
    const outing = outings.find(o => o.id === outingId);

    const outingDetailDiv = document.getElementById('outing-detail');

    if (outing) {
        outingDetailDiv.innerHTML = `
            <h2>🍽️ ${outing.name}</h2>
            <p><strong>📅 Fecha:</strong> ${outing.date}</p>
            <p><strong>⏰ Hora:</strong> ${outing.time}</p>
            <p><strong>📍 Lugar:</strong> ${outing.location}</p>
            <p><strong>📝 Descripción:</strong> ${outing.description}</p>
            <p><strong>👥 Asistentes:</strong> ${outing.attendants.join(', ')}</p>
            <a href="index.html">🏠 Volver a la lista</a>
        `;
        
        const mapContainer = document.getElementById('map-container');
        if (mapContainer) {
            mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d61228.3836920891!2d-71.56367605874888!3d-16.436301430000285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-16.467488!2d-71.52945439999999!4m5!1s0x91424af75b433129%3A0x4cbe9ccdf18cd3fc!2sHFWF%2B29F%20UNSA%20-%20Campus%20Ingenier%C3%ADas%2C%20Arequipa!3m2!1d-16.4049287!2d-71.5265665!5e0!3m2!1ses!2spe!4v1756400057695!5m2!1ses!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        }

    } else {
        outingDetailDiv.innerHTML = '<p>Salida no encontrada.</p>';
    }
}