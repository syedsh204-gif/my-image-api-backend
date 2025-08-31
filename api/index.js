// This is the code for your Vercel Serverless Function.

export default function handler(request, response) {
  // Set CORS headers for all responses. This is the key part.
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Specifically handle the browser's preflight OPTIONS request.
  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }

  // Handle your actual GET and POST requests.
  if (request.method === 'POST') {
    response.status(200).json({
      message: "Success! Your Vercel backend is working.",
      note: "This is a test response. It does not actually generate an image."
    });
  } else { // Defaults to GET
    response.status(200).json({
      data: [
        { id: "img3-vercel", name: "Imagen 3 (from Vercel)" },
        { id: "img4-vercel", name: "Imagen 4 (from Vercel)" }
      ]
    });
  }
}
