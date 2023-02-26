import {
  Box,
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei'
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

const Text = () => {
  // Matcaps from https://github.com/nidorx/matcaps
  const [matcapTexture] = useMatcapTexture('46804D_CBE9AC_90B57C_95D38F', 256)
  return (
    <group position={[0, 2, 0]}>
      <Center top>
        <Text3D
          font={'/font.typeface.json'}
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.04}
          bevelSize={0.04}
          bevelOffset={0}
          bevelSegments={5}
        >
          MooNRakeR
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </group>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <directionalLight intensity={0.5} />
      <Scene />
      <Text />
    </Canvas>
  )
}

export default App
