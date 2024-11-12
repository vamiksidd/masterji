import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;  // Default to page 1 if no query param

  console.log('Fetching data for page:', page); // Debug log

  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        language: 'en',
        apiKey: process.env.NEXT_NEWS_API_KEY, 
        page,
        pageSize: 6,
      },
    });

    console.log('News API response:', response.data); // Debug log

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // CORS
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('Error fetching data from News API:', error.response?.data || error.message || error);
    return new Response('Error fetching data from News API', { status: 500 });
  }
}
