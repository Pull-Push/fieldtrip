export async function getAllMLSData() {
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.1
`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching MLS data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch MLS data', error)
        return null
    }
}