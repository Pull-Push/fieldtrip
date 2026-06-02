import { getAllNFLData, getNFLTeams, getTeamSchedule } from "@/lib/nfl";
import { getAllMLBData } from "@/lib/mlb";
import { getAllMLSData } from "@/lib/mls";
import { getAllNBAData } from "@/lib/nba";
import { getAllNCAAFData } from "@/lib/ncaaf";
import { getAllNCAAMData } from "@/lib/ncaam";
import { getAllNHLData } from "@/lib/nhl";
import { getAllUSWNTData } from "@/lib/uswnt";
import { getAllWBNAData } from "@/lib/wbna";




const [nflData, nflTeams, mlbData, mlsData, nbaData, ncaafData, ncaamData, nhlData, uswntData, wnbaData] = await Promise.all([getAllNFLData(), getNFLTeams(),
      getAllMLBData(),getAllMLSData(), getAllNBAData(), getAllNCAAFData(), getAllNCAAMData(), getAllNHLData(), getAllUSWNTData(), getAllWBNAData() ])
      // console.log('nflTeams', nflTeams)

const scheduleData = await getTeamSchedule(30)
// console.log('niners Sched', scheduleData)
console.log( 'Sched drill', scheduleData.events[2].competitions[0].venue)


export default function Home() {

  return (
    <div>
      <h1>FIELDTRIP</h1>
      {/* <h2>DATA FOR {nflData.leagues[0].name}</h2> */}
      {/* {nflData.leagues[0].calendar.map((single) =>(
        <div key={single.value}>
          <p>{single.label}</p>
          <p>{new Date(single.startDate).toLocaleDateString()} - {new Date(single.endDate).toLocaleDateString()}</p>
        </div>
      ))}
      {nflData.events.map((singleEvent) => (
        <div key={singleEvent.id}>
          <p>Week {singleEvent.week.number}</p>
          <p>{singleEvent.name}</p>
          <p>{new Date(singleEvent.date).toLocaleDateString()}</p>
          <p>WHERE:</p>
          <p>{singleEvent.competitions[0].venue.fullName}</p>
          <p>{singleEvent.competitions[0].venue.address.city},{singleEvent.competitions[0].venue.address.state} {singleEvent.competitions[0].venue.address.country}</p>
        </div>
      ))} */}
    {/* NFL TEAMS */}
    {/* {nflTeams.items.map((team) => (
      <div key = {team.id}>
        <h2>{team.displayName}</h2>
        </div>
    ))} */}
    {/* SAMPLE SCHEDULE */}
    <h1>{scheduleData.displayName} Schedule Data</h1>
    {scheduleData.events.map((event) => (
      <div key={event.id}>
        <p>{event.shortName}</p>
        <p>Location:{event.competitions[0].venue.fullName}</p>
        <p>{event.competitions[0].venue.address.city} - {event.competitions[0].venue.address.country}</p>
      </div>
    ))}
    </div>
  );
}
