import { useState, useEffect } from 'react'
import { Sound } from '../components'
import style from '../styles/Home.module.css'

const minute = 60000
const minuteBeat = 80
const rightSheet = [
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: 'F6', beat: 1 },
  ],
  [
    { code: 'A6', beat: 1 },
  ],
  [
    { code: 'E6', beat: 2 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: 'D6', beat: 4 },
    { code: 'B5', beat: 4 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
]
const leftSheet = [
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: 'D6', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: 'C6', beat: 2 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: 'G6', beat: 4 },
    { code: 'E6', beat: 4 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
  [
    { code: '', beat: 1 },
  ],
]
const Home = () => {
  const [rightSoundList, setRightSoundList] = useState([])
  const [leftSoundList, setLeftSoundList] = useState([])
  const onChangeSound = (index, list, fn) => {
    if (index <= list.length) {
      fn(list.slice(0, index).flat())

      setTimeout(() => {
        onChangeSound(++index, list, fn)
      }, minute / minuteBeat)
    }
  }

  useEffect(() => {
    onChangeSound(0, rightSheet, setRightSoundList)
    onChangeSound(0, leftSheet, setLeftSoundList)
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
            <Sound timer={beat * (minute / minuteBeat)} src={code} onRemove={onCodeRemove(index)} />
          </div>
        ))}
      </div>
      <div>
        {leftSoundList.map(({ code, beat }, index) => (
          <div className={`${style.code}`} key={index}>
            {code}
            <Sound timer={beat * (minute / minuteBeat)} src={code} onRemove={onCodeRemove(index)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
