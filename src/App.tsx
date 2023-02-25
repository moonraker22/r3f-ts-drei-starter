import { Box } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'
import './App.css'
import './index.css'

const Scene = () => {
  const scene = useRef<Group>(null!)
  useFrame(() => {
    if (!scene.current) return
    scene.current.rotation.y += 0.04
    scene.current.rotation.x += 0.04
    scene.current.rotation.z += 0.04
  })
  return (
    <group ref={scene}>
      <Box>
        <meshLambertMaterial attach="material" color="white" />
      </Box>
    </group>
  )
}

function App() {
  return (
    <Canvas>
      <directionalLight intensity={0.5} />
      <Scene />
    </Canvas>
  )
}

export default App
