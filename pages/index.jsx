import { useState, useEffect } from 'react'
import { Sound } from '../components'
import style from '../styles/Home.module.css'

const minute = 60000
const tabSize = 80
const second = minute * tabSize / 60 / 60
// const codeList = [
//   '0', '0s', '1', '1s', '2', '3', '3s', '4', '4s', '5', '5s', '6',
//   '7', '7s', '8', '8s', '9', '10', '10s', '11', '11s', '12', '12s', '13',
//   '14', '14s', '15', '15s', '16', '17', '17s', '18', '18s', '19', '19s', '20',
// ]
const rightSheet = [
  {
    sounds: ['10', '8'],
    timer: second,
  },
  {
    sounds: ['12'],
    timer: second,
  },
  {
    sounds: ['9', '7'],
    timer: second * 2,
  },
  {
    sounds: ['8', '6'],
    timer: second * (6 / 4) * 2,
  },
  {
    sounds: [],
    timer: second * (6 / 4) * 4,
  },
  {
    sounds: ['10', '8'],
    timer: second,
  },
  {
    sounds: ['12'],
    timer: second,
  },
  {
    sounds: ['9', '7'],
    timer: second * 2,
  },
  {
    sounds: ['8', '6'],
    timer: second * 4,
  },
]
const leftSheet = [
  {
    sounds: [],
    timer: 3000,
  },
  {
    sounds: [],
    timer: second * 4,
  },
  {
    sounds: [],
    timer: second * (6 / 4) * 6,
  },
  {
    sounds: ['5', '1'],
    timer: second * 2,
  },
  {
    sounds: ['4', '0'],
    timer: second * 2,
  },
]
const Home = () => {
  const [rightSoundList, setRightSoundList] = useState([])
  const [leftSoundList, setLeftSoundList] = useState([])
  const onChangeSound = (index, list, fn) => {
    if (index < list.length) {
      const { sounds, timer } = list[index]

      fn(sounds)

      setTimeout(() => {
        onChangeSound(++index, list, fn)
      }, timer)
    }
  }

  useEffect(() => {
    onChangeSound(0, rightSheet, setRightSoundList)
    onChangeSound(0, leftSheet, setLeftSoundList)
  }, [])

  return (
    <div className={style.container}>
      <div>
        {rightSoundList.map((sound) => (
          <div className={`${style.code}`} key={sound}>
            {sound}
            <Sound src={`${sound}.mp3`} />
          </div>
        ))}
      </div>
      <div>
        {leftSoundList.map((sound) => (
          <div className={`${style.code}`} key={sound}>
            {sound}
            <Sound src={`${sound}.mp3`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
