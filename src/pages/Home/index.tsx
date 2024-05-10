import { Button, Col, Row } from 'antd'
import styles from './style.module.less'
import bodyImage from '../../assets/Body.png'
import { Link } from 'react-router-dom'
import { RouteKey, rc } from '../../routes'
import { useState } from 'react'
import Image1 from '../../assets/Game Element-03.png'
import Image2 from '../../assets/Game Element-04.png'
import Image3 from '../../assets/Game Element-10.png'
import music from '../../assets/sound/sound-backgound.mp3'

export const HomePages = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <>
      <Row
        className={styles.container_home}
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Col span={12} className={styles.desktop_page_play}>
          <div style={{ padding: '0 20px' }}>
            <img src={bodyImage} alt="Ảnh minh họa trò chơi" style={{ width: '100%' }} />
          </div>
        </Col>
        <Col span={24} className={styles.mobile_page_play}>
          <div style={{ padding: '0 20px' }}>
            <img src={bodyImage} alt="Ảnh minh họa trò chơi" style={{ width: '100%' }} />
          </div>
        </Col>
        <Col span={12} className={styles.desktop_page_play} style={{ padding: '0 20px' }}>
          <ul className={styles.rule_game}>
            <li>
              <span className={styles.rule_number}>01.</span>
              <span className={styles.rule_text}>
                Choose the right product and product quantity
              </span>
            </li>
            <li>
              <span className={styles.rule_number}>02.</span>
              <span className={styles.rule_text}>
                Each player has time to choose a product, choose the fastest product to score
                points
              </span>
            </li>
            <li>
              <span className={styles.rule_number}>03.</span>
              <span className={styles.rule_text}>
                The more products you choose correctly, the more points you score and the chance
                to win prizes
              </span>
            </li>
          </ul>
          <div>
            <Link to={rc(RouteKey.Countdown).path}>
              <Button className={styles.btn}>Bắt đầu trò chơi</Button>
            </Link>
          </div>
        </Col>
        <Row>
          <Col span={24} className={styles.mobile_page_play}>
            <ul className={styles.rule_game}>
              <li>
                <span className={styles.rule_number}>01.</span>
                <span className={styles.rule_text}>
                  Choose the right product and product quantity
                </span>
              </li>
              <li>
                <span className={styles.rule_number}>02.</span>
                <span className={styles.rule_text}>
                  Each player has time to choose a product, choose the fastest product to score
                  points
                </span>
              </li>
              <li>
                <span className={styles.rule_number}>03.</span>
                <span className={styles.rule_text}>
                  The more products you choose correctly, the more points you score and the chance
                  to win prizes
                </span>
              </li>
            </ul>
            <div>
              <Link to={rc(RouteKey.Countdown).path}>
                <Button className={styles.btn}>Bắt đầu trò chơi</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Row>

      <div className={styles.btn_setting}>
        <div className={isPlaying ? '' : styles.btn_music} id="btn-music">
          <img src={Image1} alt="Âm nhạc" onClick={toggleMusic} />
          {isPlaying && <audio src={music} autoPlay loop />}
        </div>
        <div className="btn-setting-img">
          <img src={Image2} alt="Âm thanh" />
        </div>
        <div className="btn-setting-img">
          <img src={Image3} alt="Âm thanh" />
        </div>
      </div>
    </>
  )
}
