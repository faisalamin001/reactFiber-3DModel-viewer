import React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Model from "./Model"

const ModelViewer: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Fallback Box for debugging the scene */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="pink" />
      </mesh>

      <Model
        objPath="/DeadTree.obj"
        mtlPath="/DeadTree.mtl"
        texturePath="/tree.png"
      />
      <Model
        objPath="/DD_047-Garasa.obj"
        mtlPath="/DD_047-Garasa.mtl"
        texturePath="/DD_047-Garasa.jpg"
      />

      <OrbitControls />
    </Canvas>
  )
}

export default ModelViewer
