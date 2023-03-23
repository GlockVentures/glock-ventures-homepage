// import logo from './static/HDlogo.png';
import logo from './static/logo_white.png';
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
import logo_airstack  from './static/logos/Airstack_icon.jpeg'
import logo_soshow from './static/logos/Soshow_logo.png'
import logo_nulink from './static/logos/Nulink_icon@2x.png'
import logo_harmonylauncher from './static/logos/HarmonyLauncher_icon.jpg'
import logo_cardinal from './static/logos/Cardinal_logo.png'
import logo_dojima from './static/logos/DojimaNetwork_logo.jpeg'
import logo_chia from './static/logos/logo_chia.png'
import logo_immutable from './static/logos/logo_immutable.jpeg'
import bg from './static/Portfolios_bg@2x.png'
import intro_bg from './static/bg_img.png'
import yuhangyuan from './static/yuhangyuan_img@2x.png'
// import yuhangyuan from './static/HDlogo.png'
import { isMobile } from './platform';
import twitter_logo from './static/twitter.svg'
import medium_logo from './static/medium.svg'

const valueadd_content = [
  {
    title:"Invest",
    content:"We've been investing and incubating some of the most well-known and successful projects in the crypto space since 2017. We always look for the best ones and put our bet."
  },
  {
    title:"Advise",
    content:"We help projects improve on the basics of successful projects in the space, including roadmaps, tokenomics, go to market strategy etc. We are dedicating our years of experiences and knowledges into our supported projects after witnessing and studying thousands of projects. "
  },
  {
    title:"Support",
    content:"As a result of our vast portfolio, we are able to connect the founders we support with the portfolio network created through years and share the best minds. We also connect projects strategically with suitable investment resources, exchange resources, market networks etc to accelerate projects on different perspectives."
  }
]

const logo_names = [
  {
    name:"RMRK",
    twitter:"https://twitter.com/RmrkApp",
    logo:logo_rmrk
  },
  {
    name:"FilSwan",
    twitter:"https://twitter.com/0xfilswan",
    logo:logo_filswan
  },
  {
    name:"Joystream",
    twitter:"https://twitter.com/JoystreamDAO",
    logo:logo_joysteam
  },
  {
    name:"Rainmaker",
    twitter:"https://twitter.com/RainmakerGaming",
    logo:logo_rainmaker
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
    name:"Cardinal",
    twitter:'https://twitter.com/cardinal_labs/',
    logo:logo_cardinal
  },
  {
    name:"Dojima",
    twitter:'https://twitter.com/dojimanetwork',
    logo:logo_dojima
  },
  {
    name:"Nulink",
    twitter:"https://twitter.com/NuLink_",
    logo:logo_nulink
  },
  {
    name:"De.Fi",
    twitter:'https://twitter.com/DeDotFi',
    logo:logo_defiyield
  },
  {
    name:"Bitkeep",
    twitter:'https://twitter.com/BitKeepOS',
    logo:logo_bitkeep
  },
  {
    name:"InvArch",
    twitter:"https://twitter.com/InvArchNetwork",
    logo:logo_invarch
  },
  {
    name:"CERE",
    twitter:"https://twitter.com/cerenetwork",
    logo:logo_cere
  },
  {
    name:"Chia",
    twitter:"https://twitter.com/chia_project",
    logo:logo_chia
  },
  {
    name:"Immutable",
    twitter:"https://twitter.com/Immutable",
    logo:logo_immutable
  },
  {
    name:"Conflux",
    twitter:"https://twitter.com/Conflux_Network",
    logo:logo_conflux
  },
  {
    name:"Airstack",
    twitter:"https://twitter.com/airstack_xyz",
    logo:logo_airstack
  },
   {
    name:"Soshow",
    twitter:"https://twitter.com/soshow_eth",
    logo:logo_soshow
  },
  {
    name:"CertiK",
    twitter:"https://twitter.com/CertiK",
    logo:logo_certik
  },
   {
    name:"99Starz",
    twitter:"https://twitter.com/99Starz_",
    logo:logo_99startup
  },
  {
    name:isMobile()?'HSwap':'Hurricaneswap',
    twitter:"https://twitter.com/HurricaneSwap",
    logo:logo_hurricane
  },
  // {
  //   name:"Harmony Launcher",
  //   twitter:"https://twitter.com/HarmonyLauncher",
  //   logo:logo_harmonylauncher
  // },
]



const { Step } = Steps;

const steps = [
  '',
  'Home',
  'Brief Introduction',
  'Value Add',
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
        <div className={isMobile()?'header-mobile':'header'}>
          <ul>
            <li>
              <a href='#Portfolios'> Portfolio</a>
            </li>
            <li>
              <a href='#Value_Add'> Value Add</a>
            </li>
            <li>
              <a href='#Contact'> Contact</a>
            </li>
            <li>
              <a href='https://twitter.com/GlockVentures' target="_blank"> 
              <img src={twitter_logo} alt='icon' />
              </a>
            </li>
            <li>
              <a href='https://medium.com/@invest_71820' target="_blank"> 
              <img src={medium_logo} alt='icon' />
              </a>
            </li>
          </ul>
        </div>
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
        <h2 className='Intro-h Margin_box'>Our History</h2>

        {/*<div hidden={isMobile()} className='Intro-img-container '>*/}
          {/*<img className='Intro-img ' src={intro_bg}></img>*/}
        {/*</div>*/}

        <div className='Intro-p'>
          As a group of passionate and firmly-believed web3 preachers and practitioners since 2017,
          we persistently hold a strong belief that blockchain technology is the future of our next generation, 
          and we've got lucky enough to witness some of those products we supported have already come to reality and change the industry landscape. 
          <br/>
          <br/>
          <br/>We are unremittingly seeking investment targets in this field that can potentially reshape the future with the power of blockchain which we will provide full support and attention to.
        </div>

      </div>
      
      <div className='Section Intro ' id='Value_Add'>
        <h2 className='Intro-h'>Value Add</h2>
        <div className='Intro-h'>
          {valueadd_content.map((item, index)=>{
          return(
            <div className='s-wrapper'>
            <h3 className='section-title'>{item.title}</h3>
            <p >{item.content}</p>
              
          </div>
              )})
          }
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
              <div className='Contact-info1'>Medium：
              <a href={"https://medium.com/@invest_71820"} target={"_blank"}>@invest_71820</a></div>
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
