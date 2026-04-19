export function onRequest() {
  return new Response(
    JSON.stringify([{
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "com.humanhabits.app",
        "sha256_cert_fingerprints": [
          "C9:AE:D1:A1:AC:06:B9:E0:BD:CF:0A:43:A9:D9:02:A2:81:E6:13:7F:ED:6E:29:70:F0:89:20:02:96:99:DD:5A"
        ]
      }
    }]),
    { headers: { "Content-Type": "application/json" } }
  );
}