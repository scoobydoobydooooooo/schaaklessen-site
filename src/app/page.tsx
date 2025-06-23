"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const placeholderImage = "/placeholder.jpg"; // Voeg zelf een afbeelding toe in public/

const openingVideos = [
  {
    title: "Italiaanse Opening",
    url: "https://www.youtube.com/embed/2j6T4weDf2E",
  },
  {
    title: "Siciliaanse Verdediging",
    url: "https://www.youtube.com/embed/5zTy_GeAksc",
  },
  {
    title: "Koningsindische Opening",
    url: "https://www.youtube.com/embed/ZwN2tP8bq-o",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simpele login simulatie
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 sm:p-12 flex flex-col items-center font-sans">
      {/* Who am I Card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-md w-full p-6 flex flex-col items-center text-center"
      >
        <Image
          src={placeholderImage}
          alt="Profielfoto"
          width={120}
          height={120}
          className="rounded-full object-cover"
          priority
        />
        <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Jan de Schaakmeester
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          Professioneel schaakleraar met 10 jaar ervaring. Leer bij mij privé
          schaaklessen en word een meester op het bord!
        </p>
      </motion.div>

      {/* Opening Theorie Tabs */}
      <section className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Schaakopening Theorie Videos
        </h2>

        <div className="flex flex-wrap gap-4 mb-6 justify-center">
          {openingVideos.map((video, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(idx)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedTab === idx
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition"
              }`}
            >
              {video.title}
            </button>
          ))}
        </div>

        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={openingVideos[selectedTab].url}
            title={openingVideos[selectedTab].title}
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Login / Betaalde Content */}
      <section className="mt-12 w-full max-w-md text-center">
        {!isLoggedIn ? (
          <>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Login om exclusieve schaaklessen te bekijken
            </h2>
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition"
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Welkom, Jan! Hier zijn je exclusieve schaaklessen:
            </h2>
            <ul className="text-left space-y-3 mb-6">
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                <strong>Privé les 1:</strong> Opening strategieën uitgelegd
              </li>
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                <strong>Privé les 2:</strong> Middenspel tactieken
              </li>
              <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
                <strong>Privé les 3:</strong> Eindspel technieken
              </li>
            </ul>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition"
            >
              Logout
            </button>
          </>
        )}
      </section>
    </div>
  );
}
