import {celebritiesData} from "../components/sections/celebrities-page/celebrties.js";

const FONON_BASE_URL = 'https://fonon.uz'


// const createProductImage = (path) => ({
//   href: FONON_BASE_URL,
//   src: `${FONON_BASE_URL}/${path}`,
//   alt: 'Fonon taqinchoqlari mahsuloti',
// })

const createProductImage = (path) => ({
  href: FONON_BASE_URL,
  src: path,
  alt: 'Fonon taqinchoqlari mahsuloti',
})

export const SUPPORT_CONTACT = "Yordam kerakmi? Qo'ng'iroq qiling: 1234 567 890"

export const TOP_BAR_LINKS = [
  { label: 'Shaxsiy kabinet', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Yordam', href: '#' },
  { label: "Ro'yxatdan o'tish", href: '#' },
  { label: 'Kirish', href: '#' },
]

export const LANGUAGE_OPTIONS = ["O'zbekcha", 'English', 'Русский']

export const MEGA_MENU_TABS = [
  {
    id: 'tab1',
    label: 'Uzuklar',
    icon: 'fal fa-badge-check',
    title: 'Uzuklar',
    items: [
      '/assets/img/intro-showcase/01.png',
      '/assets/img/intro-showcase/02.png',
      '/assets/img/intro-showcase/03.png',
      '/assets/img/intro-showcase/04.png',
      '/assets/img/intro-showcase/05.png',
    ].map(createProductImage),
  },
  {
    id: 'tab2',
    label: 'Bilaguzuklar',
    icon: 'fal fa-badge-check',
    title: 'Bilaguzuklar',
    items: [
      'tema/genel/uploads/urunler/1_1.png',
      'tema/genel/uploads/urunler/2_3.png',
      'tema/genel/uploads/urunler/3_1.png',
      'tema/genel/uploads/urunler/4_1.png',
      'tema/genel/uploads/urunler/5_1.png',
    ].map(createProductImage),
  },
  {
    id: 'tab3',
    label: 'Kulonlar',
    icon: 'fal fa-badge-check',
    title: 'Kulonlar',
    items: [
      'tema/genel/uploads/urunler/2_5.png',
      'tema/genel/uploads/urunler/3_3.png',
      'tema/genel/uploads/urunler/1_3.png',
      'tema/genel/uploads/urunler/4_3.png',
      'tema/genel/uploads/urunler/5_4.png',
    ].map(createProductImage),
  },
  {
    id: 'tab4',
    label: 'Mayda taqinchoqlar',
    icon: 'fal fa-badge-check',
    title: 'Mayda taqinchoqlar',
    items: [
      'tema/genel/uploads/urunler/2fa6dd07-2eb1-4a50-a17a-163d599317a2.webp',
      'tema/genel/uploads/urunler/36fd90d0-f0b5-4993-b94e-b2d5b1873aa9.webp',
      'tema/genel/uploads/urunler/982985be-a8e0-4336-a997-72db81b3e95d.webp',
      'tema/genel/uploads/urunler/c27fb603-fbc8-4f9d-ae03-439437120f77.webp',
      'tema/genel/uploads/urunler/c82ecec3-4e42-40a1-a3f7-a1224d186b23.webp',
    ].map(createProductImage),
  },
  {
    id: 'tab5',
    label: 'Zanjirlar',
    icon: 'fal fa-badge-check',
    title: 'Zanjirlar',
    items: [
      'tema/genel/uploads/urunler/7e5e32d7-0862-4a34-a621-3b04eeae46ac.webp',
      'tema/genel/uploads/urunler/776404ac-5418-4262-a643-8f33228cd44d.webp',
      'tema/genel/uploads/urunler/e9b54d68-4559-40ab-8c6a-a9c034dd2cd7.webp',
      'tema/genel/uploads/urunler/e35a50d8-d289-4c1d-9a47-92216300dac1.webp',
      'tema/genel/uploads/urunler/f7f929fe-27bc-44cb-b57e-6a3bce8f5e0e.webp',
    ].map(createProductImage),
  },
  {
    id: 'tab6',
    label: 'Qimmatbaho toshli buyumlar',
    icon: 'fal fa-badge-check',
    title: 'Qimmatbaho toshli buyumlar',
    items: [
      'tema/genel/uploads/urunler/1_4.png',
      'tema/genel/uploads/urunler/2_6.png',
      'tema/genel/uploads/urunler/3_4.png',
      'tema/genel/uploads/urunler/4_4.png',
      'tema/genel/uploads/urunler/5_5.png',
    ].map(createProductImage),
  },
  {
    id: 'tab7',
    label: 'Sirg‘alar',
    icon: 'fal fa-badge-check',
    title: 'Sirg‘alar',
    items: [
      'tema/genel/uploads/urunler/7.png',
      'tema/genel/uploads/urunler/1_2.png',
      'tema/genel/uploads/urunler/3_2.png',
      'tema/genel/uploads/urunler/5_3.png',
      'tema/genel/uploads/urunler/4_5.png',
    ].map(createProductImage),
  },
  {
    id: 'tab8',
    label: 'Aksessuarlar',
    icon: 'fal fa-badge-check',
    title: 'Aksessuarlar',
    items: [
      'tema/genel/uploads/urunler/56fd1738-559f-4015-ab3d-d15e5e9409c6.webp',
      'tema/genel/uploads/urunler/877f0353-8b78-428a-99f2-c551516f3931.webp',
      'tema/genel/uploads/urunler/d408da12-9cc4-48de-8369-a31131af723b.webp',
    ].map(createProductImage),
  },
]

export const NAV_ITEMS = [
  {
    type: 'mega',
    label: 'Jewelry Collections',
    href: 'urunler.html',
    icon: 'far fa-angle-down',
    tabs: MEGA_MENU_TABS,
  },
  {
    label: 'High Jewelry',
    href: '/highjewelry/high-jewelry.html',
  },
  {
    type: 'logo',
    src: '/assets/img/logo.png',
    alt: 'Fonon Fine Jewelry',
  },
  {
    label: 'Celebrities',
    href: '/celebrities',
    icon: 'far fa-angle-down',
    children: celebritiesData.map(celeb => {
      console.log('Mapping celebrity:', celeb.name, celeb.slug);
      return {
        label: celeb.name,
        href: `/celebrities/${celeb.slug}`
      };
    })
  },
  {
    label: 'About Fonon',
    href: '#!',
    icon: 'far fa-angle-down',
    children: [
      { label: 'About the Brand', href: '/about/brand' },
      { label: 'About the Atelier', href: '/about/atelier' },
      { label: 'This is Fonon', href: '/about/this-is-fonon' },
      { label: 'Our Certifications', href: '/about/certifications' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Magazine', href: '/about/magazine' },
    ],
  },,

]