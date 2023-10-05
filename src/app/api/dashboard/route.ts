import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/levels/`, {
      method: 'GET',
      headers: [['AUTH-TOKEN', req.headers.get('AUTH-TOKEN')!]],
    });

    const data = await res.json();

    if (res.status === 200) {
      return NextResponse.json({ level: data });
    } else if (res.status === 401) {
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
        error: { message: error },
      },
      { status: 500 }
    );
  }
}
