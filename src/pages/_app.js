import '@/styles/globals.css'
import { useEffect,useState } from 'react'
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {

  const [menudata, setmenudata] = useState();
  const [footerdata, setfooterdata] = useState();


  async function getmenu() {
    const menuRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/menus/1?nested&populate=*`)
    const menuData = await menuRes.json()
    setmenudata(menuData)

    const footerRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/footer?populate=deep`)
    const footerData = await footerRes.json()
    setfooterdata(footerData)

  }

  useEffect(() => {
    getmenu()
  }, []);

  return (
    <>
      {menudata && <Menu menu={menudata.data.attributes} />}
      <Component {...pageProps} />
      {footerdata && <Footer footer={footerdata.data.attributes} />}
    </>
  )
}


