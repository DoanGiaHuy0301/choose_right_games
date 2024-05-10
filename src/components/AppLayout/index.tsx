import { Layout } from "antd";
import styles from './style.module.less'
import { AppHeader } from "./Header";
import { AppContent } from "./Content";
import { ReactNode } from 'react'

export function AppLayout(props: { children?: ReactNode }) {
    return (
        <Layout className={styles.appLayout}>
            <Layout.Header className={styles.appHeader}>
                <AppHeader />
            </Layout.Header>
            <Layout.Content className={styles.appContent}>
                <AppContent>{props?.children}</AppContent>
            </Layout.Content>
        </Layout>
    )
}