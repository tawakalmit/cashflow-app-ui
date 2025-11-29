export async function POST(request) {
  const url = `${process.env.API_URL}/api/auth/login`;
  const body = await request.json();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      return response
    }

    const data = await response.json();

    return Response.json({
      message: "Berhasil ambil data eksternal",
      data,
    });
  } catch (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}