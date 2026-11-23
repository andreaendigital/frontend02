export default function StarRating({ stars, max = 5 }) {
  return (
    <span className="stars" aria-label={`${stars} de ${max} estrellas`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ color: i < stars ? "#f59e0b" : "#d1d5db" }}>
          ★
        </span>
      ))}
    </span>
  );
}
