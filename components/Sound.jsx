import { useRef } from 'react'

const Sound = (props) => {
  const track = useRef()
  const onAudioPlay = (event) => {
    event.target.pause()
    event.target.play()

    setTimeout(() => {
      event.target.pause()

      setTimeout(() => {
        props.onRemove()
      })
    }, props.timer)
  }

  return props.src !== '' ? <audio ref={track} onCanPlay={onAudioPlay} src={`./sound/${props.src}.mp3`} /> : <></>
}

export default Sound
