// Shared ticker tape — used on every page
const tickerData = [
  {c:'BTC', p:'٦٧٬٢١٠', ch:'+١٫٨٪', up:true},
  {c:'ETH', p:'٣٬٤٨٥', ch:'+٠٫٩٪', up:true},
  {c:'SOL', p:'١٨٩٫٤٠', ch:'+٥٫٢٪', up:true},
  {c:'INJ', p:'٢٤٫١٥', ch:'+٣٫١٪', up:true},
  {c:'ARB', p:'١٫٠٢', ch:'-١٫٤٪', up:false},
  {c:'DOGE', p:'٠٫١٦٨', ch:'-٠٫٦٪', up:false},
  {c:'TIA', p:'٨٫٧٧', ch:'+٦٫٤٪', up:true},
  {c:'OP', p:'٢٫٣٣', ch:'-٢٫١٪', up:false},
  {c:'AVAX', p:'٤١٫٩٠', ch:'+١٫١٪', up:true},
  {c:'SUI', p:'١٫٤٧', ch:'+٤٫٠٪', up:true},
];
function buildTicker(){
  const track = document.getElementById('tickerTrack');
  if(!track) return;
  const set = tickerData.map(t => `<span class="ticker-item ${t.up?'up':'down'}"><b>${t.c}</b>${t.p}<span>${t.ch}</span></span>`).join('');
  track.innerHTML = set + set;
}
document.addEventListener('DOMContentLoaded', buildTicker);
