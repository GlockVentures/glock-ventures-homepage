import logo from './static/gv_logo.png';
import './App.css';
import { Steps, Popover } from 'antd';
import React from 'react';

import logo_defiyield from './static/logos/defiyield0.jpg'
import logo_taunt from './static/logos/Taunt_Battleworld.jpg'
import logo_bitkeep from './static/logos/Bitkeep_icon@2x.png'
import logo_rmrk from './static/logos/RMRK_icon@2x.png'
import logo_opgames from './static/logos/OPGames_icon@2x.png'
import logo_sidus from './static/logos/sidus_icon.jpg'
import logo_conflux from './static/logos/Conflux_icon@2x.png'
import logo_certik from './static/logos/Certik_icon@2x.png'
import logo_rainmaker from './static/logos/rainmaker_icon.jpg'
import logo_99startup from './static/logos/99startup_icon.jpg'
import logo_joysteam from './static/logos/Joysteam_icon@2x.png'
import logo_invarch from './static/logos/invarch_icon.jpg'
import logo_filswan from './static/logos/filswan_icon.jpg'
import logo_hurricane from './static/logos/HurricaneSwap_icon@2x.png'
import logo_fightclub from './static/logos/fightclub_icon.jpg'
import logo_cere from './static/logos/CERE_icon@2x.png'
import logo_breach from './static/logos/breach_icon.jpg'
import logo_nulink from './static/logos/Nulink_icon@2x.png'
import logo_harmonylauncher from './static/logos/HarmonyLauncher_icon.jpg'

import bg from './static/Portfolios_bg@2x.png'
import intro_bg from './static/bg_img.png'
import yuhangyuan from './static/yuhangyuan_img@2x.png'
import { isMobile } from './platform';

const logo_names = [
  {
    name:"RMRK",
    twitter:"https://twitter.com/RmrkApp",
    logo:logo_rmrk
  },
  {
    name:"OPGames",
    twitter:"https://twitter.com/OPGames_",
    logo:logo_opgames
  },
  {
    name:"Sidus",
    twitter:"https://twitter.com/galaxy_sidus",
    logo:logo_sidus
  },
   {
    name:"Rainmaker",
    twitter:"https://twitter.com/RainmakerGaming",
    logo:logo_rainmaker
  },
   {
    name:"99Starz",
    twitter:"https://twitter.com/99Starz_",
    logo:logo_99startup
  },
    {
    name:"Joystream",
    twitter:"https://twitter.com/JoystreamDAO",
    logo:logo_joysteam
  },
    {
    name:"InvArch",
    twitter:"https://twitter.com/InvArchNetwork",
    logo:logo_invarch
  },
    {
    name:"FilSwan",
    twitter:"https://twitter.com/filswan1",
    logo:logo_filswan
  },
  {
    name:"DefiYield",
    twitter:'https://twitter.com/defiyield_app',
    logo:logo_defiyield
  },
   {
    name:"Taunt",
    twitter:'https://twitter.com/playtaunt',
    logo:logo_taunt
  },
  {
    name:"Bitkeep",
    twitter:'https://twitter.com/BitKeepOS',
    logo:logo_bitkeep
  },
  {
    name:"Conflux",
    twitter:"https://twitter.com/Conflux_Network",
    logo:logo_conflux
  },
   {
    name:"CertiK",
    twitter:"https://twitter.com/certik_io",
    logo:logo_certik
  },
    {
    name:isMobile()?'HSwap':'Hurricaneswap',
    twitter:"https://twitter.com/HurricaneSwap",
    logo:logo_hurricane
  },
    {
    name:"CFC",
    twitter:"https://twitter.com/CFCFIGHTING",
    logo:logo_fightclub,
  },
    {
    name:"CERE",
    twitter:"https://twitter.com/cerenetwork",
    logo:logo_cere
  },
  {
    name:"Breach",
    twitter:"https://twitter.com/Breach_GG",
    logo:logo_breach
  },
  {
    name:"Nulink",
    twitter:"https://twitter.com/NuLink_",
    logo:logo_nulink
  },
  {
    name:"Harmony Launcher",
    twitter:"https://twitter.com/HarmonyLauncher",
    logo:logo_harmonylauncher
  },
]



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
          <div className={isMobile()?'Home-h-mobile':'Home-h'}>
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

        {/*<div hidden={isMobile()} className='Intro-img-container '>*/}
          {/*<img className='Intro-img ' src={intro_bg}></img>*/}
        {/*</div>*/}

        <div className='Intro-p'>
          We are persistently holding a strong belief that blockchain technology is the future of our next generation and some of those products have already come to reality.
          We are unremittingly seeking investment targets in this field that can potentially reshape the future with the power of blockchain and have an opportunity to be endowed with full support from us.
          Thus, regardless of monetary funding, we also offer strategic resources to our portfolio partners from the ecosystem of Glock Ventures, including rich partnership resources, professional marketing skills,  strategic community programs, and other post-investment services.
        </div>

      </div>

      <div className='Section Portfolios' id='Portfolios'>
        <div className='Portfolios-center'>
          {logo_names.map((item, index)=>{
          return(
            <div>
            <a href={item.twitter} target={'_blank'}>
            <img src={item.logo}></img></a>
              {item.name}
          </div>
              )})
          }
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
