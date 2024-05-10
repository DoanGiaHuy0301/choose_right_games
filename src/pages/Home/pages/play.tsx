import { useEffect, useState } from 'react'
import { ModalStop } from '../components/modalStop'
import { ModalLogin } from '../components/modalLogin'
import { ModalPoint } from '../components/modalPoint'
import { ModalRegister } from '../components/modalRegister'
import musicWrong from '../../../assets/sound/sound-wrong.mp3'
import musicWin from '../../../assets/sound/sound-win.mp3'

import musicClock from '../../../assets/sound/mixkit-fast-wall-clock-ticking-1063.wav'
import musicRight from '../../../assets/sound/sound-effect-twinklesparkle-115095.mp3'
import musicClick from '../../../assets/sound/correct-choice-43861.mp3'
import { useNavigate } from 'react-router-dom'
import { RouteKey, rc } from '../../../routes'
import { dataProduct } from '../mocker-data'
import { CharacterComponent } from '../components/character'
import { product } from '../model'
import { ProductComponent } from '../components/products'
import { HeaderTimeAndPointComponent } from '../components/headerTimeAndPoint'
import { ButtonSetting } from '../components/buttonSetting'

export const PlayPages = () => {
  const products = dataProduct
  const navigate = useNavigate()
  const [choiceProduct, setChoiceProduct] = useState<product[] | null>(null)
  const [time, setTime] = useState<number>(100)
  const [level, setLevel] = useState<number>(1)

  // const [countdown, setCountdown] = useState<number>(0)
  // const [difficulty, setDifficulty] = useState<number>(1)
  const [point, setPoint] = useState<number>(0)

  const [selectedProduct, setSelectedProduct] = useState<number>(0)
  const [count, setCount] = useState<number>(0)
  const [randomCountProduct, setRandomCountProduct] = useState<number>(1)
  const [randomCharacter, setRandomCharacter] = useState<number>(1)
  const [countNumberRight, setCountNumberRight] = useState<number>(0)
  const [timeStep, setTimeStep] = useState<number>(1)
  const [countRight, setCountRight] = useState<number>(0)

  const [choiceRight, setChoiceRight] = useState(false)
  const [choiceWrong, setChoiceWrong] = useState(false)
  const [checkClick, setCheckClick] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showModalStop, setShowModalStop] = useState(false)
  const [closeModal, setCloseModal] = useState(false)
  const [closeModalRegister, setCloseModalRegister] = useState(false)
  const [isPlayingWrong, setIsPlayingWrong] = useState(false)
  const [isPlayingWin, setIsPlayingWin] = useState(false)
  const [isPlayingClock, setIsPlayingClock] = useState(false)
  const [isPlayingRight, setIsPlayingRight] = useState(false)

  const [isPlayingClick, setIsPlayingClick] = useState(false)

  const pointStep = localStorage.getItem('pointStep')

  const handleProductClick = (productId: any) => {
    setSelectedProduct(productId)
    if (choiceProduct) {
      if (choiceProduct[0].id === productId) {
        setCount((prev) => prev + 1)
        setChoiceRight(true)
        setCheckClick(true)
        if (checkNumberClick(count + 1, randomCountProduct)) {
          setChoiceRight(false)
          setCheckClick(false)
          setIsPlayingRight(false)
          setCountNumberRight((prev) => prev + 1)
          if (countNumberRight + 1 === 3) {
            setIsPlayingRight(true)
            setLevel((prev) => prev + 1)
            setCountNumberRight(0)
            if (pointStep) {
              setPoint((prev) => prev + parseInt(pointStep) * level)
            }
          }
        }
      } else {
        setChoiceWrong(true)
        setCheckClick(true)
        setIsPlayingWrong(true)
        setTimeout(() => {
          setIsPlayingWin(true)
          setIsPlayingWrong(false)
          setCloseModal(true)
        }, 1700)
      }
    }
  }

  const checkNumberClick = (countNumber: number, countRandom: number) => {
    if (countNumber === countRandom) {
      setCountRight((prev) => prev + 1)
      return true
    }
    return false
  }

  const randomNumberProduct = () => {
    const numberProduct = Math.floor(Math.random() * 5) + 1
    setRandomCountProduct(numberProduct)
  }

  const randomPosition = () => {
    const number = Math.floor(Math.random() * 4) + 1
    setRandomCharacter(number)
  }

  const getRandomElementsFromArray = (arr: any, n: number) => {
    const shuffled = arr.slice(0)
    let i = arr.length,
      temp,
      index
    while (i--) {
      index = Math.floor((i + 1) * Math.random())
      temp = shuffled[index]
      shuffled[index] = shuffled[i]
      shuffled[i] = temp
    }
    return shuffled.slice(0, n)
  }

  const handleCloseModal = () => {
    setCloseModal(false)
    navigate(rc(RouteKey.Home).path)
  }

  const handleCloseModalLogin = () => {
    setShowModal(false)
    navigate(rc(RouteKey.Home).path)
  }

  const handleCloseModalRegister = () => {
    setCloseModalRegister(false)
    navigate(rc(RouteKey.Home).path)
  }

  const handleOpenModal = () => {
    setShowModal(true)
    setCloseModal(false)
    setCloseModalRegister(false)
  }

  const handleOpenModalRegister = () => {
    setCloseModalRegister(true)
    setShowModal(false)
  }

  const handleContinute = () => {
    setShowModalStop(true)
  }

  const handleStop = () => {
    setShowModalStop(false)
  }

  useEffect(() => {
    const choice = getRandomElementsFromArray(products, 1)
    setChoiceProduct(choice)
    setCount(0)

    randomPosition()
    randomNumberProduct()
    console.log('countRight', countRight)
  }, [countRight])

  useEffect(() => {
    const timeout = setInterval(() => {
      if (!showModalStop) {
        // setIsPlayingClock(true)
        if (level >= 5) {
          setTime((prevTime) => prevTime - (5 + timeStep * 0.01))
        } else {
          setTime((prevTime) => prevTime - timeStep)
        }
      }
    }, 1000)

    if (time <= 0) {
      setCloseModal(true)
      setIsPlayingWin(true)
      clearInterval(timeout)
      setIsPlayingClock(false)
    }

    if (isPlayingWin || showModalStop) {
      clearInterval(timeout)
      setIsPlayingClock(false)
    }

    console.log(time)
    return () => clearInterval(timeout)
  }, [time, showModalStop])

  useEffect(() => {
    setTime(100)
    setTimeStep(level)
  }, [level])

  return (
    <>
      {isPlayingWrong && <audio src={musicWrong} autoPlay />}
      {isPlayingWin && <audio src={musicWin} autoPlay />}
      {isPlayingRight && <audio src={musicRight} autoPlay />}
      {isPlayingClick && <audio src={musicClick} autoPlay />}
      {isPlayingClock && <audio src={musicClock} autoPlay loop />}
      <div>
        {closeModal && (
          <ModalPoint onClose={handleCloseModal} onButtonClick={handleOpenModal} point={point} />
        )}
        {showModal && (
          <ModalLogin onClose={handleCloseModalLogin} onButtonClick={handleOpenModalRegister} />
        )}
        {closeModalRegister && (
          <ModalRegister onClose={handleCloseModalRegister} onButtonClick={handleOpenModal} />
        )}
        {showModalStop && <ModalStop onButtonClick={handleStop} />}
        <HeaderTimeAndPointComponent time={time} level={level} point={point} />
        <ProductComponent
          randomCountProduct={randomCountProduct}
          choiceProduct={choiceProduct}
          handleProductClick={handleProductClick}
          selectedProduct={selectedProduct}
          checkClick={checkClick}
          count={count}
          choiceWrong={choiceWrong}
          choiceRight={choiceRight}
          products={products}
        />
        <CharacterComponent
          randomCharacter={randomCharacter}
          randomCountProduct={randomCountProduct}
          choiceProduct={choiceProduct}
        />
      </div>
      <ButtonSetting handleContinute={handleContinute} />
    </>
  )
}
