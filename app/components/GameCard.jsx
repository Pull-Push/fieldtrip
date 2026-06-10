"use client"
function formatGameTime(startUtc){
    if(!startUtc) return "Time TBD";
    return new Date(startUtc).toLocaleString('en-US', {
        weekday:"short",
        year:'numeric',
        month: "short",
        day:"numeric",
        hour:"numeric",
        minute:"2-digit"
    });
}

export default function GameCard({game}){
    const { home, away, venue, startUtc } = game
    const location = [venue.city, venue.region].filter(Boolean).join(", ")

    return(
        <div className="border rounded-lg p-4 my-2">
            <p className="font-medium">
                {away.name} <span className="text-gray-400">@</span> {home.name}
            </p>
            <p className="text-sm text-gray-500">{formatGameTime(startUtc)}</p>
            <p className="text-sm">{venue.name} {location ? ` - ${location}` : ""} </p>
        </div>
    )
}