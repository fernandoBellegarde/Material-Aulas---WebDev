import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));

    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .finally(() => setIsLoading(false));
  }, []);

  const jaquetaEcasaco = allProducts.filter(
    (pegaItem) =>
      pegaItem.title.includes("jacket") ||
      pegaItem.title.includes("coat") ||
      pegaItem.description.includes("jacket") ||
      pegaItem.description.includes("coat")
  );

  if (isLoading) {
    return (
      <>
        <style>{`
          .loading-overlay {
            position: fixed;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.7);
            z-index: 9999;
          }
          .loading-text {
            font-size: 6rem;
            font-weight: 700;
            animation: spin 3s linear infinite;
            transform-origin: center;
            text-align: center;
            margin: 0;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

        <div className="loading-overlay">
          <p className="loading-text">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Queridinhos dos Clientes">
        {allProducts
          .filter((pegaItem) => pegaItem.price >= 30 && pegaItem.price <= 100)
          .sort((a, b) => a.price - b.price)
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </SectionContainer>

      <SectionContainer title="jAQUETAS E CASACAS">
        {jaquetaEcasaco.length > 0 ? (
          jaquetaEcasaco
            .sort((a, b) => a.price - b.price)
            .map((product) => <ProductCard key={product.id} {...product} />)
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </SectionContainer>
    </div>
  );
}
