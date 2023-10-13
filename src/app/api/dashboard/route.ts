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
    } else if (res.status === 401 || res.status === 403) {
      return NextResponse.json({ error: data }, { status: res.status });
    } else {
      return NextResponse.json(
        { error: { error: 'Something went wrong. Please try again' } },
        { status: res.status }
      );
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('error:', error);
    return NextResponse.json(
      {
        error: { error: 'Something went wrong. Please try again' },
      },
      { status: 500 }
    );
  }
}
