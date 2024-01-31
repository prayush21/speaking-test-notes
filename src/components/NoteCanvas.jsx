import { useEffect } from "react";
import { useState } from "react"

function NoteCanvas() {
  const [text, setText] = useState('app');


  useEffect(() => {
    setText('This is the text text-black font-medium min-h-10 mx-auto rounded-md relative');
  }, []);

  return (
    <div className='max-w-96 bg-white text-black font-medium min-h-10 mx-auto rounded-md relative leading-10 mt-4'>
      <div className="words">
        {text}
      </div>
    </div>
  )
}

export default NoteCanvas