document.addEventListener('DOMContentLoaded',()=>{
const $=id=>document.getElementById(id), MAX=100, COST=30;
const words=[
['JAVASCRIPT','Lenguaje de programación para la web'],['COLOMBIA','País de América del Sur'],['CHOCÓ','Departamento colombiano con gran biodiversidad'],['COMPUTADOR','Dispositivo electrónico para procesar información'],['MUSICA','Arte que combina sonidos y ritmo'],['PLANETA','Cuerpo celeste que gira alrededor de una estrella'],['TECLADO','Periférico para escribir en el computador'],['INTERNET','Red mundial de dispositivos conectados'],['ESCUELA','Lugar donde se aprende y estudia'],['AMISTAD','Relación de cariño y confianza'],['ELEFANTE','Animal terrestre de gran tamaño'],['GUITARRA','Instrumento musical de cuerdas'],['VOLCAN','Montaña que puede expulsar lava'],['BIBLIOTECA','Lugar donde se guardan y consultan libros'],['MARIPOSA','Insecto con alas coloridas'],['UNIVERSO','Todo lo que existe en el espacio'],['ENERGIA','Capacidad para realizar un trabajo'],['DEPORTES','Actividades físicas con reglas'],['NATURALEZA','Conjunto de seres y elementos naturales'],['PROGRAMAR','Escribir instrucciones para una computadora'],['ESTRELLA','Astro que emite luz propia'],['COCODRILO','Reptil grande que vive cerca del agua'],['AVENTURA','Experiencia emocionante o inesperada'],['CIENCIA','Conocimiento obtenido mediante observación'],['FUTBOL','Deporte que se juega con un balón'],['CASCADA','Caída de agua desde cierta altura'],['CEREBRO','Órgano que dirige el sistema nervioso'],['BICICLETA','Vehículo de dos ruedas con pedales'],['PIRAMIDE','Construcción con base y caras triangulares'],['AEROPUERTO','Lugar donde llegan y salen aviones'],['CUADERNO','Conjunto de hojas para escribir'],['ELETRICIDAD','Energía que alimenta muchos aparatos'],['PLANIFICAR','Organizar pasos para lograr una meta'],['HORIZONTE','Línea aparente donde se unen cielo y tierra'],['TORTUGA','Reptil protegido por un caparazón'],['FOTOGRAFIA','Imagen capturada con una cámara'],['RELAMPAGO','Destello luminoso durante una tormenta'],['MONTAÑA','Gran elevación natural del terreno'],['COMETA','Objeto espacial de hielo y polvo'],['ORQUIDEA','Planta conocida por sus flores'],['CULTURA','Costumbres y expresiones de una sociedad'],
['AGUILA','Ave rapaz de vista muy aguda'],
['BALLENA','Mamífero enorme que vive en el mar'],
['BOSQUE','Terreno poblado de árboles'],
['CAMISETA','Prenda de vestir para la parte superior'],
['DICCIONARIO','Libro que explica el significado de palabras'],
['ESCALERA','Estructura que permite subir o bajar'],
['FRUTAS','Alimentos naturales que crecen en plantas'],
['GALLINA','Ave doméstica que pone huevos'],
['HELICOPTERO','Aeronave que vuela con aspas giratorias'],
['IGUANA','Reptil de cuerpo alargado'],
['JIRAFA','Animal africano de cuello muy largo'],
['KOALA','Marsupial que vive en Australia'],
['LINTERNA','Objeto portátil que produce luz'],
['MANZANA','Fruta redonda que puede ser roja o verde'],
['NUBE','Conjunto visible de gotas de agua en el cielo'],
['ÑAME','Tubérculo comestible usado en la cocina'],
['OSO','Mamífero grande de cuerpo robusto'],
['PANTALLA','Superficie donde se muestran imágenes'],
['QUESO','Alimento elaborado principalmente con leche'],
['ROBOT','Máquina que puede realizar tareas automáticamente'],
['SOMBRILLA','Objeto que protege del sol o de la lluvia'],
['TAMBOR','Instrumento musical de percusión'],
['UÑAS','Láminas duras que cubren las puntas de los dedos'],
['VAMPIRO','Personaje fantástico de historias de terror'],
['WIFI','Tecnología para conectarse a una red sin cables'],
['XILOFONO','Instrumento musical con láminas que se golpean'],
['YOGUR','Alimento lácteo fermentado'],
['ZAPATOS','Prendas que protegen los pies'],
['ABANICO','Objeto que mueve aire al agitarlo'],
['BRUJULA','Instrumento que ayuda a encontrar direcciones'],
['CANGREJO','Animal marino con pinzas'],
['DRAGON','Criatura fantástica presente en muchas leyendas'],
['ESPEJO','Superficie que refleja imágenes'],
['FERROCARRIL','Sistema de transporte que usa trenes'],
['GIGANTE','Ser de tamaño extraordinariamente grande'],
['HORMIGA','Insecto pequeño que vive en colonias'],
['ISLA','Porción de tierra rodeada de agua'],
['JARDIN','Espacio donde se cultivan plantas y flores'],
['KIWI','Fruta de pulpa verde y pequeñas semillas'],
['LUNA','Satélite natural de la Tierra'],
['MAPA','Representación de un territorio'],
['NARANJA','Fruta cítrica de color anaranjado'],
['OLIMPIADAS','Competencias deportivas internacionales'],
['PULPO','Animal marino con ocho brazos'],
['QUIMICA','Ciencia que estudia la materia y sus cambios'],
['RIO','Corriente natural de agua'],
['SATELITE','Objeto que orbita alrededor de un planeta'],
['TRIANGULO','Figura geométrica de tres lados'],
['URANIO','Elemento químico usado como combustible nuclear'],
['VIAJE','Desplazamiento hacia otro lugar'],
['WEB','Conjunto de páginas accesibles por internet'],
['YEGUA','Hembra adulta del caballo'],
['ZORRO','Mamífero conocido por su hocico puntiagudo'],
['ACORDEON','Instrumento musical de fuelle'],
['BANDERA','Tela con colores o símbolos que representa algo'],
['CASCABEL','Pequeño objeto que suena al agitarse'],
['DESTINO','Lugar al que se dirige alguien'],
['ESMERALDA','Piedra preciosa de color verde'],
['FANTASIA','Género de historias con elementos imaginarios'],
['GLOBO','Objeto inflable que puede flotar'],
['HIELO','Agua en estado sólido'],
['INVIERNO','Estación más fría del año en muchas regiones'],
['JUGUETE','Objeto creado para jugar'],
['LAGUNA','Depósito natural de agua, menor que un lago'],
['MURCIELAGO','Mamífero capaz de volar'],
['NEVADO','Montaña cuya cima está cubierta de nieve'],
['OBSERVATORIO','Lugar equipado para estudiar el cielo'],
['PRIMAVERA','Estación en la que muchas plantas florecen'],
['QUEBRADA','Arroyo o corriente pequeña de agua'],
['RESPLANDOR','Brillo intenso que emite o refleja luz'],
['SEMILLA','Parte de una planta que puede originar otra'],
['TORMENTA','Fenómeno con lluvia, viento y a veces truenos'],
['UTOPIA','Sociedad ideal imaginada'],
['VELOCIDAD','Rapidez con que algo se desplaza'],
['WAFLE','Preparación dulce cocida en una plancha especial'],
['YATE','Embarcación de recreo'],
['ZANAHORIA','Raíz comestible generalmente de color naranja'],
['ACUARIO','Recipiente donde se mantienen animales acuáticos'],
['BATERIA','Instrumento musical formado por tambores y platillos'],
['CARAMELO','Dulce elaborado con azúcar'],
['DIAMANTE','Piedra preciosa muy dura'],
['ECLIPSE','Fenómeno en que un astro oculta parcial o totalmente otro'],
['FARO','Torre luminosa que guía a embarcaciones'],
['GEOGRAFIA','Ciencia que estudia la superficie terrestre'],
['HISTORIA','Estudio de los acontecimientos del pasado'],
['IMPRESORA','Máquina que pasa documentos a papel'],
['LABERINTO','Conjunto de caminos donde es fácil perderse'],
['MICROSCOPIO','Instrumento para observar objetos muy pequeños'],
['NAVEGADOR','Programa usado para visitar páginas web'],
['OXIGENO','Gas necesario para la respiración de muchas formas de vida'],
['PARAGUAS','Objeto que protege de la lluvia'],
['RADIO','Medio para transmitir sonidos a distancia'],
['TERMOMETRO','Instrumento que mide la temperatura'],
['UNIFORME','Vestimenta igual para integrantes de un grupo'],
['VIDRIO','Material transparente usado en ventanas y recipientes'],
['WHISKY','Palabra usada en juegos de letras'],
['YODO','Elemento químico utilizado en algunas soluciones antisépticas'],
['ZODIACO','Franja celeste dividida en doce signos tradicionales']];
const alphabet='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
const defaults={level:1,score:0,wins:0,streak:0,bestScore:0,bestLevel:1,totalWins:0,bestStreak:0,completed:[],usedWords:[],customWords:[],theme:'purple',difficulty:'progressive',sound:true};
let state={...defaults};try{state={...state,...JSON.parse(localStorage.getItem('ahorcadoNeonState')||'{}')}}catch(e){}if(!Array.isArray(state.usedWords))state.usedWords=[];
let answer='',hint='',guessed=new Set(),errors=0,finished=false,customRound=false,roundPool=[],deferredInstall=null,audio;
const els={level:$('level'),score:$('score'),wins:$('wins'),streak:$('streak'),roundBadge:$('roundBadge'),errorCount:$('errorCount'),livesBar:$('livesBar'),livesMessage:$('livesMessage'),hint:$('hint'),wordDisplay:$('wordDisplay'),wordLength:$('wordLength'),keyboard:$('keyboard'),messageBox:$('messageBox'),messageIcon:$('messageIcon'),messageText:$('messageText'),resultModal:$('resultModal'),resultEmoji:$('resultEmoji'),resultTitle:$('resultTitle'),resultDescription:$('resultDescription'),resultWord:$('resultWord'),resultPoints:$('resultPoints'),continueButton:$('continueButton')};
function save(){try{localStorage.setItem('ahorcadoNeonState',JSON.stringify(state))}catch(e){}updateStats();updateRecords();renderCustom();renderLevels()}
function updateStats(){els.level.textContent=state.level;els.score.textContent=state.score;els.wins.textContent=state.wins;els.streak.textContent=state.streak;els.roundBadge.textContent='NIVEL '+state.level+' / '+MAX}
function updateRecords(){ $('bestScore').textContent=state.bestScore;$('bestLevel').textContent=state.bestLevel;$('totalWins').textContent=state.totalWins;$('bestStreak').textContent=state.bestStreak}
function norm(s){return s.toLocaleUpperCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-ZÑ]/g,'')}
function setMessage(text,type=''){els.messageText.textContent=text;els.messageBox.className='message '+type}
function tone(freq=500){if(!state.sound)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();const o=audio.createOscillator(),g=audio.createGain();o.connect(g);g.connect(audio.destination);o.frequency.value=freq;g.gain.setValueAtTime(.06,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.13);o.start();o.stop(audio.currentTime+.13)}catch(e){}}
function startRound(){finished=false;customRound=false;errors=0;guessed=new Set();roundPool=[...words,...state.customWords];let candidates=roundPool.filter(w=>state.difficulty==='easy'?w[0].length<=8:state.difficulty==='medium'?w[0].length>=5:w[0].length>=4);if(state.difficulty==='progressive')candidates=roundPool.filter(w=>w[0].length>=Math.min(4,Math.ceil(state.level/10)+3));let unused=candidates.filter(w=>!state.usedWords.includes(norm(w[0])));if(!unused.length)unused=roundPool.filter(w=>!state.usedWords.includes(norm(w[0])));if(!unused.length){state.usedWords=[];unused=candidates.length?candidates:roundPool;setMessage('¡Ya jugaste todas las palabras! Comenzamos una nueva ronda sin repetir hasta agotar la lista.','success')}const entry=unused[Math.floor(Math.random()*unused.length)];answer=norm(entry[0]);if(!state.usedWords.includes(answer))state.usedWords.push(answer);try{localStorage.setItem('ahorcadoNeonState',JSON.stringify(state))}catch(e){}hint=entry[1];els.hint.textContent=hint;els.continueButton.textContent='Continuar →';hideResult();renderWord();renderKeyboard();draw();updateButtons();setMessage('Elige una letra para comenzar.');updateStats()}
function renderWord(){els.wordDisplay.replaceChildren();[...answer].forEach(c=>{const s=document.createElement('span');s.className='slot'+(guessed.has(c)?' revealed':'');s.textContent=guessed.has(c)?c:' ';els.wordDisplay.appendChild(s)});els.wordLength.textContent=answer.length+' LETRAS'}
function renderKeyboard(){els.keyboard.replaceChildren();alphabet.forEach(c=>{const b=document.createElement('button');b.type='button';b.className='key';b.textContent=c;b.disabled=guessed.has(c)||finished;b.classList.toggle('correct',guessed.has(c)&&answer.includes(c));b.classList.toggle('wrong',guessed.has(c)&&!answer.includes(c));b.addEventListener('click',()=>guess(c));els.keyboard.appendChild(b)})}
function draw(){document.querySelectorAll('.person>*').forEach((p,i)=>p.style.opacity=i<errors?'1':'0');els.errorCount.textContent=errors+' / 6';els.livesBar.replaceChildren();for(let i=0;i<6;i++){const s=document.createElement('span');s.className='life'+(i<errors?' lost':'');els.livesBar.appendChild(s)}els.livesMessage.textContent=errors===0?'¡Tienes 6 oportunidades!':errors>=4?'¡Cuidado! Te quedan '+(6-errors)+' oportunidades.':'Te quedan '+(6-errors)+' oportunidades.'}
function guess(c){if(finished||guessed.has(c))return;guessed.add(c);if(answer.includes(c)){tone(720);setMessage('¡Correcto! La letra '+c+' está en la palabra.','success');if([...answer].every(x=>guessed.has(x))){renderWord();renderKeyboard();draw();finish(true);return}}else{errors++;tone(230);setMessage('La letra '+c+' no está en la palabra.','error')}renderWord();renderKeyboard();draw();updateButtons();if(errors>=6)finish(false)}
function updateButtons(){$('hintButton').disabled=finished||state.score<COST||[...answer].every(c=>guessed.has(c));$('restartButton').disabled=false}
function showResult(title,desc,emoji,points=''){els.resultTitle.textContent=title;els.resultDescription.textContent=desc;els.resultEmoji.textContent=emoji;els.resultWord.textContent=answer;els.resultPoints.textContent=points;els.resultModal.hidden=false}
function hideResult(){els.resultModal.hidden=true}
function finish(won){if(finished)return;finished=true;renderKeyboard();updateButtons();if(won){const earned=Math.max(10,100-errors*10);state.score+=earned;state.wins++;state.totalWins++;state.streak++;state.bestStreak=Math.max(state.bestStreak,state.streak);state.bestScore=Math.max(state.bestScore,state.score);state.completed=[...new Set([...state.completed,state.level])];if(state.level<MAX){state.level++;state.bestLevel=Math.max(state.bestLevel,state.level);save();tone(880);showResult('¡NIVEL COMPLETADO!','¡Descubriste la palabra! El siguiente desafío es el nivel '+state.level+'.','🎉','+'+earned+' puntos');els.continueButton.textContent='Jugar nivel '+state.level+' →'}else{state.level=MAX;save();showResult('¡ERES EL CAMPEÓN!','¡Completaste los 100 niveles!','🏆','+'+earned+' puntos')}}else{state.streak=0;save();showResult('¡SE ACABARON LOS INTENTOS!','La palabra era '+answer+'. Puedes intentarlo otra vez.','😅','¡Sigue practicando!');els.continueButton.textContent='Reintentar nivel ↻'}save()}
function reveal(){if(finished)return;if(state.score<COST){setMessage('Necesitas 30 puntos para revelar una letra.','error');return}const hidden=[...new Set([...answer].filter(c=>!guessed.has(c)))];if(!hidden.length)return;state.score-=COST;const c=hidden[Math.floor(Math.random()*hidden.length)];guessed.add(c);tone(650);renderWord();renderKeyboard();draw();save();if([...answer].every(x=>guessed.has(x)))finish(true);else setMessage('Pista: revelamos la letra '+c+'.','success');updateButtons()}
function showView(name){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+name));document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.view===name));if(name==='levels')renderLevels();if(name==='records')updateRecords();if(name==='settings')syncSettings()}
function renderLevels(){const grid=$('levelGrid');if(!grid)return;grid.replaceChildren();for(let i=1;i<=MAX;i++){const b=document.createElement('button');b.className='level-button';b.textContent=i;if(state.completed.includes(i))b.classList.add('completed');else if(i===state.level)b.classList.add('current');b.disabled=i>state.level&&!state.completed.includes(i);b.addEventListener('click',()=>{state.level=i;save();startRound();showView('game');window.scrollTo({top:0,behavior:'smooth'})});grid.appendChild(b)}$('levelProgress').style.width=state.completed.length+'%';$('levelProgressText').textContent=state.completed.length+' de 100 niveles completados'}
function renderCustom(){const box=$('customWordsList');if(!box)return;box.replaceChildren();$('customCount').textContent=state.customWords.length;$('clearCustomButton').disabled=!state.customWords.length;if(!state.customWords.length){box.textContent='Todavía no has agregado palabras.';box.className='custom-list muted';return}box.className='custom-list';state.customWords.forEach(entry=>{const item=document.createElement('div');item.className='custom-word';const info=document.createElement('div'),strong=document.createElement('strong'),small=document.createElement('small');strong.textContent=entry[0];small.textContent=entry[1];info.append(strong,small);const play=document.createElement('button');play.className='btn secondary';play.textContent='Jugar';play.addEventListener('click',()=>{answer=norm(entry[0]);hint=entry[1];customRound=true;errors=0;guessed=new Set();finished=false;$('hint').textContent=hint;hideResult();renderWord();renderKeyboard();draw();updateButtons();setMessage('Palabra personalizada: ¡a jugar!');showView('game')});const del=document.createElement('button');del.className='text-btn';del.textContent='Eliminar';del.addEventListener('click',()=>{state.customWords=state.customWords.filter(w=>w[0]!==entry[0]);save()});const actions=document.createElement('div');actions.append(play,del);item.append(info,actions);box.appendChild(item)})}
function syncSettings(){document.body.dataset.theme=state.theme;$('themeSelect').value=state.theme;$('difficultySelect').value=state.difficulty;$('soundSelect').checked=state.sound;$('soundToggle').textContent=state.sound?'🔊':'🔇'}
$('hintButton').addEventListener('click',reveal);$('restartButton').addEventListener('click',startRound);els.continueButton.addEventListener('click',()=>{hideResult();if(state.level>MAX)state.level=MAX;startRound()});document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
$('customForm').addEventListener('submit',e=>{e.preventDefault();const w=norm($('customWord').value),h=$('customHint').value.trim();if(w.length<2||!h){setMessage('Escribe una palabra y una pista válida.','error');return}if([...words,...state.customWords].some(x=>norm(x[0])===w)){setMessage('Esa palabra ya está en la lista.','error');return}state.customWords.push([w,h]);$('customForm').reset();save();setMessage('Palabra personalizada guardada.','success')});
$('clearCustomButton').addEventListener('click',()=>{if(confirm('¿Eliminar todas tus palabras personalizadas?')){state.customWords=[];save()}});
$('themeSelect').addEventListener('change',()=>{state.theme=$('themeSelect').value;syncSettings();save()});$('difficultySelect').addEventListener('change',()=>{state.difficulty=$('difficultySelect').value;save();startRound()});$('soundSelect').addEventListener('change',()=>{state.sound=$('soundSelect').checked;syncSettings();save()});$('soundToggle').addEventListener('click',()=>{state.sound=!state.sound;syncSettings();save();tone(700)});
$('resetRecordsButton').addEventListener('click',()=>{if(confirm('Esto borrará el progreso, los récords y las palabras personalizadas. ¿Continuar?')){state={...defaults,completed:[],usedWords:[],customWords:[]};save();syncSettings();startRound()}});
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;if(e.key==='Escape')hideResult();if(/^[a-zñ]$/i.test(e.key))guess(norm(e.key));if(e.key==='Enter'&&finished)els.continueButton.click()});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstall=e;$('installButton').hidden=false});async function install(){if(deferredInstall){deferredInstall.prompt();await deferredInstall.userChoice;deferredInstall=null;$('installButton').hidden=true}else alert('Abre el menú del navegador y elige Instalar aplicación o Añadir a pantalla de inicio.')}$('installButton').addEventListener('click',install);$('installButtonSettings').addEventListener('click',install);window.addEventListener('appinstalled',()=>$('installButton').hidden=true);
if('serviceWorker'in navigator&&(location.protocol==='https:'||location.hostname==='localhost'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
syncSettings();updateStats();updateRecords();renderCustom();renderLevels();startRound();
});