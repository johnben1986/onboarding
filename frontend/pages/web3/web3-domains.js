import Image from 'next/image'
import React, { useState } from 'react'
import purchansing4 from '/public/assets/images/web3hosting.png'
import purchansing2 from '/public/assets/images/web3domain.png'
import purchansing3 from '/public/assets/images/web3site.png'
import web3domain from "/public/assets/images/web3domain.png";
import metamask from '/public/assets/images/web3png.png'
import coinbase from '/public/assets/images/partners/unstoppable-domains.webp'
import ledger from '/public/assets/images/freename.webp'
import { reactIcons } from 'components/utils/icons'
import { Collapse } from '@mui/material'
import Link from 'next/link'
import MetadataHelper from 'components/MetadataHelper'


const Web3Domains = () => {
    const images = [purchansing4, purchansing2, purchansing3];
    const imagess = [metamask, coinbase, ledger];
    const [questions, setQuestions] = useState([
        {
            id: 0, question: 'Get a Domain', isOpen: true, answer: <div>
                                   <div className="flex items-center justify-between pt-2">
                            {imagess.map((img, index) => (
                                <Image key={index} className='max-w-[100px] lg:max-w-[130px]' src={img} width={300} height={300} />))}
                        </div>
            </div>
        },
        {
            id: 1, question: 'What is a web3 domain?', isOpen: false, answer: <div>
                <p>
                    A Web3 domain is a revolutionary approach to domain naming, operating within the decentralized framework of blockchain technology. Unlike traditional domains managed by centralized registrars, Web3 domains are entirely user-owned, ensuring both autonomy and security.
                </p>
                <p>
                    <strong>
                        Distinct Features of Web3 Domains:
                    </strong>
                </p>
                <ul className='my-2 list-decimal'>
                    <li>
                        <strong> Blockchain Foundation:</strong>
                        Web3 domains are built on blockchain platforms. This decentralized backbone provides inherent security, immutability, and transparency to domain ownership and operations.
                    </li>
                    <li>
                        <strong>True Ownership:</strong>
                        Once you acquire a Web3 domain, it's intrinsically yours. There are no recurring renewal fees, and the domain cannot be taken away from you without your cryptographic consent.
                    </li>
                    <li>
                        <strong> Simplified Crypto Transactions:</strong>
                        One standout advantage is the ability of Web3 domains to act as human-readable aliases for long and complex cryptocurrency addresses. Instead of sharing a cumbersome string of alphanumeric characters, you can provide a domain like "johnsmith.crypto."
                    </li>
                    <li>
                        <strong> Censorship Resilience:</strong>
                        Due to their decentralized nature, Web3 domains are resistant to traditional forms of censorship. They cannot be easily seized or shut down by centralized authorities.
                    </li>
                    <li>
                        <strong>  Unified Decentralized Presence:</strong>
                        A Web3 domain can serve as your holistic gateway in the decentralized web, representing your digital identity across various platforms and services.
                    </li>

                </ul>

                <p>In essence, a Web3 domain goes beyond being just an online address. It's a statement of digital sovereignty, offering users a unique blend of simplicity, security, and autonomy in the expansive universe of the decentralized web.</p>



            </div>
        },
        { id: 2, question: 'Why do I need a web3 domain?', isOpen: false,answer: <div>
        <p>
            In the rapidly evolving landscape of the decentralized web, you might wonder, "Why would I need a Web3 domain?" Let's delve into the compelling reasons that make these domains an essential asset in the Web3 era.
        </p>

        <ul className='my-2 list-decimal'>
            <li>
                <strong>User Empowerment & Sovereignty:</strong>
                A Web3 domain ensures that you are the true owner. Unlike traditional domains, there's no intermediary registrar; once you possess a Web3 domain, it's intrinsically yours, granting you unparalleled control and independence.
            </li>
            <li>
                <strong>Simplified Crypto Transactions:</strong>
                Ever felt daunted by those lengthy, complex cryptocurrency addresses? Web3 domains resolve this by letting you replace them with an easily memorable domain like "janedoe.crypto." This not only enhances user experience but also reduces the risk of errors in transactions.
            </li>
            <li>
                <strong>Censorship Resistant:</strong>
                In a world where online content can be controlled or silenced by centralized entities, Web3 domains stand resilient. Being decentralized, they are inherently resistant to censorship, ensuring your voice remains unbridled.
            </li>
            <li>
                <strong>Enhanced Security:</strong>
                Built on the robust framework of blockchain, Web3 domains inherit the technology's security features. This means they're safeguarded against common cyber threats and unauthorized alterations.
            </li>
            <li>
                <strong>Future-Proof Digital Identity:</strong>
                As the world shifts towards a more decentralized paradigm, owning a Web3 domain ensures you're not just keeping pace but leading the charge. It's a forward-looking investment, marking your space in the next phase of the internet.
            </li>
            <li>
                <strong>Comprehensive Digital Presence:</strong>
                Beyond just crypto transactions, a Web3 domain can represent your holistic identity in the decentralized web, from hosting decentralized websites to anchoring your presence across various Web3 platforms and services.
            </li>
            <li>
                <strong>Privacy Enhancement:</strong>
                Traditional domains often require public registration details, potentially exposing personal information. Web3 domains offer a layer of privacy, allowing for more discreet domain ownership and usage.
            </li>

        </ul>
        <p>
            <strong>
            Conclusion:
            </strong>
        </p>


        <p>Securing a Web3 domain is more than just staking a claim in the digital realm; it's about embracing the transformative potential of the decentralized web. From seamless transactions to unwavering autonomy, the benefits are manifold. As you navigate the vast possibilities of Web3, a domain serves as both your anchor and beacon, guiding and amplifying your journey in this new digital epoch.</p>



    </div> },
        
        { id: 3, question: 'I have a web3 domain. Now what?', isOpen: false, answer: <div>
        <p>
        Congratulations on securing your Web3 domain! With this digital identity in hand, the horizon of opportunities in the decentralized web is vast and promising. So, where do you go from here? Let’s pave the way forward.</p>
        
        <ul className='my-2 list-decimal'>
            <li>
                <strong>Set Up and Configure Your Domain: </strong>Start by setting up your domain to reflect your preferred cryptocurrency addresses. This allows you to simplify transactions, making it easier for others to send crypto to your memorable domain name instead of a lengthy alphanumeric address.
                </li>
                <li>
                <strong>Enhance Your Digital Presence with QuickBuild: </strong>
                Possessing a domain is just the beginning. Now, it's time to build your space in the digital realm. And here's where we make it especially easy for you.
                
                <strong className='block'>QuickBuild Web3 Website Builder:</strong>
                Web3onboarding.com proudly introduces the QuickBuild platform, tailor-made for those stepping into the decentralized web.
                <ul className='my-2 list-disc'>
                    <li><strong>User-Friendly Design: </strong>With our drag-and-drop interface, even newcomers can design with the ease of professionals.</li>
                    <li><strong>Decentralized Hosting: </strong>Embrace the true essence of Web3 with decentralized hosting, ensuring your site's resilience and autonomy.</li>
                </ul>
                For a deeper dive into the transformative capabilities of QuickBuild, check out the detailed guide in our <Link href={'/web3/quick-build'} className='text-blue-500 underline'>next step.</Link>
                </li>
                <li>
                <strong>Engage with Decentralized Platforms: </strong>
                Your Web3 domain can also serve as a gateway to various decentralized applications (DApps) and platforms. Engage with decentralized finance (DeFi) platforms, marketplaces, or even Web3 social networks, anchoring your identity with your domain.
                </li>
                <li>
                <strong>Share and Network: </strong>
                Promote your domain within your networks and communities. As the decentralized web grows, your domain serves as your unique identifier, allowing peers, collaborators, and potential clients to easily find and transact with you.
                </li>

        </ul>

        <p>
            <strong>
            Conclusion:
            </strong>
        </p>

        <p>With a Web3 domain in hand and the powerful QuickBuild platform at your disposal, the digital horizon is yours to explore and mold. At Web3onboarding.com, we're committed to supporting every step of your journey, ensuring you maximize the potential of your domain and truly embody the spirit of the decentralized web. Dive in and let your digital legacy unfold!</p>

    </div> },
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
        <MetadataHelper noindex title="Web3 Domain" />
        <div className='bg-image3 min-h-screen flex-center section-center'>
            <div className="container max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                <div className="col-span-1">
                    <div className="max-w-[400px] mx-auto">
                        <h2 className='text-24 lg:text-[40px] text-center font-semibold text-white'>3. Get A Domain</h2>
                        <div className="mt-3 min-h-[310px] flex-center border border-white text-center rounded-xl overflow-hidden p-4 text-18 lg:text-20  bg-primary-newBgColor2/40 text-white">A Web3 domain is a revolutionary approach to domain naming, operating within the decentralized framework of blockchain technology. Unlike traditional domains managed by centralized registrars, Web3 domains are entirely user-owned, ensuring both autonomy and security. The name of your web3 domain will be the same name used for your wallet, email, videochat and other web3 identifiers associated with you.</div>
                        <div className="flex items-center justify-between pt-2">
                            {images.map((img, index) => (
                                <Image key={index} className="max-w-[200px] lg:max-w-[200px] -ml-12" src={img} width={300} height={300} />))}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 space-y-3 text-white">
                    {questions.map((item) => (
                        <div key={item.id} onClick={(e) => toggleQuestion(item.id,e)} className="flex flex-col justify-center p-3 rounded-lg lg:rounded-3xl max-w-[520px] mx-auto gap-1 border border-white bg-primary-newBgColor2/40 lg:min-h-[100px]">
                            <div className="flex cursor-pointer justify-between items-center w-full">
                                <div className="flex-1 lg:flex-center"><h3 className='font-semibold text-14 sm:text-20 lg:text-24 text-start lg:text-center'>{item.question}</h3></div>
                                <span className="text-20 lg:text-26">
                                    {item.isOpen ? reactIcons.minus : reactIcons.plus}
                                </span>
                            </div>
                            <Collapse in={item.isOpen} className='' onTransitionEnd={handleTransitionEnd}>
                                <div className='lg:pt-2 lg:pl-4 font-normal text-base [&_strong]:text-white [&_p]:text-white/80 [&_li]:text-white/80 [&_p]:mb-2 [&_p]:text-14 [&_li]:mb-2 [&_li]:text-14'>
                                {item.answer}
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

export default Web3Domains