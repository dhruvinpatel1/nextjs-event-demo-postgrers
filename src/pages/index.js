import React from 'react'
import Homepage from '@/components/Homepage'

export default function index({homeData}) {

  return (
    <>
     <Homepage homePagedata={homeData.data.attributes} />
    </>
  )
}

export async function getServerSideProps() {

  const homeRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/home-page?nested&populate=deep`)
  const homeData = await homeRes.json()
  
  return { props: {homeData } }
}