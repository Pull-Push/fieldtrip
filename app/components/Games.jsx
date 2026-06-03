'use client'

import { useSearchParams } from "next/navigation";
import Calendar from "./CalendarPicker";
export default function Games() {
    const searchParams = useSearchParams()
    console.log('searchParams', searchParams.get('dates'))
    return(
        <div>
            <Calendar />
        <h1>
            Games go here eventually
        </h1>
        </div>
    )
}