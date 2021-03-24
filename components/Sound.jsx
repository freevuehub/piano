import { useRef, useState, useEffect } from 'react'

const Sound = (props) => {
  const track = useRef()
  // const [track, setTrack] = useState()
  const onAudioPlay = (event) => {
    // setTrack(event.target)
  }

  useEffect(() => {
    track.current.pause()

    if (props.play) {
      track.current.play()
    }
  }, [props.play])

  return (
    <audio ref={track} onCanPlay={onAudioPlay} src={`./sound/${props.src}`} />
  )
}

export default Sound
