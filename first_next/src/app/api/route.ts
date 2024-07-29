export async function GET(request: Request) {
    
    const responseBody = {
        "message": "Hello from the API",
    }
    
    return new Response(JSON.stringify(responseBody), {
        headers: { 
            'content-type': 'application/json', 
        },
    })
}