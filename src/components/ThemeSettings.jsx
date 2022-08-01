/* eslint-disable no-unused-vars */
import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { FiSettings } from 'react-icons/fi';

const ThemeSettings = () => {
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:to-gray-200 bg-white dark:[#484B52] w-96'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-xl'>Settings</p>
          <button
            type='button'
            onClick={() => { }}
            style={{
              color: 'rgb(153, 171, 180)',
              borderRadius: '50%'
            }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Options</p>

          <div className='mt-4'>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='cursor-pointer'
              onChange={() => { }}
              checked={true}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>
          <div className='mt-4'>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='cursor-pointer'
              onChange={() => { }}
              checked={true}
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position='TopCenter'
              >
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button
                    type='button'
                    className='h-10 w-10 rounded-full cursor-pointer'
                    style={{ backgroundColor: item.color }}
                    onClick={() => { }}
                  >
                    <BsCheck className={`ml-2 text-2xl text-white ${false ? 'black' : 'hidden'} `} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ThemeSettings