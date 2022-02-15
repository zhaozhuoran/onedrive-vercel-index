import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import siteConfig from '../config/site.config'
import Navbar from '../components/Navbar'
import FileListing from '../components/FileListing'
import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></Script>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl p-4">
          <nav className="mb-4 flex items-center justify-between pl-1">
            <Breadcrumb />
            <SwitchLayout />
          </nav>
          <FileListing />
          <Script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></Script>
        </div>
      </main>
      <Script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></Script>
      <Footer />
      <Script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></Script>
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
