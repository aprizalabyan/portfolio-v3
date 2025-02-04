"use client"

import React from 'react'
import { Skeleton } from 'primereact/skeleton';

export default function LoaderHeader() {
  return (
    <div className="grid grid-cols-4 p-4">
      <div className="col-span-1">
        <Skeleton size="100px" borderRadius="8px"></Skeleton>
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <Skeleton height="12px" borderRadius="16px"></Skeleton>
        <Skeleton height="12px" borderRadius="16px"></Skeleton>
        <Skeleton width="40%" height="12px" borderRadius="16px"></Skeleton>
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton width="80px" height="24px" borderRadius="16px" key={i}></Skeleton>
          ))}
        </div>
      </div>
    </div>
  )
}
