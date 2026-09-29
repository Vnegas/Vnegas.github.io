(() => {
const HPC_DIAGRAM_EXEC = `<svg viewBox="0 0 700 125" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Serial, optimized serial, static Pthreads, dynamic Pthreads" font-family="IBM Plex Mono, monospace">
<g fill="none" stroke="var(--line)"><rect x="5" y="20" width="140" height="55" rx="4"/><rect x="185" y="20" width="140" height="55" rx="4"/><rect x="365" y="20" width="140" height="55" rx="4"/><rect x="545" y="20" width="150" height="55" rx="4"/></g>
<g fill="var(--text)" font-size="12" text-anchor="middle"><text x="75" y="52">Serial</text><text x="255" y="44">Serial</text><text x="255" y="62">optimized</text><text x="435" y="44">Pthreads</text><text x="435" y="62">static</text><text x="620" y="44">Pthreads</text><text x="620" y="62">dynamic</text></g>
<g fill="var(--teal)" font-size="22"><text x="153" y="55">→</text><text x="333" y="55">→</text><text x="513" y="55">→</text></g>
<text x="5" y="110" font-size="11" fill="var(--text-dim)">input006.txt · 8 physical cores · 1 / 4 / 8 / 16 / 32 / 64 threads</text></svg>`;
const HPC_DIAGRAM_SERVER = `<svg viewBox="0 0 640 130" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace">
  <g font-size="11.5" fill="var(--text)">
    <rect x="0" y="20" width="130" height="42" rx="4" fill="none" stroke="var(--line)"/>
    <text x="65" y="45" text-anchor="middle">TCP Clients</text>
    <rect x="180" y="20" width="130" height="42" rx="4" fill="none" stroke="var(--teal)"/>
    <text x="245" y="45" text-anchor="middle" fill="var(--teal)">Acceptor Thread</text>
    <rect x="360" y="20" width="130" height="42" rx="4" fill="none" stroke="var(--line)"/>
    <text x="425" y="40" text-anchor="middle">Queue</text>
    <text x="425" y="54" text-anchor="middle" font-size="10" fill="var(--text-dim)">(shared buffer)</text>
    <rect x="540" y="20" width="100" height="42" rx="4" fill="none" stroke="var(--amber)"/>
    <text x="590" y="40" text-anchor="middle" fill="var(--amber)">Worker</text>
    <text x="590" y="54" text-anchor="middle" font-size="10" fill="var(--amber)">Pool</text>
  </g>
  <path d="M130 41 L180 41" stroke="var(--text-dim)" marker-end="url(#arrowS)"/>
  <path d="M310 41 L360 41" stroke="var(--text-dim)" marker-end="url(#arrowS)"/>
  <path d="M490 41 L540 41" stroke="var(--text-dim)" marker-end="url(#arrowS)"/>
  <defs><marker id="arrowS" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-dim)"/></marker></defs>
  <text x="0" y="100" font-size="11" fill="var(--text-dim)">MVC + Singleton core manages shared server state across worker threads.</text>
</svg>`;
const MOBILE_DIAGRAM_FRIJOL = `<svg viewBox="0 0 640 110" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace">
  <g font-size="11" fill="var(--text)">
    <rect x="0" y="10" width="140" height="40" rx="4" fill="none" stroke="var(--line)"/>
    <text x="70" y="34" text-anchor="middle">CSV (arvenses)</text>
    <rect x="190" y="10" width="130" height="40" rx="4" fill="none" stroke="var(--teal)"/>
    <text x="255" y="34" text-anchor="middle" fill="var(--teal)">Python Script</text>
    <rect x="370" y="10" width="110" height="40" rx="4" fill="none" stroke="var(--line)"/>
    <text x="425" y="34" text-anchor="middle">Local DB</text>
    <rect x="530" y="10" width="110" height="40" rx="4" fill="none" stroke="var(--amber)"/>
    <text x="585" y="30" text-anchor="middle" fill="var(--amber)">Android App</text>
    <text x="585" y="43" text-anchor="middle" font-size="9.5" fill="var(--amber)">(beta)</text>
  </g>
  <path d="M140 30 L190 30" stroke="var(--text-dim)" marker-end="url(#arrowF)"/>
  <path d="M320 30 L370 30" stroke="var(--text-dim)" marker-end="url(#arrowF)"/>
  <path d="M480 30 L530 30" stroke="var(--text-dim)" marker-end="url(#arrowF)"/>
  <defs><marker id="arrowF" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-dim)"/></marker></defs>
  <text x="0" y="85" font-size="10.5" fill="var(--text-dim)">Fields: name, images, family, taxonomy, description.</text>
</svg>`;
const MOBILE_DIAGRAM_CALIB = `<svg viewBox="0 0 640 100" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace">
  <g font-size="11" fill="var(--text)">
    <rect x="0" y="15" width="160" height="42" rx="4" fill="none" stroke="var(--line)"/>
    <text x="80" y="40" text-anchor="middle">Choose method</text>
    <rect x="230" y="15" width="160" height="42" rx="4" fill="none" stroke="var(--teal)"/>
    <text x="310" y="40" text-anchor="middle" fill="var(--teal)">Enter field data</text>
    <rect x="460" y="15" width="180" height="42" rx="4" fill="none" stroke="var(--amber)"/>
    <text x="550" y="40" text-anchor="middle" fill="var(--amber)">Result</text>
  </g>
  <path d="M160 36 L230 36" stroke="var(--text-dim)" marker-end="url(#arrowC)"/>
  <path d="M390 36 L460 36" stroke="var(--text-dim)" marker-end="url(#arrowC)"/>
  <defs><marker id="arrowC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-dim)"/></marker></defs>
  <text x="0" y="82" font-size="10.5" fill="var(--text-dim)">Quick calculation tells the user how to calibrate the equipment.</text>
</svg>`;


window.Portfolio.diagrams = {HPC_DIAGRAM_EXEC, HPC_DIAGRAM_SERVER, MOBILE_DIAGRAM_FRIJOL, MOBILE_DIAGRAM_CALIB};
})();
