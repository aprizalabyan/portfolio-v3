"use client"

import React from 'react'
import { Skeleton } from 'primereact/skeleton';

export default function LoaderParagraph() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton width="70%" height="12px" borderRadius="16px"></Skeleton>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton width="100%" height="12px" borderRadius="16px"></Skeleton>
        <Skeleton width="100%" height="12px" borderRadius="16px"></Skeleton>
        <Skeleton width="40%" height="12px" borderRadius="16px"></Skeleton>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton width="100%" height="12px" borderRadius="16px"></Skeleton>
        <Skeleton width="65%" height="12px" borderRadius="16px"></Skeleton>
      </div>
    </div>
  )
}
