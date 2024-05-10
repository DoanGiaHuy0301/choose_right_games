import { Table } from 'antd'
import './style.less'
import styles from './style.module.less'
import rank1 from '../../assets/986-03.png'
import rank2 from '../../assets/986-02.png'
import rank3 from '../../assets/986-04.png'
import { dataRank } from './mocker-data'

export const RanksPages = () => {
  const data = dataRank
  const getRankImage = (stt: number) => {
    let imageSrc = ''
    switch (stt) {
      case 1:
        imageSrc = rank1
        break
      case 2:
        imageSrc = rank2
        break
      case 3:
        imageSrc = rank3
        break
      default:
        break
    }
    return imageSrc
  }

  const getRankDisplay = (stt: number) => {
    if (stt === 1 || stt === 2 || stt === 3) {
      return <img src={getRankImage(stt)} alt={`Rank ${stt}`} />
    }
    return stt 
  }

  return (
    <Table
      style={{ margin: '20px 0' }}
      columns={[
        {
          title: 'STT',
          dataIndex: 'stt',
          render: (_, index) => <div className={styles.rank_img}>{getRankDisplay(index.stt)}</div>,
        },
        {
          title: 'Họ và tên',
          dataIndex: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Số điện thoại',
          dataIndex: 'phone',
        },
        {
          title: 'Điểm',
          dataIndex: 'score',
        },
      ]}
      dataSource={data}
      size="middle"
      pagination={{
        hideOnSinglePage: true,
      }}
    />
  )
}
