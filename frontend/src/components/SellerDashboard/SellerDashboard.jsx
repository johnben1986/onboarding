import React, { useState, useEffect } from "react";
import UAuth from "@uauth/js";
import { useAPI } from "../../hooks/useAPI";
import useWallet from "hooks/useWallet";
import DomainFilter from "components/DomainsFilter/DomainFilter";
import AuthenticatedFragment from "components/Authenticated/AuthenticatedFragment";
import { isUrlFound, setTitle, svgToPng } from "helpers/utils";
import Button from "components/utils/Button";

import ProfileImage from "../../../public/assets/images/png/seller-profile.png";
import BurgerImage from "../../../public/assets/images/svg/hamburger.svg";
import Image from "next/image";

import Link from "next/link";
import web3imgWhite from "/public/assets/images/web3logo-white.png";
import web3img from "/public/assets/images/web3logo-white.png";
import { reactIcons } from "components/utils/icons";
import { FaUserAlt, FaListAlt, FaEdit } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import Account from "components/Account/Account";
import { Drawer } from "@mui/material";
const domainLinks = [
  {
    name: "Account",
    icon: <FaUserAlt />,
    href: "/users/me",
    style: "font-semibold",
  },
  {
    name: "Marketplace",
    icon: <AiOutlineShop />,
    href: "/marketplace",
    style: "",
  },
  {
    name: "Mint UD Domain",
    icon: <MdAddCircleOutline />,
    href: "/marketplace/mint",
    style: "",
  },
  {
    name: "List Domain",
    icon: <FaListAlt />,
    href: "/marketplace/add",
    style: "",
  },
];
const tabStates = {
  allOwned: "allOwned",
  buyNow: "buyNow",
  leaseNow: "leaseNow",
};

const uauth = new UAuth({
  clientID: "a608ba5e-6f30-4046-8725-68149c137557",
  redirectUri: "https://web3onboarding.com/dashboard",
  scope: "openid wallet email profile:optional social:optional",
});

