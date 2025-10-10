import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">GitHub Explorer</h1>
      <nav className="space-x-4">
        <Link to="/" className="text-gray-400 hover:underline">Home</Link>
        <Link to="/about" className="text-gray-400 hover:underline">Sobre</Link>
        <Link to="/contact" className="text-gray-400 hover:underline">Contato</Link>
      </nav>
    </header>
  );
}
