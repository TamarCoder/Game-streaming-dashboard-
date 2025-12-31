import Header from '@/components/Header/Header'
import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import MainContent from '@/components/MainContent/MainContent'
import RightSidebar from '@/components/RightSidebar/RightSidebar'
import styles from '@/styles/App.module.scss'

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.app__container}>
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  )
}
