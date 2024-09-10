import { NextResponse, userAgent  } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const  agent  = userAgent(request);
  if (url.pathname == '/demo-page') {
    return NextResponse.rewrite(new URL(`/demo-page?os=${agent.os.name?.split(" ").join("-")}`, request.url))
  }
  
}