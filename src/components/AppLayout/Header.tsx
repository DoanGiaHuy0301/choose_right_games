import styles from './style.module.less'
import './style.less'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo Minigame-03.png'
import menuImage from '../../assets/menu.png'
import { RouteKey, rc } from '../../routes'
import { Col, Menu, Row } from 'antd'
import { useState } from 'react'
import imageClose from '../../assets/Game_design-7 [Converted]-03.png'

export const AppHeader: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  const mainMenuItems = [
    {
      key: rc(RouteKey.Home).path,
      label: 'Play',
    },
    {
      key: rc(RouteKey.Rules).path,
      label: 'Rule',
    },
    {
      key: rc(RouteKey.Prize).path,
      label: 'Prize',
    },
    {
      key: rc(RouteKey.Ranks).path,
      label: 'Rank',
    },
    {
      key: rc(RouteKey.Setting).path,
      label: 'Setting',
    },
  ].filter(
    (r) =>
      r.key === '/' ||
      r.key === '/rules' ||
      r.key === '/prize' ||
      r.key === '/ranks' ||
      r.key === '/setting',
  )
  const navigate = useNavigate()
  return (
    <div className={styles.headerContent}>
      <Row>
        <Col span={12}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
        </Col>
        <Col span={12}>
          <Menu
            theme="light"
            className={styles.menu}
            mode="horizontal"
            onClick={(event) => navigate(event.key)}
            selectedKeys={['/' + location.pathname.split('/')[1]]}
            defaultOpenKeys={[rc(RouteKey.Home).path]}
            items={mainMenuItems}
            style={{
              // flex: 1,
              minWidth: 0,
            }}
          />
          <div className={styles.iconMenu}>
            <button className={styles.btn_menu} onClick={handleShowMenu}>
              <img src={menuImage} alt="" />
            </button>
          </div>
          {isShowMenu && (
            <div className={styles.modalMenu} onClick={handleShowMenu}>
              <div className={styles.btn_close}>
                <img src={imageClose} alt="close" onClick={handleShowMenu} />
              </div>
              <Menu
                theme="light"
                className={styles.menu_mobile}
                mode="vertical"
                onClick={(event) => navigate(event.key)}
                selectedKeys={['/' + location.pathname.split('/')[1]]}
                defaultOpenKeys={[rc(RouteKey.Home).path]}
                items={mainMenuItems}
                style={{
                  minWidth: 0,
                  zIndex: 10,
                }}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  )
}
