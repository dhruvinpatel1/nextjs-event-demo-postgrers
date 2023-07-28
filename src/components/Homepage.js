import React from 'react'
import parse from 'html-react-parser';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { CalendarIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import 'swiper/css';
import Head from 'next/head';
import Image from 'next/image';

export default function Homepage({ homePagedata }) {

    function formatDateToCustomFormat(dateArray) {
        const dateObject = new Date(dateArray);

        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return dateObject.toLocaleDateString("en-US", options);
    }

    return (
        <>
            <Head>
                <title>{homePagedata.seo.metaTitle}</title>
                <meta name="description" content={homePagedata.seo.metaDescription}></meta>
            </Head>
            <div>
                <Swiper pagination={{ clickable: true, }} loop={true} navigation={true} autoplay={true} modules={[Pagination, Navigation, Autoplay]} className="">
                    {homePagedata.homepage_bannerslider.map((banner, index) => (
                    <SwiperSlide key={index} className='unset-img lg:!max-h-[600px] sm:!max-h-[400px] !max-h-[203px] '>
                        {banner.bannerinfo.length > 0 && <div className='absolute inset-0 flex items-center justify-center z-10'>
                            <div className='text-white text-center'>
                                <h1 className='text-[50px] font-bold'>{banner.bannerinfo[0].title}</h1>
                                <h1 className='text-[50px] font-bold'>{banner.bannerinfo[1].title}</h1>
                                <h2 className='text-[24px]'>{banner.bannerinfo[2].title}</h2>
                            </div>
                        </div>}
                        <Image src={`${process.env.NEXT_PUBLIC_SITE_URL}${banner.bannerimg.data.attributes.url}`} alt="home slider" layout="fill" className="!relative" />
                    </SwiperSlide>))}
                </Swiper>
                <div className="relative container !max-w-[1290px] mx-auto">
                    <div className="text-center pt-[90px] pb-[55px]">
                        <p className='font-bold uppercase text-xs mb-[15px]'>{homePagedata.homepage_content.title1}</p>
                        <h3 className='mb-[25px] text-5xl font-semibold text-[#767171]'>{homePagedata.homepage_content.title2}</h3>
                        <div className='grid grid-cols-2 gap-3 pt-[10px] pb-[30px]'>
                            <div className='text-left leading-8 font-normal text-[#767171]'>{parse(homePagedata.homepage_content.left_content)}</div>
                            <div className='text-left leading-8 font-normal text-[#767171]'>{parse(homePagedata.homepage_content.right_content)}</div>
                        </div>
                        <div className='pt-[20px]'>
                            <Link href={homePagedata.homepage_content.buttonLink} className="py-6 px-11 bg-[#9E0851] text-white "><span className='pr-4'>{homePagedata.homepage_content.buttonLabel}</span><ArrowLongRightIcon className='w-7 h-7 inline-block' /></Link>
                        </div>
                    </div>
                    <div className="text-center pt-[70px]">
                        <h2 className="text-3xl mb-[20px] font-semibold text-[#767171]">{homePagedata.gallery_section.title1}</h2>
                        <h2 className="text-5xl mb-[20px] font-semibold text-[#767171]">{homePagedata.gallery_section.title2}</h2>
                        <div className='grid grid-cols-2 gap-3 min-h-[250px] pt-[10px] pb-[10px]'>
                            {
                                homePagedata.gallery_section.galleryImage.map((gallery, index) => (
                                    <div key={index} className='bg-transparent bg-no-repeat bg-cover bg-[50%] w-full h-full relative' style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_SITE_URL}${gallery.image.data.attributes.url})` }}>
                                        <div className='absolute inset-0 flex items-center justify-center'>
                                            <div className='text-white text-center'>
                                                <h1 className='text-[42px] font-semibold'>{gallery.title}</h1>
                                                <div className='mt-[15px]'>
                                                    <Link href={gallery.link} className="p-[20px] bg-[#9E0851] text-white border-[1px] border-white "><span className='pr-4 text-[11px] uppercase'>{gallery.button_label}</span><ArrowLongRightIcon className='w-6 h-6 inline-block' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="text-center">
                        <div className='grid grid-cols-4 gap-3 min-h-[600px] pt-[10px] pb-[30px]'>
                            {
                                homePagedata.gallery_section1.galleryImage.map((gallery, index) => (
                                    <div key={index} className='bg-transparent bg-no-repeat bg-cover bg-[50%] w-full h-full relative' style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_SITE_URL}${gallery.image.data.attributes.url})` }}>
                                        <div className='relative h-full'>
                                            <div className='absolute bottom-0 p-[35px] w-full text-white text-center'>
                                                <h1 className='text-[24px] font-semibold'>{gallery.title}</h1>
                                                <div className='mt-[15px] py-[10px] px-[25px] bg-[#9E0851] border-[1px] border-white'>
                                                    <Link href={gallery.link} className='text-white'>
                                                        <span className='pr-4 text-[11px] uppercase'>{gallery.button_label}</span>
                                                        <ArrowLongRightIcon className='w-6 h-6 inline-block' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='text-center'>
                    <h3 className='text-[43px] text-[#4F4C4C] py-5 font-semibold'>{homePagedata.ambassadors_content.title}</h3>
                    <div className='py-[30px] px-[60px] bg-[#F6F6F6]'>
                        <Swiper
                            slidesPerView={7}
                            autoplay={{
                                delay: 2500,
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            className="mySwiper w-[calc(100%_-_60px)]"
                        >
                            {homePagedata.ambassadors_content.slider.map((image, index) => (
                                <SwiperSlide className='!mr-[46px] !w-[193px]' key={index}><Link href={`${image.link}`}><img src={`${process.env.NEXT_PUBLIC_SITE_URL}${image.image.data.attributes.url}`} alt={image.alt} className='rounded-[10px]' /></Link></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='relative container !max-w-[1290px] mx-auto'>
                    <div>
                        <div className='pt-[90px] pb-[35px] text-center'>
                            <p className='font-bold text-xs text-[#950851] pb-[15px] uppercase'>{homePagedata.video_content.title1}</p>
                            <h2 className='text-[42px] text-[#767171] uppercase font-semibold pb-[35px]'>{homePagedata.video_content.title2}</h2>
                            <div>
                                <iframe src="https://www.youtube.com/embed/Ia7JeZ-4roY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fthebrideshow.com&widgetid=1" className='aspect-video w-full h-full' />
                            </div>
                        </div>
                    </div>
                    <div className='pt-[90px] pb-[35px] text-center'>
                        <h2 className='text-[42px] text-[#767171] uppercase font-semibold pb-[25px]'>{homePagedata.news_Slider.title1}</h2>
                        <h2 className='text-[42px] text-[#767171] uppercase font-semibold pb-[35px]'>{homePagedata.news_Slider.title2}</h2>
                    </div>
                </div>
                <div className='border-t border-b border-[#E9E9E9]'>
                    <div className='relative mt-12'>
                        <Swiper
                            slidesPerView={3}
                            navigation={{
                                nextEl: '.review-swiper-button-next',
                                prevEl: '.review-swiper-button-prev',
                            }}
                            autoplay={{
                                delay: 2500,
                            }}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper relative container !max-w-[1290px] mx-auto"
                        >
                            {homePagedata.news_Slider.New_Slider.map((image, index) => (
                                <SwiperSlide className='mb-[50px]' key={index}>
                                    {/* <Link to={`${image.link}`}> */}
                                    <div>
                                        <div className='px-[15px]'>
                                            <div className='mb-6 relative'>
                                                <Link href="">
                                                    <img src={`${process.env.NEXT_PUBLIC_SITE_URL}${image.image.data.attributes.url}`} alt={image.alt} className='' />
                                                </Link>
                                                <span className='bg-white absolute py-[10px] pr-[7px] bottom-0 '>
                                                    Blog
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className='text-[20px] font-medium text-[#9E0851] mb-4'>{image.title}</h3>
                                                <div>
                                                    <span className='uppercase text-[11px] text-[#9faaa7]'>post by <Link href="" className='text-black'>BRIDE</Link></span>
                                                    <span className='uppercase text-[11px] text-[#9faaa7] relative'> / <CalendarIcon className='inline-block w-4 h-4 absolute top-[-2px]' /> <span className='ml-[22px]'>{formatDateToCustomFormat(image.posted_date)}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* </Link> */}
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        <ArrowLeftCircleIcon className="w-10 h-10 absolute top-1/2 left-[218px] review-swiper-button-next" />
                        <ArrowRightCircleIcon className="w-10 h-10 absolute top-1/2 right-[218px] review-swiper-button-prev" />
                    </div>
                </div>
            </div>
        </>
    )
}
