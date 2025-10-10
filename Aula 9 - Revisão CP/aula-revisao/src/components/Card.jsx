import useRepositorio from "../hooks/UseRepositorio";

export default function Card() {
  const repositorios = useRepositorio();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repositorios.map(repo => (
        <div key={repo.id} className="bg-gray-800 p-4 rounded shadow">
          <img src={repo.owner.avatar_url} alt={repo.owner.login} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold mb-2">{repo.full_name}</h2>
            <p className="text-gray-300 mb-2">{repo.description}</p>
           
              <a 
                href={repo.homepage} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-gray-300 mb-2 hover:underline"
              >
                Link para a home
              </a>
        </div>
      ))}
    </div>
  );
}
