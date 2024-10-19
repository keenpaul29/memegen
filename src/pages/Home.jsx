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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {
          data.map(el => <MemeCard key={el.id} img={el.url} title ={el.name}/>)
        }
    </div>
  )
}

export default Home