import React, { Suspense } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Astronaut } from '../components/Astronauts'
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { easing } from 'maath';
import { Float  } from '@react-three/drei';
import Loader from '../components/Loader';



const Hero = () => {
  const isMoblie = useMediaQuery({maxWidth: 853})
  return (
    <section id='home' className='flex items-start justify-center md:items-center md:justify-start miin-h-screen overflow-hidden c-space'>
      <HeroText/>
      <ParallaxBackground/>
      <figure className='absolute inset-0 ' 
      style={{width:"100vw",height: "100vh"}}
      >
        <Canvas camera={{position:[0,1,3]}}>
          <Suspense fallback={<Loader/>}>
          <Float>
          <Astronaut 
          scale={isMoblie && 0.23} 
          position={isMoblie && [0, -1.5, 0]}/>
          </Float>
          <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig(){
  return(
    useFrame((state, delta) => {
       easing.damp3(
        state.camera.position, 
        [state.mouse.x /10, 1+state.mouse.y/10, 3,],
      0.5,
      delta
      );
    })
  )
}

export default Hero