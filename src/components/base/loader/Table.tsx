"use client"

import React from 'react'
import { Skeleton } from 'primereact/skeleton'
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

export default function LoaderExpertise() {
  const titleTemp = () => {
    return <div className="flex items-center gap-4">
      <Skeleton height="40px" width="60px" borderRadius="4px" />
      <Skeleton width="70%" height="10px" borderRadius="16px" />
    </div>
  }

  const tagsTemp = () => {
    return <div className="flex items-center gap-2">
      {[...Array(3)].map((_, i) => (
        <Skeleton height="20px" width="25%" borderRadius="16px" key={i} />
      ))}
    </div>
  }

  return (
    <DataTable value={[...Array(4)]}>
      <Column field="year" header="Year" style={{ width: "80px" }} className="text-sm text-secondary-text" body={<Skeleton width="80%" height="10px" borderRadius="16px" />} />
      <Column field="title" header="Project" body={titleTemp} />
      <Column field="tags" header="Tags" body={tagsTemp} />
      <Column field="url" header="Link" body={<Skeleton width="80%" height="10px" borderRadius="16px" />} />
    </DataTable>
  )
}
