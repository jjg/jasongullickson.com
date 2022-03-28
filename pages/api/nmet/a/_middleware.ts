import type { NextFetchEvent, NextRequest } from 'next/server';

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {

  const response = new Response('Hello from Edge, batch.');//new Response(JSON.stringify(data))
  response.headers.set('Cache-Control', 's-maxage=30')

  return response 
}
