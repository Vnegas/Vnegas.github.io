(() => {
const {HPC_DIAGRAM_EXEC, HPC_DIAGRAM_SERVER, MOBILE_DIAGRAM_FRIJOL, MOBILE_DIAGRAM_CALIB} = window.Portfolio.diagrams;
const FEATURED = {
  hpc: {
    url:"https://github.com/Vnegas/High-Performance-Computing-Distributed-Processing",
    tag:{en:"parallel & distributed computing · c/c++", es:"computación paralela y distribuida · c/c++"},
    name:{en:"High-Performance Computing &amp; Distributed Processing", es:"High-Performance Computing &amp; Distributed Processing"},
    role:{en:"A collection of parallel &amp; distributed computing projects: password cracking, a concurrent server, and a heat simulation", es:"Una colección de proyectos de computación paralela y distribuida: cracking de contraseñas, un servidor concurrente, y una simulación de calor"},
    stack:["C","C++","Pthreads","OpenMP","MPI","TCP Sockets"],
    metrics:[
      {num:"5", lbl:{en:"implementations: serial brute force, serial optimized, pthreads, openMP and MPI", es:"implementaciones: fuerza bruta serial, serial optimizado, pthreads, openMP and MPI"}},
      {num:"2", lbl:{en:"compute endpoints served — concurrent web server", es:"endpoints de cómputo servidos — servidor web concurrente"}},
      {num:"3.72×", lbl:{en:"speedup — job003, local 16-core machine", es:"speedup — job003, máquina local de 16 núcleos"}}
    ],
    body:{
      en:`<p>This repository groups three independent parallel/distributed computing projects. Each is detailed below with its own problem, implementation, and resolution.</p>
      <h3>1. Parallel ZIP password search</h3>
      <p>Optimized a brute-force ZIP password search by opening each archive only once, then moving from static Pthreads work blocks to a dynamic producer-consumer design. Profiling with KCachegrind guided the changes.</p><p>On <code>input006.txt</code>, dynamic Pthreads achieved the best runtime; speedup peaked at 8 threads on an 8-core machine.</p>
      <div class="diagram-box">${HPC_DIAGRAM_EXEC}<div class="dcap">Execution model progression — ZIP password search</div></div>
      <h3>2. Concurrent web server</h3>
      <p>A multithreaded C++ web server built directly on top of TCP sockets. Structured as MVC with a Singleton-managed core: an acceptor thread enqueues incoming connections into a shared queue, and a pool of worker threads dequeues and processes them concurrently. It serves two compute-bound endpoints: Goldbach's conjecture verification and prime factorization via a Sieve of Eratosthenes, chosen because they're CPU-heavy enough to make concurrency actually matter for throughput.</p>
      <div class="diagram-box">${HPC_DIAGRAM_SERVER}<div class="dcap">Producer-consumer pipeline — concurrent web server</div></div>
      <h3>3. Heat diffusion simulation</h3>
      <p>Parallelized grid-temperature updates with OpenMP after Callgrind identified <code>calculate_temp</code> as the main computation hotspot.</p><p>Using <code>job003</code> on a 16-core machine, the serial baseline took <strong>461.916 s</strong>. OpenMP achieved <strong>3.18× speedup with 8 workers</strong> and <strong>3.72× with 16</strong>.</p>`,
      es:`<p>Este repositorio agrupa tres proyectos independientes de computación paralela/distribuida. Cada uno se detalla abajo con su propio problema, implementación y resultado.</p>
      <h3>1. Búsqueda paralela de contraseñas ZIP</h3>
      <p>Búsqueda de contraseñas ZIP por fuerza bruta optimizada abriendo cada archivo una sola vez y pasando de bloques estáticos con Pthreads a un diseño dinámico productor-consumidor. El profiling con KCachegrind guio los cambios.</p><p>Con <code>input006.txt</code>, Pthreads dinámico logró el mejor tiempo; el speedup alcanzó su máximo con 8 hilos en una máquina de 8 núcleos.</p>
      <div class="diagram-box">${HPC_DIAGRAM_EXEC}<div class="dcap">Progresión de modelos de ejecución — búsqueda de contraseñas ZIP</div></div>
      <h3>2. Servidor web concurrente</h3>
      <p>Un servidor web multihilo en C++ construido directamente sobre sockets TCP. Estructurado como MVC con un núcleo gestionado por Singleton: un hilo aceptador encola las conexiones entrantes en una cola compartida, y un pool de hilos trabajadores las desencola y procesa de forma concurrente. Sirve dos endpoints de cómputo intensivo: verificación de la conjetura de Goldbach y factorización prima vía Criba de Eratóstenes, elegidos porque exigen suficiente CPU para que la concurrencia importe de verdad en el throughput.</p>
      <div class="diagram-box">${HPC_DIAGRAM_SERVER}<div class="dcap">Pipeline productor-consumidor — servidor web concurrente</div></div>
      <h3>3. Simulación de difusión de calor</h3>
      <p>Actualización de temperaturas de una matriz paralelizada con OpenMP, después de identificar <code>calculate_temp</code> como el principal punto de cómputo mediante Callgrind.</p><p>Con <code>job003</code> en una máquina de 16 núcleos, la versión serial tardó <strong>461.916 s</strong>. OpenMP logró un <strong>speedup de 3.18× con 8 trabajadores</strong> y de <strong>3.72× con 16</strong>.</p>`
    },
    diagram: ""
  },
  nachos: {
    url:"https://github.com/Vnegas/Operating-Systems",
    tag:{en:"operating systems &amp; networking · c", es:"sistemas operativos y redes · c"},
    name:{en:"Operating Systems &amp; Networking", es:"Sistemas operativos y redes"},
    role:{en:"Syscalls, virtual memory, synchronization &amp; a socket-based client/server on top of NachOS", es:"Syscalls, memoria virtual, sincronización y un cliente/servidor con sockets sobre NachOS"},
    stack:["C","Makefile","NachOS","TCP/UDP","Sockets"],
    metrics:[
      {num:"2", lbl:{en:"kernel subsystems extended (syscalls, VM)", es:"subsistemas del kernel extendidos (syscalls, VM)"}},
      {num:"TLB", lbl:{en:"+ swap memory implemented", es:"+ memoria swap implementada"}},
      {num:"3", lbl:{en:"client interfaces — console, NachOS &amp; web", es:"interfaces de cliente — consola, NachOS y web"}}
    ],
    body:{
      en:`<p>NachOS is a teaching operating system stripped down to its essentials — extending it means working directly with registers, memory, the kernel/user boundary, and — in this case — the network stack.</p>
      <h3>Syscalls</h3>
      <p>Implemented system calls by managing CPU registers and memory directly, handling the trap from user mode into the kernel and back.</p>
      <h3>Virtual memory</h3>
      <p>Added the ability to run programs under virtual memory, using swap space and a TLB (translation lookaside buffer) to manage address translation beyond physical RAM limits.</p>
      <h3>Synchronization</h3>
      <p>Solved two classic concurrency problems inside NachOS: a roundabout simulation using threads and mailboxes, and the dining philosophers problem.</p>
      <h3>Networking (sockets, TCP/UDP)</h3>
      <p>Built a client-intermediary-server LAN architecture on top of NachOS, using sockets to handle requests over TCP/UDP. The server reads available games from .json files and lists them for the user; once a game is picked, it returns the list of pieces needed to build the corresponding Lego figure. A client can connect and make requests three ways — from a terminal, from NachOS itself, or from a web browser — all going through the same intermediary server. See the implementation in the <a href="https://github.com/Vnegas/Networks-OS" target="_blank" rel="noopener">Networks-OS repository ↗</a>.</p>`,
      es:`<p>NachOS es un sistema operativo educativo reducido a lo esencial — extenderlo implica trabajar directamente con registros, memoria, la frontera kernel/usuario y, en este caso, la pila de red.</p>
      <h3>Syscalls</h3>
      <p>Se implementaron llamadas al sistema manejando directamente los registros del CPU y la memoria, gestionando el salto de modo usuario a kernel y de vuelta.</p>
      <h3>Memoria virtual</h3>
      <p>Se agregó la capacidad de ejecutar programas bajo memoria virtual, usando espacio de swap y una TLB (translation lookaside buffer) para gestionar la traducción de direcciones más allá de los límites de la RAM física.</p>
      <h3>Sincronización</h3>
      <p>Se resolvieron dos problemas clásicos de concurrencia dentro de NachOS: una simulación de rotonda con hilos y buzones, y el problema de los filósofos comensales.</p>
      <h3>Redes (sockets, TCP/UDP)</h3>
      <p>Se construyó una arquitectura LAN cliente-intermediario-servidor sobre NachOS, usando sockets para manejar peticiones por TCP/UDP. El servidor lee los juegos disponibles desde archivos .json y los lista al usuario; al elegir un juego, devuelve la lista de piezas necesarias para construir la figura de Lego correspondiente. Un cliente puede conectarse y hacer peticiones de tres formas — desde terminal, desde el propio NachOS, o desde un navegador web — todas pasando por el mismo servidor intermediario. Ver la implementación en el <a href="https://github.com/Vnegas/Networks-OS" target="_blank" rel="noopener">repositorio Networks-OS ↗</a>.</p>`
    },
    diagram: `<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace">
      <text x="10" y="20" font-size="11" fill="var(--text-dim)">SYSCALL &amp; MEMORY FLOW</text>
      <g font-size="11.5" fill="var(--text)">
        <rect x="0" y="45" width="140" height="42" rx="4" fill="none" stroke="var(--line)"/>
        <text x="70" y="70" text-anchor="middle">User Program</text>
        <rect x="185" y="45" width="140" height="42" rx="4" fill="none" stroke="var(--teal)"/>
        <text x="255" y="70" text-anchor="middle" fill="var(--teal)">Syscall Trap</text>
        <rect x="370" y="45" width="140" height="42" rx="4" fill="none" stroke="var(--line)"/>
        <text x="440" y="70" text-anchor="middle">Kernel Handler</text>
        <rect x="185" y="130" width="140" height="42" rx="4" fill="none" stroke="var(--line)"/>
        <text x="255" y="155" text-anchor="middle">TLB Miss</text>
        <rect x="370" y="130" width="140" height="42" rx="4" fill="none" stroke="var(--amber)"/>
        <text x="440" y="155" text-anchor="middle" fill="var(--amber)">Swap / Page Table</text>
      </g>
      <path d="M140 66 L185 66" stroke="var(--text-dim)" marker-end="url(#a2)"/>
      <path d="M325 66 L370 66" stroke="var(--text-dim)" marker-end="url(#a2)"/>
      <path d="M255 87 L255 130" stroke="var(--text-dim)" marker-end="url(#a2)"/>
      <path d="M325 151 L370 151" stroke="var(--text-dim)" marker-end="url(#a2)"/>
      <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--text-dim)"/></marker></defs>
    </svg>`
  },
  mobile: {
    url:"https://github.com/Vnegas/Mobile-Apps",
    tag:{en:"mobile · android &amp; ios", es:"mobile · android e ios"},
    name:"Mobile Apps",
    role:{en:"Two apps built for the UCR Fabio Baudrit Agricultural Experiment Station", es:"Dos apps construidas para la Estación Experimental Agrícola Fabio Baudrit de la UCR"},
    stack:["Java","Android Studio","Swift","SwiftUI","Xcode"],
    metrics:[
      {num:"2", lbl:{en:"platforms — Android &amp; iOS (Calibración, published)", es:"plataformas — Android e iOS (Calibración, publicada)"}},
      {num:"2", lbl:{en:"apps built for the UCR agricultural station", es:"apps construidas para la estación agrícola de la UCR"}},
      {num:"Beta", lbl:{en:"FrijolArvenses — functional beta; development on hold", es:"FrijolArvenses — beta funcional; desarrollo pausado"}}
    ],
    body:{
      en:`<p>Two mobile apps built for the UCR Fabio Baudrit Agricultural Experiment Station.</p>
      <h3>Calibración (Android + iOS)</h3>
      <p>Covers different calibration methods for herbicides and fungicides, dosing itself has no method variants. Based on the type and method the user picks, the app asks for the field data that method needs, runs the calculation, and tells the user how to adjust the equipment. Built in Java/Android Studio for Android, SwiftUI/Xcode for iOS. Published on both stores: <a href="https://play.google.com/store/apps/details?id=ucr.eefbm.calibracion&amp;hl=en" target="_blank" rel="noopener">Google Play ↗</a> · <a href="https://apps.apple.com/us/app/calibracion/id6745221710" target="_blank" rel="noopener">App Store ↗</a></p>
      <section class="app-gallery" aria-label="Inside Calibración"><h4>Inside Calibración</h4><p>Android screenshots. Select an image to view it at full size in a new tab.</p><div class="app-gallery-grid"><figure><a href="assets/calibracion/menu.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Main menu"><img src="assets/calibracion/menu.webp" alt="Calibración — Main menu: Access to herbicide, fungicide and insecticide calibration, and dosing." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Main menu</strong><span>Access to herbicide, fungicide and insecticide calibration, and dosing.</span></figcaption></figure><figure><a href="assets/calibracion/metodos.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Method selection"><img src="assets/calibracion/metodos.webp" alt="Calibración — Method selection: Three herbicide calibration methods based on the available field data." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Method selection</strong><span>Three herbicide calibration methods based on the available field data.</span></figcaption></figure><figure><a href="assets/calibracion/area.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Area calculation"><img src="assets/calibracion/area.webp" alt="Calibración — Area calculation: Entered field measurements and the resulting volume for the specified area." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Area calculation</strong><span>Entered field measurements and the resulting volume for the specified area.</span></figcaption></figure><figure><a href="assets/calibracion/dosificacion.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Dosing"><img src="assets/calibracion/dosificacion.webp" alt="Calibración — Dosing: Form for calculating commercial product and water requirements." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Dosing</strong><span>Form for calculating commercial product and water requirements.</span></figcaption></figure></div></section>
      <div class="diagram-box">${MOBILE_DIAGRAM_CALIB}<div class="dcap">Method-selection flow — Calibración</div></div>
      <h3>FrijolArvenses (Android — beta)</h3>
      <p>Catalogs weeds ("arvenses") associated with bean crops — name, images, family, taxonomy and description — filtered by the official weed taxonomy for beans. The dataset was generated from a CSV file into a local database using a Python script, then consumed by the Android app for lookup and image browsing. The app is functional in beta, with placeholder content and test records. Development is currently on hold; it is not presented as a finished production release.</p>
      <section class="app-gallery frijol-gallery" aria-label="Inside FrijolArvenses"><h4>Inside FrijolArvenses</h4><p>Android beta screenshots with test records. Select an image to view it at full size.</p><div class="app-gallery-grid"><figure><a href="assets/frijol/catalogo.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Catalog and search"><img src="assets/frijol/catalogo.webp" alt="FrijolArvenses — Catalog and search: Catalog browsing with test records." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Catalog and search</strong><span>Catalog browsing with test records.</span></figcaption></figure><figure><a href="assets/frijol/atributos.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Attribute details"><img src="assets/frijol/atributos.webp" alt="FrijolArvenses — Attribute details: Category, family, scientific name and genus for a test record." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Attribute details</strong><span>Category, family, scientific name and genus for a test record.</span></figcaption></figure><figure><a href="assets/frijol/imagenes.webp" target="_blank" rel="noopener" aria-label="Open screenshot: Image gallery"><img src="assets/frijol/imagenes.webp" alt="FrijolArvenses — Image gallery: Multiple photographs associated with a record." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Image gallery</strong><span>Multiple photographs associated with a record.</span></figcaption></figure></div></section>
      <div class="diagram-box">${MOBILE_DIAGRAM_FRIJOL}<div class="dcap">Data pipeline — FrijolArvenses</div></div>`,
      es:`<p>Dos apps móviles construidas para la Estación Experimental Agrícola Fabio Baudrit de la UCR.</p>
      <h3>Calibración (Android + iOS)</h3>
      <p>Cubre distintos métodos de calibración para herbicidas y fungicidas, la dosificación en sí no tiene variantes de método. Según el tipo y el método que elija el usuario, la app pide los datos de campo que ese método necesita, hace el cálculo, y le dice al usuario cómo ajustar el equipo para calibrarlo.Construida en Java/Android Studio para Android, SwiftUI/Xcode para iOS. Publicada en ambas tiendas: <a href="https://play.google.com/store/apps/details?id=ucr.eefbm.calibracion&amp;hl=en" target="_blank" rel="noopener">Google Play ↗</a> · <a href="https://apps.apple.com/us/app/calibracion/id6745221710" target="_blank" rel="noopener">App Store ↗</a></p>
      <section class="app-gallery" aria-label="Calibración en uso"><h4>Calibración en uso</h4><p>Capturas de Android. Seleccioná una imagen para verla a tamaño completo en otra pestaña.</p><div class="app-gallery-grid"><figure><a href="assets/calibracion/menu.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Menú principal"><img src="assets/calibracion/menu.webp" alt="Calibración — Menú principal: Acceso a calibración de herbicidas, fungicidas e insecticidas y dosificación." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Menú principal</strong><span>Acceso a calibración de herbicidas, fungicidas e insecticidas y dosificación.</span></figcaption></figure><figure><a href="assets/calibracion/metodos.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Selección de método"><img src="assets/calibracion/metodos.webp" alt="Calibración — Selección de método: Tres métodos de calibración de herbicidas según los datos disponibles." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Selección de método</strong><span>Tres métodos de calibración de herbicidas según los datos disponibles.</span></figcaption></figure><figure><a href="assets/calibracion/area.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Cálculo por área"><img src="assets/calibracion/area.webp" alt="Calibración — Cálculo por área: Datos de campo ingresados y resultado del volumen para el área indicada." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Cálculo por área</strong><span>Datos de campo ingresados y resultado del volumen para el área indicada.</span></figcaption></figure><figure><a href="assets/calibracion/dosificacion.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Dosificación"><img src="assets/calibracion/dosificacion.webp" alt="Calibración — Dosificación: Formulario para calcular producto comercial y agua necesaria." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Dosificación</strong><span>Formulario para calcular producto comercial y agua necesaria.</span></figcaption></figure></div></section>
      <div class="diagram-box">${MOBILE_DIAGRAM_CALIB}<div class="dcap">Flujo de selección de método — Calibración</div></div>
      <h3>FrijolArvenses (Android — beta)</h3>
      <p>Cataloga arvenses asociadas al cultivo de frijol — nombre, imágenes, familia, taxonomía y descripción — filtradas según la taxonomía oficial de arvenses del frijol. El dataset se generó desde un archivo CSV hacia una base de datos local usando un script de Python, y luego la app Android lo consume para consulta y visualización de imágenes. La app es funcional y está en beta, con contenido provisional y registros de prueba. Su desarrollo está pausado; no se presenta como una versión final de producción.</p>
      <section class="app-gallery frijol-gallery" aria-label="FrijolArvenses en uso"><h4>FrijolArvenses en uso</h4><p>Capturas de la beta de Android con registros de prueba. Seleccioná una imagen para verla a tamaño completo.</p><div class="app-gallery-grid"><figure><a href="assets/frijol/catalogo.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Catálogo y búsqueda"><img src="assets/frijol/catalogo.webp" alt="FrijolArvenses — Catálogo y búsqueda: Navegación por el catálogo con registros de prueba." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Catálogo y búsqueda</strong><span>Navegación por el catálogo con registros de prueba.</span></figcaption></figure><figure><a href="assets/frijol/atributos.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Ficha de atributos"><img src="assets/frijol/atributos.webp" alt="FrijolArvenses — Ficha de atributos: Categoría, familia, nombre científico y género de un registro de prueba." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Ficha de atributos</strong><span>Categoría, familia, nombre científico y género de un registro de prueba.</span></figcaption></figure><figure><a href="assets/frijol/imagenes.webp" target="_blank" rel="noopener" aria-label="Abrir captura: Galería de imágenes"><img src="assets/frijol/imagenes.webp" alt="FrijolArvenses — Galería de imágenes: Varias fotografías asociadas a una ficha." width="1080" height="2400" loading="lazy" decoding="async"></a><figcaption><strong>Galería de imágenes</strong><span>Varias fotografías asociadas a una ficha.</span></figcaption></figure></div></section>
      <div class="diagram-box">${MOBILE_DIAGRAM_FRIJOL}<div class="dcap">Pipeline de datos — FrijolArvenses</div></div>`
    },
    diagram: ""
  }
};

/* ---------- More projects (compact, link out) ---------- */
const MORE = [
  { url:"https://github.com/Vnegas/SQL-Queries", tag:"databases",
    name:"SQL, NoSQL &amp; Spatial SQL",
    d:{en:"Joins, recursive CTEs, window functions, NoSQL and spatial queries with Oracle APEX.", es:"Joins, CTEs recursivas, funciones de ventana, NoSQL y consultas espaciales con Oracle APEX."} },
  { url:"https://github.com/Vnegas/Computability-Complexity", tag:"algorithms",
    name:"Sudoku Solver",
    d:{en:"Brute force vs. heuristic vs. genetic algorithm, compared across three difficulty levels.", es:"Fuerza bruta vs. heurística vs. algoritmo genético, comparados en tres niveles de dificultad."} },
  { url:"https://github.com/Vnegas/Assembly", tag:"low-level",
    name:"Assembly Projects",
    d:{en:"Two interactive projects in NASM, integrated with C++ and Qt.", es:"Dos proyectos interactivos en NASM, integrados con C++ y Qt."} },
  { url:"supermarket.html", local:true, tag:"simulation",
    name:"Supermarket Simulation",
    d:{en:"Interactive Unity supermarket simulation. Adjust queue timing and checkout capacity. Launch demo", es:"Simulación interactiva de supermercado en Unity. Ajustá los tiempos y la cantidad de cajas. Abrir demo"} }
];


window.Portfolio.projects = { featured: FEATURED, more: MORE };
})();
