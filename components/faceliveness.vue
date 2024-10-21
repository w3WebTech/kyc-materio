<template>
  <div id="main-video-container">
    <div class="row h-screen">
      <div class="video-container mb-3">
        <video
          id="video"
          width="800"
          height="1100"
          autoplay
        ></video>
        <canvas
          id="canvas"
          width="800"
          height="1100"
        ></canvas>
        <div id="faceOval"></div>
      </div>
      <div
        id="message"
        class="text-center mb-3"
      >
        Please ensure your face is straight and filling 30% of the frame
      </div>
      <img
        id="snapshot"
        src=""
        alt="Snapshot"
        class="img-fluid mb-3"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

declare var FaceMesh: any // Declare FaceMesh for TypeScript
declare var Camera: any
interface Landmark {
  x: number
  y: number
}

interface FaceMeshResults {
  image: HTMLVideoElement
  multiFaceLandmarks?: Landmark[][]
}

export default defineComponent({
  setup() {
    const isMounted = ref(false)
    let imageCaptured = false
    let blinkCount = 0

    onMounted(async () => {
      // Load the Mediapipe Face Mesh library
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js'
      script.async = true

      script.onload = async () => {
        isMounted.value = true // Set the component as mounted

        const videoElement = document.getElementById('video') as HTMLVideoElement
        await requestCameraAccess(videoElement) // Request camera access

        const canvasElement = document.getElementById('canvas') as HTMLCanvasElement
        const canvasCtx = canvasElement.getContext('2d') as CanvasRenderingContext2D // Ensure this line ends with a semicolon
        const message = document.getElementById('message') as HTMLDivElement
        const snapshot = document.getElementById('snapshot') as HTMLImageElement

        const faceMesh = new FaceMesh({
          locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
        })

        faceMesh.setOptions({
          maxNumFaces: 2,
          refineLandmarks: true,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
        })

        faceMesh.onResults((results: FaceMeshResults) =>
          onResults(results, canvasCtx, message, snapshot, canvasElement, videoElement),
        )

        const camera = new Camera(videoElement, {
          onFrame: async () => {
            await faceMesh.send({ image: videoElement })
          },
          width: 640,
          height: 480,
        })
        camera.start()
      }

      document.head.appendChild(script)
    })

    async function requestCameraAccess(videoElement: HTMLVideoElement) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoElement.srcObject = stream
        alert('Camera access granted')
      } catch (error) {
        console.error('Error accessing the camera: ', error)
        alert('Camera access is required to use this feature.')
      }
    }
    function onResults(
      results: FaceMeshResults,
      canvasCtx: CanvasRenderingContext2D,
      message: HTMLDivElement,
      snapshot: HTMLImageElement,
      canvasElement: HTMLCanvasElement,
      videoElement: HTMLVideoElement,
    ) {
      if (imageCaptured) return // Prevent further processing

      // Clear canvas and draw video
      canvasCtx.save()
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height)
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height)

      if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        message.style.display = 'none' // Hide message if a face is detected

        for (const landmarks of results.multiFaceLandmarks) {
          drawLandmarks(canvasCtx, landmarks)
          const isFaceSizeCorrect = checkFaceSize(landmarks)
          const areLinesPerpendicular = checkPerpendicularLines(canvasCtx, landmarks)

          // Debugging output
          console.log('Face size correct:', isFaceSizeCorrect)
          console.log('Lines are perpendicular:', areLinesPerpendicular)

          if (isFaceSizeCorrect && areLinesPerpendicular) {
            if (blinkCount >= 2) {
              captureImage(canvasElement, videoElement, snapshot)
              imageCaptured = true // Mark image as captured
            } else {
              blinkCount++
            }
          } else {
            message.textContent = 'Face is not in the correct size range. Please adjust your position.'
            blinkCount = 0 // Reset blink count
            message.style.display = 'block' // Show the message
          }
          drawInvertedTriangle(canvasCtx, landmarks, 33, 263, 152)

          // Draw face oval connector
          drawFaceOvalConnector(canvasCtx, landmarks)

          // Log all coordinates and angle results to console
          logResults(landmarks)
        }
      } else {
        message.textContent = 'No face detected. Please try again.'
        message.style.display = 'block' // Show the message if no face is detected
      }

      canvasCtx.restore()
    }

    function drawLandmarks(ctx: CanvasRenderingContext2D, landmarks: Landmark[]) {
      for (const landmark of landmarks) {
        const x = landmark.x * canvasElement.width
        const y = landmark.y * canvasElement.height
        ctx.beginPath()
        ctx.fillStyle = '#FF0000'
        ctx.arc(x, y, 2, 0, 2 * Math.PI)
        ctx.fill()
      }
    }

    function checkPerpendicularLines(ctx: CanvasRenderingContext2D, landmarks: Landmark[]) {
      // Define landmarks for the lines
      const leftEye = landmarks[33] // Left eye outer corner
      const rightEye = landmarks[263] // Right eye outer corner
      const noseTip = landmarks[1] // Nose tip
      const upperLip = landmarks[13] // Upper lip
      const lowerLip = landmarks[14] // Lower lip
      const chin = landmarks[152] // Chin point

      // Calculate central points for the eyes and lips
      const leftEyeX = leftEye.x * canvasElement.width
      const leftEyeY = leftEye.y * canvasElement.height
      const rightEyeX = rightEye.x * canvasElement.width
      const rightEyeY = rightEye.y * canvasElement.height
      const noseTipX = noseTip.x * canvasElement.width
      const noseTipY = noseTip.y * canvasElement.height
      const upperLipX = upperLip.x * canvasElement.width
      const upperLipY = upperLip.y * canvasElement.height
      const lowerLipX = lowerLip.x * canvasElement.width
      const lowerLipY = lowerLip.y * canvasElement.height
      const chinX = chin.x * canvasElement.width
      const chinY = chin.y * canvasElement.height

      // Ensure the lines intersect at 90 degrees and within a margin
      const eyesCenterX = (leftEyeX + rightEyeX) / 2
      const eyesCenterY = (leftEyeY + rightEyeY) / 2
      const faceWidth = rightEyeX - leftEyeX
      const margin = faceWidth * 0.1 // 10% margin

      const withinMargin = Math.abs(noseTipX - eyesCenterX) <= margin

      ctx.strokeStyle = '#00FF00'
      ctx.lineWidth = 2

      // Draw horizontal line through eyes
      ctx.beginPath()
      ctx.moveTo(leftEyeX, eyesCenterY)
      ctx.lineTo(rightEyeX, eyesCenterY)
      ctx.stroke()

      // Draw vertical line through nose and chin
      ctx.beginPath()
      ctx.moveTo(noseTipX, eyesCenterY)
      ctx.lineTo(noseTipX, chinY)
      ctx.stroke()

      // Draw horizontal line through mouth
      ctx.beginPath()
      ctx.moveTo(upperLipX - 20, upperLipY)
      ctx.lineTo(lowerLipX + 20, lowerLipY)
      ctx.stroke()

      // Draw vertical line through nose tip and mouth
      ctx.beginPath()
      ctx.moveTo(noseTipX, upperLipY - 20)
      ctx.lineTo(noseTipX, lowerLipY + 20)
      ctx.stroke()

      // Calculate angles between lines
      const horizontalLineAngle = Math.atan2(rightEyeY - leftEyeY, rightEyeX - leftEyeX) * (180 / Math.PI)
      const verticalLineAngle = Math.atan2(chinY - eyesCenterY, noseTipX - noseTipX) * (180 / Math.PI)
      const mouthLineAngle = Math.atan2(lowerLipY - upperLipY, lowerLipX - upperLipX) * (180 / Math.PI)

      const angleDiff1 = Math.abs(horizontalLineAngle - verticalLineAngle)
      const angleDiff2 = Math.abs(mouthLineAngle - verticalLineAngle)

      console.log('Coordinates:')
      console.log('Left Eye:', leftEyeX, leftEyeY)
      console.log('Right Eye:', rightEyeX, rightEyeY)
      console.log('Nose Tip:', noseTipX, noseTipY)
      console.log('Upper Lip:', upperLipX, upperLipY)
      console.log('Lower Lip:', lowerLipX, lowerLipY)
      console.log('Chin:', chinX, chinY)

      console.log('Angles:')
      console.log('Horizontal Line Angle:', horizontalLineAngle)
      console.log('Vertical Line Angle:', verticalLineAngle)
      console.log('Mouth Line Angle:', mouthLineAngle)

      return Math.abs(angleDiff1 - 90) <= 3 && Math.abs(angleDiff2 - 90) <= 3 && withinMargin
    }

    function checkFaceSize(landmarks: Landmark[]) {
      // Define landmarks for the top of the forehead and bottom of the chin
      const topOfForehead = landmarks[10]
      const bottomOfChin = landmarks[152]

      // Calculate the size of the face
      const faceHeight = (bottomOfChin.y - topOfForehead.y) * canvasElement.height
      const videoHeight = canvasElement.height

      // Check if face height is approximately 50% of the video height
      const faceSizeRatio = faceHeight / videoHeight
      return faceSizeRatio >= 0.3 && faceSizeRatio <= 0.85
    }

    function drawInvertedTriangle(
      ctx: CanvasRenderingContext2D,
      landmarks: Landmark[],
      index1: number,
      index2: number,
      index3: number,
    ) {
      const point1 = landmarks[index1]
      const point2 = landmarks[index2]
      const point3 = landmarks[index3]
      const point1X = point1.x * canvasElement.width
      const point1Y = point1.y * canvasElement.height
      const point2X = point2.x * canvasElement.width
      const point2Y = point2.y * canvasElement.height
      const point3X = point3.x * canvasElement.width
      const point3Y = point3.y * canvasElement.height

      ctx.strokeStyle = '#FFA500'
      ctx.lineWidth = 2

      // Draw inverted triangle
      ctx.beginPath()
      ctx.moveTo(point1X, point1Y)
      ctx.lineTo(point2X, point2Y)
      ctx.lineTo(point3X, point3Y)
      ctx.closePath()
      ctx.stroke()
    }

    function drawFaceOvalConnector(ctx: CanvasRenderingContext2D, landmarks: Landmark[]) {
      const faceOvalPoints = [
        10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378, 400, 377, 152, 148, 176, 149,
        150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109,
      ]

      ctx.strokeStyle = '#FF0000'
      ctx.lineWidth = 2

      ctx.beginPath()
      for (let i = 0; i < faceOvalPoints.length; i++) {
        const point = landmarks[faceOvalPoints[i]]
        const x = point.x * canvasElement.width
        const y = point.y * canvasElement.height
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.stroke()
    }

    function logResults(landmarks: Landmark[]) {
      alert('Landmarks:')
      for (let i = 0; i < landmarks.length; i++) {
        alert(`Point ${i}:`, landmarks[i].x * canvasElement.width, landmarks[i].y * canvasElement.height)
      }
    }

    function captureImage(
      canvasElement: HTMLCanvasElement,
      videoElement: HTMLVideoElement,
      snapshot: HTMLImageElement,
    ) {
      const snapshotCanvas = document.createElement('canvas')
      snapshotCanvas.width = canvasElement.width
      snapshotCanvas.height = canvasElement.height
      const snapshotCtx = snapshotCanvas.getContext('2d')

      // Draw the current frame from the video onto the snapshot canvas
      snapshotCtx?.drawImage(videoElement, 0, 0, snapshotCanvas.width, snapshotCanvas.height)

      // Get the data URL and set it as the source for the snapshot image
      const dataUrl = snapshotCanvas.toDataURL('image/png')
      snapshot.src = dataUrl // Set the src of the snapshot image
      snapshot.style.display = 'block' // Show the snapshot image
      alert('Image captured') // Remove the data URL alert for better user experience
    }
  },
})
</script>

<style scoped>
.video-container {
  position: relative;
  width: 300px;
  height: 400px;

  background: #ffffff;
  border-radius: 60%;
}

video,
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 60%;
}

#remove-snapshot {
  display: none;
}

#message {
  margin-top: 20px;
  color: red;
  font-weight: bold;
  display: none;
  animation: blink 1s steps(2, start) infinite;
}

#snapshot {
  margin-top: 20px;
  border: 2px solid #ccc;
  display: none;
  border-radius: 60%;
}

#faceOval {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 300px;
  height: 350px;
  border: 2px solid red;
  border-radius: 60%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
