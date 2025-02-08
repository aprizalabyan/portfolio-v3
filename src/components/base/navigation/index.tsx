"use client"

import React from 'react'

interface INav {
  id: string;
  title: string;
}

interface Props {
  navList: INav[];
  activeSection: string;
  clickNav: (id: string) => void;
}

export default function Navigation({ navList, activeSection, clickNav }: Props) {
  return (
    <div>
      <nav className="nav-container hidden lg:block lg:mt-16 w-max">
        <ul>
          {navList.map((item, index) => {
            return (
              <li key={index} onClick={() => clickNav(item.id)}>
                <div className={`group flex items-center py-3 cursor-pointer ${activeSection == item.id ? "active" : ""}`}>
                  <span className="nav-indicator bg-white h-px w-8 mr-4 group-hover:w-16 opacity-50 group-hover:opacity-100 transition-all"></span>
                  <span className="nav-text text-xs uppercase tracking-widest text-secondary-text group-hover:text-primary-text transition-all">{item.title}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
