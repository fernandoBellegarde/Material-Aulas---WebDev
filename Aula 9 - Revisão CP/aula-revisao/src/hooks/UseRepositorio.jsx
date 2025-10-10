import { useEffect, useState } from "react";

export default function useRepositorio() {
    const [repositoriosReact, setRepositoriosReact] = useState([]);

    const API_URL = import.meta.env.VITE_GITHUB_API;

    useEffect(() => {
        fetch($`${API_URL}reactreact&per_page=5`)
        .then((response) => response.json())
        .then((data) => {
            setRepositoriosReact(data.items);
        })
        .catch((error) => {
            console.error("Erro ao buscar repositórios:", error);
        })

        fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            setRepositorioNode(data.items);
        })
        .catch((error) => {
            console.error("Erro ao buscar repositórios:", error);
        });
    }, [API_]);

    useEffect(() => {
        fetch(API_URL_PYTHON)
        .then((response) => response.json())
        .then((data) => {
            setRepositoriosPython(data.items);
        })
        .catch((error) => {
            console.error("Erro ao buscar repositórios:", error);
        });
    }, [API_URL_PYTHON]);

    useEffect(() => {
        fetch(API_URL_NODE)
        .then((response) => response.json())
        .then((data) => {
            setRepositorioNode(data.items);
        })
        .catch((error) => {
            console.error("Erro ao buscar repositórios:", error);
        });
    }, [API_URL_NODE]);

    return repositoriosReact, repositoriosPython, repositoriosNode 
}