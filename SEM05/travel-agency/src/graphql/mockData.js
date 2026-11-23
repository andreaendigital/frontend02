// =====================================================
// DATOS MOCK – Vuelos y Hoteles por destino
// =====================================================

export const FLIGHTS_DATA = {
  "1": [ // París
    { id: "F101", airline: "Air France", origin: "Santiago (SCL)", destination: "París (CDG)", departure: "2025-03-15T22:00", arrival: "2025-03-16T16:30", duration: "14h 30m", price: 850, seats: 12, class: "Económica", stops: 1 },
    { id: "F102", airline: "Iberia", origin: "Santiago (SCL)", destination: "París (CDG)", departure: "2025-03-15T10:00", arrival: "2025-03-16T12:45", duration: "26h 45m", price: 620, seats: 5, class: "Económica", stops: 2 },
    { id: "F103", airline: "Air France", origin: "Santiago (SCL)", destination: "París (CDG)", departure: "2025-03-20T22:00", arrival: "2025-03-21T16:30", duration: "14h 30m", price: 1450, seats: 3, class: "Business", stops: 1 },
  ],
  "2": [ // Tokio
    { id: "F201", airline: "LATAM + JAL", origin: "Santiago (SCL)", destination: "Tokio (NRT)", departure: "2025-04-10T23:30", arrival: "2025-04-12T08:00", duration: "32h 30m", price: 980, seats: 8, class: "Económica", stops: 2 },
    { id: "F202", airline: "Korean Air", origin: "Santiago (SCL)", destination: "Tokio (NRT)", departure: "2025-04-10T14:00", arrival: "2025-04-11T22:45", duration: "32h 45m", price: 870, seats: 15, class: "Económica", stops: 2 },
    { id: "F203", airline: "ANA", origin: "Santiago (SCL)", destination: "Tokio (HND)", departure: "2025-04-15T22:00", arrival: "2025-04-17T09:00", duration: "35h 00m", price: 2100, seats: 2, class: "Business", stops: 1 },
  ],
  "3": [ // Nueva York
    { id: "F301", airline: "LATAM", origin: "Santiago (SCL)", destination: "Nueva York (JFK)", departure: "2025-05-05T08:00", arrival: "2025-05-05T22:30", duration: "14h 30m", price: 750, seats: 20, class: "Económica", stops: 1 },
    { id: "F302", airline: "American Airlines", origin: "Santiago (SCL)", destination: "Nueva York (JFK)", departure: "2025-05-05T23:55", arrival: "2025-05-06T14:00", duration: "14h 05m", price: 820, seats: 10, class: "Económica", stops: 1 },
    { id: "F303", airline: "LATAM", origin: "Santiago (SCL)", destination: "Nueva York (JFK)", departure: "2025-05-10T08:00", arrival: "2025-05-10T22:30", duration: "14h 30m", price: 1800, seats: 4, class: "Business", stops: 1 },
  ],
  "4": [ // Cancún
    { id: "F401", airline: "LATAM", origin: "Santiago (SCL)", destination: "Cancún (CUN)", departure: "2025-06-01T06:00", arrival: "2025-06-01T20:45", duration: "14h 45m", price: 680, seats: 18, class: "Económica", stops: 1 },
    { id: "F402", airline: "Aeromexico", origin: "Santiago (SCL)", destination: "Cancún (CUN)", departure: "2025-06-01T14:30", arrival: "2025-06-02T07:00", duration: "16h 30m", price: 590, seats: 7, class: "Económica", stops: 2 },
    { id: "F403", airline: "LATAM", origin: "Santiago (SCL)", destination: "Cancún (CUN)", departure: "2025-06-15T06:00", arrival: "2025-06-15T20:45", duration: "14h 45m", price: 1350, seats: 2, class: "Business", stops: 1 },
  ],
  "5": [ // Roma
    { id: "F501", airline: "Alitalia", origin: "Santiago (SCL)", destination: "Roma (FCO)", departure: "2025-07-20T21:00", arrival: "2025-07-21T18:00", duration: "21h 00m", price: 790, seats: 9, class: "Económica", stops: 1 },
    { id: "F502", airline: "Iberia", origin: "Santiago (SCL)", destination: "Roma (FCO)", departure: "2025-07-20T10:00", arrival: "2025-07-21T14:30", duration: "28h 30m", price: 670, seats: 14, class: "Económica", stops: 2 },
    { id: "F503", airline: "Alitalia", origin: "Santiago (SCL)", destination: "Roma (FCO)", departure: "2025-07-25T21:00", arrival: "2025-07-26T18:00", duration: "21h 00m", price: 1600, seats: 3, class: "Business", stops: 1 },
  ],
  "6": [ // Bali
    { id: "F601", airline: "Garuda Indonesia", origin: "Santiago (SCL)", destination: "Bali (DPS)", departure: "2025-08-10T22:00", arrival: "2025-08-12T14:00", duration: "40h 00m", price: 1100, seats: 6, class: "Económica", stops: 2 },
    { id: "F602", airline: "Singapore Airlines", origin: "Santiago (SCL)", destination: "Bali (DPS)", departure: "2025-08-10T12:00", arrival: "2025-08-12T08:30", duration: "44h 30m", price: 950, seats: 11, class: "Económica", stops: 2 },
    { id: "F603", airline: "Singapore Airlines", origin: "Santiago (SCL)", destination: "Bali (DPS)", departure: "2025-08-15T12:00", arrival: "2025-08-17T08:30", duration: "44h 30m", price: 2400, seats: 1, class: "Business", stops: 2 },
  ],
};

