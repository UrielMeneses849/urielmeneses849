import{r as e,j as a,u as o,_ as t,L as r}from"./index-8171d94b.js";import{l as s,m as i,h as n,g as l,n as d,i as c,b as p,o as h,j as g,_ as b,c as m,k as u}from"./styled-67b5d1a7.js";function f(e){if(e.type)return e;if("#"===e.charAt(0))return f(function(e){e=e.slice(1);const a=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let o=e.match(a);return o&&1===o[0].length&&(o=o.map((e=>e+e))),o?`rgb${4===o.length?"a":""}(${o.map(((e,a)=>a<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const a=e.indexOf("("),o=e.substring(0,a);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(o))throw new Error(s(9,e));let t,r=e.substring(a+1,e.length-1);if("color"===o){if(r=r.split(" "),t=r.shift(),4===r.length&&"/"===r[3].charAt(0)&&(r[3]=r[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t))throw new Error(s(10,t))}else r=r.split(",");return r=r.map((e=>parseFloat(e))),{type:o,values:r,colorSpace:t}}function v(e,a){return e=f(e),a=function(e,a=0,o=1){return i(e,a,o)}(a),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]=`/${a}`:e.values[3]=a,function(e){const{type:a,colorSpace:o}=e;let{values:t}=e;return-1!==a.indexOf("rgb")?t=t.map(((e,a)=>a<3?parseInt(e,10):e)):-1!==a.indexOf("hsl")&&(t[1]=`${t[1]}%`,t[2]=`${t[2]}%`),t=-1!==a.indexOf("color")?`${o} ${t.join(" ")}`:`${t.join(", ")}`,`${a}(${t})`}(e)}const j=[{id:1,CardArte:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FFinveroCard.svg?alt=media&token=4076fd17-e087-432f-a933-106fb20389cc",Logo:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FMask%20group.svg?alt=media&token=ecc5033e-1c50-44e9-b9e7-caa818c6bfe2",LogoDark:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FFV%202.svg?alt=media&token=6d032902-cf95-4ba2-9350-dec7b4ca4ffa",tagName:"Diseño UX/UI",descripcion:"Como <b>Diseñador UX/UI</b> en el equipo de CX (Customer Experience) de Finvero, participe en el diseño, investigación, análisis y pruebas de usabilidad para distintas <b>interfaces</b>, flujos de <b>originación de crédito</b>, dashboards y aplicaciones en el <b>sector fintech.</b>",path:"/finvero"},{id:2,CardArte:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FOpen%20Finance%20Card.svg?alt=media&token=68e8dcdb-4399-4d5d-9f0f-0db14b288d68",Logo:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FLogo_OF2050%404x%202.svg?alt=media&token=1e8e8921-7245-4ea1-a135-c252c13d1a2c",tagName:"Desarrollo Frontend",descripcion:"Trabajé en el <b> Desarrollo Frontend </b>para el evento Open Finance, creando componentes e interfaces responsivas junto a más desarrolladores y diseñadores UX/UI. El evento reune personas <b>lideres del mundo fintech</b> y se lleva a cabo en el hotel ST. REGIS en CDMX cada año.",reverse:!0,path:"/open-finance"},{id:3,CardArte:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FTransbordeCard.svg?alt=media&token=5f653cb7-bea2-48c7-88b3-257166f195b9",Logo:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2Flogo.svg?alt=media&token=fb9c06ac-804e-4675-a2a6-f21d5f76253c",tagName:"Diseño UX/UI",descripcion:"Tuve la oportunidad de crear una propuesta de diseño para la empresa OMNIBUS mejorando su web de manera responsiva  aplicando la metodología design thinking, auditoria competitiva y distintas técnicas para <b>mejorar el UI</b> de la pagina web.",path:"",link:"https://www.figma.com/proto/jo6yyCJp1v8ytEjvuQcZGA/Transborde?node-id=191-54&t=uRApOu8yxLNJ5uzE-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=191%3A54"},{id:4,CardArte:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FMebloStyleCard.svg?alt=media&token=ed277368-8839-4c9d-b6d3-d5c4ed7e614f",tituloCard:"MebloStyle",tagName:"Desarrollo Frontend",descripcion:"Como <b>diseñador y desarrollador</b> independiente, he sido responsable de todo el proceso de creación de la plataforma, asegurando una <b>experiencia de usuario fluida</b> y una <b>interfaz atractiva</b>. El resultado es una tienda en línea elegante que también refuerza la marca con un diseño visual atractivo.",reverse:!0,path:"",link:"https://www.figma.com/proto/OEUAg55cfBxwJ71eERMcUc/Daily-Design?node-id=2190-769&t=CMoHh9fu2lQkxIvo-1&scaling=scale-down-width&content-scaling=fixed&page-id=2190%3A647"},{id:5,CardArte:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FFrame%20224.svg?alt=media&token=d0847321-cc49-48f7-9d16-194bf3b09784",Logo:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FGroup%2025.svg?alt=media&token=7582774f-26f5-4c07-9e86-408341bc062e",LogoSmall:!0,tagName:"Diseño UX/UI",descripcion:"Como diseñador UX/UI, tuve el placer de colaborar con Sushi Zen, un restaurante de sushi emergente que busca ofrecer una experiencia auténtica y moderna a sus clientes. Mi participación en este proyecto abarcó desde el <b>branding</b> hasta el <b>diseño detallado del menú</b> y los posters promocionales.",path:"/sushizen"},{id:6,CardArte:"https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FBodaCard.svg?alt=media&token=8a6a0d67-c7be-414f-9183-1dd32cbc599a",tituloCard:"Boda",tagName:"Diseño UX/UI",descripcion:"Diseñé una elegante página web para una boda, el sitio incluía fotos, historia de los novios, itinerario y un registro de invitados, y una sección de información sobre la ceremonia y la recepción. Utilicé un <b>diseño responsivo para asegurar que la página se viera impecable en todos los dispositivos.</b> ",reverse:!0,path:"",link:"https://boda.asgerath.com"}];function x(e){return n("MuiSkeleton",e)}l("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const y=["animation","className","component","height","style","variant","width"];let w,C,k,T,N=e=>e;const F=d(w||(w=N`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),$=d(C||(C=N`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),S=c("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!1!==o.animation&&a[o.animation],o.hasChildren&&a.withChildren,o.hasChildren&&!o.width&&a.fitContent,o.hasChildren&&!o.height&&a.heightAuto]}})((({theme:e,ownerState:a})=>{const o=(t=e.shape.borderRadius,String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"px");var t;const r=(s=e.shape.borderRadius,parseFloat(s));var s;return p({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:v(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===a.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${o}/${Math.round(r/.6*10)/10}${o}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===a.variant&&{borderRadius:"50%"},"rounded"===a.variant&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})}),(({ownerState:e})=>"pulse"===e.animation&&h(k||(k=N`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),F)),(({ownerState:e,theme:a})=>"wave"===e.animation&&h(T||(T=N`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),$,(a.vars||a).palette.action.hover))),U=e.forwardRef((function(e,o){const t=g({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:i="span",height:n,style:l,variant:d="text",width:c}=t,h=b(t,y),f=p({},t,{animation:r,component:i,variant:d,hasChildren:Boolean(h.children)}),v=(e=>{const{classes:a,variant:o,animation:t,hasChildren:r,width:s,height:i}=e;return u({root:["root",o,t,r&&"withChildren",r&&!s&&"fitContent",r&&!i&&"heightAuto"]},x,a)})(f);return a.jsx(S,p({as:i,ref:o,className:m(v.root,s),ownerState:f},h,{style:p({width:c,height:n},l)}))}));function A(s){const{darkMode:i}=o(),n=i?"#949494":"#454545",l=i?"#fafafa":"#121212",d=i?"#121212":"#fafafa",[c,p]=e.useState(!1);return a.jsxs("div",{className:"Trabajo",id:"trabajo",children:[a.jsx("h2",{className:"Titulo_trabajo",style:{color:`${s.colortexto}`},children:"Mi trabajo"}),a.jsxs("div",{className:"Content-Trabajo",children:[a.jsxs("span",{className:"DescripcionTrabajo",style:{color:`${s.colortexto}`},children:["Aquí hay una recopilación de ",a.jsx("b",{children:"mi experiencia profesional"})," que demuestra mi pasión por crear productos y sitios web memorables de alta calidad,",a.jsx("b",{children:"un reflejo de mi dedicación."})," He tenido la oportunidad de participar en diversas iniciativas que han permitido poner en práctica mis ",a.jsx("b",{children:"habilidades creativas y técnicas. "}),a.jsx("br",{})," ",a.jsx("br",{}),"Mi trayectoria profesional en el campo del ",a.jsx("b",{children:"diseño UX/UI y el desarrollo frontend "}),"en el ",a.jsx("b",{children:"sector fintech ha sido una verdadera fuente de aprendizaje y crecimiento"})," en el ámbito financiero y tecnológico."]}),j.map((e=>a.jsxs("div",{className:e.reverse?"contenedorTrabajos reverse":"contenedorTrabajos",children:[a.jsxs(t,{offset:1e3,height:1e3,className:e.reverse?"loaderTrabajosReverse":"LoaderTrabajos",children:[!c&&a.jsx(U,{variant:"rectangular",animation:"wave",width:"100%",height:"100%"}),a.jsx("img",{src:e.CardArte,alt:"Tarjeta",className:"CardTrabajo",onLoad:()=>p(!0),style:c?{}:{display:"none"}})]}),a.jsxs("div",{className:"textosCardTrabajo",children:[a.jsxs("div",{className:"tituloTrabajoCard",children:[a.jsx(t,{offset:500,height:500,children:i&&e.LogoDark?a.jsx("img",{src:e.LogoDark,alt:"logo",className:"LogoimgT"}):e.Logo?a.jsx("img",{src:e.Logo,alt:"logo",className:e.LogoSmall?"LogoimgTsmall":"LogoimgT"}):a.jsx("h3",{className:"tituloCardTrabajo",style:{color:`${s.colortexto}`},children:e.tituloCard})}),a.jsxs("div",{className:"tag",children:["Diseño UX/UI"===e.tagName?a.jsx("i",{className:"uil uil-web-grid nav_icon",style:{color:"#FCCA3F"}}):a.jsx("i",{className:"uil uil-brackets-curly nav_icon",style:{color:"#8A97FF"}}),a.jsx("h4",{style:{color:`${n}`},children:e.tagName})]})]}),a.jsx("span",{className:"descripcionCardTrabajo",dangerouslySetInnerHTML:{__html:e.descripcion},style:{color:`${s.colortexto}`}}),""==e.path?a.jsxs("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[a.jsxs("button",{style:{background:`${l}`},children:[a.jsx("div",{className:"svg-wrapper-1",children:a.jsx("div",{className:"svg-wrapper",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{fill:d,d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"})]})})}),a.jsx("span",{style:{color:`${d}`},children:"Ver proyecto"})]})," "]}):a.jsxs(r,{to:`${e.path}`,children:[a.jsxs("button",{style:{background:`${l}`},children:[a.jsx("div",{className:"svg-wrapper-1",children:a.jsx("div",{className:"svg-wrapper",children:a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[a.jsx("path",{fill:"none",d:"M0 0h24v24H0z"}),a.jsx("path",{fill:d,d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"})]})})}),a.jsx("span",{style:{color:`${d}`},children:"Ver proyecto"})]})," "]},e.id)]})]},e.id)))]})]})}export{A as default};
