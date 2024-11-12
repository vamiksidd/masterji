// src/app/api/news/route.js
import axios from 'axios';

export async function GET(request,) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;  // Default to page 1 if no query param

    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                language: 'en',
                apiKey: process.env.NEWS_API_KEY,
                page,
                pageSize: 6,
            },
        });
       



        return new Response(JSON.stringify(response.data), {
            status: 200,
            // headers,
        });
    } catch (error) {
        console.error('Error fetching data from News API:', error);
        return new Response('Error fetching data from News API', { status: 500 });
    }
}
