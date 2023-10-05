import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${process.env.BACKEND_URL}/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: body?.email, password: body?.password }),
    });

    const data = await res.json();

    if (res.status === 200) {
      return NextResponse.json({ user: data });
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
        error: { message: 'Something went wrong. Please try again' },
      },
      { status: 500 }
    );
  }
}
