import React from "react";
import Link from "next/link";
import Image from "next/image";
import appBuilder from "/public/assets/images/app-builder.png";
import b2b from "/public/assets/images/b2b.webp";
import cryptoRamp from "/public/assets/images/crypto-ramp.webp";
import learn from "/public/assets/images/learn.webp";
import marketplace from "/public/assets/images/marketplace.png";
import priority from "/public/assets/images/priority.webp";
import quickBuild from "/public/assets/images/quickbuild.webp";
import react from "/public/assets/images/react.png";
import review from "/public/assets/images/review.webp";
import wallet from "/public/assets/images/wallet1.png";
import exchange from "/public/assets/images/exchange.png";
import web3site from "/public/assets/images/web3site.png";
import web3hosting from "/public/assets/images/web3hosting.png";
import noticed from "/public/assets/images/noticed.png";
import web3domain from "/public/assets/images/web3domain.png";
import cart from "/public/assets/images/cart.png";
import lock from "/public/assets/images/lock.webp";
import account from "/public/assets/images/account.png";
import user_group from "/public/assets/images/user_group.png";
import ipfs from "/public/assets/images/ipfs-new.png";
import { useTransak } from "hooks/useTransak";
import { withAuth } from "components/Auth/authMiddleware";
import MetadataHelper from "components/MetadataHelper";

const Dashboard = () => {

  return (
    <>
      {/* free plans */}
      <MetadataHelper noindex title="Dashboard" />
      <section
        id="personal"
        className="panel bg-image4 section-center flex-center scroll-span-align"
      >
        <div className="container max-w-[1200px]">
          <h1 className="heading-2 text-center text-white">
          Step Into <span className="text-blue-400">Web3</span> With <span className="text-blue-300 drop-shadow-md">Web3 Onboarding</span>
          </h1><br/>
          <p className="text-white text-center">New to Web3? Experience User? We're here for you.</p><br/>
          <p className="text-white font-bold text-center">Take the Safe Road.</p>




          <div className="grid grid-cols-4 grid-rows-2 gap-9 pt-7 lg:px-[3%] 3xl:pt-[50px]">

            <Link
              className="row-span-3 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/web3/getting-wallet"}>
              <h3 className="text-left text-18 font-semibold text-white lg:text-24">
                1.
              </h3>
              <div className="h-[110px] w-[150px] ml-[30px] -mt-8">
                <Image
                  src={wallet}
                  width={180}
                  height={90}
                />
              </div>
              <br/>
              <div>
                <h3 className="text-18 font-semibold text-blue-500 lg:text-24 text-center">
                Get
                </h3>
                <h3 className="text-18 font-semibold text-blue-500 lg:text-24 text-center">
                Wallet
                </h3>
              </div>
            </Link>

            <Link
              className="row-span-3 col-start-1 row-start-4 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/web3/web3site"}>
              <h3 className="text-left text-18 font-semibold text-white lg:text-24">
                4.
              </h3>
              <div className="h-[110px] w-[150px] ml-[30px] -mt-8">
                <Image
                  src={web3site}
                  width={180}
                  height={90}
                />
              </div>
              <br/>
                <h3 className="text-18 font-semibold text-violet-400 lg:text-24 text-center">
                Get
                </h3>
                <h3 className="text-18 font-semibold text-violet-400 lg:text-24 text-center">
                Web3site
                </h3>
            </Link>

            <Link
              className="row-span-3 col-start-2 row-start-1 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/web3/purchase-crypto"}>
              <h3 className="text-left text-18 font-semibold text-white lg:text-24">
                2.
              </h3>
              <div className="h-[110px] w-[150px] ml-[30px] -mt-8">
                <Image
                  src={exchange}
                  width={180}
                  height={90}
                />
              </div>
              <br/>
                <h3 className="text-18 font-semibold text-violet-400 lg:text-24 text-center">
                Get
                </h3>
                <h3 className="text-18 font-semibold text-violet-400 lg:text-24 text-center">
                Crypto
                </h3>
            </Link>
            
            <Link
              className="row-span-3 col-start-2 row-start-4 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/web3/ipfs-hosting"}>
              <h3 className="text-left text-18 font-semibold text-white lg:text-24">
                5.
              </h3>
              <div className="h-[110px] w-[150px] ml-[30px] -mt-8">
                <Image
                  src={web3hosting}
                  width={180}
                  height={90}
                />
              </div>
              <br/>
                <h3 className="text-18 font-semibold text-blue-500 lg:text-24 text-center">
                Get
                </h3>
                <h3 className="text-18 font-semibold text-blue-500 lg:text-24 text-center">
                Web3Hosting
                </h3>
            </Link>

            <Link
              className="row-span-3 col-start-3 row-start-1 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/web3/web3-domains"}>
              <h3 className="text-left text-18 font-semibold text-white lg:text-24">
                3.
              </h3>
              <div className="h-[110px] w-[150px] ml-[30px] -mt-8">
                <Image
                  src={web3domain}
                  width={180}
                  height={90}
                />
              </div>
              <br/>
                <h3 className="text-18 font-semibold text-blue-500 lg:text-24 text-center">
                Get
                </h3>
                <h3 className="text-18 font-semibold text-blue-500 lg:text-24 text-center">
                Web3 Domain
                </h3>
            </Link>

            <Link
              className="row-span-3 col-start-3 row-start-4 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/contact"}>
              <h3 className="text-left text-18 font-semibold text-white lg:text-24">
                6.
              </h3>
              <div className="h-[110px] w-[150px] ml-[30px] -mt-8">
                <Image
                  src={noticed}
                  width={180}
                  height={90}
                />
              </div>
              <br/>
                <h3 className="text-18 font-semibold text-violet-400 lg:text-24 text-center">
                Get
                </h3>
                <h3 className="text-18 font-semibold text-violet-300 lg:text-24 text-center">
                Noticed!
                </h3>
            </Link>
{/* This is the right side */}
            <Link
              className="row-span-2 col-start-4 row-start-1 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/marketplace"}>
              <h3 className="text-15 font-semibold text-white lg:text-20 text-center">
               Marketplace
              </h3>
              <div className="h-[100px] w-[150px] ml-[25px] -mt-8">
                <Image
                  src={cart}
                  width={180}
                  height={100}
                />
              </div>
            </Link>

            <Link
              className="row-span-2 col-start-4 row-start-3 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/plans"}>
              <h3 className="text-15 font-semibold text-white lg:text-20 text-center">
                Paid Memberships
              </h3>
              <h3 className="text-15 font-semibold text-white lg:text-20 text-center">
                and Consultations
              </h3>
              <div className="h-[100px] w-[150px] ml-[25px] -mt-6">
                <Image
                  src={account}
                  width={180}
                  height={100}
                />
              </div>
            </Link>

            <Link
              className="row-span-2 col-start-4 row-start-5 bg-primary-newBgColor/90 p-5 py-4 rounded-3xl"
              href={"/web3/become-affiliate"}>
              <h3 className="text-center text-15 font-semibold text-white lg:text-20">
                Become an Affiliate
              </h3>
              <div className="h-[100px] w-[150px] ml-[25px] -mt-8">
                <Image
                  src={user_group}
                  width={180}
                  height={100}
                />
              </div>
            </Link>
</div>

        </div>
      </section>
    </>
  );
};

export default withAuth(Dashboard);
