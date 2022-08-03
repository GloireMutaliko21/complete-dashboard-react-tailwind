import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom";
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Chat = () => {
  const { currentColor, handleClick } = useStateContext();

  return createPortal(
    <AnimatePresence>
      <motion.div
        key='modal'
        className="nav-item absolute right-5 md:right-52 top-12 bg-gray-100 dark:bg-[#42464D] p-5 rounded-lg w-96"
        initial={{ opacity: 0, y: '5%' }}
        animate={{ opacity: 1, y: '-0.1%' }}
        exit={{ opacity: 0, y: '5%' }}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-10">
            <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
            <button type="button" className="text-white  text-xs rounded p-1 px-2 bg-orange-600">
              5 New
            </button>
          </div>
          <button
            type='button'
            onClick={() => handleClick('')}
            style={{
              color: currentColor,
              borderRadius: '50%'
            }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="mt-5 ">
          {chatData?.map((item, index) => (
            <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10"
                  src={item.image}
                  alt={item.message}
                />
                <span
                  style={{ background: item.dotColor }}
                  className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
              </div>
              <div>
                <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <Button
              color="white"
              bgColor={currentColor}
              text="See all messages"
              borderRadius="10px"
              width="full"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>, document.body
  );
};

export default Chat;