export default function SellerDashboard({ userId }) {
  const { api } = useAPI();
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [tabsState, setTabsState] = useState(tabStates.allOwned);
  const [profilePicExists, setProfilePicExists] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { currentAddress } = useWallet();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const targetUser = userId ? userId : currentAddress;
  const initialState = {
    buyNowListing: tabsState == tabStates.buyNow,
    leaseNowListing: tabsState == tabStates.leaseNow,
    ownedBy: targetUser,
  };
  const [UDUser, setUDUser] = useState(null);
  const [authorization, setAuthorization] = useState(null);
  const [imgError, setImgError] = useState(null);

  useEffect(() => {
    setImgError(null);
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      if (targetUser) {
        const res = await api.getUser({ id: targetUser });
        if (res?.result.length > 0) {
          setUserInfo(res.result[0]);
        }
        setTitle(`${res.result[0].name || targetUser} - Profile`);
      }
    };
    getUserInfo();
  }, [targetUser, UDUser, api]);
  console.log(userInfo);
  function shortAddress(address, charsToShow = 6, breakChars = "...") {
    if (!address) return "";
    if (address.length <= charsToShow) return address;
    const halfToShow = charsToShow / 2;
    return `${address.slice(0, halfToShow)}${breakChars}${address.slice(
      -halfToShow
    )}`;
  }
  const tableTabs = (
    <div className="flex flex-col gap-4 text-xl lg:flex-row">
      <div
        className={
          "cursor-pointer " +
          (tabsState == tabStates.allOwned ? "text-brand-primary" : "")
        }
        onClick={() => {
          setTabsState(tabStates.allOwned);
          setIsDropdownClicked(false);
        }}
      >
        All owned domains
      </div>
      <div
        className={
          "cursor-pointer " +
          (tabsState == tabStates.buyNow ? "text-brand-primary" : "")
        }
        onClick={() => {
          setTabsState(tabStates.buyNow);
          setIsDropdownClicked(false);
        }}
      >
        Domains for sale
      </div>
      <div
        className={
          "cursor-pointer " +
          (tabsState == tabStates.leaseNow ? "text-brand-primary" : "")
        }
        onClick={() => {
          setTabsState(tabStates.leaseNow);
          setIsDropdownClicked(false);
        }}
      >
        Domains for Rent
      </div>
    </div>
  );

  useEffect(() => {
    uauth.user().then(setUDUser);
  }, []);

  const UDLogin = async () => {
    const auth = await uauth.loginWithPopup();
    setAuthorization(auth);

    const user = await uauth.user();
    console.log(user.picture, "user picture");
    console.log(user.image, "user image");
    if (user.picture != undefined) {
      const svgString = await (await fetch(user.picture)).text();
      user.image = await svgToPng(svgString, 800, 800);
    }

    await api.connectUDAccountInfo({ id: targetUser, UDinfo: user });

    setUDUser(user);
  };

  return (
    <main className="bg-image5">
      <div className="flex h-screen">
          <sidebar className="bg-image5 z-[9] hidden h-full w-64 border-r border-white text-white md:relative md:block">
            <div className="h-[105px] border-b border-white p-3">
              <Link href="/home">
                <Image
                  src={web3imgWhite}
                  width={150}
                  height={150}
                  className="m-auto w-full max-w-[150px] cursor-pointer"
                ></Image>
              </Link>
            </div>
            <div className="h-[calc(100%-105px)] px-6 py-4">
              <div className="mb-8">
                {/* sub heading 3 */}
                <h2 className="text-md mb-3 border-b border-white pb-1 font-light">
                  Preference
                </h2>
                {domainLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex-start relative flex h-[30px] items-center whitespace-nowrap px-2 py-1 hover:text-white hover:opacity-50 ${item.style}`}
                  >
                    <span className="ay-center left-0">{item.icon}</span>
                    <span className="ml-4">{item.name}</span>
                  </Link>
                ))}
                <AuthenticatedFragment
                  permission={"users:update"}
                  owner={targetUser}
                >
                  <Link
                    href={`/users/${
                      targetUser === currentAddress ? "me" : targetUser
                    }/edit`}
                    className="flex-start relative flex h-[30px] items-center whitespace-nowrap px-2 py-1 hover:text-white hover:opacity-50"
                  >
                    <span className="ay-center left-0">
                      <FaEdit />
                    </span>
                    <span className="ml-4">Edit Profile</span>
                  </Link>
                </AuthenticatedFragment>
              </div>
            </div>
          </sidebar>
        <div className="w-full flex-1">
          <header className="flex h-auto border-b border-white p-3 text-white md:h-[81px] md:p-4">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-0 md:flex-row">
              <div className="flex w-full items-center justify-between space-x-2 md:w-auto">
              <div className="flex-center md:hidden">
                  <button
                    className="text-24 md:hidden"
                    onClick={() => setIsDrawerOpen(true)}
                  >
                    {reactIcons.menu}
                  </button>
                  <Drawer
                    anchor="left"
                    PaperProps={{
                      style: {
                        width: "70%",
                        backgroundColor: "black",
                      },
                    }}
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    className="md:hidden"
                  >
                    <sidebar className="bg-image5 relative z-[9] h-full border-r border-white text-white">
                      <div className="h-[105px] border-b border-white p-3">
                        <Link href="/home">
                          <Image
                            src={web3img}
                            alt=""
                            width={150}
                            height={150}
                            className="m-auto w-full max-w-[150px] cursor-pointer"
                          ></Image>
                        </Link>
                      </div>
                      <div className="h-[calc(100%-105px)] px-6 py-4">
                      <div className="mb-8">
                {/* sub heading 3 */}
                <h2 className="text-md mb-3 border-b border-white pb-1 font-light">
                  Preference
                </h2>
                {domainLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex-start relative flex h-[30px] items-center whitespace-nowrap px-2 py-1 hover:text-white hover:opacity-50 ${item.style}`}
                  >
                    <span className="ay-center left-0">{item.icon}</span>
                    <span className="ml-4">{item.name}</span>
                  </Link>
                ))}
                <AuthenticatedFragment
                  permission={"users:update"}
                  owner={targetUser}
                >
                  <Link
                    href={`/users/${
                      targetUser === currentAddress ? "me" : targetUser
                    }/edit`}
                    className="flex-start relative flex h-[30px] items-center whitespace-nowrap px-2 py-1 hover:text-white hover:opacity-50"
                  >
                    <span className="ay-center left-0">
                      <FaEdit />
                    </span>
                    <span className="ml-4">Edit Profile</span>
                  </Link>
                </AuthenticatedFragment>
              </div>
                      </div>
                    </sidebar>
                  </Drawer>
                </div>
                <span className="text-xl font-medium">{userInfo?.name ? `Wallet Address: ${userInfo?.name?.slice(0, 5) + "..." + userInfo?.name?.slice(40)}` : ''} </span>
              </div>
              <Account className={"ml-0 w-full justify-between gap-2 md:w-auto"}
                textClass="text-white" />
            </div>
          </header>
          <div className="h-[calc(100%-81px)] overflow-auto"  id="scrrolledDiv">
            {/* <AuthenticatedFragment permission={"users:update"} owner={targetUser}>
              <div className="flex space-x-4 text-center font-brand-tomorrow md:absolute md:top-8 md:right-8 md:text-right hidden">
                <Button
                  href={`/users/${targetUser === currentAddress ? "me" : targetUser
                    }/edit`}
                >
                  Edit Profile
                </Button>
                {UDUser ? (
                  <Button href={UDUser.profile}>UD profile</Button>
                ) : (
                  <Button onClick={() => UDLogin()}>
                    Link Unstoppable Domains
                  </Button>
                )}
                <Button
                  href={`/users/${targetUser === currentAddress ? "me" : targetUser
                    }/websites`}
                >
                  My Websites
                </Button>
              </div>
            </AuthenticatedFragment> */}

            <div className="flex flex-col md:flex-row">
              <div className="mx-0 md:mx-4 mb-5 flex w-[100%] md:w-[50%] items-center border-b-2 border-white py-3">
                <div className="w-[100px] md:w-[200px]">
                  <Image
                      src={userInfo.image ? userInfo.image : `${process.env.NEXT_PUBLIC_IMAGES_URL}/vendors/${targetUser}.png`}
                      onError={setImgError}
                      alt="profile picture"
                      className="mx-auto md:mx-0 w-[200px] h-[200px] object-contain bg-white shadow-sm rounded-full"
                      width={200}
                      height={200}
                    />    
                  {/* <Image
                    src={
                      imgError
                        ? ProfileImage
                        : `${process.env.NEXT_PUBLIC_IMAGES_URL}/vendors/${targetUser}.png`
                    }
                    onError={setImgError}
                    alt="profile picture"
                    className="mx-auto md:mx-0"
                    width={200}
                    height={200}
                  /> */}
                </div>
                <div className="w-[calc(100%-200px)] text-center">
                  {/* socaial icon */}
                  <div className="mb-3 flex items-center justify-center gap-2 md:gap-4">
                    {userInfo?.telegram && (
                      <Link href={`${userInfo?.telegram}`}>
                        <Image
                          className="w-8 xl:w-10 3xl:w-12"
                          src={"/assets/images/telegram.png"}
                          width={80}
                          height={80}
                        />
                      </Link>
                    )}
                    {userInfo?.twitter && (
                      <Link href={`${userInfo?.twitter}`}>
                        <Image
                          className="w-8 xl:w-10 3xl:w-12"
                          src={"/assets/images/twitter.png"}
                          width={80}
                          height={80}
                        />
                      </Link>
                    )}
                    {userInfo?.linkedin && (
                      <Link href={`${userInfo?.linkedin}`}>
                        <Image
                          className="w-8 xl:w-10 3xl:w-12"
                          src={"/assets/images/linkedin.png"}
                          width={80}
                          height={80}
                        />
                      </Link>
                    )}
                    {userInfo?.instagram && (
                      <Link href={`${userInfo?.instagram}`}>
                        <Image
                          className="w-8 xl:w-10 3xl:w-12"
                          src={"/assets/images/instagram.png"}
                          width={80}
                          height={80}
                        />
                      </Link>
                    )}
                  </div>
                  {/* Description */}
                  <h3 className="text-2xl text-white">{userInfo?.description}</h3>
                </div>
              </div>
              <div className="w-[100%] md:w-[50%] border-l border-white text-center">
                <h1 className="text-3xl text-white">Available</h1>
              </div>
            </div>

            {/* <div className="my-auto w-full space-y-6 break-words text-center font-brand-heading text-lg md:w-3/5 md:text-left">
              <h1 className="text-2xl font-bold">{userInfo?.name}</h1>
              <h2 className="text-lg">Address: {targetUser}</h2>
              <p className="font-brand-tomorrow">{userInfo?.description}</p>
            </div> */}
          </div>
        </div>
        <div className="mx-auto hidden w-11/12 text-center lg:w-10/12">
          <div className="my-8 flex w-full gap-6 font-brand-heading text-black">
            <div className="hidden lg:block">{tableTabs}</div>
            <div className="lg:hidden">
              <div
                id="dashboard-dropdown"
                onClick={() => setIsDropdownClicked((prev) => !prev)}
              >
                <Image src={BurgerImage} alt="hamburger" />
              </div>
              <div
                className="absolute mt-4 space-y-4 rounded-full bg-brand-blue p-4 text-left text-lg"
                id="dashboard-dropdown-menu"
                style={
                  isDropdownClicked ? { display: "block" } : { display: "none" }
                }
              >
                {tableTabs}
              </div>
            </div>
          </div>
          <DomainFilter initialState={initialState} hideFilters={true} />
        </div>
      </div>
    </main>
  );
}
