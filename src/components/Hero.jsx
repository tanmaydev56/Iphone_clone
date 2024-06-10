import gsap from 'gsap'
import { heroVideo,smallHeroVideo } from '../utils'
import {useGSAP} from '@gsap/react'
import { useEffect, useState } from 'react'
//   useGSAP(()=>{},[]) gsap can be used as a hook

const Hero = () => {
  const  [VideoSrc ,setVideoSrc ]= useState(window.innerWidth<760?smallHeroVideo:heroVideo)
  useGSAP(()=>{
    gsap.to('#hero',{opacity:1, delay:1.5})
    gsap.to('#cta',{opacity:1, delay:1.5 ,y:-45})
  },[])
  const handlevideosrcset =()=>{
   if(window.innerWidth<  760){
    setVideoSrc(smallHeroVideo)
   }
   else{
    setVideoSrc(heroVideo)
   }
  }
// connect this function to useeffect hook
useEffect(()=>{
window.addEventListener('resize',handlevideosrcset);
return()=>{
  window.removeEventListener('resize',handlevideosrcset);
}
},[])
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center  flex-col">
      <p id="hero" className="hero-title">iPhone 15 Pro</p>
      <div className="md:w-10/12 w-9/12  ">
      <video className='pointer-events-none  ' autoPlay muted playsInline={true} key={VideoSrc}>
        <source  src={VideoSrc} type="video/mp4"/>
      </video>
      </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn' >Buy</a>
        <p>From $188/ Month or $999</p>
      </div>
     
      
    </section>
    // nav height se hero nav ke neche ajayega
  )
}

export default Hero
