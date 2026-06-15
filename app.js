/* ============================================================
   Mundial 2026 - Fixture y Resultados
   ============================================================ */

// ------------------------------------------------------------
// DATA
// ------------------------------------------------------------
const groupsData = [
  {id:'A',teams:[{name:'México',flag:'🇲🇽',pts:3,pj:1,g:1,e:0,p:0,gf:2,gc:0,stars:0},{name:'Corea del Sur',flag:'🇰🇷',pts:3,pj:1,g:1,e:0,p:0,gf:2,gc:1,stars:0},{name:'Rep. Checa',flag:'🇨🇿',pts:0,pj:1,g:0,e:0,p:1,gf:1,gc:2,stars:0},{name:'Sudáfrica',flag:'🇿🇦',pts:0,pj:1,g:0,e:0,p:1,gf:0,gc:2,stars:0}]},
  {id:'B',teams:[{name:'Canadá',flag:'🇨🇦',pts:1,pj:1,g:0,e:1,p:0,gf:1,gc:1,stars:0},{name:'Suiza',flag:'🇨🇭',pts:1,pj:1,g:0,e:1,p:0,gf:1,gc:1,stars:0},{name:'Qatar',flag:'🇶🇦',pts:1,pj:1,g:0,e:1,p:0,gf:1,gc:1,stars:0},{name:'Bosnia y Herz.',flag:'🇧🇦',pts:1,pj:1,g:0,e:1,p:0,gf:1,gc:1,stars:0}]},
  {id:'C',teams:[{name:'Escocia',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',pts:3,pj:1,g:1,e:0,p:0,gf:1,gc:0,stars:0},{name:'Brasil',flag:'🇧🇷',pts:1,pj:1,g:0,e:1,p:0,gf:1,gc:1,stars:5},{name:'Marruecos',flag:'🇲🇦',pts:1,pj:1,g:0,e:1,p:0,gf:1,gc:1,stars:0},{name:'Haití',flag:'🇭🇹',pts:0,pj:1,g:0,e:0,p:1,gf:0,gc:1,stars:0}]},
  {id:'D',teams:[{name:'EE. UU.',flag:'🇺🇸',pts:3,pj:1,g:1,e:0,p:0,gf:4,gc:1,stars:0},{name:'Australia',flag:'🇦🇺',pts:3,pj:1,g:1,e:0,p:0,gf:2,gc:0,stars:0},{name:'Paraguay',flag:'🇵🇾',pts:0,pj:1,g:0,e:0,p:1,gf:1,gc:4,stars:0},{name:'Turquía',flag:'🇹🇷',pts:0,pj:1,g:0,e:0,p:1,gf:0,gc:2,stars:0}]},
  {id:'E',teams:[{name:'Alemania',flag:'🇩🇪',pts:3,pj:1,g:1,e:0,p:0,gf:7,gc:1,stars:4},{name:'Costa de Marfil',flag:'🇨🇮',pts:3,pj:1,g:1,e:0,p:0,gf:1,gc:0,stars:0},{name:'Ecuador',flag:'🇪🇨',pts:0,pj:1,g:0,e:0,p:1,gf:0,gc:1,stars:0},{name:'Curazao',flag:'🇨🇼',pts:0,pj:1,g:0,e:0,p:1,gf:1,gc:7,stars:0}]},
  {id:'F',teams:[{name:'Suecia',flag:'🇸🇪',pts:3,pj:1,g:1,e:0,p:0,gf:5,gc:1,stars:0},{name:'Países Bajos',flag:'🇳🇱',pts:1,pj:1,g:0,e:1,p:0,gf:2,gc:2,stars:0},{name:'Japón',flag:'🇯🇵',pts:1,pj:1,g:0,e:1,p:0,gf:2,gc:2,stars:0},{name:'Túnez',flag:'🇹🇳',pts:0,pj:1,g:0,e:0,p:1,gf:1,gc:5,stars:0}]},
  {id:'G',teams:[{name:'Bélgica',flag:'🇧🇪',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Egipto',flag:'🇪🇬',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Irán',flag:'🇮🇷',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Nueva Zelanda',flag:'🇳🇿',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0}]},
  {id:'H',teams:[{name:'España',flag:'🇪🇸',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:1},{name:'Cabo Verde',flag:'🇨🇻',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Arabia Saudita',flag:'🇸🇦',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Uruguay',flag:'🇺🇾',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:2}]},
  {id:'I',teams:[{name:'Francia',flag:'🇫🇷',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:2},{name:'Senegal',flag:'🇸🇳',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Irak',flag:'🇮🇶',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Noruega',flag:'🇳🇴',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0}]},
  {id:'J',teams:[{name:'Argentina',flag:'🇦🇷',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:3},{name:'Argelia',flag:'🇩🇿',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Austria',flag:'🇦🇹',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Jordania',flag:'🇯🇴',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0}]},
  {id:'K',teams:[{name:'Portugal',flag:'🇵🇹',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'RD Congo',flag:'🇨🇩',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Uzbekistán',flag:'🇺🇿',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Colombia',flag:'🇨🇴',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0}]},
  {id:'L',teams:[{name:'Inglaterra',flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:1},{name:'Croacia',flag:'🇭🇷',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Ghana',flag:'🇬🇭',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0},{name:'Panamá',flag:'🇵🇦',pts:0,pj:0,g:0,e:0,p:0,gf:0,gc:0,stars:0}]},
];

const matchesData = [
  {group:'A',date:'11 Jun',time:'16:00',local:'México',localFlag:'🇲🇽',visitor:'Sudáfrica',visitorFlag:'🇿🇦',result:'2–0',status:'final',venue:'Estadio Azteca, CDMX'},
  {group:'A',date:'11 Jun',time:'19:00',local:'Corea del Sur',localFlag:'🇰🇷',visitor:'Rep. Checa',visitorFlag:'🇨🇿',result:'2–1',status:'final',venue:'Estadio Akron, Zapopan'},
  {group:'A',date:'18 Jun',time:'16:00',local:'Rep. Checa',localFlag:'🇨🇿',visitor:'Sudáfrica',visitorFlag:'🇿🇦',result:'–',status:'pending',venue:'Estadio Azteca, CDMX'},
  {group:'A',date:'18 Jun',time:'19:00',local:'México',localFlag:'🇲🇽',visitor:'Corea del Sur',visitorFlag:'🇰🇷',result:'–',status:'pending',venue:'Estadio Akron, Zapopan'},
  {group:'A',date:'24 Jun',time:'16:00',local:'Rep. Checa',localFlag:'🇨🇿',visitor:'México',visitorFlag:'🇲🇽',result:'–',status:'pending',venue:'Estadio Azteca, CDMX'},
  {group:'A',date:'24 Jun',time:'16:00',local:'Sudáfrica',localFlag:'🇿🇦',visitor:'Corea del Sur',visitorFlag:'🇰🇷',result:'–',status:'pending',venue:'Estadio Akron, Zapopan'},
  {group:'B',date:'12 Jun',time:'16:00',local:'Canadá',localFlag:'🇨🇦',visitor:'Bosnia y Herz.',visitorFlag:'🇧🇦',result:'1–1',status:'final',venue:'BMO Field, Toronto'},
  {group:'B',date:'13 Jun',time:'16:00',local:'Qatar',localFlag:'🇶🇦',visitor:'Suiza',visitorFlag:'🇨🇭',result:'1–1',status:'final',venue:"Levi's Stadium, Santa Clara"},
  {group:'B',date:'18 Jun',time:'13:00',local:'Suiza',localFlag:'🇨🇭',visitor:'Bosnia y Herz.',visitorFlag:'🇧🇦',result:'–',status:'pending',venue:'BMO Field, Toronto'},
  {group:'B',date:'18 Jun',time:'19:00',local:'Canadá',localFlag:'🇨🇦',visitor:'Qatar',visitorFlag:'🇶🇦',result:'–',status:'pending',venue:'BC Place, Vancouver'},
  {group:'B',date:'24 Jun',time:'13:00',local:'Suiza',localFlag:'🇨🇭',visitor:'Canadá',visitorFlag:'🇨🇦',result:'–',status:'pending',venue:'BC Place, Vancouver'},
  {group:'B',date:'24 Jun',time:'13:00',local:'Bosnia y Herz.',localFlag:'🇧🇦',visitor:'Qatar',visitorFlag:'🇶🇦',result:'–',status:'pending',venue:'BMO Field, Toronto'},
  {group:'C',date:'13 Jun',time:'19:00',local:'Brasil',localFlag:'🇧🇷',visitor:'Marruecos',visitorFlag:'🇲🇦',result:'1–1',status:'final',venue:'MetLife Stadium, East Rutherford'},
  {group:'C',date:'13 Jun',time:'13:00',local:'Haití',localFlag:'🇭🇹',visitor:'Escocia',visitorFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',result:'0–1',status:'final',venue:'Gillette Stadium, Foxborough'},
  {group:'C',date:'19 Jun',time:'16:00',local:'Escocia',localFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',visitor:'Marruecos',visitorFlag:'🇲🇦',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'C',date:'19 Jun',time:'19:00',local:'Brasil',localFlag:'🇧🇷',visitor:'Haití',visitorFlag:'🇭🇹',result:'–',status:'pending',venue:'MetLife Stadium, East Rutherford'},
  {group:'C',date:'24 Jun',time:'19:00',local:'Escocia',localFlag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',visitor:'Brasil',visitorFlag:'🇧🇷',result:'–',status:'pending',venue:'MetLife Stadium, East Rutherford'},
  {group:'C',date:'24 Jun',time:'19:00',local:'Marruecos',localFlag:'🇲🇦',visitor:'Haití',visitorFlag:'🇭🇹',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'D',date:'12 Jun',time:'19:00',local:'EE. UU.',localFlag:'🇺🇸',visitor:'Paraguay',visitorFlag:'🇵🇾',result:'4–1',status:'final',venue:'SoFi Stadium, Inglewood'},
  {group:'D',date:'13 Jun',time:'19:00',local:'Australia',localFlag:'🇦🇺',visitor:'Turquía',visitorFlag:'🇹🇷',result:'2–0',status:'final',venue:'BC Place, Vancouver'},
  {group:'D',date:'19 Jun',time:'13:00',local:'EE. UU.',localFlag:'🇺🇸',visitor:'Australia',visitorFlag:'🇦🇺',result:'–',status:'pending',venue:'SoFi Stadium, Inglewood'},
  {group:'D',date:'19 Jun',time:'13:00',local:'Turquía',localFlag:'🇹🇷',visitor:'Paraguay',visitorFlag:'🇵🇾',result:'–',status:'pending',venue:'BC Place, Vancouver'},
  {group:'D',date:'25 Jun',time:'16:00',local:'Turquía',localFlag:'🇹🇷',visitor:'EE. UU.',visitorFlag:'🇺🇸',result:'–',status:'pending',venue:'SoFi Stadium, Inglewood'},
  {group:'D',date:'25 Jun',time:'16:00',local:'Paraguay',localFlag:'🇵🇾',visitor:'Australia',visitorFlag:'🇦🇺',result:'–',status:'pending',venue:'BC Place, Vancouver'},
  {group:'E',date:'14 Jun',time:'13:00',local:'Alemania',localFlag:'🇩🇪',visitor:'Curazao',visitorFlag:'🇨🇼',result:'7–1',status:'final',venue:'NRG Stadium, Houston'},
  {group:'E',date:'14 Jun',time:'16:00',local:'Costa de Marfil',localFlag:'🇨🇮',visitor:'Ecuador',visitorFlag:'🇪🇨',result:'1–0',status:'final',venue:'Lincoln Financial Field, Philadelphia'},
  {group:'E',date:'20 Jun',time:'13:00',local:'Alemania',localFlag:'🇩🇪',visitor:'Costa de Marfil',visitorFlag:'🇨🇮',result:'–',status:'pending',venue:'NRG Stadium, Houston'},
  {group:'E',date:'20 Jun',time:'16:00',local:'Ecuador',localFlag:'🇪🇨',visitor:'Curazao',visitorFlag:'🇨🇼',result:'–',status:'pending',venue:'Estadio BBVA, Guadalupe'},
  {group:'E',date:'25 Jun',time:'13:00',local:'Ecuador',localFlag:'🇪🇨',visitor:'Alemania',visitorFlag:'🇩🇪',result:'–',status:'pending',venue:'NRG Stadium, Houston'},
  {group:'E',date:'25 Jun',time:'13:00',local:'Curazao',localFlag:'🇨🇼',visitor:'Costa de Marfil',visitorFlag:'🇨🇮',result:'–',status:'pending',venue:'Estadio BBVA, Guadalupe'},
  {group:'F',date:'14 Jun',time:'19:00',local:'Países Bajos',localFlag:'🇳🇱',visitor:'Japón',visitorFlag:'🇯🇵',result:'2–2',status:'final',venue:'AT&T Stadium, Arlington'},
  {group:'F',date:'14 Jun',time:'19:00',local:'Suecia',localFlag:'🇸🇪',visitor:'Túnez',visitorFlag:'🇹🇳',result:'5–1',status:'final',venue:'Estadio BBVA, Guadalupe'},
  {group:'F',date:'20 Jun',time:'19:00',local:'Países Bajos',localFlag:'🇳🇱',visitor:'Suecia',visitorFlag:'🇸🇪',result:'–',status:'pending',venue:'AT&T Stadium, Arlington'},
  {group:'F',date:'20 Jun',time:'19:00',local:'Túnez',localFlag:'🇹🇳',visitor:'Japón',visitorFlag:'🇯🇵',result:'–',status:'pending',venue:'Estadio Universitario, San Nicolás'},
  {group:'F',date:'25 Jun',time:'19:00',local:'Japón',localFlag:'🇯🇵',visitor:'Suecia',visitorFlag:'🇸🇪',result:'–',status:'pending',venue:'Estadio Universitario, San Nicolás'},
  {group:'F',date:'25 Jun',time:'19:00',local:'Túnez',localFlag:'🇹🇳',visitor:'Países Bajos',visitorFlag:'🇳🇱',result:'–',status:'pending',venue:'AT&T Stadium, Arlington'},
  {group:'G',date:'15 Jun',time:'16:00',local:'Bélgica',localFlag:'🇧🇪',visitor:'Egipto',visitorFlag:'🇪🇬',result:'–',status:'pending',venue:'Rose Bowl, Pasadena'},
  {group:'G',date:'15 Jun',time:'19:00',local:'Irán',localFlag:'🇮🇷',visitor:'Nueva Zelanda',visitorFlag:'🇳🇿',result:'–',status:'pending',venue:'Estadio Universitario, San Nicolás'},
  {group:'G',date:'21 Jun',time:'16:00',local:'Bélgica',localFlag:'🇧🇪',visitor:'Irán',visitorFlag:'🇮🇷',result:'–',status:'pending',venue:'Rose Bowl, Pasadena'},
  {group:'G',date:'21 Jun',time:'19:00',local:'Nueva Zelanda',localFlag:'🇳🇿',visitor:'Egipto',visitorFlag:'🇪🇬',result:'–',status:'pending',venue:'Estadio Universitario, San Nicolás'},
  {group:'G',date:'26 Jun',time:'16:00',local:'Egipto',localFlag:'🇪🇬',visitor:'Irán',visitorFlag:'🇮🇷',result:'–',status:'pending',venue:'Estadio Universitario, San Nicolás'},
  {group:'G',date:'26 Jun',time:'16:00',local:'Nueva Zelanda',localFlag:'🇳🇿',visitor:'Bélgica',visitorFlag:'🇧🇪',result:'–',status:'pending',venue:'Rose Bowl, Pasadena'},
  {group:'H',date:'15 Jun',time:'13:00',local:'España',localFlag:'🇪🇸',visitor:'Cabo Verde',visitorFlag:'🇨🇻',result:'–',status:'pending',venue:'Estadio BBVA, Guadalupe'},
  {group:'H',date:'15 Jun',time:'13:00',local:'Arabia Saudita',localFlag:'🇸🇦',visitor:'Uruguay',visitorFlag:'🇺🇾',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'H',date:'21 Jun',time:'13:00',local:'España',localFlag:'🇪🇸',visitor:'Arabia Saudita',visitorFlag:'🇸🇦',result:'–',status:'pending',venue:'Estadio BBVA, Guadalupe'},
  {group:'H',date:'21 Jun',time:'13:00',local:'Uruguay',localFlag:'🇺🇾',visitor:'Cabo Verde',visitorFlag:'🇨🇻',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'H',date:'26 Jun',time:'13:00',local:'Cabo Verde',localFlag:'🇨🇻',visitor:'Arabia Saudita',visitorFlag:'🇸🇦',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'H',date:'26 Jun',time:'13:00',local:'Uruguay',localFlag:'🇺🇾',visitor:'España',visitorFlag:'🇪🇸',result:'–',status:'pending',venue:'Estadio BBVA, Guadalupe'},
  {group:'I',date:'16 Jun',time:'13:00',local:'Francia',localFlag:'🇫🇷',visitor:'Senegal',visitorFlag:'🇸🇳',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'I',date:'16 Jun',time:'16:00',local:'Irak',localFlag:'🇮🇶',visitor:'Noruega',visitorFlag:'🇳🇴',result:'–',status:'pending',venue:'Lincoln Financial Field, Philadelphia'},
  {group:'I',date:'22 Jun',time:'13:00',local:'Francia',localFlag:'🇫🇷',visitor:'Irak',visitorFlag:'🇮🇶',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'I',date:'22 Jun',time:'16:00',local:'Noruega',localFlag:'🇳🇴',visitor:'Senegal',visitorFlag:'🇸🇳',result:'–',status:'pending',venue:'Lincoln Financial Field, Philadelphia'},
  {group:'I',date:'26 Jun',time:'19:00',local:'Noruega',localFlag:'🇳🇴',visitor:'Francia',visitorFlag:'🇫🇷',result:'–',status:'pending',venue:'Mercedes-Benz Stadium, Atlanta'},
  {group:'I',date:'26 Jun',time:'19:00',local:'Senegal',localFlag:'🇸🇳',visitor:'Irak',visitorFlag:'🇮🇶',result:'–',status:'pending',venue:'Lincoln Financial Field, Philadelphia'},
  {group:'J',date:'16 Jun',time:'19:00',local:'Argentina',localFlag:'🇦🇷',visitor:'Argelia',visitorFlag:'🇩🇿',result:'–',status:'pending',venue:'MetLife Stadium, East Rutherford'},
  {group:'J',date:'16 Jun',time:'19:00',local:'Austria',localFlag:'🇦🇹',visitor:'Jordania',visitorFlag:'🇯🇴',result:'–',status:'pending',venue:'Gillette Stadium, Foxborough'},
  {group:'J',date:'22 Jun',time:'19:00',local:'Argentina',localFlag:'🇦🇷',visitor:'Austria',visitorFlag:'🇦🇹',result:'–',status:'pending',venue:'MetLife Stadium, East Rutherford'},
  {group:'J',date:'22 Jun',time:'19:00',local:'Jordania',localFlag:'🇯🇴',visitor:'Argelia',visitorFlag:'🇩🇿',result:'–',status:'pending',venue:'Gillette Stadium, Foxborough'},
  {group:'J',date:'27 Jun',time:'16:00',local:'Argelia',localFlag:'🇩🇿',visitor:'Austria',visitorFlag:'🇦🇹',result:'–',status:'pending',venue:'Gillette Stadium, Foxborough'},
  {group:'J',date:'27 Jun',time:'16:00',local:'Jordania',localFlag:'🇯🇴',visitor:'Argentina',visitorFlag:'🇦🇷',result:'–',status:'pending',venue:'MetLife Stadium, East Rutherford'},
  {group:'K',date:'17 Jun',time:'13:00',local:'Portugal',localFlag:'🇵🇹',visitor:'RD Congo',visitorFlag:'🇨🇩',result:'–',status:'pending',venue:'AT&T Stadium, Arlington'},
  {group:'K',date:'17 Jun',time:'16:00',local:'Uzbekistán',localFlag:'🇺🇿',visitor:'Colombia',visitorFlag:'🇨🇴',result:'–',status:'pending',venue:'NRG Stadium, Houston'},
  {group:'K',date:'23 Jun',time:'13:00',local:'Portugal',localFlag:'🇵🇹',visitor:'Uzbekistán',visitorFlag:'🇺🇿',result:'–',status:'pending',venue:'AT&T Stadium, Arlington'},
  {group:'K',date:'23 Jun',time:'16:00',local:'Colombia',localFlag:'🇨🇴',visitor:'RD Congo',visitorFlag:'🇨🇩',result:'–',status:'pending',venue:'NRG Stadium, Houston'},
  {group:'K',date:'27 Jun',time:'13:00',local:'Colombia',localFlag:'🇨🇴',visitor:'Portugal',visitorFlag:'🇵🇹',result:'–',status:'pending',venue:'NRG Stadium, Houston'},
  {group:'K',date:'27 Jun',time:'13:00',local:'RD Congo',localFlag:'🇨🇩',visitor:'Uzbekistán',visitorFlag:'🇺🇿',result:'–',status:'pending',venue:'AT&T Stadium, Arlington'},
  {group:'L',date:'17 Jun',time:'19:00',local:'Inglaterra',localFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',visitor:'Croacia',visitorFlag:'🇭🇷',result:'–',status:'pending',venue:'SoFi Stadium, Inglewood'},
  {group:'L',date:'17 Jun',time:'19:00',local:'Ghana',localFlag:'🇬🇭',visitor:'Panamá',visitorFlag:'🇵🇦',result:'–',status:'pending',venue:"Levi's Stadium, Santa Clara"},
  {group:'L',date:'23 Jun',time:'19:00',local:'Inglaterra',localFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',visitor:'Ghana',visitorFlag:'🇬🇭',result:'–',status:'pending',venue:'SoFi Stadium, Inglewood'},
  {group:'L',date:'23 Jun',time:'19:00',local:'Panamá',localFlag:'🇵🇦',visitor:'Croacia',visitorFlag:'🇭🇷',result:'–',status:'pending',venue:"Levi's Stadium, Santa Clara"},
  {group:'L',date:'27 Jun',time:'19:00',local:'Panamá',localFlag:'🇵🇦',visitor:'Inglaterra',visitorFlag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',result:'–',status:'pending',venue:'SoFi Stadium, Inglewood'},
  {group:'L',date:'27 Jun',time:'19:00',local:'Croacia',localFlag:'🇭🇷',visitor:'Ghana',visitorFlag:'🇬🇭',result:'–',status:'pending',venue:"Levi's Stadium, Santa Clara"},
];

const bracketData = [
  {round:'32avos',matches:[
    ['1° G','–','3° (E/F/H/I/J)'],['1° F','–','3° (B/D/H/I/J)'],['1° E','–','3° (B/C/D/H/I)'],['1° D','–','3° (B/C/E/F/I)'],
    ['2° A','–','2° B'],['1° C','–','3° (A/B/D/E/F)'],['2° C','–','2° D'],['1° H','–','3° (A/C/D/E/F)'],
    ['1° I','–','3° (A/B/C/E/F)'],['1° B','–','3° (A/C/D/E/H)'],['2° L','–','2° K'],['1° J','–','3° (A/B/C/D/E)'],
    ['1° K','–','3° (A/B/C/F/G)'],['2° G','–','2° H'],['1° A','–','3° (C/D/F/G/H)'],['1° L','–','3° (B/D/E/F/G)'],
  ]},
  {round:'Octavos',matches:[['–','–','–'],['–','–','–'],['–','–','–'],['–','–','–'],['–','–','–'],['–','–','–'],['–','–','–'],['–','–','–']]},
  {round:'Cuartos',matches:[['–','–','–'],['–','–','–'],['–','–','–'],['–','–','–']]},
  {round:'Semifinales',matches:[['–','–','–'],['–','–','–']]},
  {round:'Final 🏆',matches:[['–','–','–']]},
];

const newsData = [
  {time:'Hace 2h',category:'Partido',title:'Alemania aplasta 7–1 a Curazao en su debut',summary:'Los alemanes mostraron su poderío ofensivo con una goleada histórica en Houston.',icon:'🇩🇪'},
  {time:'Hace 3h',category:'Partido',title:'Suecia golea 5–1 a Túnez en el Estadio BBVA',summary:'Los suecos arrancan con fuerza en el Grupo F con una victoria contundente.',icon:'🇸🇪'},
  {time:'Hace 4h',category:'Resultado',title:'EE. UU. vence 4–1 a Paraguay en el SoFi',summary:'Christian Pulisic brilló con un doblete para la victoria estadounidense.',icon:'🇺🇸'},
  {time:'Hace 5h',category:'Noticia',title:'México vence 2–0 a Sudáfrica en el Azteca',summary:'La selección mexicana arrancó con el pie derecho en el partido inaugural.',icon:'🇲🇽'},
  {time:'Hace 6h',category:'Noticia',title:'Alemania 7–1: mayor goleada del torneo hasta ahora',summary:'El equipo de Julian Nagelsmann impone récord de goles en el Mundial 2026.',icon:'📊'},
  {time:'Hace 7h',category:'Lesión',title:'Mbappé entrenó con normalidad y estaría disponible',summary:'La estrella francesa se recuperó de una molestia muscular.',icon:'🇫🇷'},
  {time:'Hace 8h',category:'Previa',title:'Argentina debuta mañana ante Argelia en el MetLife',summary:'El campeón del mundo buscará empezar con victoria en el Grupo J.',icon:'🇦🇷'},
  {time:'Hace 9h',category:'Noticia',title:'Brasil empata 1–1 con Marruecos en el MetLife',summary:'La canarinha no pudo superar a los leones del Atlas en su presentación.',icon:'🇧🇷'},
  {time:'Hace 10h',category:'Estadio',title:'España y Uruguay debutan hoy en el Grupo H',summary:'La Roja enfrenta a Cabo Verde y Uruguay a Arabia Saudita.',icon:'🇪🇸'},
  {time:'Hace 11h',category:'Noticia',title:'Canadá y Bosnia empatan 1–1 en Toronto',summary:'El anfitrión canadiense rescató un punto en su debut como local.',icon:'🇨🇦'},
];

const scorersData = [
  {name:'Florian Wirtz',team:'Alemania',flag:'🇩🇪',goals:2,assists:1},{name:'Niclas Füllkrug',team:'Alemania',flag:'🇩🇪',goals:2,assists:0},
  {name:'Christian Pulisic',team:'EE. UU.',flag:'🇺🇸',goals:2,assists:0},{name:'Alexander Isak',team:'Suecia',flag:'🇸🇪',goals:2,assists:1},
  {name:'Jamal Musiala',team:'Alemania',flag:'🇩🇪',goals:1,assists:2},{name:'Son Heung-min',team:'Corea del Sur',flag:'🇰🇷',goals:1,assists:1},
  {name:'Raúl Jiménez',team:'México',flag:'🇲🇽',goals:1,assists:1},{name:'Dejan Kulusevski',team:'Suecia',flag:'🇸🇪',goals:1,assists:2},
  {name:'Cody Gakpo',team:'Países Bajos',flag:'🇳🇱',goals:1,assists:1},{name:'Ritsu Doan',team:'Japón',flag:'🇯🇵',goals:1,assists:0},
];

const teamStatsLeaderboard = [
  {name:'Alemania',flag:'🇩🇪',stat:'Goles',value:7,max:10},{name:'Suecia',flag:'🇸🇪',stat:'Goles',value:5,max:10},
  {name:'EE. UU.',flag:'🇺🇸',stat:'Goles',value:4,max:10},{name:'México',flag:'🇲🇽',stat:'Goles',value:2,max:10},
  {name:'Alemania',flag:'🇩🇪',stat:'Remates',value:22,max:30},{name:'Suecia',flag:'🇸🇪',stat:'Remates',value:18,max:30},
  {name:'Alemania',flag:'🇩🇪',stat:'Posesión',value:68,max:100},{name:'Brasil',flag:'🇧🇷',stat:'Posesión',value:65,max:100},
];

const formData = [
  {name:'Alemania',flag:'🇩🇪',form:['W']},{name:'Suecia',flag:'🇸🇪',form:['W']},{name:'EE. UU.',flag:'🇺🇸',form:['W']},
  {name:'México',flag:'🇲🇽',form:['W']},{name:'Corea del Sur',flag:'🇰🇷',form:['W']},{name:'Australia',flag:'🇦🇺',form:['W']},
  {name:'Costa de Marfil',flag:'🇨🇮',form:['W']},{name:'Escocia',flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',form:['W']},{name:'Canadá',flag:'🇨🇦',form:['D']},
  {name:'Suiza',flag:'🇨🇭',form:['D']},{name:'Qatar',flag:'🇶🇦',form:['D']},{name:'Bosnia y Herz.',flag:'🇧🇦',form:['D']},
  {name:'Brasil',flag:'🇧🇷',form:['D']},{name:'Marruecos',flag:'🇲🇦',form:['D']},{name:'Países Bajos',flag:'🇳🇱',form:['D']},
  {name:'Japón',flag:'🇯🇵',form:['D']},{name:'Paraguay',flag:'🇵🇾',form:['L']},{name:'Turquía',flag:'🇹🇷',form:['L']},
  {name:'Ecuador',flag:'🇪🇨',form:['L']},{name:'Curazao',flag:'🇨🇼',form:['L']},{name:'Túnez',flag:'🇹🇳',form:['L']},
  {name:'Haití',flag:'🇭🇹',form:['L']},
];

const tickerItems = [
  '🏆 ¡Bienvenidos al Mundial 2026!','🇩🇪 Alemania golea 7–1 a Curazao','🇸🇪 Suecia vence 5–1 a Túnez',
  '🇺🇸 EE. UU. gana 4–1 a Paraguay','🇲🇽 México 2–0 Sudáfrica en la inauguración','🇰🇷 Corea del Sur 2–1 Rep. Checa',
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Escocia vence 1–0 a Haití','🇧🇷 Brasil empata 1–1 con Marruecos','🇪🇸 Hoy debuta España vs Cabo Verde',
  '🇦🇷 Mañana juega Argentina vs Argelia',
];

// ------------------------------------------------------------
// STATE
// ------------------------------------------------------------
let activeGroup = 'A';
let activeFilter = 'all';
let activeVenue = 'all';
let compactMode = false;
let chartInstances = {};
let radarCache = null;
let searchIndex = [];
let searchIdx = -1;

const venueList = [...new Set(matchesData.map(m => m.venue))].sort();

// ------------------------------------------------------------
// UTILITIES
// ------------------------------------------------------------
const $ = id => document.getElementById(id);
const createStars = n => n > 0 ? '★'.repeat(n) : '';
const isDarkMode = () => !document.body.classList.contains('light');

function sortTeams(teams) {
  return [...teams].sort((a, b) =>
    b.pts - a.pts ||
    (b.gf - b.gc) - (a.gf - a.gc) ||
    b.gf - a.gf
  );
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// ------------------------------------------------------------
// THEME
// ------------------------------------------------------------
function getTheme() { return localStorage.getItem('wc2026-theme') || 'dark'; }

function setTheme(theme) {
  localStorage.setItem('wc2026-theme', theme);
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  $('themeIcon').textContent = isLight ? '☀️' : '🌙';
  const mobileLabel = $('mobileThemeLabel');
  if (mobileLabel) mobileLabel.textContent = isLight ? 'Claro' : 'Oscuro';
  renderGroups();
  if (Object.keys(chartInstances).length) {
    setTimeout(renderCharts, 100);
  }
}

function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

// ------------------------------------------------------------
// MOBILE MENU
// ------------------------------------------------------------
function openMobileMenu() {
  $('mobileMenu').classList.add('open');
  $('mobileOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  $('mobileMenu').classList.remove('open');
  $('mobileOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function scrollToSection(e, id) {
  e.preventDefault();
  const el = $(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ------------------------------------------------------------
// SEARCH
// ------------------------------------------------------------
function buildSearchIndex() {
  searchIndex = [];
  groupsData.forEach(g => {
    searchIndex.push({ type: 'Grupo', label: `Grupo ${g.id}`, targetId: 'grupos', icon: '🏆', sub: g.teams.map(t => t.name).join(', ') });
    g.teams.forEach(t => {
      searchIndex.push({ type: 'Equipo', label: `${t.flag} ${t.name}`, targetId: 'grupos', icon: '⚽', sub: `Grupo ${g.id} · ${t.pts} pts`, groupId: g.id });
    });
  });
  matchesData.forEach(m => {
    searchIndex.push({ type: 'Partido', label: `${m.localFlag} ${m.local} vs ${m.visitorFlag} ${m.visitor}`, targetId: 'partidos', icon: '⚡', sub: `${m.date} · ${m.venue} · ${m.result || m.time}` });
  });
}

function highlightTerms(text, terms) {
  let html = escapeHtml(text);
  terms.forEach(term => {
    const idx = html.toLowerCase().indexOf(term);
    if (idx >= 0) {
      html = html.slice(0, idx) + `<span class="search-highlight">${html.slice(idx, idx + term.length)}</span>` + html.slice(idx + term.length);
    }
  });
  return html;
}

function handleSearch(q) {
  const resultsEl = $('searchResults');
  const clearBtn = $('searchClear');
  clearBtn.style.display = q ? 'block' : 'none';
  if (!q.trim()) {
    resultsEl.classList.remove('open');
    resultsEl.innerHTML = '';
    searchIdx = -1;
    return;
  }
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = searchIndex.filter(item =>
    terms.every(t => item.label.toLowerCase().includes(t) || item.sub.toLowerCase().includes(t))
  ).slice(0, 8);

  if (!filtered.length) {
    resultsEl.innerHTML = `<div class="search-item" style="color:var(--text-secondary);font-size:0.8rem;">Sin resultados</div>`;
    resultsEl.classList.add('open');
    searchIdx = -1;
    return;
  }

  searchIdx = -1;
  resultsEl.innerHTML = filtered.map((item, i) => `
    <div class="search-item" data-idx="${i}" data-group="${item.groupId || ''}" data-target="${item.targetId}" onmouseenter="highlightSearchItem(${i})" onclick="handleSearchClick(this)">
      <span>${item.icon}</span>
      <div class="flex-1 min-w-0">
        <div class="text-xs sm:text-sm font-medium" style="color:var(--text-heading);">${highlightTerms(item.label, terms)}</div>
        <div class="text-xs" style="color:var(--text-secondary);">${highlightTerms(item.sub, terms)}</div>
      </div>
      <span class="label">${item.type}</span>
    </div>
  `).join('');
  resultsEl.classList.add('open');
}

function highlightSearchItem(idx) {
  searchIdx = idx;
  const items = $('searchResults').querySelectorAll('.search-item');
  items.forEach((el, i) => el.classList.toggle('active', i === idx));
}

function handleSearchClick(el) {
  const target = el.dataset.target;
  const groupId = el.dataset.group;
  clearSearch();
  if (groupId) {
    compactMode = false;
    activeGroup = groupId;
    renderGroups();
  }
  const section = $(target);
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function searchKeydown(e) {
  const resultsEl = $('searchResults');
  const items = resultsEl.querySelectorAll('.search-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchIdx = Math.min(searchIdx + 1, items.length - 1);
    highlightSearchItem(searchIdx);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchIdx = Math.max(searchIdx - 1, 0);
    highlightSearchItem(searchIdx);
  } else if (e.key === 'Enter' && searchIdx >= 0 && items[searchIdx]) {
    e.preventDefault();
    handleSearchClick(items[searchIdx]);
  } else if (e.key === 'Escape') {
    $('searchInput').blur();
    resultsEl.classList.remove('open');
  }
}

function clearSearch() {
  $('searchInput').value = '';
  $('searchResults').classList.remove('open');
  $('searchClear').style.display = 'none';
  searchIdx = -1;
}

// ------------------------------------------------------------
// RENDER GROUPS
// ------------------------------------------------------------
function groupProgress(group) {
  const totalPj = group.teams.reduce((s, t) => s + t.pj, 0);
  return Math.round(totalPj / (group.teams.length * 3) * 100);
}

function teamPositionClass(i, dark) {
  if (dark) return i === 0 ? 'pos-1' : i === 1 ? 'pos-2' : i === 2 ? 'pos-3' : 'pos-4';
  return i === 0 ? 'position-1' : i === 1 ? 'position-2' : i === 2 ? 'position-3' : 'position-4';
}

function renderCompactGroups(dark) {
  const cards = groupsData.map(g => {
    const sorted = sortTeams(g.teams);
    const pct = groupProgress(g);
    if (dark) {
      return `
        <div class="dark-compact-card">
          <div class="group-header"><span class="label">✦ Grupo ${g.id}</span><span class="pct">${pct}%</span></div>
          <div class="px-3 sm:px-4 py-2">
            ${sorted.map((t, i) => {
              const dg = t.gf - t.gc;
              const dgClass = dg > 0 ? 'text-green-400' : dg < 0 ? 'text-red-400' : 'text-slate-400';
              return `
                <div class="dark-compact-team">
                  <div class="flex items-center gap-1.5">
                    <span class="pos-glow ${teamPositionClass(i, true)}">${i + 1}</span>
                    <span class="flex-1 min-w-0 flex items-center gap-1">
                      <span class="text-xs">${t.flag}</span>
                      <span class="team-name truncate" style="color:var(--text-heading);">${escapeHtml(t.name)}</span>
                    </span>
                    <span class="team-pts">${t.pts}</span>
                    <span class="text-xs ${dgClass} font-semibold">${dg > 0 ? '+' : ''}${dg}</span>
                  </div>
                </div>`;
            }).join('')}
          </div>
          <div class="px-3 sm:px-4 py-1.5"><div class="dark-compact-progress"><div class="fill" style="width:${pct}%"></div></div></div>
        </div>`;
    }
    return `
      <div class="bg-card overflow-hidden">
        <div class="px-3 sm:px-4 py-2.5 border-b flex items-center justify-between" style="border-color:var(--border-color);">
          <span class="text-sm font-bold" style="color:var(--text-heading);">Grupo ${g.id}</span>
          <span class="text-xs" style="color:var(--text-secondary);">${pct}%</span>
        </div>
        <div class="px-3 sm:px-4 py-2">
          ${sorted.map((t, i) => {
            const dg = t.gf - t.gc;
            return `
              <div class="flex items-center gap-1.5 py-1.5 border-b last:border-b-0" style="border-color:var(--border-color);">
                <span class="position-badge ${teamPositionClass(i, false)}" style="width:1.2rem;height:1.2rem;font-size:0.6rem;">${i + 1}</span>
                <span class="flex-1 min-w-0 flex items-center gap-1">
                  <span class="text-xs">${t.flag}</span>
                  <span class="text-xs font-medium truncate" style="color:var(--text-heading);">${escapeHtml(t.name)}</span>
                </span>
                <span class="text-xs font-bold flex-shrink-0" style="color:#60a5fa;">${t.pts}</span>
                <span class="text-xs" style="color:var(--text-secondary);">${dg > 0 ? '+' : ''}${dg}</span>
              </div>`;
          }).join('')}
        </div>
        <div class="px-3 sm:px-4 py-1.5 border-t" style="border-color:var(--border-color);">
          <div class="progress-bar"><div class="progress-bar-fill bg-gradient-to-r from-blue-500 to-blue-400" style="width:${pct}%"></div></div>
        </div>
      </div>`;
  }).join('');
  return `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 animate-fade-in">${cards}</div>`;
}

function renderDetailedGroup(group, dark) {
  const sorted = sortTeams(group.teams);
  const pct = groupProgress(group);

  if (dark) {
    return `
      <div class="dark-detailed-section">
        <div class="section-header flex items-center justify-between">
          <h3>Grupo ${group.id}</h3>
          <div class="text-xs flex items-center gap-2 sm:gap-3" style="color:rgba(148,163,184,0.5);">
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-400"></span> 1°–2°</span>
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full" style="background:rgba(148,163,184,0.3);"></span> 3°</span>
          </div>
        </div>
        <div class="overflow-x-auto px-1">
          <table class="dark-detailed-table w-full">
            <thead>
              <tr><th>#</th><th>Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th></tr>
            </thead>
            <tbody>
              ${sorted.map((t, i) => {
                const dg = t.gf - t.gc;
                const dgClass = dg > 0 ? 'pos' : dg < 0 ? 'neg' : '';
                return `
                  <tr>
                    <td><span class="detail-pos ${teamPositionClass(i, true)}">${i + 1}</span></td>
                    <td class="font-medium" style="color:var(--text-heading);">
                      <span class="team-flag">
                        <span class="flag">${t.flag}</span>
                        <span class="text-xs sm:text-sm">${escapeHtml(t.name)}</span>
                        ${t.stars > 0 ? `<span class="star text-xs">${createStars(t.stars)}</span>` : ''}
                      </span>
                    </td>
                    <td style="color:var(--text-primary);">${t.pj}</td>
                    <td style="color:var(--text-primary);">${t.g}</td>
                    <td style="color:var(--text-primary);">${t.e}</td>
                    <td style="color:var(--text-primary);">${t.p}</td>
                    <td style="color:var(--text-primary);">${t.gf}</td>
                    <td style="color:var(--text-primary);">${t.gc}</td>
                    <td class="detail-dg ${dgClass}">${dg > 0 ? '+' : ''}${dg}</td>
                    <td><span class="detail-pts">${t.pts}</span></td>
                  </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
        <div class="px-4 py-2 border-t" style="border-color:rgba(59,130,246,0.06);">
          <div class="flex items-center justify-between text-xs mb-1" style="color:rgba(148,163,184,0.5);"><span>Progreso del grupo</span><span>${pct}%</span></div>
          <div class="dark-compact-progress"><div class="fill" style="width:${pct}%"></div></div>
        </div>
      </div>`;
  }

  return `
    <div class="bg-card overflow-hidden animate-fade-in">
      <div class="px-4 sm:px-6 py-4 sm:py-5 border-b flex items-center justify-between" style="border-color:var(--border-color);">
        <div>
          <h3 class="text-base sm:text-xl font-bold" style="color:var(--text-heading);">Grupo ${group.id}</h3>
          <p class="text-xs" style="color:var(--text-secondary);margin-top:0.125rem;">${group.teams.length} equipos · 6 partidos</p>
        </div>
        <div class="text-xs flex items-center gap-2 sm:gap-3" style="color:var(--text-secondary);">
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-green-400"></span> 1°–2°</span>
          <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-yellow-500"></span> 3°</span>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="standings-table w-full">
          <thead>
            <tr class="text-xs uppercase tracking-wider" style="color:var(--text-secondary);">
              <th>#</th><th>Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th style="color:var(--text-heading);">Pts</th>
            </tr>
          </thead>
          <tbody>
            ${sorted.map((t, i) => {
              const dg = t.gf - t.gc;
              return `
                <tr class="transition-colors">
                  <td><span class="position-badge ${teamPositionClass(i, false)}">${i + 1}</span></td>
                  <td class="font-medium" style="color:var(--text-heading);">
                    <span class="team-flag">
                      <span class="flag">${t.flag}</span>
                      <span class="text-xs sm:text-sm">${escapeHtml(t.name)}</span>
                      ${t.stars > 0 ? `<span class="star text-xs">${createStars(t.stars)}</span>` : ''}
                    </span>
                  </td>
                  <td style="color:var(--text-primary);">${t.pj}</td>
                  <td style="color:var(--text-primary);">${t.g}</td>
                  <td style="color:var(--text-primary);">${t.e}</td>
                  <td style="color:var(--text-primary);">${t.p}</td>
                  <td style="color:var(--text-primary);">${t.gf}</td>
                  <td style="color:var(--text-primary);">${t.gc}</td>
                  <td style="color:var(--text-primary);">${dg > 0 ? '+' : ''}${dg}</td>
                  <td class="text-center font-bold" style="color:#3b82f6;">${t.pts}</td>
                </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
      <div class="px-4 sm:px-6 py-3 border-t" style="border-color:var(--border-color);">
        <div class="flex items-center justify-between text-xs mb-1" style="color:var(--text-secondary);"><span>Progreso del grupo</span><span>${pct}%</span></div>
        <div class="progress-bar"><div class="progress-bar-fill bg-gradient-to-r from-blue-500 to-blue-400" style="width:${pct}%"></div></div>
      </div>
    </div>`;
}

function renderGroupTabs() {
  const tabsEl = $('groupTabs');
  tabsEl.innerHTML = '';
  groupsData.forEach(g => {
    const btn = document.createElement('button');
    const isAct = g.id === activeGroup;
    btn.className = `group-tab flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium border transition-all ${isAct ? 'active text-blue-300' : 'text-slate-400 hover:text-slate-300'}`;
    btn.style.cssText = isAct
      ? 'background:var(--tab-active-bg);border-color:var(--tab-active-border);'
      : 'background:var(--tab-bg);border-color:var(--tab-border);';
    btn.textContent = `Grupo ${g.id}`;
    btn.onclick = () => { activeGroup = g.id; renderGroups(); };
    tabsEl.appendChild(btn);
  });
}

function renderGroups() {
  const tabsEl = $('groupTabs');
  const contentEl = $('groupContent');
  const dark = isDarkMode();

  if (compactMode) {
    tabsEl.style.display = 'none';
    contentEl.innerHTML = renderCompactGroups(dark);
    return;
  }

  tabsEl.style.display = '';
  renderGroupTabs();
  const group = groupsData.find(g => g.id === activeGroup);
  if (!group) return;
  contentEl.innerHTML = renderDetailedGroup(group, dark);
}

function toggleCompactMode() {
  compactMode = !compactMode;
  $('compactLabel').textContent = compactMode ? 'Vista detallada' : 'Vista compacta';
  $('compactIcon').textContent = compactMode ? '📄' : '📋';
  renderGroups();
}

// ------------------------------------------------------------
// RENDER MATCHES
// ------------------------------------------------------------
function createFilterButton(label, isActive, onClick, title = '') {
  const btn = document.createElement('button');
  btn.className = `filter-btn flex-shrink-0 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium border transition-all ${isActive ? 'active' : ''}`;
  if (!isActive) btn.style.cssText = 'background:var(--tab-bg);color:var(--text-secondary);border-color:var(--tab-border);';
  btn.textContent = label;
  if (title) btn.title = title;
  btn.onclick = onClick;
  return btn;
}

function renderMatches() {
  const filtersEl = $('matchFilters');
  const listEl = $('matchesList');
  filtersEl.innerHTML = '';

  const groupRow = document.createElement('div');
  groupRow.className = 'filter-scroll justify-start sm:justify-center mb-2';
  ['all', ...groupsData.map(g => g.id)].forEach(g => {
    groupRow.appendChild(createFilterButton(g === 'all' ? 'Todos' : `Grupo ${g}`, g === activeFilter, () => { activeFilter = g; renderMatches(); }));
  });
  filtersEl.appendChild(groupRow);

  const venueRow = document.createElement('div');
  venueRow.className = 'filter-scroll justify-start sm:justify-center';
  [{id:'all', label:'Todas'}, ...venueList.map(v => ({id:v, label:v.split(',')[0]}))].forEach(v => {
    venueRow.appendChild(createFilterButton(v.label, v.id === activeVenue, () => { activeVenue = v.id; renderMatches(); }, v.id));
  });
  filtersEl.appendChild(venueRow);

  let filtered = matchesData;
  if (activeFilter !== 'all') filtered = filtered.filter(m => m.group === activeFilter);
  if (activeVenue !== 'all') filtered = filtered.filter(m => m.venue === activeVenue);

  const dateOrder = ['11 Jun','12 Jun','13 Jun','14 Jun','15 Jun','16 Jun','17 Jun','18 Jun','19 Jun','20 Jun','21 Jun','22 Jun','23 Jun','24 Jun','25 Jun','26 Jun','27 Jun'];
  const grouped = {};
  filtered.forEach(m => { grouped[m.date] = grouped[m.date] || []; grouped[m.date].push(m); });
  const sortedDates = Object.keys(grouped).sort((a, b) => dateOrder.indexOf(a) - dateOrder.indexOf(b));

  if (!sortedDates.length) {
    listEl.innerHTML = `<div class="text-center py-10" style="color:var(--text-secondary);">No hay partidos para este filtro.</div>`;
    return;
  }

  listEl.innerHTML = sortedDates.map(date => `
    <div class="date-group animate-fade-in">
      <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div class="rounded-lg px-2.5 sm:px-3 py-1" style="background:rgba(59,130,246,0.15);border:1px solid rgba(59,130,246,0.3);">
          <span class="text-blue-300 font-bold text-xs sm:text-sm">${date}</span>
        </div>
        <div class="flex-1 h-px" style="background:linear-gradient(to right,rgba(59,130,246,0.2),transparent);"></div>
      </div>
      <div class="space-y-2 sm:space-y-2.5">
        ${grouped[date].map(m => renderMatchCard(m)).join('')}
      </div>
    </div>
  `).join('');
}

function renderMatchCard(m) {
  let badge;
  let statusLabel;
  let liveClass = '';
  if (m.status === 'final') {
    badge = `<span class="result-badge">${m.result}</span>`;
    statusLabel = 'Final';
  } else if (m.status === 'live') {
    badge = `<span class="result-badge live">${m.result}</span>`;
    statusLabel = 'En vivo';
    liveClass = ' live-match';
  } else {
    badge = `<span class="result-badge pending">${m.time}</span>`;
    statusLabel = 'Pendiente';
  }
  return `
    <div class="match-card p-2.5 sm:p-3${liveClass}">
      <div class="flex items-center gap-2 sm:gap-3">
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between gap-1 sm:gap-2">
            <div class="flex-1 text-right truncate">
              <span class="team-flag font-medium text-xs sm:text-sm" style="color:var(--text-heading);">
                <span class="truncate max-w-[70px] sm:max-w-none inline-block align-middle">${escapeHtml(m.local)}</span>
                <span class="flag">${m.localFlag}</span>
              </span>
            </div>
            <div class="flex-shrink-0 mx-1 sm:mx-2">${badge}</div>
            <div class="flex-1 text-left truncate">
              <span class="team-flag font-medium text-xs sm:text-sm" style="color:var(--text-heading);">
                <span class="flag">${m.visitorFlag}</span>
                <span class="truncate max-w-[70px] sm:max-w-none inline-block align-middle">${escapeHtml(m.visitor)}</span>
              </span>
            </div>
          </div>
          <div class="text-center mt-1">
            <span class="text-xs" style="color:var(--text-secondary);">${escapeHtml(m.venue)}${m.status === 'pending' ? ` · ${m.time}` : ''}</span>
          </div>
        </div>
        <div class="flex-shrink-0 hidden sm:block">
          <span class="text-xs px-2 py-0.5 rounded font-medium" style="background:rgba(59,130,246,0.1);color:#60a5fa;">${statusLabel}</span>
        </div>
      </div>
    </div>`;
}

// ------------------------------------------------------------
// RENDER BRACKET
// ------------------------------------------------------------
function renderBracket() {
  $('bracketContainer').innerHTML = bracketData.map(round => `
    <div class="bracket-round flex flex-col gap-2 sm:gap-3">
      <div class="round-header">${round.round}</div>
      <div class="flex flex-col gap-2 sm:gap-3 flex-1 justify-around">
        ${round.matches.map(m => `
          <div class="bracket-match${m[0] === '–' ? '' : ' winner'}">
            <div class="team"><span class="text-xs sm:text-sm font-medium" style="color:var(--text-heading);">${m[0]}</span><span class="text-xs sm:text-sm font-bold text-blue-300">${m[1]}</span></div>
            <div class="team"><span class="text-xs sm:text-sm font-medium" style="color:var(--text-heading);">${m[2]}</span><span class="text-xs sm:text-sm font-bold text-blue-300">–</span></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ------------------------------------------------------------
// RENDER NEWS / STATS / TICKER
// ------------------------------------------------------------
function renderNews() {
  $('newsContainer').innerHTML = newsData.map(n => `
    <div class="news-item animate-fade-in">
      <div class="flex items-start gap-3">
        <span class="text-lg sm:text-xl flex-shrink-0 mt-0.5">${n.icon}</span>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-medium px-1.5 py-0.5 rounded" style="background:rgba(59,130,246,0.12);color:#60a5fa;">${n.category}</span>
            <span class="news-time">${n.time}</span>
          </div>
          <h4 class="text-sm sm:text-base font-semibold mb-1" style="color:var(--text-heading);">${escapeHtml(n.title)}</h4>
          <p class="text-xs sm:text-sm" style="color:var(--text-secondary);">${escapeHtml(n.summary)}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStats() {
  const scorers = scorersData.slice(0, 8);
  $('topScorers').innerHTML = scorers.map((x, i) => `
    <div class="flex items-center gap-2 sm:gap-3">
      <span class="text-xs font-bold w-4 sm:w-5 flex-shrink-0 text-center" style="color:${i < 3 ? '#eab308' : 'var(--text-secondary)'}">${i + 1}</span>
      <span class="text-sm sm:text-base flex-shrink-0">${x.flag}</span>
      <div class="flex-1 min-w-0">
        <div class="text-xs sm:text-sm font-medium truncate" style="color:var(--text-heading);">${escapeHtml(x.name)}</div>
        <div class="text-xs" style="color:var(--text-secondary);">${escapeHtml(x.team)}</div>
      </div>
      <span class="text-sm sm:text-base font-bold flex-shrink-0" style="color:#60a5fa;">${x.goals}</span>
      <div class="text-xs flex-shrink-0" style="color:var(--text-secondary);">${x.assists} a.</div>
    </div>
  `).join('');

  const assists = [...scorersData].sort((a, b) => b.assists - a.assists).slice(0, 8);
  $('topAssists').innerHTML = assists.map((x, i) => `
    <div class="flex items-center gap-2 sm:gap-3">
      <span class="text-xs font-bold w-4 sm:w-5 flex-shrink-0 text-center" style="color:${i < 3 ? '#eab308' : 'var(--text-secondary)'}">${i + 1}</span>
      <span class="text-sm sm:text-base flex-shrink-0">${x.flag}</span>
      <div class="flex-1 min-w-0">
        <div class="text-xs sm:text-sm font-medium truncate" style="color:var(--text-heading);">${escapeHtml(x.name)}</div>
        <div class="text-xs" style="color:var(--text-secondary);">${escapeHtml(x.team)}</div>
      </div>
      <span class="text-sm sm:text-base font-bold flex-shrink-0" style="color:#a78bfa;">${x.assists}</span>
      <div class="text-xs flex-shrink-0" style="color:var(--text-secondary);">${x.goals} g.</div>
    </div>
  `).join('');

  $('teamStats').innerHTML = teamStatsLeaderboard.slice(0, 8).map(x => {
    const p = Math.round(x.value / x.max * 100);
    return `
      <div>
        <div class="flex items-center justify-between text-xs sm:text-sm mb-1">
          <span class="flex items-center gap-1.5">
            <span>${x.flag}</span>
            <span class="font-medium truncate max-w-[80px] sm:max-w-none" style="color:var(--text-heading);">${escapeHtml(x.name)}</span>
          </span>
          <span style="color:var(--text-secondary);">${x.stat}: <strong style="color:var(--text-heading);">${x.value}</strong></span>
        </div>
        <div class="stat-bar"><div class="stat-bar-fill bg-gradient-to-r from-violet-500 to-violet-400" style="width:${p}%"></div></div>
      </div>`;
  }).join('');
}

function renderFormGuide() {
  $('formGuide').innerHTML = formData.map(t => `
    <div class="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg" style="background:var(--news-bg);border:1px solid var(--border-color);">
      <span class="text-base sm:text-lg">${t.flag}</span>
      <span class="text-xs sm:text-sm font-medium flex-1 truncate" style="color:var(--text-heading);">${escapeHtml(t.name)}</span>
      <div class="flex gap-0.5 sm:gap-1">
        ${t.form.map(f => {
          const cls = f === 'W' ? 'form-w' : f === 'D' ? 'form-d' : 'form-l';
          const lbl = f === 'W' ? 'V' : f === 'D' ? 'E' : 'D';
          return `<span class="form-dot ${cls}">${lbl}</span>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function renderTicker() {
  const items = tickerItems.slice(0, 20);
  const duplicated = [...items, ...items];
  $('tickerContent').innerHTML = duplicated.map(item => `
    <span class="text-xs sm:text-sm flex-shrink-0" style="color:var(--text-secondary);">${escapeHtml(item)}</span>
    <span class="news-dot" style="background:#3b82f6;"></span>
  `).join('');
}

function updateLiveCount() {
  const liveCount = matchesData.filter(m => m.status === 'live').length;
  $('liveCount').textContent = liveCount;
}

// ------------------------------------------------------------
// CHARTS
// ------------------------------------------------------------
function getChartColors() {
  const isLight = document.body.classList.contains('light');
  return {
    grid: 'rgba(148,163,184,0.12)',
    text: isLight ? '#64748b' : '#94a3b8',
    blue: '#3b82f6', gold: '#eab308', green: '#16a34a', purple: '#a78bfa', red: '#ef4444', teal: '#14b8a6',
  };
}

function generateRadarData() {
  const radarTeams = ['Alemania','Suecia','EE. UU.','México'];
  return radarTeams.map(name => ({
    name,
    data: [Math.round(Math.random()*3+2), Math.round(Math.random()*4+3), Math.round(Math.random()*20+50), Math.round(Math.random()*10+10), Math.round(Math.random()*3+1)]
  }));
}

function destroyCharts() {
  Object.values(chartInstances).forEach(c => c && c.destroy && c.destroy());
  chartInstances = {};
}

function renderCharts() {
  const c = getChartColors();
  const font = { family: 'Inter', size: 10, weight: '500' };

  destroyCharts();
  if (!radarCache) radarCache = generateRadarData();

  const groupsWithGoals = ['A','B','C','D','E','F'];
  const goalsPerGroup = groupsWithGoals.map(id => {
    const g = groupsData.find(gr => gr.id === id);
    return g ? g.teams.reduce((s, t) => s + t.gf, 0) : 0;
  });

  chartInstances.goalsChart = new Chart($('goalsChart').getContext('2d'), {
    type: 'bar',
    data: { labels: groupsWithGoals.map(g => `Grupo ${g}`), datasets: [{ label: 'Goles', data: goalsPerGroup, backgroundColor: [c.blue, c.gold, c.green, c.purple, c.red, c.teal], borderRadius: 4, borderSkipped: false }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: c.grid }, ticks: { color: c.text, font } }, y: { beginAtZero: true, grid: { color: c.grid }, ticks: { color: c.text, font } } } }
  });

  const radarColors = [c.blue, c.gold, c.green, c.purple];
  chartInstances.radarChart = new Chart($('radarChart').getContext('2d'), {
    type: 'radar',
    data: {
      labels: ['Goles','Ataque','Posesión','Remates','Asistencias'],
      datasets: radarCache.map((rd, i) => ({ label: rd.name, borderColor: radarColors[i], backgroundColor: radarColors[i] + '15', pointBackgroundColor: radarColors[i], data: rd.data }))
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: c.text, boxWidth: 10, padding: 8, font } } }, scales: { r: { beginAtZero: true, grid: { color: c.grid }, angleLines: { color: c.grid }, pointLabels: { color: c.text, font }, ticks: { backdropColor: 'transparent', color: c.text, font: { size: 8 } } } } }
  });

  const possData = { labels: ['Alemania','Suecia','Brasil','Países Bajos','Japón','Resto'], data: [68,62,65,58,55,40], colors: [c.blue, c.gold, c.green, c.purple, c.teal, c.red] };
  chartInstances.possessionChart = new Chart($('possessionChart').getContext('2d'), {
    type: 'doughnut',
    data: { labels: possData.labels, datasets: [{ data: possData.data, backgroundColor: possData.colors, borderWidth: 2, borderColor: 'transparent' }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '55%', plugins: { legend: { position: 'right', labels: { color: c.text, boxWidth: 10, padding: 6, font: { ...font, size: 9 } } } } }
  });

  chartInstances.groupGoalsChart = new Chart($('groupGoalsChart').getContext('2d'), {
    type: 'bar',
    data: { labels: groupsWithGoals.map(g => `Grupo ${g}`), datasets: [{ label: 'Goles', data: goalsPerGroup, backgroundColor: '#3b82f688', borderColor: '#3b82f6', borderWidth: 1, borderRadius: 4, borderSkipped: false }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: c.grid }, ticks: { color: c.text, font } }, y: { grid: { color: c.grid }, ticks: { color: c.text, font } } } }
  });
}

// ------------------------------------------------------------
// TOAST
// ------------------------------------------------------------
function showToast(html) {
  const container = $('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<div class="g-text">${html}</div><span class="g-close" onclick="this.parentElement.remove()">✕</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s';
      setTimeout(() => toast.remove(), 500);
    }
  }, 5500);
  if (container.children.length > 5) container.firstChild.remove();
}

// ------------------------------------------------------------
// INIT
// ------------------------------------------------------------
function init() {
  buildSearchIndex();
  setTheme(getTheme());
  renderMatches();
  renderBracket();
  renderNews();
  renderStats();
  renderFormGuide();
  renderTicker();
  updateLiveCount();

  setTimeout(renderCharts, 300);

  window.addEventListener('scroll', () => {
    $('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) $('searchResults').classList.remove('open');
  });

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

init();
