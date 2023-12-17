import React from 'react';
import {
  // FaFilePdf,
  FaHandsHelping,
  FaRupeeSign,
  FaSignal,
  FaUser,
  FaMoneyBill,
} from 'react-icons/fa';
import {
  FiCheckCircle,
  FiMapPin,
  FiShoppingCart,
  FiTrash2,
  FiUsers,
  FiFacebook,
} from 'react-icons/fi';
import { TbCalendarStats, TbCameraPlus, TbWorld } from 'react-icons/tb';
import { TfiViewList } from 'react-icons/tfi';
import { FcGoogle } from 'react-icons/fc';
import { GrDocumentPdf } from 'react-icons/gr';
import { CiInstagram, CiWallet } from 'react-icons/ci';
import { BiMessageRounded } from 'react-icons/bi';
import {
  BsCalendarPlus,
  BsPersonAdd,
  BsCheckLg,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsDownload,
  BsEmojiSmile,
  BsFillCheckCircleFill,
  BsCurrencyRupee,
  BsFillTagFill,
  BsPlusLg,
  BsTag,
  BsThreeDotsVertical,
  BsPersonSquare,
  BsArrowLeft,
  BsPlay,
  BsFlag,
  BsHandThumbsUp,
  BsArrowDownRight,
  BsPower
} from 'react-icons/bs';
import {
  BiLogOutCircle,
  BiDollarCircle,
  BiInfoCircle,
  BiMinus,
  BiSearch,
  BiHomeAlt2,
  BiCalendarAlt,
  BiTimeFive,
  BiBell,
  BiBlock,
} from 'react-icons/bi';
import {
  AiFillCustomerService,
  AiOutlineSend,
  AiOutlinePaperClip,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillLayout,
  AiOutlineSetting,
  AiOutlineUnorderedList,
  AiOutlineUsergroupAdd,
  AiOutlineCreditCard,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillIdcard,
  AiOutlineClockCircle,
  AiOutlinePlusCircle,
  AiOutlineLock,
  AiOutlinePrinter,
  AiOutlineMail,
} from 'react-icons/ai';
import {
  MdClose,
  MdDashboard,
  MdEdit,
  MdOutlineAnalytics,
  MdOutlineContentCopy,
  MdPublishedWithChanges,
  MdRocketLaunch,
  MdOutlineQrCode,
  MdOutlineKeyboardArrowDown,
  MdArrowDropDown,
} from 'react-icons/md';
import {
  IoIosArrowRoundBack,
  // IoIosRefresh,
  IoMdAddCircleOutline,
  IoMdNotificationsOutline,
  IoMdTimer,
  IoMdRefresh,
} from 'react-icons/io';
import {
  HiDocumentReport,
  HiMenu,
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineReceiptRefund,
  HiSpeakerphone,
} from 'react-icons/hi';
import { RiDatabase2Fill } from 'react-icons/ri';
import { GoVerified } from 'react-icons/go';

export const reactIcons = {
  tag: <BsFillTagFill />,
  shopping: <FiShoppingCart />,
  dropdown: <MdArrowDropDown />,
  mike: <HiSpeakerphone />,
  mail: <AiOutlineMail />,
  bell: <BiBell />,
  stock: <img src="/images/reportIcon.svg" className="w-9" />,
  down: <MdOutlineKeyboardArrowDown />,
  flag: <BsFlag />,
  play: <BsPlay />,
  google: <FcGoogle />,
  pdf: <GrDocumentPdf />,
  refresh: <IoMdRefresh />,
  refund: <HiOutlineReceiptRefund />,
  print: <AiOutlinePrinter />,
  user: <FaUser />,
  send: <AiOutlineSend />,
  rupey: <BsCurrencyRupee />,
  thumb: <BsHandThumbsUp />,
  money: <FaMoneyBill />,
  logout: <BiLogOutCircle />,
  dollar: <BiDollarCircle />,
  list: <AiOutlineUnorderedList />,
  arrowleft: <BsChevronLeft />,
  arrowright: <BsChevronRight />,
  arrowdown: <BsChevronDown />,
  success: <BsFillCheckCircleFill />,
  // pdf: <FaFilePdf />,
  info: <BiInfoCircle />,
  dashboard: <MdDashboard />,
  sessions: <IoMdTimer />,
  layouts: <AiFillLayout />,
  reports: <HiDocumentReport />,
  verify: <GoVerified />,
  publish: <MdPublishedWithChanges />,
  plus: <BsPlusLg />,
  minus: <BiMinus />,
  // refresh: <IoIosRefresh />,
  rupee: <FaRupeeSign />,
  copy: <MdOutlineContentCopy />,
  edit: <MdEdit />,
  delete: <FiTrash2 />,
  search: <BiSearch />,
  news: <MdRocketLaunch />,
  notification: <IoMdNotificationsOutline />,
  home: <BiHomeAlt2 />,
  calendar: <BiCalendarAlt />,
  sales: <BsTag />,
  customer: <BsEmojiSmile />,
  analytics: <MdOutlineAnalytics />,
  staff: <FiUsers />,
  setup: <AiOutlineSetting />,
  services: <AiFillCustomerService />,
  empty: <FaSignal />,
  timeCalendar: <TbCalendarStats />,
  download: <BsDownload />,
  close: <MdClose />,
  camera: <TbCameraPlus />,
  add: <IoMdAddCircleOutline />,
  listNestedBox: <AiOutlineUnorderedList />,
  listBox: <TfiViewList />,
  menu: <HiMenu />,
  threeDots: <BsThreeDotsVertical />,
  eyeslash: <AiFillEyeInvisible />,
  eyes: <AiFillEye />,
  goback: <IoIosArrowRoundBack />,
  location: <FiMapPin />,
  successCheck: <FiCheckCircle />,
  check: <BsCheckLg />,
  importUser: <AiOutlineUsergroupAdd />,
  addCalendar: <BsCalendarPlus />,
  helpCenter: <FaHandsHelping />,
  creditCard: <AiOutlineCreditCard />,
  star: <AiOutlineStar />,
  bulb: <HiOutlineLightBulb />,
  heartOutline: <AiOutlineHeart />,
  card: <AiFillIdcard />,
  notes: <HiOutlineDocumentText />,
  activity: <AiOutlineClockCircle />,
  web: <TbWorld />,
  fb: <FiFacebook />,
  insta: <CiInstagram />,
  person: <BsPersonSquare />,
  qr: <MdOutlineQrCode />,
  personplus: <BsPersonAdd />,
  aiplus: <AiOutlinePlusCircle />,
  pin: <AiOutlinePaperClip />,
  Wallet: <CiWallet />,
  lock: <AiOutlineLock />,
  watch: <BiTimeFive />,
  arrowl: <BsArrowLeft />,
  message: <BiMessageRounded />,
  blocked: <BiBlock />,
  rightarrow: <BsArrowDownRight />,
  power: <BsPower />,
  database: <RiDatabase2Fill />
};