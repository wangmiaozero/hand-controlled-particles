import { Hands, Results } from '@mediapipe/hands'
import { Camera } from '@mediapipe/camera_utils'

interface UseHandTrackingOptions {
  onResults: (results: Results) => void
}

export function useHandTracking(options: UseHandTrackingOptions) {
  let hands: Hands | null = null
  let camera: Camera | null = null

  function init(videoElement: HTMLVideoElement) {
    hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240/${file}`
      },
    })

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })

    hands.onResults(options.onResults)

    camera = new Camera(videoElement, {
      onFrame: async () => {
        if (hands) {
          await hands.send({ image: videoElement })
        }
      },
      width: 640,
      height: 480,
    })

    camera.start()
  }

  function cleanup() {
    camera?.stop()
    camera = null
    hands = null
  }

  return {
    init,
    cleanup,
  }
}

