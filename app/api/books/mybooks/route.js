export async function GET(request) {
  const url = `${process.env.API_URL}/api/book/my-books`;
  const token = request.headers.get("authorization")?.replace("Bearer ", "");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization" : `Bearer ${token}`
      }
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