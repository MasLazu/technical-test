"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

type product = { id: number; name: String; desctiption: String; price: String }

export default function ContohGrafikInteraktif() {
  const [data, setData] = useState<product[]>([])
  //   const router = useRouter()

  //   useEffect(() => {
  //     async function fetchData(page: number, pageSize: number) {
  //       const data: product[] = await (
  //         await fetch(
  //           `http://localhost:3000/sales?page=${page}&pageSize=${pageSize}`
  //         )
  //       ).json()
  //       setData(data)
  //     }
  //     if (router.isReady) {
  //       const { page = "1", pageSize = "10" } = router.query

  //       fetchData(parseInt(page[0]), parseInt(pageSize[0]))
  //     }
  //   }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Contoh Tabel Interraktif</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Deskripsi</TableHead>
            <TableHead className="text-right">Ppice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.desctiption}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
