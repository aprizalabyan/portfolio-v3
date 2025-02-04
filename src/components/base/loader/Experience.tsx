"use client"

import React from 'react'
import { Skeleton } from 'primereact/skeleton';

export default function LoaderExperience() {
  return (
    <div className="flex flex-col gap-3 p-2">
      <Skeleton width="80%" height="12px" borderRadius="16px"></Skeleton>
      <div className="grid grid-cols-2">
        <Skeleton width="60%" height="10px" borderRadius="16px"></Skeleton>
        <Skeleton height="10px" borderRadius="16px"></Skeleton>
      </div>
      <div className="grid grid-cols-2">
        <Skeleton width="75%" height="10px" borderRadius="16px"></Skeleton>
        <Skeleton height="10px" borderRadius="16px"></Skeleton>
      </div>
      <div className="grid grid-cols-2">
        <Skeleton width="40%" height="10px" borderRadius="16px"></Skeleton>
        <Skeleton height="10px" borderRadius="16px"></Skeleton>
      </div>
    </div>
  )
}
