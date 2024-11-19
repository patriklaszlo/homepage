import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const AnimatedButton = () => {
  const buttonVariants = {
    initial: {
      backgroundColor: "#000000",
    },
    hover: {
      backgroundColor: "#000000",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    initial: {
      x: 0,
    },
    hover: {
      x: "15px",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    hover: {
      opacity: 1,
      x: -18,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="inline-block">
      <motion.a
        className="block rounded-[48px] py-3 px-10 xs:py-5 xs:px-12 lg:py-7 lg:px-16 text-xl relative overflow-hidden origin-center cursor-pointer"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        href="mailto:pa3klaszlo@gmail.com"
      >
        <div className="flex items-center justify-center relative">
          <motion.span
            variants={iconVariants}
            className="absolute left-1 text-white"
          >
            <Mail className="w-5 h-5" />
          </motion.span>
          <motion.span
            variants={contentVariants}
            className="text-sm sm:text-lg text-white"
          >
            Get in touch
          </motion.span>
        </div>
      </motion.a>
    </div>
  );
};

export default AnimatedButton;
