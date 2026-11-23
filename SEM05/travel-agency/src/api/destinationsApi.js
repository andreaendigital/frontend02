// =====================================================
// API REST MOCK – Destinos
// Simula un endpoint GET /api/destinations
// =====================================================

const DESTINATIONS_DATA = [
  {
    id: "1",
    name: "París",
    country: "Francia",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    description:
      "La Ciudad de la Luz te espera con su arquitectura inigualable, gastronomía refinada y una cultura que ha marcado la historia del mundo.",
    activities: ["Torre Eiffel", "Museo del Louvre", "Paseo en barco por el Sena", "Versalles", "Montmartre"],
    rating: 4.8,
    climate: "Templado",
    currency: "Euro (€)",
    language: "Francés",
  },
  {
    id: "2",
    name: "Tokio",
    country: "Japón",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    description:
      "Una metrópolis donde la tradición milenaria convive con la tecnología de vanguardia. Tokio es una experiencia única e irrepetible.",
    activities: ["Templo Senso-ji", "Shibuya Crossing", "Akihabara", "Monte Fuji", "Cocina japonesa"],
    rating: 4.9,
    climate: "Templado húmedo",
    currency: "Yen (¥)",
    language: "Japonés",
  },
  {
    id: "3",
    name: "Nueva York",
    country: "Estados Unidos",
    continent: "América",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    description:
      "La Gran Manzana nunca duerme. Broadway, Central Park, la Estatua de la Libertad y una diversidad cultural sin igual te esperan.",
    activities: ["Central Park", "Broadway", "Estatua de la Libertad", "Times Square", "Museos de clase mundial"],
    rating: 4.7,
    climate: "Continental húmedo",
    currency: "Dólar (USD)",
    language: "Inglés",
  },
  {
    id: "4",
    name: "Cancún",
    country: "México",
    continent: "América",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80",
    description:
      "Playas de arena blanca, aguas turquesa del Caribe y la magia de la cultura maya hacen de Cancún el paraíso tropical perfecto.",
    activities: ["Chichén Itzá", "Buceo en el arrecife", "Isla Mujeres", "Xcaret", "Cenotes"],
    rating: 4.6,
    climate: "Tropical",
    currency: "Peso Mexicano (MXN)",
    language: "Español",
  },
  {
    id: "5",
    name: "Roma",
    country: "Italia",
    continent: "Europa",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    description:
      "La Ciudad Eterna conserva dos milenios de historia en cada rincón. El Coliseo, el Vaticano y la dolce vita italiana te aguardan.",
    activities: ["Coliseo Romano", "Vaticano", "Fontana di Trevi", "Foro Romano", "Gastronomía italiana"],
    rating: 4.8,
    climate: "Mediterráneo",
    currency: "Euro (€)",
    language: "Italiano",
  },
  {
    id: "6",
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    description:
      "La Isla de los Dioses ofrece templos entre arrozales, playas paradisíacas, yoga y una espiritualidad que transforma a quienes la visitan.",
    activities: ["Templo Tanah Lot", "Ubud", "Terrazas de arroz Tegallalang", "Seminyak Beach", "Surf"],
    rating: 4.7,
    climate: "Tropical",
    currency: "Rupia Indonesia (IDR)",
    language: "Indonesio / Balinés",
  },
];

// Simula latencia de red (200-600ms)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchDestinations() {
  await delay(Math.random() * 400 + 200);
  return [...DESTINATIONS_DATA];
}

export async function fetchDestinationById(id) {
  await delay(Math.random() * 300 + 150);
  const destination = DESTINATIONS_DATA.find((d) => d.id === id);
  if (!destination) throw new Error(`Destino con id "${id}" no encontrado`);
  return { ...destination };
}
