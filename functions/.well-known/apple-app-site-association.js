export function onRequest() {
  return new Response(
    JSON.stringify({
      "applinks": {
        "apps": [],
        "details": [{
          "appID": "4VQYSMG8ZX.com.humanhabits.app",
          "paths": ["/invite", "/invite/*"]
        }]
      }
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}