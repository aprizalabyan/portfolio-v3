"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Chip } from "primereact/chip"
import static_data from "@/assets/static_data.json"

interface Project {
  data: [];
  total_items: number;
  total_pages: number;
}

export default function Project() {
  const router = useRouter()

  const titleBodyTemplate = (item: any) => {
    return <div className="flex gap-4 items-center">
      <img src={item.image} alt="img" className="w-[60px] h-[40px] object-cover" />
      <span className="text-sm hidden md:block">{item.title}</span>
      <a href={item.url} target="_blank" className="text-sm block md:hidden group/link">
        {item.title}
        <i className="text-xs pi pi-arrow-up-right ml-1 mb-0.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"></i>
      </a>
    </div>
  }

  const tagBodyTemplate = (item: any) => {
    return <div className="flex flex-wrap gap-1.5">
      {item.tags.map((tag: any, i: number) => (
        <Chip
          key={i}
          label={tag}
          pt={{ label: { className: "text-xs text-accent-blue" } }}
          className="bg-gradient-1 rounded-full px-3 py-1"
        />
      ))}
    </div>
  }

  const linkBodyTemplate = (item: any) => {
    return <a
      href={item.url}
      className="flex items-end text-sm text-secondary-text hover:text-accent-blue group/link"
      target="_blank"
    >
      <span>
        {item.url}
        <i className="text-xs pi pi-arrow-up-right ml-1 mb-0.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"></i>
      </span>
    </a>
  }

  return (
    <div className="project-wrapper justify-items-center">
      <div className="flex flex-col gap-4 py-12 lg:py-24 px-6 md:px-12 min-h-screen max-w-screen-xl mx-auto">
        <div
          className="flex items-center gap-2 text-sm cursor-pointer text-accent-blue hover:text-accent-blue-darken-1 w-fit group/link"
          onClick={() => router.push("/")}
        >
          <i className="pi pi-arrow-left text-xs group-hover/link:-translate-x-1 transition-transform"></i>
          <span className="">Aprizal Abyan</span>
        </div>
        <span className="text-2xl sm:text-3xl font-bold">All Projects</span>
        <DataTable value={static_data["project-all"]}>
          <Column field="year" header="Year" style={{ width: "60px" }} className="text-sm text-secondary-text" />
          <Column field="title" header="Project" body={titleBodyTemplate} className="md:w-1/2 lg:w-2/5" />
          <Column field="tags" header="Tags" body={tagBodyTemplate} headerClassName="hidden lg:table-cell" className="hidden lg:table-cell" />
          <Column field="url" header="Link" body={linkBodyTemplate} headerClassName="hidden md:table-cell" className="hidden md:table-cell" />
        </DataTable>
      </div>
    </div>
  );
}
