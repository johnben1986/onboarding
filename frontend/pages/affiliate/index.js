import Image from 'next/image'
import React from 'react'
import web from "/public/assets/images/web3logo.png"
import become from "/public/assets/images/become.png"
import { reactIcons } from 'components/utils/icons'
import Footer from 'components/Layout/Footer'
import Navbar from 'components/Layout/Navbar'
import { withAuth } from 'components/Auth/authMiddleware'
import MetadataHelper from 'components/MetadataHelper'
const BecomeAffiliate = () => {
    return (
        <>
        <main className='min-h-screen bg-image3'>
            <MetadataHelper noindex title="Become an Affiliate" />
            {/* <nav className=' border-b h-[100px] flex justify-between items-stretch'>
                <div className="flex-center px-4">
                    <Image className='w-[140px]' width={200} height={200} src={web} />
                </div>
                <div className="border-x flex-1 flex-center">
                    <h4 className='text-24 font-semibold text-center text-white'>Become an Affiliate!</h4>
                </div>
                <div className="flex items-center gap-3 px-4 text-white">
                    <span>{reactIcons.shopping}</span>
                    <span>Username</span>
                    <div className="bg-primary-hoverBg w-8 h-8 rounded-full relative overflow-hidden">
                        <Image src={web} fill className='object-cover' />
                    </div>
                </div>
            </nav> */}
            <Navbar title="Become an Affiliate!" />
            <div className="min-h-[calc(100vh-100px)] flex-center my-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10 px-10 max-w-[1200px] 2xl:max-w-[1400px] mx-auto">
                    <div className="col-span-1 border rounded-xl bg-primary-newBgColor2/30 px-4 p-5 pt-8 flex flex-col gap-3 justify-between">
                        <div className="pt-7">
                            <h4 className='font-semibold text-20 text-center text-white'>No purchase necessary to join.
                            </h4>
                            <p className='text-center text-20 pt-8 text-white'>Earn $10 every time a $49 QuickBuild website is ordered through your affiliate link.
                                Second tier pays $2.50.
                                If you get a white label / rebranded QuickBuild API for your own site, you will automatically be paid $12.50 - The equivalent to being paid for 2 tiers,
                                on every sale you make!</p>
                        </div>
                        <div className="flex items-center justify-between gap-3 pt-10">
                        <button className='flex flex-col justify-center   gap-1 items-center min-h-[48px] bg-white border border-black text-14 lg:text-20 rounded-full py-2 px-5 text-black'>Become an Affiliate! <span className='text-24'>{reactIcons.person}</span></button>
                            <button className=' flex-col justify-center  flex gap-1 items-center min-h-[48px] bg-[#5CD1FD] border border-black text-14 lg:text-20 rounded-full py-2 px-5 text-black'>Marketing Materials <span className='text-24'>{reactIcons.person}</span></button>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Image src={become} width={600} height={600} className='w-[360px] 2xl:w-[600px] mx-auto'/>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}

export default withAuth(BecomeAffiliate);