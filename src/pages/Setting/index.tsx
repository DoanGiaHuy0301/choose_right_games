import { Button, Col, Image, Input, Row, Typography, notification } from 'antd'
import styles from './style.module.less'
import { UploadOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import imageRemove from '../../assets/Game_design-7 [Converted]-03.png'
import imageView from '../../assets/Game Element-15 1.png'

export const SettingPages = () => {
  const MAX_NAME_LENGTH = 20
  const imageView2 = '../../src/assets/product-1.bf2fbdc6.png'
  const [showImages, setShowImages] = useState(false)
  const [selectImage, setSelectImage] = useState<number>(0)
  const [imageShow, setImageShow] = useState<string>('')
  const [countdown, setCountdown] = useState<string>('Countdown time (s)')
  const [pointStep, setPointStep] = useState<string>('Point step')
  const [difficulty, setDifficulty] = useState<string>('Difficulty')
  const [products, setProducts] = useState([
    { id: 1, name: '', image_normal: { src: '', alt: '' } },
  ])
  const [characters, setCharacters] = useState([{ id: 1, image_normal: { src: '', alt: '' } }])
  const [productImages, setProductImages] = useState<(File | null)[]>(
    Array(products.length).fill(null),
  )
  const [characterImages, setCharacterImages] = useState<(File | null)[]>(
    Array(characters.length).fill(null),
  )

  const [save, contextHolder] = notification.useNotification()

  const handleProductImageChange = (e: any, productId: number) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const imageSrc = reader.result as string
        const newFile = new File([imageSrc], file.name, { type: 'image/png' })
        const updatedImages = [...productImages]
        updatedImages[productId - 1] = newFile
        setProductImages(updatedImages)
        updateProductImage(productId, imageSrc, file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCharacterImageChange = (e: any, characterId: number) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const imageSrc = reader.result as string
        const newFile = new File([imageSrc], file.name, { type: 'image/png' })
        const updatedImages = [...characterImages]
        updatedImages[characterId - 1] = newFile
        setCharacterImages(updatedImages)
        updateCharacterImage(characterId, imageSrc, file.name)
      }
      reader.readAsDataURL(file)
    }
  }

  const shortenFileName = (fileName: string) => {
    if (fileName.length <= MAX_NAME_LENGTH) {
      return fileName
    } else {
      return fileName.slice(0, MAX_NAME_LENGTH) + '...'
    }
  }

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: '',
      image_normal: { src: '', alt: '' },
    }
    setProducts([...products, newProduct])
  }

  const updateProductName = (productId: number, newName: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          name: newName, // Cập nhật tên sản phẩm
        }
      }
      return product
    })

    setProducts(updatedProducts)
  }

  const updateProductImage = (productId: number, newImageSrc: string, newImageAlt: string) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          image_normal: {
            ...product.image_normal,
            src: newImageSrc,
            alt: newImageAlt,
          },
        }
      }
      return product
    })

    setProducts(updatedProducts)
  }

  const addCharacter = () => {
    const newCharacter = {
      id: characters.length + 1,
      image_normal: { src: '', alt: '' },
    }
    setCharacters([...characters, newCharacter])
  }

  const updateCharacterImage = (
    characterId: number,
    newImageSrc: string,
    newImageAlt: string,
  ) => {
    const updateCharacters = characters.map((character) => {
      if (character.id === characterId) {
        return {
          ...character,
          image_normal: {
            ...character.image_normal,
            src: newImageSrc,
            alt: newImageAlt,
          },
        }
      }
      return character
    })

    setCharacters(updateCharacters)
  }

  const deleteProduct = (productId: number) => {
    const updateProduct = products.filter((product) => product.id !== productId)
    setProducts(updateProduct)
  }

  const deleteCharacter = (characterId: number) => {
    const updateCharacter = characters.filter((character) => character.id !== characterId)
    setCharacters(updateCharacter)
  }

  const saveSettings = () => {
    const productArrayString = JSON.stringify(products)
    const characterArrayString = JSON.stringify(characters)

    localStorage.setItem('products', productArrayString)
    localStorage.setItem('characters', characterArrayString)
    localStorage.setItem('countdown', countdown)
    localStorage.setItem('pointStep', pointStep)
    localStorage.setItem('difficulty', difficulty)
    openNotification()
  }

  const openNotification = () => {
    save.open({
      message: 'Thông báo',
      description: 'Bạn đã lưu thành công.',
      duration: 0,
    })
  }

  useEffect(() => {
    const productArryString = localStorage.getItem('products')
    if (productArryString) {
      const productArray = JSON.parse(productArryString)
      setProducts(productArray)
    }
    const characterArrayString = localStorage.getItem('characters')
    if (characterArrayString) {
      const characterArray = JSON.parse(characterArrayString)
      setCharacters(characterArray)
    }
    const countdownString = localStorage.getItem('countdown')
    const pointStepString = localStorage.getItem('pointStep')
    const difficultyString = localStorage.getItem('difficulty')
    if (countdownString) {
      setCountdown(countdownString)
    }

    if (pointStepString) {
      setPointStep(pointStepString)
    }

    if (difficultyString) {
      setDifficulty(difficultyString)
    }
  }, [])

  const handleShowImage = (productId: number) => {
    setShowImages(!showImages)
    setSelectImage(productId)
    setImageShow('../../src/assets/' + products[productId].image_normal.alt)
    console.log('true', products[productId].image_normal.alt)
  }

  return (
    <>
      <Row className={styles.display_desktop}>
        {contextHolder}
        <Col span={24}>
          <Row style={{ display: 'flex' }}>
            <Col span={16}>
              <Typography.Paragraph className={styles.setting_title}>
                Product setting
              </Typography.Paragraph>
              {products.map((product) => (
                <Col className={styles.setting_product_item} key={product.id}>
                  <div className={styles.setting_input}>
                    <label htmlFor={`imageProduct-${product.id}`}>
                      {product.image_normal.alt
                        ? shortenFileName(product.image_normal.alt)
                        : 'Choose image'}
                    </label>
                    <label htmlFor={`imageProduct-${product.id}`}>
                      <UploadOutlined />
                    </label>
                  </div>
                  <Input
                    onChange={(e) => handleProductImageChange(e, product.id)}
                    id={`imageProduct-${product.id}`}
                    type="file"
                    style={{ display: 'none' }}
                  />
                  <div style={{ marginLeft: 10, cursor: 'pointer' }}>
                    <img src={imageView} alt="" onClick={() => handleShowImage(product.id)} />
                  </div>
                  {showImages && selectImage === product.id && (
                    <Image width={200} src={imageShow} />
                  )}
                  <Input
                    value={product.name}
                    placeholder="Product name"
                    name="productName"
                    className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                    style={{ marginRight: '10px' }}
                    onChange={(e) => updateProductName(product.id, e.target.value)}
                  />
                  <div
                    className={styles.image_icon_product}
                    onClick={() => deleteProduct(product.id)}
                  >
                    <img src={imageRemove} alt="" />
                  </div>
                </Col>
              ))}
              <Button onClick={addProduct} className={styles.btn_add}>
                +
              </Button>
            </Col>
            <Col span={8}>
              <Typography.Paragraph className={styles.setting_title}>
                Character setting
              </Typography.Paragraph>
              {characters.map((character) => (
                <div className={styles.setting_character_item} key={character.id}>
                  <div className={styles.setting_input}>
                    <label htmlFor={`imageCharacter-${character.id}`}>
                      {character.image_normal.src
                        ? shortenFileName(character.image_normal.alt)
                        : 'Choose image'}
                    </label>
                    <label htmlFor={`imageCharacter-${character.id}`}>
                      <UploadOutlined />
                    </label>
                  </div>
                  <Input
                    onChange={(e) => handleCharacterImageChange(e, character.id)}
                    id={`imageCharacter-${character.id}`}
                    type="file"
                    style={{ display: 'none' }}
                  />
                  <div className={styles.imageIcon} onClick={() => deleteCharacter(character.id)}>
                    <img src={imageRemove} alt="" />
                  </div>
                </div>
              ))}
              <Button onClick={addCharacter} className={styles.btn_add}>
                +
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row style={{ marginBottom: 10 }}>
            <Col span={16}>
              <Typography.Paragraph className={styles.setting_title}>
                General setting
              </Typography.Paragraph>
              <Input
                type="number"
                value={countdown}
                onChange={(e) => setCountdown(e.target.value)}
                placeholder="Countdown time (s)"
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col span={16}>
              <Input
                type="number"
                value={pointStep}
                onChange={(e) => setPointStep(e.target.value)}
                placeholder="Point step"
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
              />
            </Col>
            <Col span={8}>
              <Typography.Paragraph className={styles.setting_general_text}>
                Points will be awarded when the customer chooses the correct answer
              </Typography.Paragraph>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col span={16}>
              <Input
                type="number"
                value={difficulty}
                placeholder="Dificulty"
                onChange={(e) => setDifficulty(e.target.value)}
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
              />
            </Col>
            <Col span={8}>
              <Typography.Paragraph className={styles.setting_general_text}>
                Time will increase with correct answer
              </Typography.Paragraph>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10, marginLeft: 10 }}>
            <Col span={16}>
              <Button onClick={saveSettings} className={styles.btn}>
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.display_mobile}>
        {contextHolder}
        <Col span={24}>
          <Typography.Paragraph className={styles.setting_title}>
            Product setting
          </Typography.Paragraph>
          {products.map((product) => (
            <Col className={styles.setting_product_item} key={product.id}>
              <div className={styles.setting_input}>
                <label htmlFor={`imageProduct-${product.id}`}>
                  {product.image_normal.alt
                    ? shortenFileName(product.image_normal.alt)
                    : 'Choose image'}
                </label>
                <label htmlFor={`imageProduct-${product.id}`}>
                  <UploadOutlined />
                </label>
              </div>
              <Input
                onChange={(e) => handleProductImageChange(e, product.id)}
                id={`imageProduct-${product.id}`}
                type="file"
                style={{ display: 'none' }}
              />
              <div
                style={{
                  marginLeft: 10,
                  width: '110px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <img src={imageView} alt="" style={{ width: '100%' }} onClick={() => handleShowImage(product.id)} />
              </div>
              {showImages && selectImage === product.id && <Image src={imageShow} />}

              <Input
                value={product.name}
                placeholder="Product name"
                name="productName"
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
                onChange={(e) => updateProductName(product.id, e.target.value)}
              />
              <div
                className={styles.image_icon_product}
                onClick={() => deleteProduct(product.id)}
              >
                <img src={imageRemove} alt="" />
              </div>
            </Col>
          ))}
          <Button onClick={addProduct} className={styles.btn_add}>
            +
          </Button>
        </Col>

        <Col span={24}>
          <Typography.Paragraph className={styles.setting_title}>
            Character setting
          </Typography.Paragraph>
          {characters.map((character) => (
            <div className={styles.setting_character_item} key={character.id}>
              <div className={styles.setting_input}>
                <label htmlFor={`imageCharacter-${character.id}`}>
                  {character.image_normal.src
                    ? shortenFileName(character.image_normal.src)
                    : 'Choose image'}
                </label>
                <label htmlFor={`imageCharacter-${character.id}`}>
                  <UploadOutlined />
                </label>
              </div>
              <Input
                onChange={(e) => handleCharacterImageChange(e, character.id)}
                id={`imageCharacter-${character.id}`}
                type="file"
                style={{ display: 'none' }}
              />
              <div className={styles.imageIcon} onClick={() => deleteCharacter(character.id)}>
                <img src={imageRemove} alt="" />
              </div>
            </div>
          ))}
          <Button onClick={addCharacter} className={styles.btn_add}>
            +
          </Button>
        </Col>

        <Col span={24}>
          <Typography.Paragraph className={styles.setting_title}>
            General setting
          </Typography.Paragraph>
          <Row style={{ marginBottom: 10 }}>
            <Col span={24}>
              <Input
                type="number"
                value={countdown}
                onChange={(e) => setCountdown(e.target.value)}
                placeholder="Countdown time (s)"
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col>
              <Input
                type="number"
                value={pointStep}
                onChange={(e) => setPointStep(e.target.value)}
                placeholder="Point step"
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
              />
              <Typography.Paragraph className={styles.setting_general_text}>
                Points will be awarded when the customer chooses the correct answer
              </Typography.Paragraph>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col span={24}>
              <Input
                type="number"
                value={difficulty}
                placeholder="Dificulty"
                onChange={(e) => setDifficulty(e.target.value)}
                className={`${styles.setting_input_product_name} ${styles.setting_input}`}
                style={{ marginRight: '10px' }}
              />
              <Typography.Paragraph className={styles.setting_general_text}>
                Time will increase with correct answer
              </Typography.Paragraph>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10, marginLeft: 10 }}>
            <Col span={24}>
              <Button onClick={saveSettings} className={styles.btn}>
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
