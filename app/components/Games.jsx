'use client'


import { useSearchParams } from "next/navigation";
import Calendar from "./CalendarPicker";
import { useEffect, useState } from "react";


export default function Games({sport, league}) {
    const[games, setGames ] = useState([])
    const [teams, setTeams ] = useState([])

    const searchParams = useSearchParams()
    const dateRange = searchParams.get('dates')
    // console.log('searchParams', dateRange)


    // console.log('games sport', sport)
    // console.log('games league', league)
    
    useEffect(() =>{
        async function fetchData() {
            const response = await fetch(`/api/teams?sport=${sport}&league=${league}`)
            const data = await response.json()
            setTeams(data)
            } 
            
            fetchData()
        },[league, sport])

console.log('teams data', teams.items)

    return(
        <div className="py-20">
            <Calendar />
        <h1>TEAMS</h1>
        <div className="color-white">
            {teams?.items?.map((team, index) => (
                <div key={index}>
                    <p>Team Name - {team.displayName}</p>
                </div>
            ))}
        </div>
        </div>
    )
}