import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import purchansing4 from '/public/assets/images/purchasing4.png'
import purchansing2 from '/public/assets/images/purchasing2.png'
import purchansing3 from '/public/assets/images/purchasing3.png'
import metamask from '/public/assets/images/metamask.svg'
import coinbase from '/public/assets/images/coinbase.png'
import ledger from '/public/assets/images/ledger.png'
import { reactIcons } from 'components/utils/icons'
import { Collapse } from '@mui/material'
import { useTransak } from "hooks/useTransak";
import MetadataHelper from 'components/MetadataHelper'

const GettingWallet = () => {
    const images = [purchansing4, purchansing2, purchansing3];
    const imagess = [metamask, coinbase, ledger];
    const { transak } = useTransak();
    const [questions, setQuestions] = useState([
        {
            id: 0, question: 'Get a Wallet', isOpen: true, answer: <div>
                                   <div className="flex items-center justify-between pt-2">
                            {imagess.map((img, index) => (
                                <Image key={index} className='max-w-[100px] lg:max-w-[130px]' src={img} width={300} height={300} />))}
                        </div>
            </div>
        },
        {
            id: 1, question: 'What is a crypto wallet?', isOpen: false, answer: <div>
                <p>
                    In the vast ecosystem of digital currencies and blockchain, the term "crypto wallet" stands as a pillar. But what exactly is it?
                </p>
                <p>
                    A <strong>
                        crypto wallet
                    </strong> is a digital tool that allows users to securely store, send, and receive cryptocurrencies. Think of it as the digital counterpart to a physical wallet or a bank account, designed specifically for your digital assets. Unlike traditional wallets, however, a crypto wallet doesn't actually "store" your money in the conventional sense. Instead, it saves a pair of cryptographic keys: the public key and the private key.
                </p>
                <ul className='my-2 list-decimal'>
                    <li>
                        <strong>Public Key: </strong>
                        This can be equated to an account number. You share it with others to receive cryptocurrency. It represents an address on the blockchain where transactions are recorded.
                    </li>
                    <li>
                        <strong>Private Key: </strong>
                        This is analogous to a password or PIN. It's a confidential sequence of characters granting you the ability to authorize cryptocurrency transactions. Losing the private key means losing access to your funds, so it's crucial to keep it secure.
                    </li>
                </ul>
                <p>
                    For added security, many wallets provide a <strong>seed phrase</strong> - typically a sequence of 12-24 words. This phrase acts as a backup, allowing users to recover their wallets if they lose access or forget their private key.
                </p>
                <p>Crypto wallets come in various forms, including software-based (like mobile apps, desktop programs, or web platforms) and hardware-based (physical devices akin to USB drives). The primary function remains consistent across types: to manage crypto assets and ensure secure user transactions on the blockchain.</p>
                <p>In essence, a crypto wallet is the gateway to interacting with decentralized networks and digital currencies, acting as a personal interface to the blockchain. It's a blend of safety, privacy, and autonomy, reflecting the core principles of the cryptocurrency movement.</p>



            </div>
        },
        {
            id: 2, question: 'Why do I need a crypto wallet?', isOpen: false, answer: <div>
                <p>
                    Diving into the world of cryptocurrencies and blockchain can be exhilarating, but one might wonder, "Why do I need a crypto wallet?" Here's a concise guide to why having a crypto wallet is indispensable in the digital age.
                </p>
                <p>

                </p>
                <ul className='my-2 list-decimal'>
                    <li>
                        <strong>Complete Control Over Your Assets: </strong>
                        Traditional banking systems keep your funds under their custody, whereas a crypto wallet gives you full sovereignty over your digital assets. You decide when and how to use them without third-party interventions.
                    </li>
                    <li>
                        <strong>Secure Storage: </strong>
                        This is analogous to a password or PIN. It's a confidential sequence of characters granting you the ability to authorize cryptocurrency transactions. Losing the private key means losing access to your funds, so it's crucial to keep it secure.
                    </li>
                    <li>
                        <strong>Instant Transactions:  </strong>
                        Want to send or receive digital currency? With a crypto wallet, you can transact 24/7, globally, without the need for intermediaries, waiting periods, or hefty fees that come with international transfers in traditional banks.
                    </li>
                    <li>
                        <strong>Access to the Decentralized World:  </strong>
                        Blockchain technology offers more than just cryptocurrencies. With a crypto wallet, you can interact with Decentralized Applications (DApps), participate in Decentralized Finance (DeFi) platforms, and even buy or sell digital collectibles like NFTs.
                    </li>
                    <li>
                        <strong>Privacy and Anonymity:  </strong>
                        While not entirely anonymous, crypto wallets offer a greater degree of privacy compared to traditional financial transactions. Your identity isn't directly tied to your transaction and wallet addresses.
                    </li>
                    <li>
                        <strong>Mitigate the Risks of Centralization:  </strong>
                        Banks and centralized financial institutions are prone to issues like server downtimes, restrictions, or even insolvencies. Holding your assets in a crypto wallet reduces such centralized risks.
                    </li>
                    <li>
                        <strong>Inclusion:  </strong>
                        There are billions of people worldwide without access to traditional banking systems, either due to lack of infrastructure or eligibility issues. Crypto wallets offer financial inclusivity, enabling anyone with internet access to participate in the global economy.
                    </li>
                </ul>
                <p><strong>Conclusion:</strong></p>
                <p>
                    A crypto wallet isn't just a tool for digital transactions; it's a gateway to the expansive and ever- evolving universe of decentralized finance and technology. Whether you're looking to invest, transact, or simply embrace the future of finance, a crypto wallet is your first step towards navigating this digital frontier.
                </p>




            </div>
        },
        {
            id: 3, question: 'I Have a Wallet. Now What?', isOpen: false, answer: <div>
                <p>
                    With your crypto wallet set up, you're now on the brink of a thrilling exploration into the world of decentralized finance. But, where to from here? Let's map out your next steps.
                </p>

                <div className=' mb-2'>
                    <p><strong>1. Secure Your Wallet:  </strong>Your wallet is the keystone of your crypto journey, and its security is paramount.</p>
                

                    <ul className='my-2 list-disc list-outside'>
                        <li>
                            <strong>Backup: </strong>
                            Always have a backup of your wallet. If it provides a seed phrase (a series of 12-24 words), write it down and store it in a secure location, away from prying eyes.
                        </li>
                        <li>
                            <strong> Private Key Confidentiality: </strong>
                            Your private key is sacred. Never share it, never email it, and never store it on cloud services. It's your crypto's last line of defense.
                        </li>
                        <li>
                            <strong>  Regular Updates:  </strong>
                            Ensure any software components of your wallet are up-to-date. This helps patch vulnerabilities and enhances security.
                        </li>
                        <li>
                            <strong>Cross-Platform:  </strong>
                            Whether you prefer desktop or mobile, Metamask has got you covered.
                        </li>
                    </ul>
                </div>
                <div className=' mb-2'>
                    <p><strong>2. Fund Your Wallet:  </strong>To start any crypto adventure, you'll need some digital currency in your arsenal.</p>


                    <ul className='my-2 list-disc list-outside'>
                        <li>
                            <strong>Purchase Cryptocurrency: </strong>
                            If you're not sure where to buy, we've got you covered. With our <strong>fiat-to-cryptocurrency </strong> on-ramp, you can quickly convert traditional money into crypto and transfer it directly to your wallet. Get started <a
                                className='text-blue-500 underline'
                                onClick={() => {
                                    transak.launch();
                                  }}
                                href="#" rel="noopener noreferrer">here.</a>
                        </li>
                        <li>
                            <strong> Peer-to-Peer: </strong>
                            Alternatively, if someone you know wants to send you cryptocurrency, simply provide them with your wallet's public address, and you'll receive the assets directly.
                        </li>
                    </ul>
                    <p>Ready to move forward? Let's dive deeper and explore the multifaceted universe of crypto. Check out the next step in our comprehensive onboarding program  <a className='text-blue-500 underline' href="/web3/purchase-crypto" rel="noopener noreferrer">here.</a></p>
                </div>
            </div>
        },
    ]);
    const [lastClickedElement,setLastClickedElement] = useState(false);
    const toggleQuestion = (id,e) => {
       setQuestions(questions.map(item => id === item.id ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }))
       setLastClickedElement(e.currentTarget);
    };
    const handleTransitionEnd = () =>{
        if(lastClickedElement!=false){
            lastClickedElement.scrollIntoView(true,{behavior: 'instant'});
            setLastClickedElement(false);
        }
    };

    return (
        <>
        <MetadataHelper noindex title="Get a Wallet"/>
        <div className='bg-image3 min-h-screen flex-center section-center'>
            <div className="container max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
                <div className="col-span-1">
                    <div className="max-w-[500px] mx-auto">
                        <h2 className='text-24 lg:text-[40px] text-center font-semibold text-white'>1. Get a Wallet</h2>
                        <div className="mt-3 min-h-[350px] flex items-center text-center border border-white rounded-xl overflow-hidden p-4 text-15 lg:text-20 bg-primary-newBgColor2/80 text-white">
                        A crypto wallet is a digital tool that allows users to securely store, send, and receive cryptocurrencies. Think of it as the digital counterpart to a physical wallet or a bank account, designed specifically for your digital assets. Unlike traditional wallets, a crypto wallet doesn't actually "store" your money in the conventional sense. Instead, it saves a pair of cryptographic keys: the public key and the private key.  
Browser wallets such as Metamask also act as your web3 passport, enabling you to login to web3sites as you would use a username and password in web3.</div>
                        <div className="flex items-center justify-between pt-2">
                            {images.map((img, index) => (
                                <Image key={index} className='max-w-[100px] lg:max-w-[130px]' src={img} width={300} height={300} />))}
                        </div>
                    </div>
                    </div>
                    
                <div className="col-span-1 space-y-3 text-white">
                    {questions.map((item) => (
                        <div key={item.id} onClick={(e) => {toggleQuestion(item.id,e);}} className="flex flex-col justify-center p-3 rounded-lg lg:rounded-3xl max-w-[520px] mx-auto gap-1 border border-white bg-primary-newBgColor2/40 lg:min-h-[100px]">
                            <div className="flex cursor-pointer justify-between items-center w-full">
                                <div className="flex-1 lg:flex-center">
                                    <h3 className='font-semibold text-14 sm:text-20 lg:text-24 text-start lg:text-center'>{item.question}</h3>
                                </div>
                                <span className="text-20 lg:text-26" >
                                    {item.isOpen ? reactIcons.minus : reactIcons.plus}
                                </span>
                            </div>
                            <Collapse in={item.isOpen} className='' onTransitionEnd={handleTransitionEnd}>
                                <div className='lg:pt-2 lg:pl-4 font-normal text-base [&_strong]:text-white [&_p]:text-white/80 [&_li]:text-white/80 [&_p]:mb-2 [&_p]:text-14 [&_li]:mb-2 [&_li]:text-14'>
                                    <>

                                        {item.answer}
                                    </>
                                </div>
                            </Collapse>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default GettingWallet