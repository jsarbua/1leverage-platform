export const designSystemCSS = `
* { box-sizing: border-box; }
body { margin: 0; background: #080a0f; color: #eef0f8; font-family: Arial, sans-serif; }
.app { min-height: 100vh; display: flex; }
.main { flex: 1; padding: 32px; overflow-y: auto; }
.card { background: #0f1117; border: 1px solid rgba(255,255,255,.1); border-radius: 16px; padding: 20px; margin-bottom: 16px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.sidebar { width: 260px; min-height: 100vh; background: #0f1117; border-right: 1px solid rgba(255,255,255,.1); padding: 24px; }
.muted { color: #8890a8; }
h1 { margin-top: 0; }
button { background: #6c63ff; color: white; border: 0; border-radius: 10px; padding: 10px 14px; cursor: pointer; }
`;
