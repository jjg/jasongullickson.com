import type { NextFetchEvent, NextRequest } from 'next/server';

export async function middleware(req: NextRequest, event: NextFetchEvent) {
    const { readable, writable } = new TransformStream();

    event.waitUntil(
      (async () => {
        const writer = writable.getWriter();
        const encoder = new TextEncoder();

        writer.write(encoder.encode('Hello from Edge...'));

        // Let's try to slowly send a lot of data.
        var bigResponseSize = 999 * 1024; // Just under 1MB

        for(var i=0; i < bigResponseSize; i++){
          writer.write(encoder.encode('streaming...'));
        }

        writer.write(encoder.encode('streaming done!'));

        writer.close();
      })(),
    );


    const response = new Response(readable);

    response.headers.set('Cache-Control', 's-maxage=30')

    return response;
}

