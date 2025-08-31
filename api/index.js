// This is the code for your Vercel Serverless Function.

export default function handler(request, response) {
  // This is the crucial line to fix the CORS error.
  // It tells browsers that any website is allowed to use this API.
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // For POST requests, we just send back a success message.
  if (request.method === 'POST') {
    response.status(200).json({
      message: "Success! Your Vercel backend is working.",
      note: "This is a test response. It does not actually generate an image."
    });
  } 
  // For GET requests like /v1/models
  else {
    response.status(200).json({
      data: [
        { id: "img3-vercel", name: "Imagen 3 (from Vercel)" },
        { id: "img4-vercel", name: "Imagen 4 (from Vercel)" }
      ]
    });
  }
}
