import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '/styles/Carousel.module.css';

import image100 from '/public/img/produits/AquariumCoralFishTank.png';
import image101 from '/public/img/produits/birdHouse.png';
import image102 from '/public/img/produits/catfishtoy.png';
import image103 from '/public/img/produits/catlLitter.png';
import image104 from '/public/img/produits/catScratchToy.png';
import image105 from '/public/img/produits/dogBiscuit.png';
import image106 from '/public/img/produits/dogfoodbag16kg.png';
import image107 from '/public/img/produits/Huile noire pour oiseaux.png';
import image108 from '/public/img/produits/Matelas pour chien.png';
import image109 from '/public/img/produits/hansterCage.jpg';
import image110 from '/public/img/produits/ReptileGrowthTerrarium.jpg';
import image111 from '/public/img/produits/ReptileAutomaticMisterSystem.jpg';
import image112 from '/public/img/produits/ReptiSand Terrarium Sand.jpg';
import image113 from '/public/img/produits/BUCATSTATE Sand Bath.jpg';
import image114 from '/public/img/produits/Bird Feeder with Camera.jpg';
import image115 from '/public/img/produits/aquarium1.png';
import image116 from '/public/img/produits/FishFood2.png';
import image117 from '/public/img/produits/hamsterFood1.png';

function Item100() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Aquarium%20Coral%20Fish%20Tank')}>
      <Image
        key={image100.src}
        src={image100}
        alt={'AquariumCoralFishTank' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item101() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Bird%20House')}>
      <Image
        key={image101.src}
        src={image101}
        alt={'Bird House' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item102() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Catfish%20Toy')}>
      <Image
        key={image102.src}
        src={image102}
        alt={'Catfish Toy' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item103() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Cat%20Litter')}>
      <Image
        key={image103.src}
        src={image103}
        alt={'Cat Litter' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item104() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Cat%20Scratch%20Toy')}>
      <Image
        key={image104.src}
        src={image104}
        alt={'Cat Scratch Toy' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item105() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Dog%20Biscuit')}>
      <Image
        key={image105.src}
        src={image105}
        alt={'Dog Biscuit' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item106() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/16kg%20Dog%20Food%20Bag')}>
      <Image
        key={image106.src}
        src={image106}
        alt={'16kg Dog Food Bag' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item107() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Black%20Oil%20for%20Birds')}>
      <Image
        key={image107.src}
        src={image107}
        alt={'Black Oil for Birds' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item108() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Dog%20Mattress')}>
      <Image
        key={image108.src}
        src={image108}
        alt={'Dog Mattress' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item109() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Hamster%20Cage')}>
      <Image
        key={image109.src}
        src={image109}
        alt={'Hamster Cage' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item110() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Reptile%20Growth%20Terrarium')}>
      <Image
        key={image110.src}
        src={image110}
        alt={'Reptile Growth Terrarium' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
function Item111() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Reptile%20Growth%20Terrarium')}>
      <Image
        key={image111.src}
        src={image111}
        alt={'Reptile Automatic Mister System' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item112() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/ReptiSand%20Terrarium%20Sand')}>
      <Image
        key={image112.src}
        src={image112}
        alt={'ReptiSand Terrarium Sand' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item113() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/BUCATSTATE%20Sand%20Bath')}>
      <Image
        key={image113.src}
        src={image113}
        alt={'BUCATSTATE Sand Bath' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item114() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Bird%20Feeder%20with%20Camera')}>
      <Image
        key={image114.src}
        src={image114}
        alt={'Bird Feeder with Camera' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item115() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Aqueon%20Aquarium%20Fish%20Tank')}>
      <Image
        key={image115.src}
        src={image115}
        alt={'Aqueon Aquarium Fish Tank' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item116() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Tetra%20Fin%20Goldfish%20Pellets')}>
      <Image
        key={image116.src}
        src={image116}
        alt={'Tetra Fin Goldfish Pellets' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}

function Item117() {
  const router = useRouter();

  return (
    <a onClick={() => router.push('/produit/Wild%20Harvest%20Hamster%20Food')}>
      <Image
        key={image117.src}
        src={image117}
        alt={'Wild Harvest Hamster Food' || 'Default Image'}
        className={styles.sliderimg}
        priority={true}
      />
    </a>
  );
}
/*
const items = [
  <Item100 key={image100.src} />,
  <Item101 key={image101.src} />,
  <Item102 key={image102.src} />,
  <Item103 key={image103.src} />,
  <Item104 key={image104.src} />,
  <Item105 key={image105.src} />,
  <Item106 key={image106.src} />,
  <Item107 key={image107.src} />,
  <Item108 key={image108.src} />,
  <Item109 key={image109.src} />,
  <Item110 key={image110.src} />,
  <Item111 key={image111.src} />,
  <Item112 key={image112.src} />,
  <Item113 key={image113.src} />,
  <Item114 key={image114.src} />,
  <Item115 key={image115.src} />,
  <Item116 key={image116.src} />,
  <Item117 key={image117.src} />,
];
*/
function Carousel() {
  return (
    <div className={styles.carouselImg} style={{ width: '80vw' }}>
      <AliceCarousel
        autoWidth
        autoPlay
        infinite
        autoPlayInterval="4000"
        items={items}
      />
    </div>
  );
}

export default Carousel;
