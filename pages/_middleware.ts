import { NextResponse } from 'next/server'

export function middleware() {

  console.log('Running middleware.');

  // Store the response so we can modify its headers
  const response = NextResponse.next()

  // Set custom header
  response.headers.set('x-edge-function-middleware', 'yup')

  // Return response
  return response
}
