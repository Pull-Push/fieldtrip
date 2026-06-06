'use client'

import { getNFLGamesByDateRange, getNFLTeams } from "@/lib/nfl";

import { useSearchParams } from "next/navigation";
import Calendar from "./CalendarPicker";
import { useEffect, useState } from "react";


export default function Games() {
    const[games, setGames ] = useState([])
    const [teams, setTeams ] = useState(null)

    const searchParams = useSearchParams()
    const dateRange = searchParams.get('dates')
    console.log('searchParams', dateRange)

    useEffect(() =>{
        async function fetchData() {
            const [nflTeams, nflDatesData ] = await Promise.all([
                fetch(`/api/teams`).then(res => res.json()),
                fetch(`/api/nflDates?dates=${dateRange}`).then(res => res.json())
            ])
            setTeams(nflTeams)
            setGames(nflDatesData)
            } 
            
            if(dateRange) fetchData()
            },
            [dateRange])

console.log('teams data', teams)
console.log('gamesData', games)

    return(
        <div>
            <Calendar />
        <h1>
            Date Range Games go here eventually
        </h1>

        </div>
    )
}