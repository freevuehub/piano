import { useRef } from 'react'

let timeOut
const Sound = (props) => {
  const track = useRef()
  const onAudioPlay = (event) => {
    clearTimeout(timeOut)

    event.target.pause()
    event.target.play()

    timeOut = setTimeout(() => {
      event.target.pause()

      setTimeout(() => {
        props.onDone && props.onDone()
      })
    }, props.timer)
  }

  return props.src !== '' ? <audio ref={track} onCanPlay={onAudioPlay} src={`./sound/${props.src}.mp3`} /> : <></>
}

export default Sound
