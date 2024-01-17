"use client";

import React, { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "./useScroll";
import {
  leftIncoming,
  rightIncoming,
  scrollReveal2,
  fade,
  titleAnim,
  pull,
} from "../animation";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showError, setShowError] = useState(false);

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        `#contact-form`,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowConfirmation(true);
        },
        (error) => {
          console.log(error.text);
          setShowError(true);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    onSubmit: () => {
      sendEmail();
      formik.resetForm();
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Toto pole prosím vyplniť "),
      user_email: Yup.string()
        .email("Je potrebné zadať správny tvar e-mailu")
        .required("Toto pole prosím tiež vyplniť "),
      message: Yup.string().required("Bez správy by to asi nešlo "),
    }),
  });

  const { element, controls } = useScroll();

  return (
    <div className="bg-gray1 pt-8 pb-8 px-2 mt-12" ref={element}>
      <motion.div className="max-w-7xl mx-auto  flex flex-col sm:flex-row lg:gap-60 sm:px-4 overflow-hidden font-roboto">
        <motion.div
          className="contact w-full flex flex-col text-center pb-8 pr-8 sm:text-left"
          variants={leftIncoming}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <h1>Kontakt</h1>
          <p className="text-xl sm:text-2xl">
            Ak vás moja práca zaujala, pre viac informácií ma neváhajte
            kontaktovať.
          </p>
        </motion.div>
        <motion.div
          className="form flex w-full  flex-col"
          variants={rightIncoming}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <form
            id="contact-form"
            onSubmit={formik.handleSubmit}
            className="px-2"
          >
            <input
              className="w-full border p-2 resize-none h-auto my-inputs "
              type="text"
              id="user_name"
              name="user_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_name}
              placeholder="Meno"
            />

            <div className="h-6 overflow-y-hidden relative">
              <AnimatePresence mode="wait">
                {formik.touched.user_name && formik.errors.user_name ? (
                  <motion.div
                    key="erorito"
                    variants={pull}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="w-full text-error"
                  >
                    {formik.errors.user_name}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <input
              className="w-full bg-transparent border p-2 mt-4 resize-none h-auto my-inputs"
              type="email"
              id="user_email"
              name="user_email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_email}
              placeholder="Email"
            />
            <div className="h-6 overflow-y-hidden relative">
              <AnimatePresence mode="wait">
                {formik.touched.user_email && formik.errors.user_email ? (
                  <motion.div
                    key="erorito"
                    variants={pull}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="w-full text-error"
                  >
                    {formik.errors.user_email}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <textarea
              className="w-full bg-transparent border p-2 mt-4 resize-none h-auto my-inputs"
              id="message"
              name="message"
              rows={3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Správa"
            ></textarea>

            <div className="h-6 overflow-y-hidden relative">
              <AnimatePresence mode="wait">
                {formik.touched.message && formik.errors.message ? (
                  <motion.div
                    key="erorito"
                    variants={pull}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="w-full text-error"
                  >
                    {formik.errors.message}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <motion.button
              className="mx-auto w-full mb-4 p-2 mt-4  bg-alt rounded-md"
              type="submit"
              value="Send"
              whileTap={{ scale: 0.9 }}
            >
              Odoslať
            </motion.button>
          </form>
          <AnimatePresence>
            {showConfirmation && (
              <motion.div
                key="confirmation"
                variants={fade}
                initial="hidden"
                animate="show"
                exit="exit"
                className="confirmation-modal relative"
              >
                <p className="p-6 text-xl sm:text-2xl">
                  Váš formulár bol úspešne odoslaný!
                </p>
                <button
                  className="absolute p-2 top-0 right-0"
                  onClick={() => setShowConfirmation(false)}
                >
                  <IoCloseSharp className="text-3xl" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showError && (
              <motion.div
                key="confirmation"
                variants={fade}
                initial="hidden"
                animate="show"
                exit="exit"
                className="confirmation-modal relative"
              >
                <p className="p-6 text-xl sm:text-2xl">
                  Váš formulár sa nepodarilo odoslať. Kontaktujťe majitela
                  stránky priamo na: s.mrocek@gmail.com
                </p>
                <button
                  className="absolute p-2 top-0 right-0"
                  onClick={() => setShowError(false)}
                >
                  <IoCloseSharp className="text-3xl" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      <motion.div
        className="footer-container max-w-7xl mx-auto px-4"
        variants={scrollReveal2}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <div className="line mx-auto"></div>
        <div className="flex flex-col sm:flex-row justify-between">
          <motion.div className="text-center font-lobster logo text-4xl">
            S-creations
          </motion.div>
          <div className="flex gap-4 md:gap-10 justify-center items-center">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="https://github.com/Si-creations" target="_blank">
                <IoLogoGithub className="text-3xl md:text-4xl cursor-pointer" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a
                href="https://www.facebook.com/silvester.mrocek"
                target="_blank"
              >
                <FaFacebook className="text-3xl md:text-4xl cursor-pointer" />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a href="" target="_blank">
                <FaLinkedin className="text-3xl md:text-4xl cursor-pointer" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
