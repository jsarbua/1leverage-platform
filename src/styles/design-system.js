export const designSystemCSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
html,body,#root{height:100%;background:#080a0f;color:#eef0f8;font-family:'DM Sans',sans-serif;font-size:14px}
:root{
--bg:#080a0f;--surface:#0f1117;--surface2:#161922;--surface3:#1d2130;
--border:rgba(255,255,255,0.06);--border2:rgba(255,255,255,0.11);
--text:#eef0f8;--text2:#8890a8;--text3:#4a5068;
--accent:#6c63ff;--accent2:#8b5cf6;--brain:#a855f7;
--green:#22d3a0;--amber:#f59e0b;--red:#ef4444;
--blue:#3b82f6;--pink:#ec4899;--cyan:#06b6d4;--orange:#f97316;--lime:#84cc16;
--font-d:'Syne',sans-serif;--font-b:'DM Sans',sans-serif;
--r:10px;--rl:16px;--glow:0 0 40px rgba(108,99,255,0.12)}
.app{display:flex;height:100vh;overflow:hidden}
.main{flex:1;display:flex;flex-direction:column;overflow:hidden}
.content{flex:1;overflow-y:auto;padding:26px}
.sb{width:224px;flex-shrink:0;background:var(--surface);border-right:1px solid var(--border);display:flex;flex-direction:column;padding:16px 10px;overflow-y:auto;gap:2px}
.sb-logo{font-family:var(--font-d);font-size:16px;font-weight:800;padding:8px 8px 18px;display:flex;align-items:center;gap:9px}
.logo-mark{width:30px;height:30px;background:linear-gradient(135deg,var(--accent),var(--brain));border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:white;box-shadow:0 0 16px rgba(108,99,255,0.4)}
.sb-sect{font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:1.4px;color:var(--text3);padding:14px 8px 5px}
.ni{display:flex;align-items:center;gap:9px;padding:8px 9px;border-radius:8px;cursor:pointer;font-size:12.5px;font-weight:500;color:var(--text2);transition:all 0.14s;border:1px solid transparent;white-space:nowrap}
.ni:hover{background:var(--surface2);color:var(--text)}
.ni.active{background:rgba(108,99,255,0.11);color:var(--accent);border-color:rgba(108,99,255,0.22)}
.ico{font-size:14px;width:16px;text-align:center;flex-shrink:0}
.nbadge{margin-left:auto;font-size:9.5px;font-weight:800;background:var(--accent);color:white;border-radius:10px;padding:1px 6px}
.nbrain{background:linear-gradient(135deg,var(--brain),var(--accent))}
.topbar{height:54px;border-bottom:1px solid var(--border);display:flex;align-items:center;padding:0 26px;gap:14px;background:var(--surface);flex-shrink:0}
.topbar-title{font-family:var(--font-d);font-weight:700;font-size:14px;flex:1}
.btn{display:inline-flex;align-items:center;gap:5px;padding:7px 13px;border-radius:8px;font-size:12.5px;font-weight:600;cursor:pointer;border:1px solid transparent;transition:all 0.14s;font-family:var(--font-b)}
.btn-primary{background:var(--accent);color:white}
.btn-primary:hover{background:var(--accent2)}
.btn-ghost{background:transparent;color:var(--text2);border-color:var(--border2)}
.btn-ghost:hover{background:var(--surface2);color:var(--text)}
.btn-brain{background:linear-gradient(135deg,var(--brain),var(--accent));color:white}
.btn-sm{padding:5px 10px;font-size:11.5px}
.btn-xs{padding:3px 8px;font-size:11px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:18px;transition:border-color 0.2s}
.card:hover{border-color:var(--border2)}
.card-sm{padding:12px 14px;border-radius:var(--r)}
.mgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:12px;margin-bottom:26px}
.mc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:16px}
.mc-ico{font-size:18px;margin-bottom:10px}
.mc-val{font-family:var(--font-d);font-size:24px;font-weight:800}
.mc-lbl{font-size:11px;color:var(--text2);margin-top:3px}
.mc-trend{font-size:10.5px;font-weight:700;margin-top:7px}
.mc-trend.up{color:var(--green)}
.mc-trend.dn{color:var(--red)}
.agrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}
.ac{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:20px;cursor:pointer;transition:all 0.2s;position:relative;overflow:hidden}
.ac:hover{border-color:rgba(108,99,255,0.28);transform:translateY(-1px);box-shadow:var(--glow)}
.ac-head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px}
.ac-ico{font-size:26px}
.ac-badge{font-size:10px;font-weight:700;padding:2px 8px;border-radius:20px}
.active-badge{background:rgba(34,211,160,0.1);color:var(--green)}
.brain-badge{background:linear-gradient(135deg,rgba(168,85,247,0.2),rgba(108,99,255,0.2));color:var(--brain);border:1px solid rgba(168,85,247,0.25)}
.exec-badge{background:rgba(245,158,11,0.1);color:var(--amber)}
.ac-name{font-family:var(--font-d);font-weight:700;font-size:15px;margin-bottom:5px}
.ac-desc{font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:13px}
.ac-tools{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px}
.tag{font-size:10.5px;font-weight:500;padding:2px 7px;border-radius:5px;background:var(--surface2);color:var(--text2);border:1px solid var(--border)}
.ac-stats{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.ac-stat{background:var(--surface2);border-radius:7px;padding:9px}
.ac-stat-v{font-family:var(--font-d);font-weight:700;font-size:17px}
.ac-stat-l{font-size:10px;color:var(--text3);margin-top:2px}
.brain-card{background:linear-gradient(135deg,rgba(168,85,247,0.08),rgba(108,99,255,0.06));border:1px solid rgba(168,85,247,0.25)}
.brain-card:hover{border-color:rgba(168,85,247,0.45);box-shadow:0 0 40px rgba(168,85,247,0.15)}
.brain-ring{position:absolute;top:-60px;right:-60px;width:180px;height:180px;border-radius:50%;border:1px solid rgba(168,85,247,0.12);pointer-events:none}
.brain-ring2{top:-30px;right:-30px;width:120px;height:120px;border:1px solid rgba(168,85,247,0.08)}
.brain-dash{background:linear-gradient(135deg,rgba(168,85,247,0.07),rgba(108,99,255,0.05));border:1px solid rgba(168,85,247,0.2);border-radius:var(--rl);padding:24px;margin-bottom:24px;position:relative;overflow:hidden}
.csuite-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin-bottom:20px}
.csuite-card{background:rgba(255,255,255,0.03);border:1px solid rgba(168,85,247,0.15);border-radius:var(--r);padding:14px;transition:all 0.2s;cursor:pointer}
.csuite-card:hover{border-color:rgba(168,85,247,0.35);background:rgba(168,85,247,0.06)}
.csuite-title{font-family:var(--font-d);font-weight:800;font-size:14px;margin-bottom:4px}
.csuite-role{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--brain);margin-bottom:8px}
.csuite-desc{font-size:11.5px;color:var(--text2);line-height:1.45;margin-bottom:10px}
.csuite-stat{font-size:11px;color:var(--text3)}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
.pulse{animation:pulse 2s infinite}
.twrap{border:1px solid var(--border);border-radius:var(--rl);overflow:hidden}
table{width:100%;border-collapse:collapse}
th{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.7px;color:var(--text3);padding:11px 14px;text-align:left;background:var(--surface);border-bottom:1px solid var(--border)}
td{padding:11px 14px;font-size:12.5px;border-bottom:1px solid var(--border);vertical-align:middle}
tr:last-child td{border-bottom:none}
tr:hover td{background:var(--surface2)}
.sbadge{display:inline-flex;align-items:center;justify-content:center;min-width:40px;height:22px;border-radius:5px;font-size:11.5px;font-weight:700;padding:0 7px}
.sh{background:rgba(34,211,160,0.1);color:var(--green)}
.sm-badge{background:rgba(245,158,11,0.1);color:var(--amber)}
.sl{background:rgba(239,68,68,0.1);color:var(--red)}
.stag{font-size:10.5px;font-weight:600;padding:2px 7px;border-radius:5px}
.s-int{background:rgba(59,130,246,0.1);color:var(--blue)}
.s-off{background:rgba(34,211,160,0.1);color:var(--green)}
.s-scr{background:rgba(108,99,255,0.1);color:var(--accent)}
.s-app{background:rgba(255,255,255,0.05);color:var(--text2)}
.s-rej{background:rgba(239,68,68,0.07);color:var(--red)}
.cwrap{display:flex;gap:18px;height:560px}
.cwin{flex:1;display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);overflow:hidden}
.cmsgs{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:10px}
.msg{max-width:82%}
.msg-u{align-self:flex-end}
.msg-a{align-self:flex-start}
.mb{padding:9px 13px;border-radius:11px;font-size:13px;line-height:1.55}
.msg-u .mb{background:var(--accent);color:white;border-radius:11px 11px 2px 11px}
.msg-a .mb{background:var(--surface2);color:var(--text);border-radius:11px 11px 11px 2px;border:1px solid var(--border)}
.mtime{font-size:10px;color:var(--text3);margin-top:3px}
.msg-u .mtime{text-align:right}
.cinput-area{padding:13px;border-top:1px solid var(--border);display:flex;gap:9px}
.cinput{flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:9px;padding:9px 13px;color:var(--text);font-size:13px;font-family:var(--font-b);outline:none;resize:none}
.cinput:focus{border-color:var(--accent)}
.csb{width:220px;display:flex;flex-direction:column;gap:12px}
.cmeta{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:16px}
.cmeta-title{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--text3);margin-bottom:10px}
.cmeta-row{display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border);font-size:12px}
.cmeta-row:last-child{border-bottom:none}
.chip{font-size:11.5px;padding:6px 9px;background:var(--surface2);border:1px solid var(--border);border-radius:7px;cursor:pointer;color:var(--text2);transition:all 0.14s;line-height:1.3;margin-bottom:5px}
.chip:hover{background:var(--surface3);color:var(--text);border-color:var(--border2)}
.typing{display:inline-flex;gap:4px;align-items:center}
.td{width:5px;height:5px;border-radius:50%;background:var(--text3);animation:bounce 1s infinite}
.td:nth-child(2){animation-delay:0.15s}
.td:nth-child(3){animation-delay:0.3s}
@keyframes bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
.ai-dot{width:6px;height:6px;border-radius:50%;background:var(--green);display:inline-block}
.cli{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px solid var(--border)}
.cli:last-child{border-bottom:none}
.chk{width:17px;height:17px;border:2px solid var(--border2);border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.14s;flex-shrink:0;font-size:10px}
.chk.on{background:var(--green);border-color:var(--green);color:white}
.bar-row{display:flex;align-items:center;gap:11px;margin-bottom:9px}
.bar-lbl{font-size:12px;color:var(--text2);width:200px;flex-shrink:0}
.bar-track{flex:1;height:7px;background:var(--surface2);border-radius:4px;overflow:hidden}
.bar-fill{height:100%;border-radius:4px;transition:width 0.6s ease}
.bar-v{font-size:12px;font-weight:700;width:38px;text-align:right}
.wfc{background:var(--surface);border:1px solid var(--border);border-radius:var(--rl);padding:18px;margin-bottom:12px;transition:border-color 0.2s}
.wfc:hover{border-color:var(--border2)}
.tabs{display:flex;gap:2px;background:var(--surface2);border-radius:9px;padding:3px;margin-bottom:20px}
.tab{flex:1;padding:7px 10px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;color:var(--text2);text-align:center;transition:all 0.14s;border:none;background:none}
.tab.on{background:var(--surface3);color:var(--text);box-shadow:0 1px 4px rgba(0,0,0,0.35)}
.tog{position:relative;width:38px;height:21px;cursor:pointer}
.tog input{opacity:0;width:0;height:0}
.tog-sl{position:absolute;inset:0;background:var(--surface3);border-radius:21px;transition:0.2s;border:1px solid var(--border)}
.tog-sl::before{content:'';position:absolute;height:15px;width:15px;left:2px;bottom:2px;background:var(--text2);border-radius:50%;transition:0.2s}
.tog input:checked+.tog-sl{background:var(--accent);border-color:var(--accent)}
.tog input:checked+.tog-sl::before{transform:translateX(17px);background:white}
.hero{background:linear-gradient(135deg,rgba(108,99,255,0.09),rgba(168,85,247,0.05));border:1px solid rgba(108,99,255,0.18);border-radius:var(--rl);padding:28px;margin-bottom:24px;position:relative;overflow:hidden}
.hero-tag{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:var(--accent);background:rgba(108,99,255,0.1);padding:3px 9px;border-radius:20px;display:inline-block;margin-bottom:10px}
.hero-h{font-family:var(--font-d);font-size:26px;font-weight:800;line-height:1.2;margin-bottom:9px}
.hero-s{font-size:13.5px;color:var(--text2);line-height:1.6;max-width:520px}
.feed-item{display:flex;gap:10px;padding:9px 0;border-bottom:1px solid var(--border)}
.feed-item:last-child{border-bottom:none}
.feed-dot{width:8px;height:8px;border-radius:50%;margin-top:4px;flex-shrink:0}
.prog-bar{height:4px;background:var(--surface2);border-radius:4px;overflow:hidden;margin-top:8px}
.prog-fill{height:100%;border-radius:4px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.sec-h{font-family:var(--font-d);font-weight:800;font-size:20px;margin-bottom:5px}
.divider{height:1px;background:var(--border);margin:20px 0}
.flex{display:flex}
.ic{align-items:center}
.jb{justify-content:space-between}
.gap2{gap:8px}
.gap3{gap:12px}
.mb2{margin-bottom:8px}
.mb3{margin-bottom:14px}
.mb4{margin-bottom:18px}
.mb5{margin-bottom:24px}
.faint{color:var(--text2)}
.fainter{color:var(--text3)}
.bold{font-weight:700}
.xbold{font-weight:800}
.xs{font-size:11px}
.dept-label{font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:var(--text3);padding:12px 8px 5px}
.status-online{color:var(--green);font-size:10.5px;font-weight:700}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-thumb{background:var(--surface3);border-radius:10px}
@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
.skeleton{background:linear-gradient(90deg,var(--surface2) 25%,var(--surface3) 50%,var(--surface2) 75%);background-size:200% 100%;animation:shimmer 1.4s infinite;border-radius:8px}
`;
