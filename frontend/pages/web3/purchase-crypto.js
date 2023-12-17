import Image from "next/image";
import React, { useState } from "react";
import purchansing1 from "/public/assets/images/crypto2.png";
import purchansing2 from "/public/assets/images/crypto1.png";
import purchansing3 from "/public/assets/images/crypto3.png";
import exchange from "/public/assets/images/exchange.png";
import blank from "/public/assets/images/blank.png";
import { reactIcons } from "components/utils/icons";
import { Collapse } from "@mui/material";
import Link from "next/link";
import { useTransak } from "hooks/useTransak";
import MetadataHelper from "components/MetadataHelper";

const purchansingCrypto = () => {
  const images = [purchansing1, purchansing2, purchansing3];
  const imagess = [exchange];
  const { transak } = useTransak();
  const [questions, setQuestions] = useState([
    {
      id: 0, question: 'Get Crypto.', isOpen: true, answer: <div>
                             <div className="flex items-center">
                             <Image
                  src={exchange}
                  className="h-[180px] w-[180px] ml-[130px] -mt-5"
                />
                  </div>
      </div>
  },
    {
      id: 1,
      question: "What is cryptocurrency?",
      isOpen: false,
      answer: (
        <div>
          <p>
            Cryptocurrency, at its core, is a form of digital or virtual
            currency that relies on cryptographic techniques to secure
            transactions, regulate the creation of new units, and verify the
            transfer of assets. Unlike traditional currencies issued by
            governments and central banks, cryptocurrencies operate on a
            decentralized platform, typically a technology called blockchain.
          </p>
          <p>
            A <strong>blockchain</strong> is a distributed ledger that records
            all transactions across a vast network of computers. This
            decentralization means that no central authority, like a bank or
            government, controls the currency or its monetary policy. Instead,
            transactions occur directly between users and are verified by
            network nodes through cryptography.
          </p>
          <p>Some fundamental aspects of cryptocurrency include:</p>
          <ul className="my-2 list-disc">
            <li>
              <strong>Immutability: </strong>Once a transaction is added to the
              blockchain, it cannot be altered, ensuring integrity and trust in
              the system.
            </li>
            <li>
              <strong>Pseudonymity: </strong>Users can make transactions without
              their real names. Instead, they use pseudonyms or alphanumeric
              addresses.
            </li>
            <li>
              <strong>Transparency: </strong>Due to the open-source nature of
              most blockchain systems, all transactions can be viewed by anyone
              and any time, ensuring full transparency in the network.
            </li>
            <li>
              <strong>Global and Borderless: </strong>Cryptocurrencies can be
              sent or received anywhere in the world, without the constraints or
              fees of traditional banking systems.
            </li>
          </ul>
          <p>
            In essence, cryptocurrency represents a paradigm shift from
            centralized to decentralized financial systems, offering a new way
            to think about money in the digital age.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: "Why do I need crypto?",
      isOpen: false,
      answer: (
        <div>
          <p>
            As the digital tide surges, you might find yourself pondering, "Why
            do I need cryptocurrency?" Here's a concise exploration of the
            compelling reasons to consider diving into the world of digital
            currencies.
          </p>
          <ul className="my-2 list-decimal">
            <li>
              <strong>Financial Sovereignty: </strong>Cryptocurrencies offer
              unparalleled control over your own assets. Without intermediaries
              like banks or payment processors, you have direct custody of your
              funds, ensuring maximum autonomy.
            </li>
            <li>
              <strong>Lower Transaction Costs: </strong>Traditional banking
              systems and online money transfers usually involve fees and
              exchange costs. Cryptocurrency may minimize these costs, as
              transactions directly between parties do not incur third-party
              charges.
            </li>
            <li>
              <strong>Speed & Accessibility: </strong>Cryptocurrency
              transactions are swift, often settling in minutes, regardless of
              the geographical location of the parties. Moreover, all you need
              is an internet connection to access cryptocurrencies, enabling
              financial inclusion for those without traditional banking
              facilities.
            </li>
            <li>
              <strong>Security & Fraud Prevention: </strong>Cryptographic
              protocols underpinning cryptocurrencies make them secure and hard
              to counterfeit. Furthermore, given the decentralized nature, they
              are resistant to fraud and account tampering.
            </li>
            <li>
              <strong>Portfolio Diversification: </strong> As an emerging asset
              class, cryptocurrencies provide an avenue for diversifying
              investments, potentially leading to risk mitigation and new
              investment opportunities.
            </li>
            <li>
              <strong>Privacy: </strong>While not entirely anonymous,
              cryptocurrency transactions offer a greater degree of privacy
              compared to traditional transactions, as they don't require the
              full disclosure of personal financial details.
            </li>
            <li>
              <strong>Future-Readiness: </strong>With an increasing number of
              businesses and services accepting cryptocurrencies and the ongoing
              innovations in decentralized finance (DeFi), holding
              cryptocurrencies readies you for an evolving digital economy.
            </li>
            <li>
              <strong>Empowerment & Innovation: </strong>Engaging with
              cryptocurrencies fosters understanding and participation in
              groundbreaking technological innovations. It also empowers
              individuals by giving them a tool to challenge traditional
              financial systems and to drive change towards a more decentralized
              and equitable global economy.
            </li>
          </ul>
          <p>
            <strong>Conclusion:</strong>
          </p>
          <p>
            While cryptocurrencies bring about a spectrum of benefits, they also
            come with their set of challenges and volatility. It's essential to
            undertake thorough research and possibly consult with financial
            experts before diving in. Yet, the reasons above highlight the
            significant potential and advantages that cryptocurrencies can offer
            in reshaping the financial landscape of tomorrow.
          </p>
        </div>
      ),
    },
    // {
    //   id: 3,
    //   question: "Where can I safely purchase crypto?",
    //   isOpen: false,
    //   answer: (
    //     <div>
    //       <p>
    //         Navigating the digital currency landscape can seem complex, but when
    //         it comes to purchasing crypto, we've made it straightforward for
    //         you. So, where can you buy cryptocurrency?
    //       </p>
    //       <p>
    //         <strong>Web3 Onboarding Your Direct Route to Crypto</strong>
    //       </p>
    //       <p>
    //         The easiest and most convenient way to acquire cryptocurrency is
    //         right here on Web3onboarding.com. We understand the intricacies of
    //         the crypto world and have streamlined the process for newcomers and
    //         veterans alike.
    //       </p>
    //       <p>
    //         <strong>Key Advantages:</strong>
    //       </p>
    //       <ul className="my-2 list-decimal">
    //         <li>
    //           <strong>Simplicity: </strong>No need to juggle multiple platforms
    //           or go through convoluted processes. Our interface is
    //           user-friendly, designed for quick and hassle-free transactions.
    //         </li>
    //         <li>
    //           <strong>Security: </strong>We prioritize your safety. Our platform
    //           employs state-of-the-art security measures to ensure that your
    //           purchase is protected from start to finish.
    //         </li>
    //         <li>
    //           <strong>Speed: </strong>Avoid lengthy verification processes. With
    //           our platform, you can swiftly convert your fiat money into crypto
    //           and embark on your digital finance journey.
    //         </li>
    //         <li>
    //           <strong>Transparent Fees: </strong>No hidden costs or last-minute
    //           surprises. We maintain transparency in all transactions, ensuring
    //           you get the best value for your money.
    //         </li>
    //       </ul>
    //       <p>
    //         <strong>Get Started Now: </strong>Dive into the world of crypto with
    //         our seamless <strong>fiat-to-crypto onramp. </strong>Purchase your
    //         first cryptocurrency{" "}
    //         <Link
    //           className="text-blue-500 underline hover:text-blue-400"
    //           href="#"
    //           onClick={() => {
    //             transak.launch();
    //           }}
    //         >
    //           here.
    //         </Link>
    //       </p>
    //       <p>
    //         <strong>Other Avenues:</strong>
    //       </p>
    //       <p>
    //         While we offer a direct and efficient path, there are other ways to
    //         purchase crypto:
    //       </p>
    //       <ul className="my-2 list-decimal">
    //         <li>
    //           <strong>Cryptocurrency Exchanges: </strong>Platforms like
    //           Coinbase, Binance, or Kraken allow users to buy, sell, and hold
    //           various cryptocurrencies.
    //         </li>
    //         <li>
    //           <strong>Peer-to-Peer (P2P) Platforms: </strong>Websites such as
    //           LocalBitcoins provide a platform for individuals to transact
    //           directly with each other.
    //         </li>
    //         <li>
    //           <strong>Crypto ATMs: </strong>Similar to regular ATMs but for
    //           cryptocurrencies. Insert fiat money, and receive crypto in your
    //           digital wallet.
    //         </li>
    //         <li>
    //           <strong>In-person: </strong>Some prefer direct transactions,
    //           buying crypto from someone they know or at local crypto meetups.
    //         </li>
    //       </ul>
    //       <p>
    //         <strong>Conclusion:</strong>
    //       </p>
    //       <p>
    //         Acquiring cryptocurrency has never been more accessible. Whether
    //         you're opting for the direct, easy route via Web3onboarding.com or
    //         exploring other avenues, you're taking a step towards embracing the
    //         financial future. Dive in, and welcome to the digital revolution!
    //       </p>
    //     </div>
    //   ),
    // },
    {
      id: 3,
      question: "I have crypto. Now what?",
      isOpen: false,
      answer: (
        <div>
          <p>
            Congratulations on acquiring cryptocurrency! With your digital
            assets in tow, the next question naturally arises: "What's the next
            step?" The world of crypto opens up a plethora of opportunities, and
            we're here to guide you through them.
          </p>
          <ul className="my-2 list-decimal">
            <li>
              <strong>Secure & Manage Your Assets: </strong>Before diving into
              the vast crypto universe, ensure you've securely stored your
              digital assets. Use a reliable crypto wallet, and always keep
              backups of your private keys and seed phrases.
            </li>
            <li>
              <strong>Explore & Interact: </strong>Cryptocurrencies aren't just
              for holding. Dive into the multifaceted world of Decentralized
              Applications (DApps), DeFi platforms, and more. Whether you're
              interested in lending, borrowing, or exploring innovative
              applications, your crypto assets are the key.
            </li>
            <li>
              <strong>Trading & Diversifying: </strong>If you're
              investment-savvy, consider diversifying your portfolio.
              Cryptocurrency exchanges allow you to trade various digital
              assets, exploring potential growth opportunities in different
              coins or tokens.
            </li>
            <li>
              <strong>Spend or Use: </strong>As adoption grows, more merchants
              and service providers accept crypto as payment. Whether it's
              online shopping, booking travel, or even buying coffee at a local
              café, you can use your digital currency in everyday transactions.
            </li>
            <li>
              <strong>Establish Your Web3 Identity with a Domain: </strong>In
              the decentralized web (Web3), having a unique domain linked to
              your crypto assets and identity is invaluable. And guess what? The
              next phase of our onboarding program is designed precisely for
              that.
            </li>
          </ul>
          <ul className="my-2">
            <li>
              <strong>Get Your Web3 Domain: </strong>Strengthen your digital
              presence and simplify your crypto transactions with a Web3 domain.
              No more lengthy addresses; just a simple domain to receive and
              send crypto. Dive into the future and establish your unique
              digital identity{" "}
              <a className="text-blue-500 underline" href="/web3/web3-domains">
                here.
              </a>
            </li>
          </ul>
          <p>
            <strong>Conclusion:</strong>
          </p>
          <p>
            Having cryptocurrency is just the beginning of your digital finance
            journey. Beyond mere assets, they're tickets to an expansive world
            of innovation, utility, and growth. With each step you take, from
            spending to securing your Web3 domain, you're weaving your narrative
            in the evolving digital tapestry. Welcome to the future of the
            internet and finance, intertwined seamlessly.
          </p>
        </div>
      ),
    },
  ]);
  const [lastClickedElement, setLastClickedElement] = useState(false);
  const toggleQuestion = (id, e) => {
    setQuestions(
      questions.map((item) =>
        id === item.id
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
    setLastClickedElement(e.currentTarget);
  };
  const handleTransitionEnd = () => {
    if (lastClickedElement != false) {
      lastClickedElement.scrollIntoView(true, { behavior: "instant" });
      setLastClickedElement(false);
    }
  };
  return (
    <>
    <MetadataHelper noindex title="Get Crypto" />
    <div className="bg-image4 flex-center section-center min-h-screen">
      <div className="container grid max-w-[1200px] grid-cols-1 items-center gap-4 lg:grid-cols-2">
        <div className="col-span-1">
          <div className="mx-auto max-w-[500px]">
            <h2 className="text-center text-24 font-semibold text-white lg:text-[40px]">
              2. Get Crypto
            </h2>
            <div className="flex-center mt-3 min-h-[310px] overflow-hidden rounded-xl border border-white bg-primary-newBgColor2/40 p-4 text-center text-18  text-white lg:text-20">
              Cryptocurrency, at its core, is a form of digital or virtual
              currency that relies on cryptographic techniques to secure
              transactions, regulate the creation of new units, and verify the
              transfer of assets. Unlike traditional currencies issued by
              governments and central banks, cryptocurrencies operate on a
              decentralized platform, typically a technology called blockchain.
            </div>
            <div className="flex items-center justify-between">
              {images.map((img, index) => (
                <Image
                  key={index}
                  className="max-w-[200px] lg:max-w-[200px] -ml-8"
                  src={img}
                  width={300}
                  height={300}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-3 text-white">
          {questions.map((item) => (
            <div
              key={item.id}
              onClick={(e) => toggleQuestion(item.id, e)}
              className="mx-auto flex max-w-[520px] flex-col justify-center gap-1 rounded-lg border border-white bg-primary-newBgColor2/40 p-3 lg:min-h-[100px] lg:rounded-3xl"
            >
              <div className="flex w-full cursor-pointer items-center justify-between">
                <div className="lg:flex-center flex-1">
                  <h3 className="text-start text-14 font-semibold sm:text-20 lg:text-center lg:text-24">
                    {item.question}
                  </h3>
                </div>
                <span className="text-20 lg:text-26">
                  {item.isOpen ? reactIcons.minus : reactIcons.plus}
                </span>
              </div>
              <Collapse
                in={item.isOpen}
                className=""
                onTransitionEnd={handleTransitionEnd}
              >
                <div className="text-base font-normal lg:pt-2 lg:pl-4 [&_li]:mb-2 [&_li]:text-14 [&_li]:text-white/80 [&_p]:mb-2 [&_p]:text-14 [&_p]:text-white/80 [&_strong]:text-white">
                  {item.answer}
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default purchansingCrypto;
