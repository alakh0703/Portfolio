import { useState,useEffect } from 'react';
import './App.css';
import Left from './Components/Left';
import Right from './Components/Right';
import AnimatedCursor from "react-animated-cursor"


function App() {
  const scroll2Top = () => {
    // scroll to top smoothly
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
const [Port, setPort] = useState('about')
  
  return (
    <>
    <div className="App">
    <div className='scroll2top' id='scroll2top' onClick={scroll2Top}>
  <div className='dot'></div>
</div>
      <Left Port={Port} />
      <Right setPort={setPort} />
 
    </div>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'p',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'img'
      ]}
    />

    </>
  );
}

export default App;
