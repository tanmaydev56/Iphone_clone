import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Modelview from "./Modelview"
import { useEffect, useRef, useState } from "react"
import { yellowImg } from "../utils"
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from "@react-three/drei";
import { models, sizes } from "../constants"
import { animateWithGsapTimeline } from "../utils/animations"
import { animateWithGsap } from "../utils/animations"
const Model = () => {
    // sabse phele ref banao model ke liye
    //yeh sabh model ke liye and uskke necehe select hone wale colors ke liye
    const [model ,setmodel] = useState({
        title:'iPhone 15 pro in natural titanium.',
        color:['#8F8A81','#FFE7B9','#6F6C64'],
        img:yellowImg
    })
    //that yelloimg is texture

    //now abb camera control for the modelview
    const cameracontrolsmall = useRef();
    const cameracontrollarge = useRef();

    //abb hum mobiles ko switch karenge animation ke thru
    const tl = gsap.timeline();
  

//models
const small = useRef(new THREE.Group());
//creating a group of three elemenrts
// phir tree install kiya  npm install three @react-three/drei @react-three/fiber
const large = useRef(new THREE.Group());
//rotation value of models ka bhi tack rakhna hoga jese upar sabka rakha 
 const [smallrotation,setsmallrotation] = useState(0);
 const [largerotation,setlargerotation] = useState(0);
//second step me go to modelview compo present below and pass all the things
const [size,setsize] = useState('small');
useEffect(()=>{
    if(size==='small'){
        animateWithGsapTimeline(tl,large,largerotation,'#view2','#view1',{transform:'translateX(0)',duration:2})
    }
    if(size==='large'){
        animateWithGsapTimeline(tl,small,smallrotation,'#view1','#view2',{transform:'translateX(-100%)',duration:2})
    }

},[size,smallrotation,largerotation])



    //by default abhi small pe kkardiya hai
    useGSAP(()=>{
        gsap.to("#heading",{opacity:1,delay:1.5,y:0})
    },[])
  return (
  <section className="common-padding">
    <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
            Take a closure look.
        </h1>
        <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                <Modelview
                index={1}
                groupRef={small}
                gsapType = "view1"
                controlRef = {cameracontrolsmall}
                setRotationState={setsmallrotation}
                item={model}
                size={size}
                />
                  <Modelview
                index={2}
                groupRef={large}
                gsapType = "view2"
                controlRef = {cameracontrollarge}
                setRotationState={setlargerotation}
                item={model}
                size={size}
                />
                {/* now we need to show canvas toh canvas laoo */}
                <Canvas 
                className="w-full h-full " style={{position:'fixed',top:0,bottom:0,left:0,right:0,overflow:'hidden'}}
                eventSource={document.getElementById('root')}
                >
                    <View.Port/>
                    {/* same canvas me multiple model render krta hai view port */}
                </Canvas>
            </div>

    <div className="mx-auto w-full">
        <p className="text-sm font-light text-center mb-5">{model.title}</p>
        <div className="flex-center">
            <ul className="color-container">
                {
                    models.map((item,i)=>(
                        <li
                            key={i} className="w-6 h-6 rounded-full mx-2 "
                            style={{backgroundColor:item.color[0]}}
                            
                        />
                    ))
                }
            </ul>
            <button className="size-btn-container">
                {
                    sizes.map(({label,value})=>(<span key={label} className="size-btn"
                    style={{backgroundColor:size===value?'white':'transparent',color:size===value?'black':'white'}} 
                    onClick={()=>{
                        setsize(value)
                    }}
                    >
                        {label}
                    </span>))
                }
            </button>
        </div>
    </div>



        </div>
    </div>
  </section>
  )
}

export default Model
