import { NextResponse } from "next/server";
import {users} from "../../../util/db";

export function GET(request,content){
    console.log(content.params.id);
    const userData = users.filter((item)=>(item.id == content.params.id))
    console.log(userData.length);
    return NextResponse.json(userData.length == 0 ? ({result:"No data found", success:false}) : ({result:userData, success:true}), {status:200})
}