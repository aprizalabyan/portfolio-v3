"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Chip } from "primereact/chip"
import LoaderTable from "@/components/base/loader/Table"

interface Project {
  data: [];
  total_items: number;
  total_pages: number;
}

export default function Project() {
  const router = useRouter()

  const [dataProject, setDataProject] = useState<Project>({
    data: [],
    total_items: 0,
    total_pages: 0
  })
  const [loading, setLoading] = useState(true)

  const getDataProject = async () => {
    setLoading(true)
    try {
      const res = await axios({
        method: "GET",
        url: "/api/content/project"
      })
      setDataProject(res.data.data)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDataProject()
  }, [])

  const titleBodyTemplate = (item: any) => {
    return <div className="flex gap-4 items-center">
      <img src={item.image} alt="img" className="w-[60px] h-[40px] object-cover" />
      <span className="text-sm">{item.title}</span>
    </div>
  }

  const tagBodyTemplate = (item: any) => {
    return <div className="flex gap-2">
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
      <span>{item.url}</span>
      <i className="text-xs pi pi-arrow-up-right ml-1 mb-0.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"></i>
    </a>
  }

  return (
    <div className="project-wrapper justify-items-center">
      <div className="flex flex-col py-24 gap-4 w-3/5">
        <div
          className="flex items-center gap-2 text-sm cursor-pointer text-accent-blue hover:text-accent-blue-darken-1 w-fit group/link"
          onClick={() => router.push("/")}
        >
          <i className="pi pi-arrow-left text-xs group-hover/link:-translate-x-1 transition-transform"></i>
          <span className="">Aprizal Abyan</span>
        </div>
        <span className="text-3xl font-bold">All Projects</span>
        {loading ?
          <LoaderTable /> :
          <DataTable value={dataProject.data}>
            <Column field="year" header="Year" style={{ width: "80px" }} className="text-sm text-secondary-text" />
            <Column field="title" header="Project" body={titleBodyTemplate} />
            <Column field="tags" header="Tags" body={tagBodyTemplate} />
            <Column field="url" header="Link" body={linkBodyTemplate} />
          </DataTable>
        }
      </div>
    </div>
  );
}
