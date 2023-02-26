import {
  Box,
  Center,
  Float,
  PresentationControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { Group } from 'three'
import './App.css'
import './index.css'

const Cube = () => {
  const scene = useRef<Group>(null!)
  const [hovered, setHovered] = useState(false)
  useFrame(() => {
    if (!scene.current) return
    scene.current.rotation.y += 0.04
    scene.current.rotation.x += 0.04
    scene.current.rotation.z += 0.04
  })

  return (
    <group ref={scene}>
      <Box
        onPointerEnter={() => setHovered(!hovered)}
        onPointerLeave={() => setHovered(!hovered)}
        scale={hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      >
        <meshLambertMaterial
          attach="material"
          color={hovered ? 'green' : 'white'}
        />
      </Box>
      <directionalLight intensity={hovered ? 0.9 : 0.3} position={[0, 2, 3]} />
    </group>
  )
}

const Text = () => {
  // Matcaps from https://github.com/nidorx/matcaps
  const [matcapTexture] = useMatcapTexture('46804D_CBE9AC_90B57C_95D38F', 256)
  return (
    <>
      <Float
        speed={5} // Animation speed, defaults to 1
        rotationIntensity={0.3} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[-0.1, 0.1]}
      >
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
        <group position={[0, -2, 0]}>
          <Center bottom>
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
              WeB DeV
              <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
          </Center>
        </group>
      </Float>
    </>
  )
}

function App() {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <PresentationControls
        enabled={true} // the controls can be disabled by setting this to false
        global={false} // Spin globally or by dragging the model
        cursor={true} // Whether to toggle cursor style on drag
        snap={false} // Snap-back to center (can also be a spring config)
        speed={1} // Speed factor
        zoom={1} // Zoom factor when half the polar-max is reached
        rotation={[0, 0, 0]} // Default rotation
        polar={[0, 0]} // Vertical limits
        azimuth={[-Infinity, Infinity]} // Horizontal limits
        config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        // The DOM element events for this controller will attach to
      >
        <directionalLight intensity={0.5} />
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Cube />
        </Float>
        <Text />
      </PresentationControls>
    </Canvas>
  )
}

export default App
