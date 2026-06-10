'use client'


import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Calendar from "./CalendarPicker";
import GameCard from "./GameCard";

export default function Games({sport, league}) {
    const[games, setGames ] = useState([])
    const [teams, setTeams ] = useState([])

    const searchParams = useSearchParams()
    const dateRange = searchParams.get('dates')


    // console.log('games sport', sport)
    // console.log('games league', league)
    
    useEffect(() =>{
        async function fetchGames() {
            const response = await fetch(`/api/games?league=${league}`)
            const data = await response.json()
            setGames(data)
            } 
            
            fetchGames()
        },[league])

return (
    <div className="py-20">
        <Calendar />
        <h1 className="text-xl font-semibold my-4">Games</h1>
        {games.map((game) => (
            <GameCard key={game.id} game={game} />
        ))}
        </div>
    );
}