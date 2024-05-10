import styles from './style.module.less'
import prize_tv from '../../assets/Mask.png'
import prize_camera from '../../assets/Mask (1).png'
import prize_gift from '../../assets/Mask (2).png'
import { Col, Row, Typography } from 'antd'

export const PrizePages = () => {
  return (
    <div className={styles.prize_container}>
      <Typography.Paragraph className={styles.prize_paragraph}>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.
      </Typography.Paragraph>
      <Row className={styles.prize_row}>
        <Col className={styles.prize_col}>
          <div className={styles.prize_img}>
            <img src={prize_tv} alt="Giải thưởng" />
          </div>
          <p className={styles.prize_title}>
            <span>1</span> First prize
          </p>
          <p className={styles.prize_name}>Retro TV</p>
        </Col>
        <Col className={styles.prize_col}>
          <div className={styles.prize_img}>
            <img src={prize_camera} alt="Giải thưởng" />
          </div>
          <p className={styles.prize_title}>
            <span>3</span> Second prize
          </p>
          <p className={styles.prize_name}>Camera</p>
        </Col>
        <Col className={styles.prize_col}>
          <div className={styles.prize_img}>
            <img src={prize_gift} alt="Giải thưởng" />
          </div>
          <p className={styles.prize_title}>
            <span>5</span> Third Prize
          </p>
          <p className={styles.prize_name}>VOUCHER GIFT</p>
        </Col>
      </Row>
      <Typography.Paragraph className={styles.prize_paragraph}>
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.
      </Typography.Paragraph>
    </div>
  )
}
