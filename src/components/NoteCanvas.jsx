import { useEffect } from "react";
import { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


function NoteCanvas() {
  const [text, setText] = useState('app');
  const [message, setMessage] = useState('')
  const commands = [{
    command: 'I would like to order *',
    callback: (food) => setMessage(`Your order is for: ${food}`)
  },
  {
    command: 'clear',
    callback: ({ resetTranscript }) => resetTranscript()
  }];
  const {transcript, finalTranscript, interimTranscript, resetTranscript,
    listening} = useSpeechRecognition({commands});
  

    console.log('t, ft, it', transcript, finalTranscript, interimTranscript);

    useEffect(() => {
      if(finalTranscript !== ''){
        console.log('Final Results', finalTranscript);
      }
    }, [interimTranscript, finalTranscript]);

    useEffect(() => {
      setText('This is the text text-black font-medium min-h-10 mx-auto rounded-md relative');
    }, []);

    function listenContinuously() {
      SpeechRecognition.startListening({
        continuous: true,
        language: 'en-US'
      });
    }

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setText('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
      return null;
    }



  

  return (
    // <div className='max-w-96 bg-white text-black font-medium min-h-10 mx-auto rounded-md relative leading-10 mt-4'>
    <div>
      <div className="words mb-2">
        {message}
        <br/>
        {text}
        <br/>
        {transcript}
      </div>
      Listening: {listening ? 'on' : 'off'}

      <div>
          <button type="button" onClick={resetTranscript}>Reset</button> <br/>
          <button type="button" onClick={listenContinuously}>Listen</button> <br/>
          <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
    </div>
  )
}

export default NoteCanvas