"use client";
import React, { useState } from "react";
import { ContactUs } from "../modals/ContactUs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const HomeLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col text-center justify-start items-start">
      <div className="h-full w-full flex flex-col justify-start items-center ">
        <div className="relative w-full" style={{ height: "40vh" }}>
          <Image fill objectFit="cover" alt="waiting" src={"/Food.webp"} />
        </div>
        <div className="text-teal-400 font-semibold my-3">
          Welcome to Future Restaurants Program.
        </div>
        <div className="text-4xl font-bold mb-3">Deliver, Collect, Eat-in.</div>
        <div className="text-sm mb-5 font-semibold text-gray-600 px-10 text-center">
          Find a place close to home for collection, delivery, or to eat-in.
        </div>
        <div className="flex flex-col text-sm gap-3">
          <button
            // onClick={toggleModal}
            className="standard-button flex items-center justify-between gap-5 text-white bg-teal-400"
          >
            <FontAwesomeIcon icon={faLocationArrow} />
            Search Restaurants
            <div></div>
          </button>
          <button
            // onClick={toggleModal}
            className="standard-button flex items-center justify-between gap-5 text-black bg-gray-300"
          >
            <FontAwesomeIcon icon={faLink} />
            Partner with us <div></div>
          </button>
        </div>
      </div>
      {isModalOpen && <ContactUs onClose={toggleModal} />}{" "}
    </div>
  );
};
