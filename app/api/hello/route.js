import { NextResponse } from "next/server";

export async function GET(request){
    // return new Response("Hello, Next JS")
    return NextResponse.json({"name":"taha ansaro"}, {status:201})
}