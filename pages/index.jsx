import { useState, useEffect } from 'react'
import { Sound } from '../components'
import style from '../styles/Home.module.css'

const minute = 60000
const minuteBeat = 76
const rightSheet = [
  [
    { code: '10', beat: 1 },
  ],
  [
    { code: '12', beat: 1 },
  ],
  [
    { code: '9', beat: 2 },
  ],
  [
    { code: '8', beat: 4 },
  ],
  [
    { code: '12s', beat: 4 },
  ],
]
const Home = () => {
  const [rightSoundList, setRightSoundList] = useState([])
  const onChangeSound = (index, list, fn) => {
    if (index <= list.length) {
      setRightSoundList(list.slice(0, index).flat())

      setTimeout(() => {
        onChangeSound(++index, list, fn)
      }, minute / minuteBeat)
    }
  }

  useEffect(() => {
    onChangeSound(0, rightSheet, setRightSoundList)
  }, [])
  const onCodeRemove = (index) => () => {
    // const setList = rightSoundList.splice(index, 0)

    // setRightSoundList(setList)
  }

  return (
    <div className={style.container}>
      <div>
        {rightSoundList.map(({ code, beat }, index) => (
          <div className={`${style.code}`} key={index}>
            {code}
            <Sound timer={beat * (minute / minuteBeat)} src={`${code}.mp3`} onRemove={onCodeRemove(index)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
