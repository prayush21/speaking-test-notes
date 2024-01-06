import { useState } from 'react'

import './App.css'
import NoteCanvas from './components/NoteCanvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <NoteCanvas />
    </div>
  )
}

export default App
