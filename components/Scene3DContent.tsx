'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion-3d'
import { Text } from '@react-three/drei'

export default function Scene3DContent() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Float
        speed={4}
        rotationIntensity={0.5}
        floatIntensity={2}
      >
        <motion.group
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          <Text
            fontSize={1.2}
            color="#4F46E5"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
          >
            Mohamed Hakkou
          </Text>
        </motion.group>
      </Float>

      <Float
        speed={4}
        rotationIntensity={0.5}
        floatIntensity={2}
        position={[0, -2, 0]}
      >
        <Text
          fontSize={0.5}
          color="#818CF8"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Medium.woff"
        >
          Software Engineer
        </Text>
      </Float>
    </Canvas>
  )
}
