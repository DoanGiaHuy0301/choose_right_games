import React, { useState } from 'react'
import styles from './style.module.less'
import { FloatButton } from 'antd'
import * as Icon from '@ant-design/icons'


interface AppContentProps {
  children: React.ReactNode
}

export const AppContent: React.FC<AppContentProps> = (props) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>{props?.children}</div>
      
      <FloatButton.BackTop>
        <div>
          <Icon.CaretUpOutlined />
        </div>
      </FloatButton.BackTop>
    </div>
  )
}
