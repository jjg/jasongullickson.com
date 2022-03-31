import type { NextFetchEvent, NextRequest } from 'next/server';

export default function middleware(request: NextRequest, event: NextFetchEvent) {

  var bigStringSize = 999 * 1000; // 1KB //20 * 1000 * 1000; // 20MB
  var bigString = '';

  for(var i=0;i<bigStringSize;i++){
      bigString = bigString + 'a';
  }

  const response = new Response(bigString); 

  response.headers.set('Cache-Control', 's-maxage=30');

  return response;
}