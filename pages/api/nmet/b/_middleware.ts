import type { NextFetchEvent, NextRequest } from 'next/server';

export async function middleware(req: NextRequest, event: NextFetchEvent) {
    const { readable, writable } = new TransformStream();

    event.waitUntil(
      (async () => {
        const writer = writable.getWriter();
        const encoder = new TextEncoder();
        writer.write(encoder.encode('Hello from Edge...'));
        writer.write(encoder.encode('...Streamed!'));
        writer.close();
      })(),
    );


    const response = new Response(readable);

    response.headers.set('Cache-Control', 's-maxage=30')

    return response;
}

