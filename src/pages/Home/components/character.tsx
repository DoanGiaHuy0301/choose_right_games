import { Col, Row } from 'antd'
import { dataCharacter } from '../mocker-data'
import styles from '../style.module.less'
import { product } from '../model'

export function CharacterComponent({
  randomCharacter,
  randomCountProduct,
  choiceProduct,
}: {
  randomCharacter: number
  randomCountProduct: number
  choiceProduct: product[] | null
}) {
  const listCharacter = dataCharacter
  return (
    <>
      <Row className={styles.play_footer_row}>
        {listCharacter.map((character) => (
          <Col className={styles.play_footer_col}>
            <div className={styles.play_character_item} key={character.id}>
              <img
                src={
                  randomCharacter === character.id
                    ? character.image_active.url
                    : character.image_normal.url
                }
                alt={character.image_normal.alt}
              />
              {randomCharacter === character.id ? (
                <div className={styles.request}>
                  <p>
                    {randomCountProduct} {choiceProduct ? choiceProduct[0].name : ''}
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}
