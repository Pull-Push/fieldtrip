import { getAllData, getWeekThreeData } from "@/lib/nfl";

const [nflData, week3Data] = await Promise.all([getAllData(), getWeekThreeData()])
// console.log('allData', nflData)
// console.log('drilled', nflData.leagues[0]) JUST LEAGUE INFORMATION
// console.log('entries', nflData.leagues[0].calendar[0].entries)

console.log('week3', week3Data)

export default function Home() {

  return (
    <div>
      <h1>FIELDTRIP</h1>
      <h2>DATA FOR {nflData.leagues[0].name}</h2>
      {nflData.leagues[0].calendar.map((single) =>(
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
      ))}
    </div>
  );
}
