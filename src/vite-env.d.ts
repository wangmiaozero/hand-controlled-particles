/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@mediapipe/hands' {
  export interface HandsOptions {
    locateFile?: (file: string) => string
  }

  export interface HandsConfig {
    maxNumHands?: number
    modelComplexity?: number
    minDetectionConfidence?: number
    minTrackingConfidence?: number
  }

  export interface Landmark {
    x: number
    y: number
    z: number
  }

  export interface Handedness {
    label: 'Left' | 'Right'
    score: number
  }

  export interface Results {
    multiHandLandmarks?: Landmark[][]
    multiHandedness?: Handedness[]
  }

  export class Hands {
    constructor(options?: HandsOptions)
    setOptions(config: HandsConfig): void
    onResults(callback: (results: Results) => void): void
    send(input: { image: HTMLVideoElement }): Promise<void>
  }
}

declare module '@mediapipe/camera_utils' {
  export interface CameraOptions {
    onFrame: () => Promise<void>
    width?: number
    height?: number
  }

  export class Camera {
    constructor(videoElement: HTMLVideoElement, options: CameraOptions)
    start(): void
    stop(): void
  }
}

