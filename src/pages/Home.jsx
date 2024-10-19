import React, {useEffect, useState} from 'react'
import MemeCard from '../components/Card'
import {getAllMemes} from '../api/memes'
const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
     getAllMemes()
       .then((memes)=> setData(memes.data.memes))
  }, [])

  return (
    <div className="grid grid-cols-4 gap-5 p-4">
        {
          data.map(el => <MemeCard key={el.id} img={el.url} title ={el.name}/>)
        }
    </div>
  )
}

export default Home