// @ts-nocheck
import React from "react"
import { useLoader } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { TextureLoader } from "three"

interface ModelProps {
  objPath: string
  mtlPath: string
  texturePath?: string
}

const Model: React.FC<ModelProps> = ({ objPath, mtlPath, texturePath }) => {
  const materials = useLoader(MTLLoader, mtlPath)

  const obj = useLoader(OBJLoader, objPath, (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  useLoader(TextureLoader, texturePath)

  return (
    <primitive object={obj} scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]} />
  )
}

export default Model
