import { Col, Row } from 'antd'
import styles from '../style.module.less'
import { product } from '../model'
import backgroundClick from '../../../assets/Tạm Dừng Trò Chơi.png'

export function ProductComponent({
  randomCountProduct,
  choiceProduct,
  selectedProduct,
  checkClick,
  count,
  choiceWrong,
  choiceRight,
  products,
  handleProductClick
}: {
  randomCountProduct: number
  choiceProduct: product[] | null
  selectedProduct: number
  checkClick: boolean
  count: number
  choiceWrong: boolean
  choiceRight: boolean
  products: product[]
  handleProductClick: (productId: number) => void
}) {

  return (
    <Row className={styles.play_body_row}>
      {products.map((product) => (
        <Col className={styles.play_body_col}>
          <div className={styles.product_item} key={product.id}>
            <img
              src={product.image_normal.url}
              alt={product.image_normal.alt}
              onClick={() => handleProductClick(product.id)}
              style={
                selectedProduct === product.id && checkClick
                  ? { boxShadow: '#f8f9fa 0px 0px 16px 5px' }
                  : { boxShadow: 'none' }
              }
            />
            <p>{product.name}</p>
            {randomCountProduct === count
              ? ''
              : choiceProduct &&
                choiceRight &&
                choiceProduct[0].id === product.id && (
                  <>
                    <div className={styles.product_click}>
                      X <span className={styles.product_click_count}>{count}</span>
                    </div>
                  </>
                )}

            {choiceWrong &&
              selectedProduct === product.id &&
              choiceProduct &&
              choiceProduct[0].id !== product.id && (
                <div className={styles.product_wrong}>
                  <img src={backgroundClick} alt="" />
                </div>
              )}
          </div>
        </Col>
      ))}
    </Row>
  )
}
