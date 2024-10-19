import React,{useState, createRef} from 'react'
import Text from '../components/Text';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom'
import {exportComponentAsJPEG} from 'react-component-export-image'

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <div ref={memeRef} className='meme mt-5 mb-5' style={{width: "full", border: "1px solid"}} >
            <img src={params.get("url")} width="250px" />
            {
                Array(count).fill(0).map(e => <Text />)
            }
        </div>
        
        <button onClick={addText} className='bg-sky-300 hover:bg-sky-500 rounded border border-black px-4 mr-3'>Add Text</button>
        <button variant="success"  className='bg-green-300 hover:bg-green-600 rounded border border-black px-4 ml-3'  onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</button>
    </div>
    
  )
}

export default EditPage