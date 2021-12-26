import logo from './static/gv_logo.png';
import './App.css';
import { Steps, Popover } from 'antd';
import React from 'react';
import logo1 from './static/logos/Conflux_icon@2x.png'
import logo2 from './static/logos/Certik_icon@2x.png'
import logo3 from './static/logos/Bitkeep_icon@2x.png'
import logo4 from './static/logos/HurricaneSwap_icon@2x.png'
import logo5 from './static/logos/Crypto_icon@2x.png'
import logo6 from './static/logos/RMRK_icon@2x.png'
import logo7 from './static/logos/Evanesco_icon@2x.png'
import logo8 from './static/logos/CERE_icon@2x.png'
import logo9 from './static/logos/OPGames_icon@2x.png'
import logo10 from './static/logos/Nulink_icon@2x.png'
import logo11 from './static/logos/Crypto_icon@2x.png'
import logo12 from './static/logos/Nulink_icon@2x.png'
import bg from './static/Portfolios_bg@2x.png'
import intro_bg from './static/bg_img@2x.png'
import yuhangyuan from './static/yuhangyuan_img@2x.png'
const { Step } = Steps;

const steps = [
  '',
  'Home',
  'Brief Inrtoduction',
  'Portfolios',
  'Contact',
  '',
];


function App() {

  const [ current, setCurrent ] = React.useState(1)

  const [ scrolling, setScrolling ] = React.useState(false)

  const scroll = React.useRef()

  // const [ offset, setOffset ] = React.useState(0)

  React.useEffect(()=>{
    if(scroll.current){
      scroll.current.addEventListener('scroll', (event) => {
        let scrollTop = scroll.current.scrollTop;
        if(scrolling===false){
          setCurrent(parseInt(scrollTop/window.innerHeight + 0.4) + 1)
        }
      });
    }
  },[scroll])

  React.useEffect(()=>{
    if(scrolling){
      let index = scrolling
      setTimeout(()=>setCurrent(index), 1000)
      if(steps[index]){
        let el = document.getElementById(steps[index])
        if(el){
          el.scrollIntoView({behavior:'smooth'})
        }
      }
    }
  },[scrolling])
  
  React.useEffect(()=>{setScrolling(false)},[current])

  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      <div className={`Dot-container ${index===current?'selected':''}`}>
        <div className={`Dot-number-positioner`}>
          <div className={`Dot-number`} hidden={index!==current}>
            0{index}
          </div>
        </div>
        {dot}
      </div>
    </Popover>
  );

  return (
    <div className="App" ref={scroll}>
      <div className='App-left'>
        <img src={logo} className="App-logo" alt="logo" />
        <Steps
          current={current}
          className='App-steps'
          direction="vertical"
          progressDot={customDot}
          onChange={(index)=>{
            setScrolling(index)
          }}
        >
          {steps.map((item, index) => (
            <Step
              key={item}
              title={
                <div className='App-step-title'>
                  {index==current?item:'0'+(index)}
                </div>
              }
              className={(index===0||index===steps.length-1)?
                'initial-step':
                (index===steps.length-2)?
                  'last-step'
                  :''}
            />
          ))}
        </Steps>
      </div>

      <div className='Section Home' id='Home'>

        <div className='Home-horizontal'>
          <div className='Home-h'>
            In Reality We Trust,
            In Reality We Change
          </div>
          <img className='Home-img' src={yuhangyuan}></img>
        </div>

        <div className='Home-hr'></div>
        <div className='Home-hr-block'></div>

      </div>

      <div className='Section Intro' id='Brief Inrtoduction'>
        <h2 className='Intro-h'>Our History</h2>

        <div className='Intro-img-container '>
          <img className='Intro-img ' src={intro_bg}></img>
        </div>

        <div className='Intro-p'>
          We has been holding a strong belief of blockchain being the future for our
           next generations, which has already arrived. We unremittingly seek for 
           targets that can potentially shape the future by the power of blockchain, 
           and back our partners with full support. Beside funding, we offer strategic 
           resources to our portfolio partners in the pipeline of Glock Ventures from 
           the perspectives of partnership resources, marketing & community and other 
           post-investment services.
        </div>

      </div>

      <div className='Section Portfolios' id='Portfolios'>
        <div className='Portfolios-center'>
          <div>
            <img src={logo1}></img>
            Conflux
          </div>
          <div>
            <img src={logo2}></img>
            Cirtik
          </div>
          <div>
            <img src={logo3}></img>
            Bitkeep
          </div>
          <div>
            <img src={logo4}></img>
            Hurricaneswap
          </div>
          <div>
            <img src={logo5}></img>
            Crypto Fight Club
          </div>
          <div>
            <img src={logo6}></img>
            RMRK
          </div>
          <div>
            <img src={logo7}></img>
            Evanesco
          </div>
          <div>
            <img src={logo8}></img>
            Cere
          </div>
          <div>
            <img src={logo9}></img>
            OP Games
          </div>
          <div>
            <img src={logo10}></img>
            Nulink
          </div>
          <div>
            <img src={logo11}></img>
            Crypto Fight Club
          </div>
          <div>
            <img src={logo12}></img>
            Nulink
          </div>
        </div>
      </div>

      <div className='Section_last'>
        <div className='Section_last__content Contact' id='Contact'>
          <div className='Contact-center'>
            <div className='Contact-title'>Contact</div>
            <div className='Contact-info1'>Twitter：@GlockVentures</div>
            <div className='Contact-info1'>Email：invest@glockventures.com</div>
          </div>
        </div>
        <footer>
          © Copyright 2021 | Glock Ventures | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

export default App;
