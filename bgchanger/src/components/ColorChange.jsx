import React, { useState } from 'react'

const ColorChange = () => {
    const [color, setColor] = useState('')
    return (
        <div className='w-full h-screen' style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-200 px-3 py-2 rounded-3xl">
                    <button className='bg-blue-500 hover:bg-emerald-500 p-2 m-2 rounded-xl text-white text-2xl outline-none' onClick={() => setColor('red')}>Red</button>
                    <button className='bg-blue-500 hover:bg-emerald-500 p-2 m-2 rounded-xl text-white text-2xl outline-none' onClick={() => setColor('green')}>green</button>
                    <button className='bg-blue-500 hover:bg-emerald-500 p-2 m-2 rounded-xl text-white text-2xl outline-none' onClick={() => setColor('blue')}>blue</button>
                    <button className='bg-blue-500 hover:bg-emerald-500 p-2 m-2 rounded-xl text-white text-2xl outline-none' onClick={() => setColor('brown')}>brown</button>
                    <button className='bg-blue-500 hover:bg-emerald-500 p-2 m-2 rounded-xl text-white text-2xl outline-none' onClick={() => setColor('purple')}>purple</button>
                    <button className='bg-blue-500 hover:bg-emerald-500 p-2 m-2 rounded-xl text-white text-2xl outline-none' onClick={() => setColor('yellow')}>yellow</button>

                    {/* RESET BUTTON */}
                    <button className='bg-red-600 p-2 m-2 rounded-xl text-white text-2xl border-0' onClick={() => setColor('')}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default ColorChange