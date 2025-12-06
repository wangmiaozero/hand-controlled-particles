import { reactive, ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const PARTICLE_COUNT = 4000
const PARTICLE_SIZE = 0.15

export interface ParticleState {
  shape: string
  handScale: number
  targetScale: number
  handActive: boolean
  gestureSide: 'Left' | 'Right' | 'None'
  gestureMode: 'Contract' | 'Spread' | 'Neutral'
  noiseStrength: number
  prevPinchState: 'closed' | 'open' | 'neutral'
}

type ShapeGenerator = (i: number) => { x: number; y: number; z: number }

const shapes: Record<string, ShapeGenerator> = {
  Earth: (i) => {
    const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT)
    const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi
    const r = 8
    return {
      x: r * Math.cos(theta) * Math.sin(phi),
      y: r * Math.sin(theta) * Math.sin(phi),
      z: r * Math.cos(phi),
    }
  },
  Heart: (_i) => {
    const phi = Math.random() * Math.PI * 2
    const t = phi
    const x = 16 * Math.pow(Math.sin(t), 3)
    const y =
      13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
    const z = (Math.random() - 0.5) * 4
    const scale = 0.5
    return { x: x * scale, y: y * scale, z }
  },
  Saturn: (i) => {
    const ratio = i / PARTICLE_COUNT
    if (ratio < 0.7) {
      return shapes.Earth(i)
    } else {
      const angle = i * 0.1
      const radius = 12 + Math.random() * 5
      return {
        x: Math.cos(angle) * radius,
        y: (Math.random() - 0.5) * 0.5,
        z: Math.sin(angle) * radius,
      }
    }
  },
  Tree: (i) => {
    const h = 15
    const y = (i / PARTICLE_COUNT) * h - h / 2
    const radius = (1 - (y + h / 2) / h) * 6
    const angle = i * 0.5
    return {
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
    }
  },
  Fireworks: (_i) => {
    const r = Math.random() * 15
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    return {
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
    }
  },
}

const palette = ['#00ffff', '#ff6bcb', '#ffd93b', '#00ffb3', '#7f5dff']

function randomNiceColor(): string {
  return palette[Math.floor(Math.random() * palette.length)]
}

function createParticleTexture(): THREE.Texture {
  const canvas = document.createElement('canvas')
  canvas.width = 32
  canvas.height = 32
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)')
  gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)')
  gradient.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 32, 32)
  const texture = new THREE.Texture(canvas)
  texture.needsUpdate = true
  return texture
}

export function useParticleSystem() {
  const state = reactive<ParticleState>({
    shape: 'Earth',
    handScale: 1.0,
    targetScale: 1.0,
    handActive: false,
    gestureSide: 'None',
    gestureMode: 'Neutral',
    noiseStrength: 0.1,
    prevPinchState: 'neutral',
  })

  const shapeNames = Object.keys(shapes)
  const currentShapeIndex = ref(shapeNames.indexOf(state.shape))

  let scene: THREE.Scene
  let camera: THREE.PerspectiveCamera
  let renderer: THREE.WebGLRenderer
  let controls: OrbitControls
  let geometry: THREE.BufferGeometry
  let material: THREE.PointsMaterial
  let particleSystem: THREE.Points
  let animationId: number | null = null
  let container: HTMLElement | null = null

  const targetPositions = new Float32Array(PARTICLE_COUNT * 3)

  function updateTargets(shapeName: string) {
    const generator = shapes[shapeName]
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const pos = generator(i)
      targetPositions[i * 3] = pos.x
      targetPositions[i * 3 + 1] = pos.y
      targetPositions[i * 3 + 2] = pos.z
    }
  }

  function setShapeByIndex(index: number) {
    currentShapeIndex.value = (index + shapeNames.length) % shapeNames.length
    const shapeName = shapeNames[currentShapeIndex.value]
    state.shape = shapeName
    updateTargets(shapeName)
    material.color.set(randomNiceColor())
  }

  function nextShape() {
    setShapeByIndex(currentShapeIndex.value + 1)
  }

  function prevShape() {
    setShapeByIndex(currentShapeIndex.value - 1)
  }

  function init(containerEl: HTMLElement) {
    container = containerEl

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050505, 0.02)

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.z = 20

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.0

    // Particle System
    geometry = new THREE.BufferGeometry()
    const initialPositions = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      initialPositions[i] = (Math.random() - 0.5) * 50
      targetPositions[i] = initialPositions[i]
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(initialPositions, 3))

    material = new THREE.PointsMaterial({
      size: PARTICLE_SIZE,
      map: createParticleTexture(),
      color: new THREE.Color('#00ffff'),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    particleSystem = new THREE.Points(geometry, material)
    scene.add(particleSystem)

    updateTargets(state.shape)

    window.addEventListener('resize', onResize)
  }

  function onResize() {
    if (!camera || !renderer) return
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate() {
    animationId = requestAnimationFrame(animate)

    const positions = geometry.attributes.position.array as Float32Array
    const lerpSpeed = 0.08

    state.handScale += (state.targetScale - state.handScale) * 0.1

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3
      const iy = i * 3 + 1
      const iz = i * 3 + 2

      let tx = targetPositions[ix]
      let ty = targetPositions[iy]
      let tz = targetPositions[iz]

      tx *= state.handScale
      ty *= state.handScale
      tz *= state.handScale

      if (state.handActive) {
        tx += (Math.random() - 0.5) * state.noiseStrength
        ty += (Math.random() - 0.5) * state.noiseStrength
        tz += (Math.random() - 0.5) * state.noiseStrength
      }

      positions[ix] += (tx - positions[ix]) * lerpSpeed
      positions[iy] += (ty - positions[iy]) * lerpSpeed
      positions[iz] += (tz - positions[iz]) * lerpSpeed
    }

    geometry.attributes.position.needsUpdate = true
    controls.update()
    renderer.render(scene, camera)
  }

  function cleanup() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', onResize)
    if (renderer && container) {
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }
    geometry?.dispose()
    material?.dispose()
  }

  return {
    state,
    shapeNames,
    currentShapeIndex,
    setShapeByIndex,
    nextShape,
    prevShape,
    init,
    animate,
    cleanup,
  }
}

