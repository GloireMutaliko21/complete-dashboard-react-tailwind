import React from 'react'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { RiLoader2Fill } from "react-icons/ri";

const Loading = () => {
    return (
        <div className='animate-spin flex h-screen w-screen bg-white justify-center items-center text-5xl'>
            <TooltipComponent>
                <RiLoader2Fill style={{ color: '#193b80' }} />
            </TooltipComponent>
        </div>
    )
}

export default Loading