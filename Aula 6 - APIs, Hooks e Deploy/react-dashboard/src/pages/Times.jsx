import ListaTimes from "../components/ListaTimes";

export default function Times() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
        <div className="p-6 flex-1 bg-gray-100">
            <h1 className="text-2xl font-bold text-center">Times do Futebol Feminino</h1>
        </div>
        <ListaTimes />
    </div>
  );
}