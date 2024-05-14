import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
    return (
        <div className=' rounded-md  mt-10'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <section className="p-6 dark:text-blue-400 bg-gray-50 rounded-md">
                        <div className=" grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                <h1 className="text-4xl font-extrabold">Welcome</h1>
                                <p className="my-4">
                                    <span className="font-medium ">You’re most welcome, it’s my pleasure to assist.
                                        Should you require further information or support, please don’t hesitate to contact me.
                                        Wishing you a great day ahead!</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                            </div>
                            <img src="https://i.ibb.co/KNsHR9F/2942054-408406-PDZ1-KL-914.jpg" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 dark:text-blue-400 bg-lime-50 rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">

                                <h1 className="text-4xl font-extrabold">Explore Diverse Volunteer Opportunities</h1>
                                <p className="my-4">
                                    <span className="font-medium ">"Discover a wide range of volunteer opportunities tailored to your interests, skills, and availability. </span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>

                            </div>
                            <img src="https://i.ibb.co/XL2DG9X/7788663-3735515.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 dark:text-gray-100 bg-[#01CDD4] rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">

                                <h1 className="text-4xl font-extrabold">See the Impact of Your Contribution</h1>
                                <p className="my-4">
                                    <span className="font-medium ">Experience the power of volunteerism firsthand and witness the positive impact you can make in your community and beyond. </span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>

                            </div>
                            <img src="https://i.ibb.co/RyT165T/2546573-356309-PAXG83-360.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="p-6 dark:text-gray-100 bg-[#27A8E1] rounded-md">
                        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 ">
                                <h1 className="text-4xl font-extrabold">Join Our Mission to Make a Difference</h1>
                                <p className="my-4">
                                    <span className="font-medium ">Become part of a passionate community dedicated to making a difference in the world. By joining our mission.</span>
                                </p>
                                <button className='btn btn-outline'>View Details</button>
                            </div>
                            <img src="https://i.ibb.co/QQQxNTY/1853167-253000-P4-NDBU-283.jpg" alt="" className="object-cover w-full h-[70vh] rounded-md xl:col-span-3 bg-gray-500" />
                        </div>
                    </section>
                </SwiperSlide>


            </Swiper>




        </div>
    )
}