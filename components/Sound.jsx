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

  return (
    <audio ref={track} onCanPlay={onAudioPlay} src={`./sound/${props.src}`} />
  )
}

export default Sound
