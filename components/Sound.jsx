import { useRef } from 'react'

const Sound = (props) => {
  const track = useRef()
  const onAudioPlay = (event) => {
    event.target.pause()
    event.target.play()
  }

  return (
    <audio ref={track} onCanPlay={onAudioPlay} src={`./sound/${props.src}`} />
  )
}

export default Sound