export const HOTELS_DATA = {
  "1": [ // París
    { id: "H101", name: "Le Grand Hôtel Paris", stars: 5, pricePerNight: 320, image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", amenities: ["WiFi", "Spa", "Restaurante gourmet", "Bar rooftop", "Concierge 24h"], available: true, address: "Rue Scribe, 9e arrondissement", checkIn: "2025-03-16", checkOut: "2025-03-23", reviews: 4.9 },
    { id: "H102", name: "Hôtel Montmartre Classic", stars: 3, pricePerNight: 95, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80", amenities: ["WiFi", "Desayuno incluido", "Vista a Montmartre"], available: true, address: "Rue Lepic, Montmartre", checkIn: "2025-03-16", checkOut: "2025-03-23", reviews: 4.3 },
    { id: "H103", name: "Hôtel de la Tour Eiffel", stars: 4, pricePerNight: 180, image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80", amenities: ["WiFi", "Restaurante", "Bar", "Vista a la Torre Eiffel"], available: false, address: "Avenue de la Bourdonnais, 7e", checkIn: "2025-03-16", checkOut: "2025-03-23", reviews: 4.6 },
  ],
  "2": [ // Tokio
    { id: "H201", name: "Park Hyatt Tokyo", stars: 5, pricePerNight: 480, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", amenities: ["WiFi", "Piscina", "Spa", "Restaurante japonés", "Bar panorámico"], available: true, address: "Nishi-Shinjuku, Shinjuku", checkIn: "2025-04-12", checkOut: "2025-04-19", reviews: 4.9 },
    { id: "H202", name: "Asakusa Traditional Inn", stars: 3, pricePerNight: 120, image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=600&q=80", amenities: ["WiFi", "Onsen", "Desayuno japonés", "Yukata incluido"], available: true, address: "Asakusa, Taito", checkIn: "2025-04-12", checkOut: "2025-04-19", reviews: 4.5 },
    { id: "H203", name: "Shibuya Stream Excel Hotel", stars: 4, pricePerNight: 220, image: "https://images.unsplash.com/photo-1540541338537-1220059af4dc?w=600&q=80", amenities: ["WiFi", "Restaurante", "Gym", "Vista a Shibuya"], available: true, address: "Shibuya Stream, Shibuya", checkIn: "2025-04-12", checkOut: "2025-04-19", reviews: 4.7 },
  ],
  "3": [ // Nueva York
    { id: "H301", name: "The Plaza Hotel", stars: 5, pricePerNight: 650, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80", amenities: ["WiFi", "Spa", "Restaurante", "Bar", "Concierge", "Vista a Central Park"], available: true, address: "768 Fifth Avenue, Manhattan", checkIn: "2025-05-05", checkOut: "2025-05-12", reviews: 4.8 },
    { id: "H302", name: "Brooklyn Boutique Hotel", stars: 3, pricePerNight: 180, image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=600&q=80", amenities: ["WiFi", "Desayuno", "Rooftop bar", "Vista al skyline"], available: true, address: "DUMBO, Brooklyn", checkIn: "2025-05-05", checkOut: "2025-05-12", reviews: 4.4 },
    { id: "H303", name: "Times Square Marriott", stars: 4, pricePerNight: 310, image: "https://images.unsplash.com/photo-1587213811864-46e59f6873e1?w=600&q=80", amenities: ["WiFi", "Gym", "Restaurante", "En pleno Times Square"], available: false, address: "1535 Broadway, Midtown Manhattan", checkIn: "2025-05-05", checkOut: "2025-05-12", reviews: 4.5 },
  ],
  "4": [ // Cancún
    { id: "H401", name: "Excellence Playa Mujeres", stars: 5, pricePerNight: 420, image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", amenities: ["Todo incluido", "Playa privada", "5 piscinas", "Spa", "10 restaurantes"], available: true, address: "Zona Hotelera, Cancún", checkIn: "2025-06-01", checkOut: "2025-06-08", reviews: 4.9 },
    { id: "H402", name: "Iberostar Cancún", stars: 4, pricePerNight: 230, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", amenities: ["Todo incluido", "Playa", "Piscina", "Spa", "Animación"], available: true, address: "Zona Hotelera KM 17", checkIn: "2025-06-01", checkOut: "2025-06-08", reviews: 4.6 },
    { id: "H403", name: "Hostel Centro Cancún", stars: 2, pricePerNight: 45, image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80", amenities: ["WiFi", "Cocina compartida", "Tours incluidos"], available: true, address: "Centro Cancún", checkIn: "2025-06-01", checkOut: "2025-06-08", reviews: 4.1 },
  ],
  "5": [ // Roma
    { id: "H501", name: "Hotel de Russie", stars: 5, pricePerNight: 580, image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&q=80", amenities: ["WiFi", "Spa", "Jardín privado", "Restaurante", "Bar"], available: true, address: "Via del Babuino 9, Roma", checkIn: "2025-07-21", checkOut: "2025-07-28", reviews: 4.9 },
    { id: "H502", name: "Trevi Boutique Hotel", stars: 3, pricePerNight: 110, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&q=80", amenities: ["WiFi", "Desayuno", "A pasos de la Fontana di Trevi"], available: true, address: "Via delle Muratte, Roma", checkIn: "2025-07-21", checkOut: "2025-07-28", reviews: 4.4 },
    { id: "H503", name: "Colosseo View Hotel", stars: 4, pricePerNight: 200, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80", amenities: ["WiFi", "Restaurante", "Terraza con vista al Coliseo", "Bar"], available: false, address: "Via dei Fori Imperiali, Roma", checkIn: "2025-07-21", checkOut: "2025-07-28", reviews: 4.7 },
  ],
  "6": [ // Bali
    { id: "H601", name: "Four Seasons Bali at Sayan", stars: 5, pricePerNight: 750, image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80", amenities: ["WiFi", "Piscina infinity", "Spa balinés", "Yoga", "Restaurante"], available: true, address: "Sayan, Ubud, Bali", checkIn: "2025-08-12", checkOut: "2025-08-19", reviews: 5.0 },
    { id: "H602", name: "Seminyak Beach Resort", stars: 4, pricePerNight: 190, image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80", amenities: ["WiFi", "Piscina", "Acceso directo a playa", "Restaurante", "Bar"], available: true, address: "Jl. Kayu Aya, Seminyak", checkIn: "2025-08-12", checkOut: "2025-08-19", reviews: 4.6 },
    { id: "H603", name: "Ubud Jungle Hostel", stars: 2, pricePerNight: 30, image: "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=600&q=80", amenities: ["WiFi", "Desayuno", "Tours de yoga", "Vistas al bosque"], available: true, address: "Jl. Monkey Forest, Ubud", checkIn: "2025-08-12", checkOut: "2025-08-19", reviews: 4.3 },
  ],
};
