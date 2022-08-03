import React from 'react';
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor, handleClick } = useStateContext();

  return createPortal(
    <motion.div
      className="nav-item absolute right-5 md:right-40 top-12 bg-gray-100 dark:bg-[#42464D] p-8 rounded-lg w-96"
      initial={{ opacity: 0, y: '5%' }}
      animate={{ opacity: 1, y: '-0.1%' }}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme "> 5 New</button>
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
          <div key={index} className="flex items-center leading-8 gap-5 border-b-1 border-color p-3">
            <img className="rounded-full h-10 w-10" src={item.image} alt={item.message} />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </motion.div>, document.body
  );
};

export default Notification;
