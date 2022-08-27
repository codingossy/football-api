import React, {useState, useEffect} from 'react'
import axios from 'axios'

const LeagueDetails = () => {

    const [data, setData] = useState([])
    const [selectedLeague, setSelectedLeague] = useState("eng.1");


    useEffect(() => {
      axios
        .get(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/id`)
        .then((response) => {
          console.log(response.data.data);
          setData(response.data.data);
        })
        .catch((err) => console.log(err))
  }, [selectedLeague, setSelectedLeague]);

  

  return (
    <div className='container mx-auto w-full'>
      
      {data.map((data) => (
          <div key={data.id} className='league-div'>
              <img src={data.logos.light} alt="#" className='w-32 mb-4 hover:scale-110' />
              <h1 className='text-center font-semibold'>{data.name}</h1>
              <h5>{data.slug}</h5>
              <p>{data.abbr}</p>
              
          </div>
        ))}

    </div>
  )
}

export default LeagueDetails