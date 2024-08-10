import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail, IoCall } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div
        id="contact-us"
        className="bg-[#1E1E1E] text-white px-[18px] lg:px-[8rem] py-[3.5rem] font-poppins"
      >
        <h2 className="text-[32px] md:text-[48px] font-semibold text-center">
          Contact US
        </h2>
        <div className="mt-6 md:mt-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="lg:w-1/2  bg-gray-500 rounded-md flex items-center justify-center">
            <Link
              href="https://www.google.com/maps/place/A+RAI+BHARDWAJ+%26+CO.-CHARTERED+ACCOUNTANTS/@28.5990993,79.1411197,9z/data=!4m6!3m5!1s0x399f9d4e2d39ccdf:0xeaab8167199f03c3!8m2!3d28.0691047!4d80.0962149!16s%2Fg%2F11s02dny3x?coh=219814&entry=tts&g_ep=EgoyMDI0MDgwNy4wKgBIAVAD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/Images/map.png"}
                width={500}
                height={500}
                className="w-full h-full rounded-xl"
              />
            </Link>
          </div>

          <div className="flex gap-5 flex-col">
            <div className="flex gap-4 md:gap-6 items-start">
              <Image
                src="/Images/nav.png"
                width={40}
                height={40}
                className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                alt="Office Address"
              />
              <span className="font-medium">
                <p className="text-[24px]">Our Office Address</p>
                <a
                  href="https://www.google.com/maps/place/A+RAI+BHARDWAJ+%26+CO.-CHARTERED+ACCOUNTANTS/@28.5990993,79.1411197,9z/data=!4m6!3m5!1s0x399f9d4e2d39ccdf:0xeaab8167199f03c3!8m2!3d28.0691047!4d80.0962149!16s%2Fg%2F11s02dny3x?coh=219814&entry=tts&g_ep=EgoyMDI0MDgwNy4wKgBIAVAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5"
                >
                  Rajiv Nagar, Banda road, near gurudwara, Powayan -(242401),
                  Shahjahanpur,(U.P)
                </a>
              </span>
            </div>

            <div className="flex gap-4 md:gap-6 items-start">
              <Image
                src="/Images/mail.png"
                width={40}
                height={40}
                className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                alt="Email"
              />
              <span className="font-medium">
                <p className="text-[24px]">General Enquiries</p>
                <a href="mailto:info@arbc.com" className="mt-1.5">
                  info@arbc.com
                </a>
              </span>
            </div>

            <div className="flex gap-4 md:gap-6 items-start">
              <Image
                src="/Images/call.png"
                width={40}
                height={40}
                className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                alt="Phone"
              />
              <span className="font-medium">
                <p className="text-[24px]">Call Us</p>
                <a href="tel:+917409595532" className="mt-1.5">
                  +91 7409595532
                </a>
              </span>
            </div>

            <div className="flex gap-2 md:gap-3">
              <Link
                href="https://www.linkedin.com/in/aryanraibhardwaj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/linked-in.png"
                  width={40}
                  height={40}
                  alt="LinkedIn"
                  className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                />
              </Link>
              <Link
                href="https://www.facebook.com/caaryanrai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/fb.png"
                  width={40}
                  height={40}
                  alt="Facebook"
                  className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                />
              </Link>
              <Link
                href="https://www.instagram.com/araibhardwajandco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/ig.png"
                  width={40}
                  height={40}
                  alt="Instagram"
                  className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                />
              </Link>
              <Link
                href="https://g.co/kgs/i25nDxK"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/google.png"
                  width={40}
                  height={40}
                  alt="Google"
                  className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                />
              </Link>
              <Link
                href="https://wa.me/918381892139"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/Images/whattsapp.png"
                  width={40}
                  height={40}
                  alt="WhatsApp"
                  className="mt-1.5 w-8 md:w-10 h-8 md:h-10"
                />
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-3.5 md:gap-2 mt-2 md:items-center">
              <span className="flex gap-2">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-[#F1C644] w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem]"
                    />
                  ))}
              </span>
              <p className="text-[20px] md:ml-5">on Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282A2A] text-[#FFFFFF] py-3 md:py-6 px-[32px] lg:px-[8rem] text-[14px] md:text-[20px] leading-[28px] md:leading-[30px] flex text-center items-center justify-center">
        A RAI BHARDWAJ & CO. All rights reserved © 2024
      </div>
    </>
  );
};

export default Footer;
