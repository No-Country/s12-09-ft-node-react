"use client"
import { useState } from 'react';
export default function Select() {
    const [currentView, setCurrentView] = useState<'taller' | 'cliente'>(
        'taller'
      );
    
  return (
    <div>
       <div className='flex justify-evenly w-full mt-5'>
        <button
          onClick={() => {
            setCurrentView('taller');
          }}
          className={`${
            currentView === 'taller'
              ? ' text-secondary font-bold underline'
              : 'text-secondary font-bold'
          }`}
        >
          Taller
        </button>
        <button
          onClick={() => {
            setCurrentView('cliente');
          }}
          className={` ${
            currentView === 'cliente'
              ? ' text-secondary font-bold underline'
              : 'text-secondary font-bold'
          }`}
        >
          Cliente
        </button>
      </div>
    </div>
  )
}
