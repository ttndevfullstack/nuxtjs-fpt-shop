import {
  faFile,
  faFileInvoiceDollar,
  faCircleUser,
  faCartShopping,
  faMobileScreenButton,
  faLaptop,
  faTabletScreenButton,
  faAppleAlt,
  faComputer,
  faHeadphonesSimple,
  faArrowRotateRight,
  faWarehouse,
  faSimCard,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export const HeaderLinks = [
  { icon: faFile, href: "/tin-tuc", title: "Thông tin hay" },
  { icon: faFileInvoiceDollar, href: "/dich-vu", title: "Thanh toán & tiện ích" },
  { icon: faCircleUser, href: "/tai-khoan-cua-toi", title: "Tài khoản của tôi" },
  { icon: faCartShopping, href: "/gio-hang", title: "Giỏ hàng" },
];

export const NavLinks = [
  { icon: faMobileScreenButton, href: "/", title: "ĐIỆN THOẠI" },
  { icon: faLaptop, href: "/", title: "LAPTOP" },
  { icon: faTabletScreenButton, href: "/", title: "MÁY TÍNH BẢNG" },
  { icon: faAppleAlt, href: "/", title: "APPLE" },
  { icon: faComputer, href: "/", title: "PC-LINH KIỆN" },
  { icon: faHeadphonesSimple, href: "/", title: "PHỤ KIỆN" },
  { icon: faArrowRotateRight, href: "/", title: "MÁY CŨ GIÁ RẺ" },
  { icon: faWarehouse, href: "/", title: "ĐIỆN MÁY GIA DỤNG" },
  { icon: faSimCard, href: "/", title: "SIM & THẺ" },
  { icon: faGift, href: "/", title: "KHUYẾN MÃI" },
];

export const SaleIntroduces = [
  { title: "Iphone 15 Pro Max", description: "Bảo hành 2 năm" },
  { title: "Galaxy Z Flip5 giá sốc", description: "15.99 triệu" },
  { title: "Redmi Note 12 giá chỉ", description: "3.990.000đ" },
  { title: "TV Xiaomi 55 giá chỉ", description: "7.79 triệu" },
  { title: "Mua nồi cơm điện", description: "Tặng ngay bộ nồi inox" },
];

export const NewEvents = [
  { image: "../public/images/event1.webp", description: "Tuần lễ laptop Gamming giảm đến 15 triệu" },
  { image: "../public/images/event2.png", description: "Gia dụng chuẩn Nhật mua 1 được 2" },
];

export const TypeProducts = [
  { link: "#", image: "../public/images/dienthoai.webp", type: "Điện thoại" },
  { link: "#", image: "../public/images/laptop.webp", type: "Laptop" },
  { link: "#", image: "../public/images/icon-pc.webp", type: "PC" },
  { link: "#", image: "../public/images/ic-giadung-01_11.webp", type: "Điện máy - gia dụng" },
  { link: "#", image: "../public/images/icon-smart.webp", type: "Thiết bị thông minh" },
  { link: "#", image: "../public/images/icon-mtb-desk.webp", type: "Máy tính bảng" },
  { link: "#", image: "../public/images/ic-apple-desktop.webp", type: "Apple" },
  { link: "#", image: "../public/images/destop-ic-samsung.webp", type: "Samsung" },
  { link: "#", image: "../public/images/icon-smartwatch.webp", type: "Đồng hồ thông minh" },
  { link: "#", image: "../public/images/icon-accessories.webp", type: "Phụ kiện" },
  { link: "#", image: "../public/images/icon-screen.webp", type: "Màn hình" },
  { link: "#", image: "../public/images/icon-tcdm.webp", type: "Máy cũ" },
];

export const ProductList = [
  {
    image: "../public/images/ip-15-pro-max.webp",
    name: "iPhone 15 Pro Max 256GB",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/oppo-reno10-5g-xanh-5.webp",
    name: "OPPO Reno10 5G 128GB",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/xiaomi-redmi-note-12-dd-bh.webp",
    name: "Xiaomi Redmi Note 12 4GB-128GB",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/asus-tuf-gaming-fx506hf-den-dd-moi.webp",
    name: "Laptop Asus TUF Gaming FX506HF-HN017W i5-11400H",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/samsung-galaxy-a14-4g-dd.webp",
    name: "Samsung Galaxy A14 4G",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/oppo-reno8-t-4g-dd.webp",
    name: "OPPO Reno8 T 4G 256GB",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/msi-gaming-gf63-thin-11uc-den-dd.webp",
    name: "Máy tính xách tay MSI Gaming Thin GF63 12VE-454VN i5-12450H/16GB/512GB/15.6&quot; FHD/RTX4050_6GB/Win 11",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
  {
    image: "../public/images/xiaomi-redmi-10-2022-dd-docquyen.webp",
    name: "Xiaomi Redmi 10 2022 4GB-128GB",
    price: "2.990.000",
    oldPrice: "4.290.000",
    discount: "Giảm 1.300.000đ",
    paymentType: ["kredivo", "zalo", "vnpay"],
    descriptionPayment: { kredivo: "Giảm đến 200.000đ qua Kredivo", zalo: "Giảm đến 200.000đ qua ZaloPay-QR", vnpay: "Giảm đến 200.000đ qua VNPAY" },
  },
];
