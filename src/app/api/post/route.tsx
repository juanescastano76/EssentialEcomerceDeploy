import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  const url = new URL(req.url);

  try {
    new NextResponse("HOLA", { status: 200 });
  } catch (error) {}
};
