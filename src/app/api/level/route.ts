import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.BACKEND_URL}/classes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'AUTH-TOKEN': req.headers.get('AUTH-TOKEN')!,
      },
      body: JSON.stringify({ levelId: body?.levelId || 0 }),
    });

    const data = await res.json();

    if (res.status === 200) {
      return NextResponse.json({ data: data });
    } else if (res.status === 401 || res.status === 403) {
      return NextResponse.json({ error: data }, { status: res.status });
    } else {
      return NextResponse.json(
        { error: { message: 'Something went wrong. Please try again' } },
        { status: res.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: { message: 'Something went wrong. Please try again' },
      },
      { status: 500 }
    );
  }
}
