import Image from 'next/image'
import React, { useState } from 'react'
import purchansing1 from '/public/assets/images/web3hosting.png'
import purchansing2 from '/public/assets/images/web3domain.png'
import purchansing3 from '/public/assets/images/web3site.png'
import web3hosting from "/public/assets/images/web3hosting.png";
import { reactIcons } from 'components/utils/icons'
import { Collapse } from '@mui/material'
import MetadataHelper from 'components/MetadataHelper'


const IpfsHosting = () => {
    const images = [purchansing1, purchansing2, purchansing3];
    const [questions, setQuestions] = useState([
        {
            id: 0, question: 'Get IPFS Hosting', isOpen: true, answer: <div>
                          <div className="flex items-center">
                             <Image
                  src={web3hosting}
                  className="h-[180px] w-[180px] ml-[130px] -mt-5"
                />
               
            </div>
            </div>
        },
        {
            id: 1, question: 'What is IPFS Hosting?', isOpen: false, answer: <div>
                <p>The InterPlanetary File System (IPFS) is a decentralized system for storing and accessing digital content, offering an alternative to the traditional, centralized web hosting methods. Unlike traditional hosting, where each file is stored on specific servers and accessed via a location-based address (like a URL), IPFS uses content-based addressing. This means files are identified by their content, not by where they are located.</p>
                <p>In IPFS hosting:</p>
                <ul className='my-2 list-decimal'>
                    <li><strong>Files are broken down into blocks: </strong>Each piece of data is split into smaller chunks, making it easier to manage and distribute.</li>
                    <li><strong>Data is distributed across the network: </strong>Instead of being stored on a central server, these file blocks are spread out over numerous nodes (computers) in the IPFS network.
                    </li>
                    <li><strong>Content-based addressing: </strong>Each file (or block of data) gets a unique hash based on its content. When users request data, they're asking for it based on what it is, not where it is. This ensures content remains intact and unaltered when accessed.</li>
                    <li><strong>Decentralized nature: </strong>Files don't come from one central source. If one node in the network is unavailable, the system fetches the file from another node that has it. This decentralized nature enhances the resilience and durability of data storage.</li>
                </ul>
                <p>In essence, IPFS hosting is a modern approach to web storage and access, emphasizing decentralization, integrity, and resilience.</p>
            </div>
        },
        {
            id: 2, question: 'Why do I need IPFS Hosting?', isOpen: false, answer: <div>
                <ul className='my-2 list-decimal'>
                    <li><strong>Enhanced Resilience: </strong>Centralized servers are vulnerable to outages, DDoS attacks, and other disruptions. With IPFS hosting, your content is distributed across a vast network of nodes. If one node fails or faces issues, the system retrieves the content from another node, ensuring uninterrupted access.</li>
                    <li><strong>Permanence and Integrity: </strong>IPFS uses content-based addressing. Once content is added, it receives a unique hash. This ensures that the content remains unaltered when accessed, reducing risks of tampering. Furthermore, as long as a single node on the network has the content, it remains retrievable, even if the original publisher removes or loses it.
                    </li>
                    <li><strong>Efficient Content Delivery: </strong>IPFS often retrieves data from the nearest or most efficient node, optimizing for faster load times. Especially for global audiences, IPFS can lead to speedier website performance.</li>
                    <li><strong>Reduced Hosting Costs: </strong>With decentralized hosting, there are often fewer infrastructure requirements, potentially leading to cost savings compared to traditional hosting.</li>
                    <li><strong>Censorship Resistance: </strong>In regions or situations where content might be censored or suppressed, decentralized hosting makes it harder to remove or block specific content from the internet.</li>
                    <li><strong>Support for a Decentralized Web: </strong>The internet is evolving, with increasing interest in decentralization to ensure it remains open, equitable, and user-centric. Adopting IPFS hosting aligns with this vision for the future of the web.
                    </li>
                    <li><strong>Eco-Friendly Hosting: </strong>Traditional data centers consume vast amounts of energy. By distributing data across existing devices in the network, IPFS might reduce the overall energy footprint associated with hosting.</li>
                </ul>
                <p>In essence, if you're looking for a resilient, efficient, and forward-thinking approach to web hosting, IPFS offers a compelling alternative to traditional methods.</p>
            </div>
        },
        // {
        //     id: 3, question: 'Where can I get IPFS Hosting?', isOpen: false, answer: <div>
        //         <p><strong>Directly Here!:</strong> Why search elsewhere when the best IPFS hosting solution is right at your fingertips? Our platform is specifically designed to offer a seamless, secure, and efficient IPFS hosting experience.</p>
        //         <ul className='my-2 list-disc'>
        //             <li><strong>Optimal Uptime: </strong>We understand the importance of accessibility, and our decentralized hosting ensures your content is always available.</li>
        //             <li><strong>Unparalleled Security: </strong>With content-based addressing, rest assured your data remains intact and tamper-free.</li>
        //             <li><strong>Exceptional Support: </strong>Our team is here to guide you every step of the way, ensuring a smooth hosting journey.</li>
        //         </ul>
        //         <p>Ready to embrace the future of web hosting? Dive into the world of IPFS with us. <a href='/quickbuild/hosting' className='text-blue-500 underline'>Get started now</a></p>
        //     </div>
        // },
        {
            id: 4, question: 'I Have IPFS hosting. Now what?', isOpen: false, answer: <div>
                <p>Congratulations you've completed the essential steps to being onboarded to web3.</p>
                <p>However, this is not the end of your journey with us! It's time to upgrade to either our Personal package or our business package to access some exclusive content and features.</p>
                <p><a href='/#benefit' className='text-blue-500 underline'>Get started now</a> to continue your journey into web3!</p>
            </div>
        },
    ]);
    const [lastClickedElement,setLastClickedElement] = useState(false);
    const toggleQuestion = (id,e) => {
        setQuestions(questions.map(item => id === item.id ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }))
        setLastClickedElement(e.currentTarget);
    }
    const handleTransitionEnd = () =>{
        if(lastClickedElement!=false){
            lastClickedElement.scrollIntoView(true,{behavior: 'instant'});
            setLastClickedElement(false);
        }
    };

    return (
        <>
        <MetadataHelper noindex title="IPFS Hosting" />
        <div className='bg-image4 min-h-screen flex-center section-center'>
            <div className="container max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                <div className="col-span-1">
                    <div className="max-w-[400px] mx-auto">
                        <h2 className='text-24 lg:text-[40px] text-center font-semibold text-white'>IPFS Hosting</h2>
                            <div className="mt-3 min-h-[310px] flex-center border border-white text-center rounded-xl overflow-hidden p-4 text-18 lg:text-20  bg-primary-newBgColor2/40 text-white">
                            At its essence, a Web3 site operates in the broader sphere of the decentralized web, known as Web3. Unlike traditional websites that rely on centralized servers, databases, and authorities, Web3 sites function on a decentralized network, primarily supported by blockchain technology. 
                        </div>
                        <div className="flex items-center justify-between">
                            {images.map((img, index) => (
                                <Image key={index}    className="max-w-[200px] lg:max-w-[200px] -ml-12" src={img} width={300} height={300} />))}
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

export default IpfsHosting