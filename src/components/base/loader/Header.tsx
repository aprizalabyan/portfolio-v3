"use client"

import React from 'react'
import { Skeleton } from 'primereact/skeleton';

export default function LoaderHeader() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton width="60%" height="28px" borderRadius="16px"></Skeleton>
      <Skeleton width="40%" height="18px" borderRadius="16px"></Skeleton>
      <div className="flex flex-col gap-2">
        <Skeleton width="90%" height="12px" borderRadius="16px"></Skeleton>
        <Skeleton width="90%" height="12px" borderRadius="16px"></Skeleton>
        <Skeleton width="30%" height="12px" borderRadius="16px"></Skeleton>
      </div>
    </div>
  )
}
