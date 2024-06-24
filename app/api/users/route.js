import { NextResponse } from "next/server";
import {users} from "../../util/db"

export function GET(request){
    const data = users;
    return NextResponse.json(data)
}