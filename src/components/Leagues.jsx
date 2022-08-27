import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Leagues = () => {
  const [data, setData] = useState([])

   useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className='w-full grid place-items-center justify-center grid-cols-2 text-center lg:grid-cols-4 gap-x-4 gap-y-10 py-10 '>

        {data.map((data) => (
          <div key={data.id} className='league-div'>
              <img src={data.logos.light} alt="#" className='w-32 mb-4 hover:scale-110' />
              <h1 className='text-center font-semibold'>{data.name}</h1>
          </div>
        ))}
        
    </div>
  )
}

export default Leagues