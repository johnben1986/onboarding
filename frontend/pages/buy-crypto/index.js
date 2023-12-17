import Image from 'next/image'
import React from 'react'
import transak from '/public/assets/images/transak.png'
const BuyCrypto = () => {
    return (
        <main className='section-center'>
            <div className='section-center container'>
                <h2 className='heading-1 text-center'>Buy Crypto</h2>
                <p className='para-24 pt-[30px] text-center'>
                    We've integrated the Transak On-Ramp feature in our app to enable our users to buy crypto directly inside EDA using
                    fiat currencies via different payment methods such as card, bank transfer and other local payment methods.
                </p>
                <div className="section-center pb-0">
                    <Image width={704} height={147} className=' max-w-[700px] mx-auto w-full' src={transak} />
                    <button className='btn-lg mx-auto mt-20'>Buy Now</button>
                </div>
            </div>
        </main>
    )
}

export default BuyCrypto