import { NextResponse } from "next/server";
import meetups from "./meetups.json";

export interface IMeetups {
  id: number;
  name: string;
  link: string;
  category: string;
}

export async function GET({ request }: { request: IMeetups[] }) {
  return NextResponse.json(meetups);
}
