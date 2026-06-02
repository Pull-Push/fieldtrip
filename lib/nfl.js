export async function getAllNFLData() {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching nfl data`, response.status)
            return null
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch NFL data', error)
        return null
    }
}

export async function getNFLTeams(){
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v3/sports/football/nfl/teams`, 
            {headers:{
                cache:'no-store'
            }}
        )
        if(!response.ok){
            console.error(`error fetching nfl teams`, response.status)
            return null
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to load NFL Teams', error)
        return null
    }
}

export async function getTeamSchedule(teamId) {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}/schedule`,
            {
                headers:{
                    cache:'no-store'
                }
            }
        )
        if(!response.ok){
            console.error('error fetching team schedule', response.status)
            return null
        }
        const data = await response.json()
        // console.log('team schedule', data)
        return data
    } catch (error) {
        console.error('failed to load team schedule', error)
        return null
    }
}


export async function getWeekThreeNFLData() {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?seasontype=2&week=3`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching nfl data week 3`, response.status)
            return null
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch Week 3 NFL data', error)
        return null
    }
}

