import React from 'react';
import { createPortal } from "react-dom";
import { motion } from "framer-motion"
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor, handleClick } = useStateContext();

  return createPortal(
    <motion.div
      className="nav-item absolute right-5 md:right-64 top-12 bg-gray-100 dark:bg-[#42464D] p-5 rounded-lg w-96"
      initial={{ opacity: 0, y: '5%' }}
      animate={{ opacity: 1, y: '-0.1%' }}
    >
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">Shopping Cart</p>
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
      <div>


        {cartData.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img className="rounded-lg h-80 w-24" src={item.image} alt="" />
                <div>
                  <p className="font-semibold ">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{item.category}</p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{item.price}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                      <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 mb-3">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
          <p className="font-semibold">$890</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-500 dark:text-gray-200">Total</p>
          <p className="font-semibold">$890</p>
        </div>
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Place Order"
          borderRadius="10px"
          width="full"
        />
      </div>
    </motion.div>, document.body
  );
};

export default Cart;
