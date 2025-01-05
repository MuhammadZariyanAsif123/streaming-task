import React, { useState, createContext } from "react";
import ChartData from "./ChartData";
import ToogleSwitch from "./ToogleTheme";
import { motion } from "framer-motion";

export const StreamContext = createContext();

const StreamingTask = () => {
  const [isStreaming, toggleStreaming] = useState(true);

  // Animation variants
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const buttonVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <div className="sm:flex sm:flex-row sm:justify-around mb-5 flex flex-col items-center gap-4">
        {/* Animated Heading */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        >
          <h1 className="font-extrabold sm:text-6xl text-4xl text-red-600 uppercase text-center">
            Streaming Task
          </h1>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        >
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {/* Start / Stop Button */}
            <button
              type="button"
              className={`inline-flex items-center px-4 py-2 text-sm font-medium border border-gray-900 rounded-s-lg ${
                isStreaming ? "bg-red-800 text-white" : "bg-blue-500 text-white"
              }`}
              onClick={() => toggleStreaming(!isStreaming)}
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              {isStreaming ? "Stop" : "Start"}
            </button>

            {/* ON / OFF Button */}
            <button
              type="button"
              className={`inline-flex items-center text-white font-bold pointer-events-none px-4 py-2 text-sm border-t border-b border-r border-gray-900 ${
                isStreaming
                  ? "bg-green-400 hover:bg-gray-900"
                  : "bg-red-600 hover:bg-gray-900"
              }`}
            >
              <svg
                className="w-3 h-3 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                />
              </svg>
              {isStreaming ? "ON" : "OFF"}
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        >
          <div>
            <ToogleSwitch />
          </div>
        </motion.div>
      </div>

      <StreamContext.Provider value={isStreaming}>
        <ChartData />
      </StreamContext.Provider>
    </>
  );
};

export default StreamingTask;
