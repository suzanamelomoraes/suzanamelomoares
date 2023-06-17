import { NextResponse } from "next/server";
import community from "./community.json";

export interface ICommunity {
  id: number;
  name: string;
  link: string;
  category: string;
}

export async function GET({ request }: { request: ICommunity[] }) {
  return NextResponse.json(community);
}
