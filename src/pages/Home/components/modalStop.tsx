import styles from '../style.module.less'
import imageStart from '../../../assets/Game_design-7 [Converted]-11.png'
import imagePause from '../../../assets/pause.png'

export function ModalStop({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <>
      <section className={styles.modal_pause}>
        <div className={styles.modal_center}>
          <div className={`${styles.modal_content} ${styles.modal_content_pause}`}>
            <div className={styles.image_start}>
              <img src={imageStart} alt="" />
            </div>
            <div className={styles.form}>
              <p className={styles.title}>Pause</p>
              <div className={styles.image_pause}>
                <img src={imagePause} alt="Pause" />
              </div>
              <div className={styles.btn_pause}>
                <div>
                  <button className={`${styles.btn} ${styles.btn_continute}`} onClick={onButtonClick}>
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
