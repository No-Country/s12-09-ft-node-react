'use client';
import { useState } from 'react';
import type { Tabs } from '@/@types';

interface Props {
  tabs: Tabs[];
}

export function TabsLayout({ tabs }: Props) {
  const [view, setView] = useState(tabs[0].label);
  return (
    <div>
      <div className='flex justify-center items-center mb-4'>
        {tabs.map((tab, i) => (
          <button
            key={i + 'tab'}
            onClick={() => {
              setView(tab.label);
            }}
            className={`
                 flex-1 p-2 gap-2 border-b-2
                 font-bold
                 text-accent                 
                ${view === tab.label ? 'text-secondary border-secondary' : ''}`} // active
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div
            key={i + 'content'}
            className={view === tab.label ? '' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
