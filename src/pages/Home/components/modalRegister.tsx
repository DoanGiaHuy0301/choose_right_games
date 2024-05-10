import styles from '../style.module.less'
import imageClose from '../../../assets/Game_design-7 [Converted]-03.png'
import { Button, Input } from 'antd'
export function ModalRegister({ onClose, onButtonClick }: { onClose: () => void; onButtonClick: () => void}) {
  
    return (
        <section className={styles.modal_login}>
        <div className={styles.modal_center}>
          <div className={`${styles.modal_content} ${styles.modal_content_login}`}>
            <div className={styles.btn_close}>
              <img
                src={imageClose}
                alt="close"
                onClick={onClose}
              />
            </div>
            <div className={styles.form}>
              <p className={styles.title}>Đăng ký</p>

              <div className={styles.input_login_border}>
                <Input
                  type="text"
                  placeholder="Họ và tên"
                  className={styles.input_login_text}
                />
              </div>
              <div className={styles.input_login_border}>
                <Input
                  type="text"
                  placeholder="Số điện thoại"
                  className={styles.input_login_text}
                />
              </div>
              <div className={styles.input_login_border}>
                <Input
                  type="text"
                  placeholder="Email"
                  className={styles.input_login_text}
                />
              </div>
              <div className={styles.btn_modal}>
                <div className={styles.btn_form}>
                  <Button className={styles.btn} onClick={onButtonClick}>Quay lại</Button>
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