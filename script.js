const outings = [
    {
        id: 1,
        name: "Cena en el Restaurante Italiano",
        date: "2024-07-20",
        time: "20:00",
        location: "Restaurante Bella Italia",
        description: "Una noche de pizzas y pasta con los mejores amigos. ¡No te lo pierdas!",
        attendants: ["Ana", "Luis", "Marta"],
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        locationOptions: [
            {
                name: "Restaurante Bella Italia",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
                description: "Auténtica cocina italiana con ambiente romántico",
                rating: 4.5,
                price: "$$"
            },
            {
                name: "Pizzeria Napoli",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
                description: "Pizzas artesanales con horno de leña",
                rating: 4.3,
                price: "$"
            },
            {
                name: "Trattoria Romana",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
                description: "Cocina tradicional romana en ambiente familiar",
                rating: 4.7,
                price: "$$$"
            }
        ]
    },
    {
        id: 2,
        name: "Noche de Juegos de Mesa",
        date: "2024-07-25",
        time: "19:30",
        location: "Casa de Juan",
        description: "Prepara tus juegos favoritos para una noche épica de risas y competencia amistosa.",
        attendants: ["Juan", "Sofía", "Pedro", "Laura"],
        image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop",
        locationOptions: [
            {
                name: "Casa de Juan",
                image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop",
                description: "Espacio cómodo con mesa grande para juegos",
                rating: 4.8,
                price: "Gratis"
            },
            {
                name: "Café Ludoteca",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                description: "Café especializado en juegos de mesa",
                rating: 4.4,
                price: "$"
            },
            {
                name: "Centro Comunitario",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                description: "Sala amplia con equipamiento para eventos",
                rating: 4.2,
                price: "$$"
            }
        ]
    },
    {
        id: 3,
        name: "Senderismo en la Montaña",
        date: "2024-08-03",
        time: "08:00",
        location: "Parque Natural La Pedriza",
        description: "Una caminata para disfrutar de la naturaleza y las vistas impresionantes. Lleva calzado cómodo y agua.",
        attendants: ["Carlos", "Elena"],
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
        locationOptions: [
            {
                name: "Parque Natural La Pedriza",
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
                description: "Rutas de senderismo con vistas panorámicas",
                rating: 4.9,
                price: "$"
            },
            {
                name: "Monte de El Pardo",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                description: "Sendero circular con bosque mediterráneo",
                rating: 4.6,
                price: "Gratis"
            },
            {
                name: "Sierra de Guadarrama",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                description: "Rutas de alta montaña para expertos",
                rating: 4.8,
                price: "$$"
            },
            {
                name: "Sierra de Guadarrama2",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                description: "Rutas de alta montaña para expertos",
                rating: 4.8,
                price: "$$"
            }
        ]
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
            <div class="outing-image">
                <img src="${outing.image}" alt="${outing.name}" loading="lazy">
            </div>
            <div class="outing-info">
                <h2>🍽️ ${outing.name}</h2>
                <p><strong>📅 Fecha:</strong> ${outing.date}</p>
                <p><strong>⏰ Hora:</strong> ${outing.time}</p>
                <p><strong>📍 Lugar:</strong> ${outing.location}</p>
                <p><strong>📝 Descripción:</strong> ${outing.description.substring(0, 100)}...</p>
                <a href="detail.html?id=${outing.id}">🔍 Ver Detalles</a>
            </div>
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
            <div class="outing-header">
                <div class="outing-image-large">
                    <img src="${outing.image}" alt="${outing.name}" loading="lazy">
                </div>
                <div class="outing-info-large">
                    <h3>🍽️ ${outing.name}</h3>
                    <p><strong>📅 Fecha:</strong> ${outing.date}</p>
                    <p><strong>⏰ Hora:</strong> ${outing.time}</p>
                    <p><strong>📍 Lugar:</strong> ${outing.location}</p>
                    <p><strong>📝 Descripción:</strong> ${outing.description}</p>
                    <p><strong>👥 Asistentes:</strong> ${outing.attendants.join(', ')}</p>
                    <a href="index.html" class="back-button">Volver a la lista</a>
                </div>
            </div>
            
            <div class="location-options">
                <h3>Opciones de Lugares</h3>
                <div class="options-grid">
                    ${outing.locationOptions.map(option => `
                        <div class="location-option">
                            <div class="option-image">
                                <img src="${option.image}" alt="${option.name}" loading="lazy">
                            </div>
                            <div class="option-info">
                                <h4>${option.name}</h4>
                                <p class="option-description">${option.description}</p>
                                <div class="option-meta">
                                    <span class="rating">⭐ ${option.rating}</span>
                                    <span class="price">${option.price}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const mapContainer = document.getElementById('map-container');
        if (mapContainer) {
            mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d61228.3836920891!2d-71.56367605874888!3d-16.436301430000285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-16.467488!2d-71.52945439999999!4m5!1s0x91424af75b433129%3A0x4cbe9ccdf18cd3fc!2sHFWF%2B29F%20UNSA%20-%20Campus%20Ingenier%C3%ADas%2C20Arequipa!3m2!1d-16.4049287!2d-71.5265665!5e0!3m2!1ses!2spe!4v1756400057695!5m2!1ses!2spe" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        }

    } else {
        outingDetailDiv.innerHTML = '<p>Salida no encontrada.</p>';
    }
}