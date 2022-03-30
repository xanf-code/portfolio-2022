import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Bookmark from '../ui/Bookmark/Bookmark'
import FeaturedTab from '../ui/Featured/FeaturedTab'
import NameTypewritter from '../ui/Home/NameTypewritter'

const Home: NextPage = () => {
  return (
    <Layout title="Darshan Aswath | Portfolio">
      <div className='space-y-4'>
        <NameTypewritter />
        <FeaturedTab />
        <Bookmark />
      </div>
    </Layout>
  )
}

export default Home
