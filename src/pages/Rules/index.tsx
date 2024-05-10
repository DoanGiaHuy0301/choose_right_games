import styles from './style.module.less'

export const RulesPages = () => {
  return (
    <div className={styles.rule_container}>
      <ul >
        <li className={styles.rule_game}>
          <span className={styles.rule_number}>01.</span>
          <span className={styles.rule_text}>
            Lorem ipsum is placeholder Text commonly used in the graphic, print, and publishing
            industries for previewing layouts and visual mockups.
          </span>
        </li>
        <li className={styles.rule_game}>
          <span className={styles.rule_number}>02.</span>
          <span className={styles.rule_text}>
            Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non.
          </span>
        </li>
        <li className={styles.rule_game}>
          <span className={styles.rule_number}>03.</span>
          <span className={styles.rule_text}>
            Lorem ipsum dolor sit amet, Lorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage is attributed to an
            unknown typesetter in the 15th century who is thought to have scrambled parts of
            Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually
            begins with.
          </span>
        </li>
        <li className={styles.rule_game}>
          <span className={styles.rule_number}>04.</span>
          <span className={styles.rule_text}>
            Lorem ipsum dolor sit amet, The purpose of lorem ipsum is to create a natural looking
            block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
            A practice not without controversy, laying out pages with meaningless filler text can
            be very useful when the focus is meant to be on design, not content.
          </span>
        </li>
        <li className={styles.rule_game}>
          <span className={styles.rule_number}>05.</span>
          <span className={styles.rule_text}>
            Lorem ipsum dolor sit amet, The purpose of lorem ipsum is to create a natural looking
            block of text (sentence, paragraph, page, etc).
          </span>
        </li>
      </ul>
    </div>
  )
}
