import { Col, Row } from 'antd'
import styles from '../style.module.less'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteKey, rc } from '../../../routes'
import music from '../../../assets/sound/race-start-beeps-125125.mp3'

export const CountdownPages = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState<number>(3)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setIsPlaying(true)
    const countdown = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1)
      } else {
        setIsPlaying(false)
        clearInterval(countdown)
        navigate(rc(RouteKey.Play).path)
      }
    }, 1000)

    return () => clearInterval(countdown)
   }, [count, navigate])

  return (
    <Row className={styles.countdown_row}>
      <Col className={styles.countdown_col}>
        <div>
          <p className={styles.countdown_title}>Trò chơi bắt đầu sau</p>
          <p className={styles.countdown_number}>{count < 1 ? 'Go' : count}</p>
          {isPlaying && <audio src={music} autoPlay loop />}
        </div>
      </Col>
    </Row>
  )
}
