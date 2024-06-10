import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import Loader from "./Loader"
import Lights from "./Lights"
import * as THREE from 'three'
import { Suspense } from "react"
import Iphone from "../components/Iphone"
const Modelview = ({index,groupRef,gsapType,controlRef,setRotationState,item,size}) => {
  return (
   <View
   index={index}
   id={gsapType}
   className={` w-full h-full absolute ${index===2 ?'right-[-100%]':''}`}
   >
{/* ambient light joh 2no model ko equal light provide karega  (which lights up all the objects in the secene equally) */}
<ambientLight  intensity={0.3}/> 
{/* simulates the perspective of a human eye  */}
<PerspectiveCamera makeDefault position={[0,0,4]}/>

<Lights/>

<OrbitControls
makeDefault 
ref={controlRef}
enableZoom={false}
enablePan={false}
rotateSpeed={0.4}
target0={new THREE.Vector3(0,0,0)}
onEnd={()=>setRotationState(controlRef.current.getAzimuthalAngle())}
/>
<group ref={groupRef} name={`${index===1}? 'small':'large' `} position={[0,0,0]}>
{/* yeh bus model se phele show hoga */}

<Suspense fallback={<Loader/>}>

<Iphone
 scale={index===1?[15,15,15]:[17,17,17]}
 item={item}
 size={size}
/>
</Suspense>
</group >

{/* iske badd model laoo to .glb me haai model toh usee convert karo .jsx me ek github repo hai uske through  https://github.com/pmndrs/gltfjsx */}
   </View>
  )
}

export default Modelview
