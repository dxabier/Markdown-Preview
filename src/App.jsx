import { useState } from 'react'
import  texto from './helper.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {marked} from 'marked';

function App() {
  const [input, setInput] = useState(texto)

  const handleChange = (e) => {
    setInput(e.target.value)    
  }

  marked.setOptions({
    breaks: true
  })

  return (
    <>
       <div className='container'>        
       <h1 className='text-center'>Markdown Previewer</h1>
        <div className='row'>                    
          <div className='col-md-6 col--12'>
            <textarea id="editor" value={input} onChange={handleChange}>          
            </textarea>
          </div>
          <div className='col-md-6 col-sm-12 desplaza'>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(input)}}></div>            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
