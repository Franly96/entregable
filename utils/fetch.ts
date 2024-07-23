import { KPIType } from "@/types";

export async function getAll(): Promise<{data: KPIType[]}> {
  const res = await fetch('http://localhost:3000/api/kpi');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
export async function getById(id: string): Promise<{data: KPIType}> {
  const res = await fetch('http://localhost:3000/api/kpi/' + id);  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}