import styles from '../style.module.less'
import Image1 from '../../../assets/Game Element-03.png'
import Image2 from '../../../assets/Game Element-04.png'
import Image3 from '../../../assets/Game Element-10.png'
import music from '../../../assets/sound/sound-backgound.mp3'
import { useState } from 'react'

export function ButtonSetting({ handleContinute }: { handleContinute: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={styles.btn_setting}>
      <div className={isPlaying ? '' : styles.btn_music} id="btn-music">
        <img src={Image1} alt="Âm nhạc" onClick={toggleMusic} />
        {isPlaying && <audio src={music} autoPlay loop />}
      </div>
      <div className="btn-setting-img">
        <img src={Image2} alt="Âm thanh" />
      </div>
      <div className="btn-setting-img">
        <img src={Image3} alt="Âm thanh" onClick={handleContinute} />
      </div>
    </div>
  )
}
