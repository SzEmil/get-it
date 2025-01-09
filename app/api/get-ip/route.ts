import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const response = await fetch('https://httpbin.org/ip');
    const data = await response.json();

    return NextResponse.json(
      { outgoingIp: data.origin },
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Błąd podczas pobierania adresu IP:', error);

    return NextResponse.json(
      { error: 'Nie udało się pobrać adresu IP' },
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
