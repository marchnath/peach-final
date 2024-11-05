"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      // style={{
      //   backgroundImage: "url('/hair/hair-bg.jpg')",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   opacity: 0.5, // Reduced opacity
      // }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Лучший Салон Красоты
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Исследуйте наши премиальные услуги для волос, созданные для того, чтобы
        подчеркнуть вашу уникальность.
      </p>

      <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
        Ногтевой Сервис
      </h2>
      <ul className="mt-4 dark:text-neutral-200">
        <li>Маникюр [аппаратный / пилочный / комбинированный]: 3500</li>
        <li>Педикюр: 4700</li>
        <li>Покрытие лак: 1500</li>
        <li>Покрытие лечебным лаком: 1100</li>
        <li>Покрытие гель-лак: 2200</li>
        <li>Покрытие гель-лак french: 3600</li>
        <li>Снятие лак: 600</li>
        <li>Снятие гель-лак: 950</li>
        <li>Дизайн / 1 ноготь: 350</li>
        <li>Ремонт ногтевой пластины / 1 ноготь: 600</li>
        <li>Укрепление гелем: 1500</li>
        <li>Выравнивание ногтевой пластины: 850</li>
      </ul>

      {/* Уход за руками и ногами Section */}
      <h2 className="text-xl md:text-3xl font-semibold mt-10 dark:text-white">
        Уход
      </h2>
      <ul className="mt-4 dark:text-neutral-200">
        <li>Для рук: 3000</li>
        <li>Для ног: 2700</li>
      </ul>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
