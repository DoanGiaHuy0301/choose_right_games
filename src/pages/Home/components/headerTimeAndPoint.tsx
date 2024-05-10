import { Col, Row } from 'antd'
import styles from '../style.module.less'
import clockImage from '../../../assets/Game Element-13.png'
import pointImage from '../../../assets/Game_design-7 [Converted]-07 (1).png'

export function HeaderTimeAndPointComponent({
  time,
  level,
  point,
}: {
  time: number
  level: number
  point: number
}) {
  return (
    <Row className={styles.play_header_row}>
      <Col className={styles.play_header_col}>
        <div className={styles.image_clock}>
          <img src={clockImage} alt="Đồng hồ cát" />
        </div>
        <div className={styles.time}>
          <div className={styles.time_bar_border}>
            <div className={`${styles.time_bar} progress`}>
              <div
                className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                role="progressbar"
                style={{ width: `${time}%` }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
          <div className={styles.level}>
            <p className={styles.level_text}>Level {level}</p>
          </div>
        </div>
      </Col>
      <Col className={styles.play_header_col}>
        <div className={styles.image_point}>
          <img src={pointImage} alt="icon point" />
        </div>
        <div>
          <input type="text" className={styles.point} value={point} />
        </div>
      </Col>
    </Row>
  )
}
