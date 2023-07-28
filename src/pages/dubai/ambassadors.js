import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function Ambassadors({ DubaiMenuData, DubaiAmbassadors }) {

    const DubaiMenu = DubaiMenuData.data.attributes

    return (
        <>
            <div className='bg-[#FDF8F6] mt-8'>
                <div className='text-center px-[30px] py-[50px]'>
                    <p className='text-black text-xs font-bold uppercase mb-[15px]'>Bride Dubai</p>
                    <h1 className='text-[#767171] text-5xl uppercase font-semibold'>Ambassadors</h1>
                </div>
            </div>
            <div className="relative container !max-w-[1290px] mx-auto">
                <div className='border-[1px] border-[#9E9E9E] border-solid mt-[30px] mb-[20px]'></div>
                <div className='p-[10px]'>
                    <ul className='flex justify-center '>
                        {
                            DubaiMenu.items.data.map((label, index) => (
                                <li key={index} className='inline-block relative'><Link href={label.attributes.url} className={`py-[13px] px-[20px] text-[15px] font-medium tracking-wider ${label.attributes.title.toLowerCase() == "ambassadors" ? "text-[#ff5a6e]" : "text-[#313131]"} uppercase`}>{label.attributes.title}</Link></li>
                            ))
                        }
                    </ul>
                </div> 
                <div className='grid grid-cols-4 mt-9 '>
                    {
                        DubaiAmbassadors.data && DubaiAmbassadors.data.attributes.gallery.map((image, index) => (
                            <div key={index}>
                           <Link href={image.link} className='ambassadorsimgs'><Image src={`${process.env.NEXT_PUBLIC_SITE_URL}${image.image.data.attributes.url}`} width={300} height={170} className='mb-5 ambassadorsimg' /></Link></div>
                        ))
                    }
                </div> 
            </div>
        </>
    )
}

export async function getServerSideProps() {
 

    const DubaiMenuRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/menus/3?nested&populate=*`)

    const DubaiMenuData = await DubaiMenuRes.json()

    const DubaiAmbassador = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/dubai-ambassador?populate=deep`)
    const DubaiAmbassadors = await DubaiAmbassador.json()


    return { props: { DubaiMenuData, DubaiAmbassadors } }
}