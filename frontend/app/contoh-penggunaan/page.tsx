"use client";

import { CodeBlock } from "react-code-blocks";
import { useState } from "react";
import profincies from "@/data/profinces.json";
import regencies from "@/data/regencies.json";
import districts from "@/data/districts.json";
import villages from "@/data/villages.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DependentDropdown() {
  const [profinci, setProfinci] = useState<number | null>(null);
  const [regency, setRegency] = useState<number | null>(null);
  const [district, setDistrict] = useState<number | null>(null);
  const [village, setVillage] = useState<number | null>(null);
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5 mt-7">Contoh Implementasi</h2>
      <div className="grid grid-cols-4">
        <div className="px-3">
          <Select
            onValueChange={(val) => {
              setProfinci(parseInt(val));
              setRegency(null);
              setDistrict(null);
              setVillage(null);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih profinsi" />
            </SelectTrigger>
            <SelectContent>
              {profincies.map((profincy) => (
                <SelectItem value={profincy.id.toString()}>
                  {profincy.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Select
            onValueChange={(val) => {
              setRegency(parseInt(val));
              setDistrict(null);
              setVillage(null);
            }}
            disabled={profinci == null}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih kabupaten" />
            </SelectTrigger>
            <SelectContent>
              {regencies
                .filter((regency) => regency.prvinceId === profinci)
                .map((regency) => (
                  <SelectItem value={regency.id.toString()}>
                    {regency.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Select
            onValueChange={(val) => {
              setDistrict(parseInt(val));
              setVillage(null);
            }}
            disabled={regency == null || profinci == null}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih kecamatan" />
            </SelectTrigger>
            <SelectContent>
              {districts
                .filter((district) => district.regenciesId === regency)
                .map((district) => (
                  <SelectItem value={district.id.toString()}>
                    {district.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Select
            onValueChange={(val) => setVillage(parseInt(val))}
            disabled={district == null || regency == null || profinci == null}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih desa" />
            </SelectTrigger>
            <SelectContent>
              {(villages as { id: number; name: String; districtId: number }[])
                .filter((village) => village.districtId === district)
                .map((village) => (
                  <SelectItem value={village.id.toString()}>
                    {village.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-5 mt-7">
        Kode Dalam Framework React
      </h2>
      <p>
        Kode berikut berada pada project frontend/app/contoh-penggunaan/page.tsx
      </p>
      <CodeBlock text={code} language={"typescript"} />
    </div>
  );
}

const code = `
export default function DependentDropdown() {
  const [profinci, setProfinci] = useState<number | null>(null);
  const [regency, setRegency] = useState<number | null>(null);
  const [district, setDistrict] = useState<number | null>(null);
  const [village, setVillage] = useState<number | null>(null);
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="px-3">
          <Select onValueChange={(val) => setProfinci(parseInt(val))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih profinsi" />
            </SelectTrigger>
            <SelectContent>
              {profincies.map((profincy) => (
                <SelectItem value={profincy.id.toString()}>
                  {profincy.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Select
            onValueChange={(val) => setRegency(parseInt(val))}
            disabled={profinci == null}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih kabupaten" />
            </SelectTrigger>
            <SelectContent>
              {regencies
                .filter((regency) => regency.prvinceId === profinci)
                .map((regency) => (
                  <SelectItem value={regency.id.toString()}>
                    {regency.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Select
            onValueChange={(val) => setDistrict(parseInt(val))}
            disabled={regency == null || profinci == null}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih kecamatan" />
            </SelectTrigger>
            <SelectContent>
              {districts
                .filter((district) => district.regenciesId === regency)
                .map((district) => (
                  <SelectItem value={district.id.toString()}>
                    {district.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div className="px-3">
          <Select
            onValueChange={(val) => setVillage(parseInt(val))}
            disabled={district == null || regency == null || profinci == null}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih desa" />
            </SelectTrigger>
            <SelectContent>
              {(villages as { id: number; name: String; districtId: number }[])
                .filter((village) => village.districtId === district)
                .map((village) => (
                  <SelectItem value={village.id.toString()}>
                    {village.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-5 mt-7">Kode React</h2>
      <CodeBlock
      text={code}
      language={'typescript'}
    />
  </div>
  );
}
`;
