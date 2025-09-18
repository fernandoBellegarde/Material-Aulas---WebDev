import { useEffect } from "react";

export default function ListaTimes() { 

    const API_KEY = import.meta.env.VITE_API_FOOTBALL;

    useEffect(() => {
        fetch(`https://v3.football.api-sports.io/teams?league=${leagueId}`, {
            "headers": {
                "x-apisports-key": API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [API_KEY]);

    

    return (
        <div className="mt-6">
            <p className="text-center">Lista de times será exibida aqui.</p>
        
        </div>
    );
}