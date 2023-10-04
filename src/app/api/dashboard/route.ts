import { NextResponse } from 'next/server';

// TODO: Refactor by adding envs & constants
export async function GET(req: Request) {
  try {
    const res = await fetch(`http://localhost:8000/levels/`, {
      method: 'GET',
      headers: req.headers,
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
        error: { message: 'Something went wrong. Please try again' },
      },
      { status: 500 }
    );
  }
}
