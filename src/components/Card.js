import React from 'react'
//import axios from 'axios'
import styled from 'styled-components'
import PhotoContainer from './PhotoContainer'


const Container = styled.div`
border:1px dotted blue; 
`

const Card = () =>{


//const [data, setData] = useState([])

   const data= {
    copyright:"Jean-Francois\nGraffand",
    date:	"2019-09-13",
    explanation: "Famed in festival, story, and song the best known full moon is the Harvest Moon. For northern hemisphere dwellers that's a traditional name of the closest full moon to the September equinox. In most North America time zones this year's Harvest Moon will officially rise on Friday, September 13. In fact the same Harvest Moon will rise on September 14 for much of the planet though. Of course the Moon will look almost full in the surrounding days. Regardless of your time zone the Harvest Moon, like any other full moon, will rise just opposite the setting Sun. Near the horizon, the Moon Illusion might make it appear bigger and brighter to you but this Harvest Moon will be near lunar apogee. That's the closest point in its orbit, making it the most distant, and so the smallest, full moon of the year. On August 15 a wheat field harvested in south central France made this a harvest moon scene too, the full moon shining on with beautiful iridescent clouds at sunset.",
    hdurl:	"https://apod.nasa.gov/apod/image/1909/HarvestmoonGraffand.jpg",
    media_type:	"image",
    service_version:"v1",
    title:	"A Harvest Moon",
    url:	"https://apod.nasa.gov/apod/image/1909/HarvestmoonGraffand.jpg",
  }
 
  

 
/*
  useEffect(()=>{

    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ').then(
      response => {
        const nasa = response.data
        console.log(nasa)
        setData(nasa)
      }
    )
  },[])*/

    return(
        <div>
        <Container>
            <h2>{data.title}</h2>
            <PhotoContainer
                url={data.url}
                alt={data.title}/>

            <p className="desc">{data.explanation}</p>
        </Container>
        </div>
    )
}

export default Card