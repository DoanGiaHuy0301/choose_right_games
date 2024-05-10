import styles from '../style.module.less'
import imageClose from '../../../assets/Game_design-7 [Converted]-03.png'
import imageStart from '../../../assets/Game_design-7 [Converted]-11.png'
import { Button } from 'antd'
import { Link } from 'react-router-dom';
import { RouteKey, rc } from '../../../routes';

export function ModalPoint({ onClose, onButtonClick, point }: { onClose: () => void; onButtonClick: () => void, point: number}) {
  return (
    <section className={styles.modal_point}>
      <div className={styles.modal_center}>
        <div className={`${styles.modal_content} ${styles.modal_content_point}`}>
          <div className={styles.btn_close}>
            <img src={imageClose} alt="close" onClick={onClose} />
          </div>
          <div className={styles.image_start}>
            <img src={imageStart} alt="" />
          </div>
          <div className={styles.form}>
            <p className={styles.title}>Your point</p>
            <p className={styles.total_point}>{point}</p>
            <Link to={rc(RouteKey.Countdown).path}>
            <p className={styles.btn_play_again}>Chơi lại</p>
            </Link>
            <div className={styles.btn_modal}>
              <div className={styles.btn_form}>
                <Button className={styles.btn} onClick={onButtonClick}>Đăng nhập</Button>
              </div>
              <div className={styles.btn_form}>
                <Button className={styles.btn}>Gửi điểm</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
