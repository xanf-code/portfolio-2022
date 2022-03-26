import type { NextPage } from 'next'
import Layout from '../layout/Layout'
import Bookmark from '../ui/Bookmark/Bookmark'
import FeaturedTab from '../ui/Featured/FeaturedTab'
import NameTypewritter from '../ui/Home/NameTypewritter'

const Home: NextPage = () => {
  return (
    // <div className='bg-gray-50 dark:bg-black'>
    <div>
      <Layout title="Darshan Aswath | Portfolio">
        <div className='space-y-4'>
          <NameTypewritter />
          <p className='text-black dark:text-white'>
            Nisi dolore ut nisi ad enim adipisicing minim. Tempor nulla sunt aute adipisicing nisi. Ea pariatur Lorem ex fugiat non ex dolor duis minim. Adipisicing et aute do est laborum labore dolore dolore sint ea id deserunt. Non veniam adipisicing cupidatat anim eiusmod qui exercitation aute elit sint velit.
          </p>
          <FeaturedTab />
          <Bookmark />
        </div>
      </Layout>
    </div>
  )
}

export default Home
