import { useState, useEffect } from "react";
import "./Maps.css";
function Maps({ cidade }) {
  const [local, setLocal] = useState("");
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // O useEffect deve ficar DENTRO do componente
  useEffect(() => {
    if (!cidade) return;
    buscarLocal(cidade);
  }, [cidade]);

  async function buscarLocal(termoBusca) {
    if (!termoBusca) return;

    setLoading(true);
    setError("");
    setCoords(null); // Limpa o mapa anterior antes de buscar o novo

    try {
      // Corrigido para usar template strings (crases)
      // O correto é usar crases para que o ${cidade} funcione:
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(termoBusca)}&format=json`,
      );

      const data = await res.json();

      if (!data || data.length === 0) {
        throw new Error("Local não encontrado");
      }

      setCoords({
        lat: data[0].lat,
        lon: data[0].lon,
      });
    } catch (err) {
      setError("Erro ao buscar localização");
    } finally {
      setLoading(false);
    }
  }

  return (
  <div className="maps-section">
    {loading && <p className="status-msg">Carregando mapa...</p>}
    {error && <p className="status-msg error">{error}</p>}

    {coords && !loading && (
      <div className="map-container">
        <iframe
          title="mapa-destino"
          src={`https://maps.google.com/maps?q=${coords.lat},${coords.lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    )}
  </div>
);
}
export default Maps;
