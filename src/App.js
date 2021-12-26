import logo from './static/gv_logo.png';
import './App.css';
import { Steps, Popover } from 'antd';
import React from 'react';

import logo1 from './static/logos/Bitkeep_icon@2x.png'
import logo2 from './static/logos/RMRK_icon@2x.png'
import logo3 from './static/logos/OPGames_icon@2x.png'
import logo4 from './static/logos/sidus_icon.jpg'
import logo5 from './static/logos/Conflux_icon@2x.png'
import logo6 from './static/logos/Certik_icon@2x.png'
import logo7 from './static/logos/rainmaker_icon.jpg'
import logo8 from './static/logos/99startup_icon.jpg'
import logo9 from './static/logos/Joysteam_icon@2x.png'
import logo10 from './static/logos/invarch_icon.jpg'
import logo11 from './static/logos/filswan_icon.jpg'
import logo12 from './static/logos/HurricaneSwap_icon@2x.png'
import logo13 from './static/logos/fightclub_icon.jpg'
import logo14 from './static/logos/CERE_icon@2x.png'
import logo15 from './static/logos/breach_icon.jpg'
import logo16 from './static/logos/Nulink_icon@2x.png'
import logo17 from './static/logos/HarmonyLauncher_icon.jpg'

import bg from './static/Portfolios_bg@2x.png'
import intro_bg from './static/bg_img.png'
import yuhangyuan from './static/yuhangyuan_img@2x.png'
import { isMobile } from './platform';
const { Step } = Steps;

const steps = [
  '',
  'Home',
  'Brief Introduction',
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
        let el = document.getElementById(steps[index].replace(' ','_'))
        console.log(steps[index].replace(' ','_'))
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
    <div className={`App ${isMobile()?'mobile':''}`} ref={scroll}>
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
                  {index==current?isMobile()?item.slice(0,11):item:'0'+(index)}
                </div>
              }
              className={(index===0||index===steps.length-1)?
                'initial-step':
                (index===steps.length-2)?
                  'last-step'
                  :(index===1)?
                    'first-step'
                    :''
              }
            />
          ))}
        </Steps>
      </div>

      <div className='Section Home' id='Home'>

        <div className='Home-horizontal'>
          <div className='Home-h'>
            <p>
            In Math <br></br> We Trust,
            In Reality We Change
              </p>
          </div>
          <img className='Home-img' src={yuhangyuan}></img>
        </div>

        <div className='Home-hr'></div>
        <div className='Home-hr-block'></div>

      </div>

      <div className='Section Intro' id='Brief_Introduction'>
        <h2 className='Intro-h'>Our History</h2>

        <div hidden={isMobile()} className='Intro-img-container '>
          <img className='Intro-img ' src={intro_bg}></img>
        </div>

        <div className='Intro-p'>
          We are persistently holding a strong belief that blockchain technology is the future of our next generation and some of those products have already come to reality.
          We are unremittingly seeking investment targets in this field that can potentially reshape the future with the power of blockchain and have an opportunity to be endowed with full support from us.
          Thus, regardless of monetary funding, we also offer strategic resources to our portfolio partners from the ecosystem of Glock Ventures, including rich partnership resources, professional marketing skills,  strategic community programs, and other post-investment services.
        </div>

      </div>

      <div className='Section Portfolios' id='Portfolios'>
        <div className='Portfolios-center'>
          <div>
            <a href={'https://twitter.com/BitKeepOS'} target={'_blank'}>
            <img src={logo3}></img></a>
            Bitkeep
          </div>
          <div>
            <a href={'https://twitter.com/RmrkApp'} target={'_blank'}>
            <img src={logo4}></img></a>
            RMRK
          </div>
          <div>
            <a href={'https://twitter.com/OPGames_'} target={'_blank'}>
            <img src={logo5}></img></a>
            OPGames
          </div>
          <div>
            <a href={'https://twitter.com/galaxy_sidus'} target={'_blank'}>
            <img src={logo6}></img></a>
            Sidus
          </div>
          <div>
            <a href={'https://twitter.com/Conflux_Network'} target={'_blank'}>
            <img src={logo1}></img></a>
            Conflux
          </div>
          <div>
            <a href={'https://twitter.com/certik_io'} target={'_blank'}>
            <img src={logo2}></img></a>
            CertiK
          </div>
          <div>
            <a href={'https://twitter.com/RainmakerGaming'} target={'_blank'}>
            <img src={logo7}></img></a>
            Rainmaker
          </div>
          <div>
            <a href={'https://twitter.com/99Starz_'} target={'_blank'}>
            <img src={logo8}></img></a>
            99Starz
          </div>
          <div>
            <a href={'https://twitter.com/JoystreamDAO'} target={'_blank'}>
            <img src={logo9}></img></a>
            Joystream
          </div>
          <div>
            <a href={'https://twitter.com/InvArchNetwork'} target={'_blank'}>
            <img src={logo10}></img></a>
            InvArch
          </div>
          <div>
            <a href={'https://twitter.com/filswan1'} target={'_blank'}>
            <img src={logo11}></img></a>
            FilSwan
          </div>
          <div>
            <a href={'https://twitter.com/HurricaneSwap'} target={'_blank'}>
            <img src={logo12}></img></a>
            Hurricaneswap
          </div>
          <div>
            <a href={'https://twitter.com/CFCFIGHTING'} target={'_blank'}>
            <img src={logo13}></img></a>
            Crypto FIGHT Club
          </div>
          <div>
            <a href={'https://twitter.com/cerenetwork'} target={'_blank'}>
            <img src={logo14}></img></a>
            CERE
          </div>
          <div>
            <a href={'https://twitter.com/Breach_GG'} target={'_blank'}>
            <img src={logo15}></img></a>
            Breach
          </div>
          <div>
            <a href={'https://twitter.com/NuLink_'} target={'_blank'}>
            <img src={logo16}></img></a>
            Nulink
          </div>
          <div>
            <a href={'https://twitter.com/HarmonyLauncher'} target={'_blank'}>
            <img src={logo17}></img></a>
            Harmony Launcher
          </div>
        </div>
      </div>

      <div className='Section_last'>
        <div className='Section_last__content Contact' id='Contact'>
          <div className='Contact-center'>
            <div className='Contact-title'>Contact</div>
            <div className='Contact-info1'>Twitter：
              <a href={"https://twitter.com/GlockVentures"} target={"_blank"}>@GlockVentures</a></div>
            <div className='Contact-info1'>Email：
              <a href={"mailto:invest@glockventures.com"} target={"_blank"}>invest@glockventures.com</a></div>
          </div>
        </div>
        <footer>
          © Copyright 2021 {isMobile()?<br/>:'|'} Glock Ventures | All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

export default App;
