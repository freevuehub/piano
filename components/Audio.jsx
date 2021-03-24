const Audio = (props) => {
  const onAudioPlay = (event) => {
    event.target.pause()

    setTimeout(() => {
      event.target.play()
    }, 3000)
  }

  return (
    <audio onCanPlay={onAudioPlay} src={`./sound/${props.src}.mp3`} />
  )
}

export default Audio
