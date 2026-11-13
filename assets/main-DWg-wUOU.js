const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/transit-lab-BauscmMC.js","assets/data-HZXJ6QWh.js","assets/city-drawing-CWt_FrTL.js"])))=>i.map(i=>d[i]);
import"./700-C5UiCGSs.js";/* empty css            */import{n as e,r as t,t as n}from"./player-tN0hFCya.js";/* empty css            */import{a as r,i,n as a,r as o,t as s}from"./script-Ed0XbTkk.js";import{n as c,r as l,t as u}from"./data-HZXJ6QWh.js";import{a as d,c as f,l as p,o as m,r as h,s as g,t as _,u as v}from"./map-CjinCyxg.js";import{t as y}from"./preload-helper-BLdHbfdN.js";import{c as b,l as x,u as ee}from"./chime-D_qcpDa9.js";var te={note:`What has gone live, and when (YYYY-MM-DD). Written by scripts/openings.mjs at each publish; "" = there before the record began (10 Nov 2026).`,opened:{"article:central/one-life":``,"article:central/why-a-city":``,"article:cityhall/a-letter-from-my-30-year-old-self":``,"article:cityhall/core-values":``,"article:cityhall/experiences":``,"article:cityhall/experiences-2024":``,"article:cityhall/experiences-2025":``,"article:cityhall/principles":``,"article:community/mentorship":``,"article:community/volunteering":``,"article:techpark/ubc-co-op-career-planning-assignment":``,"article:techpark/work-apple":``,"article:techpark/work-autoliv":``,"article:techpark/work-flir":``,"article:techpark/work-gm":``,"article:techpark/work-ubc-av":``,"article:techpark/work-ubc-ta":``,"article:university/education-basc":``,"article:university/education-meng":``,"article:university/grad-school-statement-of-purpose":``,"article:university/publication-light-field-video":``,"exit:central/aboutme":``,"exit:central/city":`2026-11-06`,"exit:cityhall/capsule":`2026-11-11`,"exit:cityhall/reports":``,"exit:cityhall/values":``,"exit:community/mentoring":``,"exit:community/volunteer":``,"exit:cultural/design":`2026-11-12`,"exit:mainstreet/control":`2026-11-08`,"exit:powerstation/city":`2026-11-10`,"exit:powerstation/human":`2026-11-10`,"exit:stadium/races":`2026-11-10`,"exit:stadium/track":`2026-11-10`,"exit:techpark/campus":``,"exit:techpark/coop":``,"exit:techpark/work":``,"exit:university/education":``,"exit:westairport/arrivals":`2026-11-10`,"station:central":``,"station:cityhall":``,"station:clocktower":``,"station:community":``,"station:concerthall":``,"station:cultural":``,"station:eastairport":``,"station:exhibition":``,"station:financial":``,"station:library":``,"station:lighthouse":``,"station:lookout":``,"station:mainstreet":``,"station:motorsports":``,"station:observatory":``,"station:oldtown":``,"station:postoffice":``,"station:powerstation":`2026-11-09`,"station:shipyard":``,"station:snowpeak":``,"station:speakerscorner":``,"station:stadium":``,"station:techpark":``,"station:traininggrounds":``,"station:university":``,"station:waterfront":``,"station:wellness":``,"station:westairport":``}},S=(e,t=`zh`)=>r(e)?`<span class="${t}" lang="${s()}">${r(e)}</span>`:``,C=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),ne=`connect@rogerluo.org`,re=e=>String.fromCharCode(65+e);function w(e,t=``){let n=u[e];return`<span class="badge ${t} ${n.construction?`badge--construction`:``} ${n.express?`badge--express`:``}" style="--c:${n.color}" title="Line ${n.code} · ${C(n.name)}${n.construction?` (under construction)`:``}">${n.code}</span>`}var T={name:`Pioneer`,what:`intercity high-speed trains`,zh:{hans:`开拓号`,hant:`開拓號`},ja:`開拓号`},ie=e=>`Line ${u[e].code} · ${C(u[e].name)} ${S(u[e])}${u[e].express?` <span class="under-construction">Express</span>`:``}${u[e].construction?` <span class="under-construction">Under construction</span>`:``}`;function ae(e,t){let n=h[t],r=n.indexOf(e),i=u[t],a=n.map((e,n)=>`
    <a href="#/station/${e}?line=${t}" class="strip-stop ${n<r?`is-past`:``} ${n===r?`is-here`:``} ${c[e].kind===`unexplored`?`is-unexplored`:``}"
       ${n===r?`aria-current="location"`:``}>
      <span class="strip-dot"></span>
      <span class="strip-name">${C(c[e].name)}${S(c[e],`zh zh--sm`)}</span>
    </a>`).join(``);return`
    <nav class="car" style="--c:${i.color}" aria-label="Line ${i.code} stops">
      <div class="car-top"><a class="car-line" href="#/line/${i.code}">${w(t,`badge--sm`)} ${ie(t)}</a>
        <span class="car-towards">${i.loop?i.express?`Express loop`:`Loop line`:`towards ${C(c[n[n.length-1]].name)}`}</span></div>
      <div class="car-strip" style="--n:${n.length}">${a}</div>
    </nav>`}function oe(e){if(!l.prev&&!l.next&&!l.home&&!l.random)return`<p class="empty-note">Webring connection coming soon.</p>`;let t=(e,t)=>t?`<a class="btn" href="${C(t)}" target="_blank" rel="noopener">${e}</a>`:`<span class="btn is-disabled" title="Set in WEBRING in src/data.js">${e} · not set</span>`;return`<div class="links">${(e.webring===`prev`?[t(`← Previous site`,l.prev),t(`All sites in the ring`,l.home)]:[t(`Next site →`,l.next),t(`Random site`,l.random)]).join(``)}</div>`}var se=e=>e.replace(/\[([^\]]+)\]\((#\/[^)\s]+)\)/g,`<a href="$2">$1</a>`),ce=(e,t)=>e.toLowerCase().replace(/[^a-z0-9]/g,``)===t.toLowerCase().replace(/[^a-z0-9]/g,``),le=30,ue=e=>te.opened[e]||null,de=e=>e&&Date.now()-Date.parse(`${e}T00:00:00`)<le*864e5,fe=e=>de(e)?` <span class="new-pill">New</span>`:``;function pe(){let e=[];for(let[t,n]of Object.entries(te.opened)){if(!n)continue;let[r,i]=t.split(`:`),[a,o]=i.split(`/`),s=c[a];if(s&&s.kind!==`unexplored`){if(r===`station`&&e.push({date:n,kind:`Station opened`,href:`#/station/${a}`,id:a,title:s.name,sub:s.about??``}),r===`exit`){let t=(s.exits??[]).find(e=>e.id===o),r=t&&v(a,t.id).filter(e=>!e.parent);t&&(r.length||t.links?.length)&&e.push({date:n,kind:`New exit`,href:`#/station/${a}`,id:a,title:`${t.label} · ${s.name}`,sub:[...(t.links??[]).map(e=>e.label),...r.map(e=>e.title)].join(`, `)})}if(r===`article`){let t=v(a).find(e=>e.slug===o),r=t&&(s.exits??[]).find(e=>e.id===t.exit);t&&e.push({date:n,kind:`New article`,href:`#/station/${a}/${t.slug}`,id:a,title:t.title,sub:`${r?.label??``} · ${s.name}`})}}}if(!e.length)return``;e.sort((e,t)=>t.date.localeCompare(e.date)||e.title.localeCompare(t.title));let t=e.filter(e=>de(e.date)).length,n=e=>new Date(`${e}T00:00:00`).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`});return`
    <div class="su-slot">
      <section class="su-sheet" aria-label="Service updates">
        <button class="su-tab" type="button" aria-expanded="false" aria-controls="su-panel">
          <span class="su-title">Service updates</span>
          ${t?`<span class="su-count">${t} new</span>`:``}
          <span class="su-latest">Latest: ${C(e[0].title)}, ${n(e[0].date)}</span>
          <svg class="su-cue" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 6.5 5 3.5l3 3"/></svg>
        </button>
        <div class="su-panel" id="su-panel">
          <header class="su-head">
            <h2>Service updates</h2>
            <button class="su-close" type="button" aria-label="Close service updates"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5 5 6.5l3-3"/></svg></button>
          </header>
          <ol class="su-list">
            ${e.slice(0,8).map((e,t)=>`<li style="--i:${t}"><time class="su-date" datetime="${e.date}">${n(e.date)}</time><span class="su-what"><span class="su-kind">${e.kind}</span><a href="${e.href}">${C(e.title)}</a>${e.sub?`<small>${C(e.sub)}</small>`:``}</span><span class="su-lines">${(m[e.id]??[]).map(e=>w(e,`badge--xs`)).join(``)}</span></li>`).join(``)}
          </ol>
        </div>
      </section>
    </div>`}function E(){let e=document.querySelector(`.su-slot`);if(!e)return;let t=e.querySelector(`.su-tab`),n=e.querySelector(`.su-panel`),r=e.getBoundingClientRect().bottom-76-8;e.style.setProperty(`--tab-h`,`${t.offsetHeight}px`),e.style.setProperty(`--open-h`,`${Math.round(Math.max(160,Math.min(n.scrollHeight,600,r)))}px`)}function D(e,{focus:t=!0}={}){let n=document.querySelector(`.su-slot`);n&&(e&&n.getBoundingClientRect().bottom-84<Math.min(n.querySelector(`.su-panel`).scrollHeight,360)&&n.scrollIntoView({block:`end`}),E(),n.classList.toggle(`is-open`,e),n.querySelector(`.su-tab`).setAttribute(`aria-expanded`,String(e)),t&&n.querySelector(e?`.su-close`:`.su-tab`)?.focus({preventScroll:!0}))}addEventListener(`click`,e=>{let t=document.querySelector(`.su-slot`);if(t){if(e.target.closest(`.su-tab`))return D(!0);if(e.target.closest(`.su-close`)||e.target.closest(`.su-list a`))return D(!1,{focus:!1});t.classList.contains(`is-open`)&&!t.contains(e.target)&&D(!1,{focus:!1})}}),addEventListener(`keydown`,e=>{e.key===`Escape`&&document.querySelector(`.su-slot.is-open`)&&(e.stopImmediatePropagation(),D(!1))},!0),addEventListener(`resize`,E);function me(e){let t=(c[e].exits??[]).map((t,n)=>({x:t,letter:re(n),articles:v(e,t.id).filter(e=>!e.parent)})).filter(e=>e.articles.length||e.x.links?.length);return t.length?`
    <ol class="exits">
      ${t.map(({x:t,letter:n,articles:r})=>`
        <li class="exit" id="exit-${t.id}">
          <span class="exit-letter" aria-label="Exit ${n}">${n}</span>
          <div class="exit-body">
            <h3 class="exit-name">${C(t.label)}${t.name&&t.name!==t.label?` <span class="exit-building">${C(t.name)}</span>`:``}${fe(ue(`exit:${e}/${t.id}`))}</h3>
            <ul class="exit-dests">
              ${r.map(n=>`<li><a href="#/station/${e}/${n.slug}"${ce(n.title,t.label)&&r.length===1?` aria-label="${C(n.title)}">Learn more`:`>${C(n.title)}`}</a>${fe(ue(`article:${e}/${n.slug}`))}${n.org||n.summary?` <span class="exit-note">${[n.org,n.summary].filter(Boolean).map(C).join(` · `)}</span>`:``}</li>`).join(``)}
              ${(t.links??[]).map(e=>`<li><a href="${C(e.href)}">${C(e.label)}</a>${e.note?` <span class="exit-note">${C(e.note)}</span>`:``}</li>`).join(``)}
            </ul>
          </div>
        </li>`).join(``)}
    </ol>`:``}var O=180,k=150;function he(e){let t=[];for(let[n,r]of Object.entries(u)){if(r.construction)continue;let i=[...r.route,...r.extension??[]].filter(e=>typeof e==`string`),a=r.code*47%O;if(r.loop){let r=i.slice(0,-1),o=r.indexOf(e);if(o<0)continue;t.push([n,`Clockwise`,null,a+o*k]),t.push([n,`Anticlockwise`,null,a+90+(r.length-o)%r.length*k])}else{let r=i.indexOf(e);if(r<0)continue;r<i.length-1&&t.push([n,null,i.at(-1),a+r*k]),r>0&&t.push([n,null,i[0],a+90+(i.length-1-r)*k])}}if(!t.length)return``;let n=[...new Set(t.map(([e])=>e))];return`
    <aside class="nt-float${A?` is-open`:``}" aria-label="Next trains">
      <div class="nt-drawer">
      <button class="nt-tab" type="button" aria-expanded="${A}" aria-controls="nt-panel">
        <svg class="nt-tab-cue" viewBox="0 0 10 10" aria-hidden="true"><path d="M6.5 2 3.5 5l3 3"/></svg>
        <span class="nt-tab-lines">${n.map(e=>w(e,`badge--xs`)).join(``)}</span>
        <span class="nt-tab-label">Next trains</span>
        <span class="nt-tab-soon nt-soonest"></span>
      </button>
      <section class="nt-panel" id="nt-panel" aria-labelledby="nt-h">
        <header class="nt-panel-head">
          <h2 id="nt-h">Next trains</h2>
          <button class="nt-close" type="button" aria-label="Close next trains"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3.5 2 6.5 5l-3 3"/></svg></button>
        </header>
        <ul class="nt-boards">
          ${t.map(([e,t,n,r],i)=>`
          <li class="nt-board" style="--i:${i}">
            <p class="nt-head">${w(e,`badge--sm`)}<span>${t??`To ${C(c[n].name)}${S(c[n])}`}</span></p>
            <ol class="nt-rows" data-offset="${r%O}">${`<li><span class="nt-at"></span><span class="nt-in"></span></li>`.repeat(2)}</ol>
          </li>`).join(``)}
        </ul>
      </section>
      </div>
    </aside>`}function ge(e,t){E(),document.fonts?.ready.then(E);let n=e.querySelector(`.nt-float`),r=t.querySelector(`.nt-float`);n?(n.remove(),r?(r.querySelector(`.nt-tab-lines`).replaceWith(n.querySelector(`.nt-tab-lines`)),r.querySelector(`.nt-boards`).replaceWith(n.querySelector(`.nt-boards`))):t.append(n),_e(),N(),j(),document.fonts?.ready.then(j)):r?.remove()}var A=!1;function j(){let e=document.querySelector(`.nt-float`);if(!e)return;let t=e.querySelector(`.nt-tab`).offsetHeight,n=e.querySelector(`.nt-panel`),r=innerHeight,i=Number(getComputedStyle(e).getPropertyValue(`--nt-ratio`))*r-t/2,a=Math.min(n.scrollHeight,600,r-76-16),o=Math.max(76,Math.min(i,r-16-a));e.style.setProperty(`--tab-h`,`${t}px`),e.style.setProperty(`--open-h`,`${Math.round(a)}px`),e.style.setProperty(`--open-top`,`${Math.round(o)}px`)}function M(e,{focus:t=!0}={}){let n=document.querySelector(`.nt-float`);A=e,n&&(j(),n.classList.toggle(`is-open`,e),n.querySelector(`.nt-tab`).setAttribute(`aria-expanded`,String(e)),t&&n.querySelector(e?`.nt-close`:`.nt-tab`)?.focus({preventScroll:!0}))}addEventListener(`click`,e=>{let t=document.querySelector(`.nt-float`);if(t){if(e.target.closest(`.nt-tab`))return M(!0);if(e.target.closest(`.nt-close`))return M(!1);A&&!t.contains(e.target)&&M(!1,{focus:!1})}}),addEventListener(`keydown`,e=>{e.key===`Escape`&&A&&document.querySelector(`.nt-float.is-open`)&&(e.stopImmediatePropagation(),M(!1))},!0);var N=()=>{let e=document.getElementById(`page`);e&&e.style.setProperty(`--sbw`,`${Math.max(0,e.offsetWidth-e.clientWidth)}px`)};if(typeof ResizeObserver==`function`){let e=()=>{let e=document.getElementById(`page`),t=document.getElementById(`page-body`);if(!e)return;let n=new ResizeObserver(N);n.observe(e),t&&n.observe(t)};document.readyState===`loading`?addEventListener(`DOMContentLoaded`,e):e()}addEventListener(`resize`,()=>{N(),j()});function _e(){let e=new Date,t=e.getHours()*3600+e.getMinutes()*60+e.getSeconds(),n=t=>{let n=new Date(e.getTime()+t*1e3);return`${String(n.getHours()).padStart(2,`0`)}:${String(n.getMinutes()).padStart(2,`0`)}`},r=e=>e<30?`Due`:`${Math.max(1,Math.round(e/60))} min`,i=1/0;for(let e of document.querySelectorAll(`.nt-rows`)){let a=O-((t-Number(e.dataset.offset))%O+O)%O;i=Math.min(i,a),[a,a+O].forEach((t,i)=>{e.children[i].querySelector(`.nt-at`).textContent=n(t),e.children[i].querySelector(`.nt-in`).textContent=r(t)})}let a=document.querySelector(`.nt-tab`);a&&i<1/0&&(a.querySelector(`.nt-soonest`).textContent=r(i),a.setAttribute(`aria-label`,`Next trains: the next in ${i<30?`under a minute`:r(i)}`),j())}setInterval(_e,1e4);function ve(e,t){requestAnimationFrame(()=>{_e(),N()});let n=c[e],r=m[e]??[],i=t&&r.includes(t)?t:r.find(e=>!u[e].construction)??r[0],a=u[i].color,o=n.kind===`unexplored`,s=h[i],l=s.indexOf(e),d=u[i].loop,f=s[l-1]??(d?s[s.length-1]:void 0),p=s[l+1]??(d?s[0]:void 0),_=(e,t)=>e?`<a class="nb-side nb-side--${t}" href="#/station/${e}?line=${i}">
         ${t===`prev`?`<span class="nb-arrow">◀&#xFE0E;</span>`:``}
         <span>${C(c[e].name)}${S(c[e],`zh zh--band`)}</span>
         ${t===`next`?`<span class="nb-arrow">▶&#xFE0E;</span>`:``}
       </a>`:`<span class="nb-side nb-side--${t} is-end"><span>${t===`prev`?`Start of line`:`End of line`}</span></span>`,v=r.length>1||n.intercity?`
    <div class="transfer">
      <span>Change here for</span>
      ${r.filter(e=>e!==i).map(t=>`
        <a href="#/station/${e}?line=${t}" class="transfer-link">${w(t,`badge--sm`)} ${ie(t)}</a>`).join(``)}
      ${n.intercity?`<a class="transfer-link transfer-intercity" href="https://pioneer.rogerluo.org/" target="_blank" rel="noopener">${g(`highspeed`,20)} ${T.name} · ${T.what} ${S(T)}</a>`:``}
    </div>`:``,y=(n.links??[]).map(e=>`<a class="btn" href="${C(e.href)}" target="_blank" rel="noopener">${C(e.label)}<i class="ext-arrow" aria-hidden="true"></i></a>`).join(``),b=me(e),x=`mailto:${ne}?subject=${encodeURIComponent(`A note for ${n.name} station`)}`;return`
    <article class="station-page ${o?`is-unexplored`:``}" style="--c:${a}">
      <header class="nameboard">
        <div class="nb-top">
          <span class="nb-art">${g(n.art,34)}</span>
          <h1 class="nb-name">${C(n.name)}${S(n,`nb-zh`)}</h1>
          <span class="nb-codes">${r.map(e=>w(e)).join(``)}</span>
        </div>
        <div class="nb-band">
          ${_(f,`prev`)}
          ${_(p,`next`)}
        </div>
      </header>

      <section class="intro${n.photo?y?` has-photo is-profile`:` has-photo`:``}">
        ${n.photo?`<div class="intro-text">`:``}
        ${n.district&&n.district!==n.name||o?`<p class="nb-sub">${C(n.district??``)}${o?`${n.district?` · `:``}Future station`:``}</p>`:``}
        ${n.about?`<p class="tagline">${C(n.about)}</p>`:``}
        ${n.quote?`<blockquote class="station-quote"><p>${C(n.quote.text)}</p><p class="cite">― ${C(n.quote.by)}</p></blockquote>`:``}
        ${[n.description??[]].flat().map(e=>`<p class="station-desc">${se(C(e))}</p>`).join(``)}
        ${y?`<div class="intro-connect"><h2 class="section-title">Connect with me</h2><div class="links">${y}</div></div>`:``}
        ${n.photo?`</div>`:``}
        ${n.photo?`<figure class="station-figure${n.photo.wide?` is-wide`:``}"><img class="station-photo" src="${C(n.photo.src)}" alt="${C(n.photo.alt??``)}">${n.photo.caption?`<figcaption>${C(n.photo.caption)}</figcaption>`:``}</figure>`:``}
      </section>

      ${n.webring?`<section class="above"><h2 class="section-title">Webring</h2>${oe(n)}</section>`:``}
      ${b?`<section class="above"><h2 class="section-title">Exits</h2>${b}</section>`:``}
      ${!b&&!n.webring?`<p class="empty-note">Nothing written here yet.</p>`:``}

      <section class="above say">
        <h2 class="section-title">I have something to say</h2>
        <div class="say-row"><a class="btn" href="${x}">Leave a note</a></div>
      </section>

      <footer class="ride">
        ${v}
        ${ae(e,i)}
        ${e===`central`?pe():``}
      </footer>
      ${he(e)}
    </article>`}var ye={n:[0,-18,`middle`],s:[0,32,`middle`],e:[16,7,`start`],w:[-16,7,`end`],ne:[12,-10,`start`],nw:[-12,-10,`end`],se:[12,24,`start`],sw:[-12,24,`end`]};function be(e){let t=u[e],n=e=>[c[e].x,c[e].y],i=(e,t=24)=>e.length*t*.56,a=Object.keys(u).filter(t=>t!==e).map(e=>`<path d="${d(u[e].route)}" class="lm-other"/>`).join(``),o=t.route.map(e=>typeof e==`string`?n(e):e),l=t.loop?o.slice(1).map((e,t)=>{let n=o[t];if(Math.hypot(e[0]-n[0],e[1]-n[1])<170)return``;let r=Math.atan2(e[1]-n[1],e[0]-n[0])*180/Math.PI;return`<path d="M-9,-9 L5,0 L-9,9" class="lm-arrow" transform="translate(${(n[0]+e[0])/2},${(n[1]+e[1])/2}) rotate(${r})"/>`}).join(``):``,f={x0:1/0,y0:1/0,x1:-1/0,y1:-1/0},p=(e,t,n,r)=>{f.x0=Math.min(f.x0,e),f.y0=Math.min(f.y0,t),f.x1=Math.max(f.x1,n),f.y1=Math.max(f.y1,r)};for(let[e,t]of o)p(e-20,t-20,e+20,t+20);let g=(t.phases??[]).map(e=>{let t=Math.max(i(e.name,28)*1.1,i(r(e),21)*1.6);return p(e.at[0]-t/2,e.at[1]-26,e.at[0]+t/2,e.at[1]+36),`
    <g class="lm-phase">
      ${e.stations.map(e=>`<circle cx="${n(e)[0]}" cy="${n(e)[1]}" r="26"/>`).join(``)}
      <text x="${e.at[0]}" y="${e.at[1]}" text-anchor="middle"><tspan class="lm-step">${C(e.name.toUpperCase())}</tspan><tspan x="${e.at[0]}" dy="28" lang="${s()}">${C(r(e))}</tspan></text>
    </g>`}).join(``),_=h[e],v=_.map(t=>{let[r,a]=n(t),o=c[t].name,s=i(o),l=(m[t]??[]).length>1,u=_.filter(e=>e!==t&&Math.abs(c[e].y-a)<2&&Math.abs(c[e].x-r)<160),d;if(u.length){let e=Math.cos(.7),t=Math.sin(.7);p(r,a-16-s*t-24,r+s*e+24,a),d=`<text transform="translate(${r+4},${a-18}) rotate(-40)" class="lm-name">${C(o)}</text>`}else{let[e,n,i]=ye[c[t].label??`s`],u=l?7:0,f=e+Math.sign(e)*u,m=i===`middle`?n+Math.sign(n)*u:n,h=r+f,g=i===`start`?h:i===`end`?h-s:h-s/2;p(g,a+m-24,g+s,a+m+6),d=`<text x="${h}" y="${a+m}" text-anchor="${i}" class="lm-name">${C(o)}</text>`}return`<a href="#/station/${t}?line=${e}"><circle cx="${r}" cy="${a}" r="${l?13:9}" class="lm-dot ${l?`is-hub`:``}"/>${d}</a>`}).join(``),y=f.x1-f.x0+60,b=f.y1-f.y0+60,x=[f.x0-30,f.y0-30,y,b].map(Math.round).join(` `);return{W:y,H:b,svg:e=>`<figure class="line-map" style="--c:${t.color}">
    <svg viewBox="${x}" style="--w:${Math.round(y*e)}px; --h:${Math.round(b*e)}px" role="img" aria-label="Map of Line ${t.code} · ${C(t.name)}${t.phases?`, grouped into `+t.phases.map(e=>e.name).join(`, `):``}">
      ${a}${g}<path d="${d(t.route)}" class="lm-line"/>${l}${v}
    </svg>
    <p class="lm-hint">Swipe to see the whole line → <span lang="${s()}">${xe[s()]??``}</span></p>
  </figure>`}}var xe={"zh-Hans":`左右滑动查看整条线路`,"zh-Hant":`左右滑動查看整條路線`,ja:`スワイプして路線全体を見る`},Se=760;function Ce(e){let t=Math.max(...Object.keys(u).map(e=>be(e).W));return be(e).svg(Se/t)}var we=e=>Object.keys(u).find(t=>u[t].code===e);function Te(e){let t=u[e],n=t.i18n?.[s()],r=h[e];t.construction||requestAnimationFrame(()=>y(async()=>{let{lineFacts:e}=await import(`./transit-lab-BauscmMC.js`).then(e=>e.m);return{lineFacts:e}},__vite__mapDeps([0,1,2])).then(({lineFacts:t})=>{let n=t(e),r=(e,t)=>{let n=document.querySelector(`[data-fact="${e}"]`);n&&(n.innerHTML=t)};r(`km`,`<small>about</small> ${n.km.toFixed(+(n.km<10))} km`),r(`time`,`<small>about</small> ${Math.round(n.minutes)} min`)}).catch(()=>{}));let i=r.filter(e=>(m[e]??[]).length>1),a=(e,t,n)=>`<div class="lf"><dt>${e}</dt><dd${n?` data-fact="${n}"`:``}>${t}</dd></div>`,o=r.map((n,i)=>{let a=c[n],o=(m[n]??[]).filter(t=>t!==e),s=!t.loop&&(i===0||i===r.length-1);return`<li class="lr-stop ${a.kind===`unexplored`?``:`is-written`} ${a.kind===`unexplored`?`is-unexplored`:``} ${o.length?`is-hub`:``}">
      <a href="#/station/${n}?line=${e}">
        <span class="lr-dot"></span>
        <span class="lr-text">
          <b>${a.kind===`airport`?`✈&#xFE0E; `:a.intercity?`<span class="hs-icon" title="Pioneer: intercity high-speed trains">${g(`highspeed`,16)}</span> `:``}${C(a.name)}${S(a)}${s?` <small>Terminus</small>`:``}</b>
          ${a.about?`<span>${C(a.about)}</span>`:``}
        </span>
      </a>
      ${o.length?`<span class="lr-change">${o.map(e=>`<a href="#/line/${u[e].code}" title="Line ${u[e].code} · ${C(u[e].name)}">${w(e,`badge--sm`)}</a>`).join(``)}</span>`:``}
    </li>`}).join(``),l=Object.keys(u).filter(t=>t!==e);return`
    <article class="line-page" style="--c:${t.color}">
      <header class="line-board">
        ${w(e,`badge--lg`)}
        <div>
          <p class="nb-sub">Line ${t.code} · ${t.loop?`Loop line`:`${C(c[r[0]].name)} – ${C(c[r[r.length-1]].name)}`}</p>
          <h1 class="nb-name">${C(t.name)}${S(t,`nb-zh`)}</h1>
        </div>
      </header>
      <div class="line-intro">
      <section class="intro">
        <nav class="lang-tabs" aria-label="Second language">
          ${[[`hans`,`zh-Hans`],[`hant`,`zh-Hant`],[`ja`,`ja`]].map(([e,t])=>`<button type="button" data-script="${e}" lang="${t}" class="${s()===t?`is-active`:``}" aria-pressed="${s()===t}">${De[t]}</button>`).join(``)}
        </nav>
        ${t.about?`<p class="tagline">${C(t.about)}</p>`:``}
        ${n?.about?`<p class="tagline tagline--tr" lang="${s()}">${C(n.about)}</p>`:``}
        ${t.description?`<p class="station-desc">${C(t.description)}</p>`:``}
        ${n?.description?`<p class="station-desc station-desc--tr" lang="${s()}">${C(n.description)}</p>`:``}
      </section>
      ${Ce(e)}
      </div>
      <dl class="line-facts">
        ${a(`Stations`,r.length)}
        ${a(`Length`,`…`,`km`)}
        ${a(t.loop?`Once around`:`End to end`,`…`,`time`)}
        ${a(`Interchanges`,i.length)}
      </dl>
      ${t.construction?``:`<ul class="exit-dests line-lab"><li><a href="/transit-lab.html?l=${e}">Run this line in the Transit Lab</a><span class="exit-note">Riders, trains and signals</span></li></ul>`}
      <section>
        <h2 class="section-title">${t.loop?`Stations, clockwise`:`Stations`}</h2>
        <ol class="line-route ${t.loop?`is-loop`:``}">${o}</ol>
      </section>
      <nav class="line-others">
        <h2 class="section-title">Other lines</h2>
        ${l.map(e=>`<a class="transfer-link" href="#/line/${u[e].code}">${w(e,`badge--sm`)} ${ie(e)}</a>`).join(``)}
      </nav>
    </article>`}var Ee=e=>new Date(e+`T12:00`).toLocaleDateString(`en-US`,{day:`numeric`,month:`short`,year:`numeric`}),De={en:`English`,"zh-Hans":`简体中文`,"zh-Hant":`繁體中文`,ja:`日本語`};function Oe(e,t,n=`en`){let r=c[e],i=v(e).find(e=>e.slug===t);if(!i)return null;let a=[`zh-Hans`,`zh-Hant`,`ja`],o=p(t).sort((e,t)=>a.indexOf(e.lang)-a.indexOf(t.lang)),s=o.find(e=>e.lang===n)??i,l=o.length?`
      <nav class="lang-tabs" aria-label="Language">
        ${[{lang:`en`},...o].map(n=>`<a href="#/station/${e}/${t}${n.lang===`en`?``:`?lang=${n.lang}`}"
          class="${n.lang===`en`&&s===i||n.lang===s.lang?`is-active`:``}" lang="${n.lang===`en`?`en`:n.lang}">${De[n.lang]??n.lang}</a>`).join(``)}
      </nav>`:``,d=(m[e]??[]).find(e=>!u[e].construction)??(m[e]??[])[0],f=(r.exits??[]).find(e=>e.id===s.exit);return`
    <article class="article" style="--c:${u[d].color}">
      <a class="crumb" href="#/station/${e}">${w(d,`badge--sm`)} ${C(r.name)}${f?` · ${C(f.label)}`:``}</a>
      ${s.date?`<p class="entry-meta">${Ee(s.date)}</p>`:``}
      ${l}
      <h1 ${s.lang?`lang="${s.lang}"`:``}>${C(s.title)}</h1>
      ${s.summary||s.org?`<p class="lede" ${s.lang?`lang="${s.lang}"`:``}>${[s.org,s.summary].filter(Boolean).map(C).join(` · `)}</p>`:``}
      <div class="prose" ${s.lang?`lang="${s.lang}"`:``}>${s.html}</div>
    </article>`}var ke={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0],ne:[1,-1],nw:[-1,-1],se:[1,1],sw:[-1,1]},Ae=e=>typeof e==`string`?[c[e].x,c[e].y]:e,je=e=>u[e].route.filter(e=>typeof e==`string`),Me=e=>u[e].loop?[`cw`,`acw`]:[je(e)[0],je(e).at(-1)];function Ne(e,t,n){let r=u[t],i=!!r.loop,[a]=Me(t);n??=i?`cw`:e===a?a:Me(t)[1];let o=i?n===`acw`:n===a,s=r.route.map(Ae),l=je(t);o&&(s=s.reverse(),l=l.reverse());let d=Ae(e),f=s.findIndex(([e,t])=>e===d[0]&&t===d[1]),p=s[f-1]??(i?s.at(-2):null),m=s[f+1],h=p?[d[0]-p[0],d[1]-p[1]]:[m[0]-d[0],m[1]-d[1]],[g,_]=ke[c[e].label??`s`],v=l.indexOf(e),y=l[v+1]??(i?l[1]:null),b=v>0?l[v-1]:i?l.at(-2):null;return{towards:n,nextStop:y,prevStop:b,terminus:!i&&n===e,side:h[0]*_-h[1]*g<0?`left`:`right`}}var P={closing:()=>`closing`,departure:(e,t,n)=>`dep:${e}:${t}:${n}`,arrival:(e,t,n)=>`arr:${e}:${t}:${n}`},F=e=>document.querySelector(e),I=(e,t=`zh`)=>r(e)?` <span class="${t}" lang="${s()}">${r(e)}</span>`:``,Pe=matchMedia(`(prefers-reduced-motion: reduce)`).matches,L=F(`#tooltip`),R=_(F(`#map`),{onStation:e=>{location.hash=`#/station/${e}`},onHover(e,t){if(!e){L.classList.remove(`is-visible`);return}let n=c[e];L.innerHTML=`<div class="tt-head">${(m[e]??[]).map(e=>`<i style="background:${u[e].color}"></i>`).join(``)}<b>${n.name}${I(n)}</b></div>${n.about?`<div class="tt-sub">${n.about}</div>`:``}${n.kind===`unexplored`?`<div class="tt-sub">Future station</div>`:``}`;let r=t.querySelector(`.hit`).getBoundingClientRect();L.style.left=`${r.left+r.width/2}px`,L.style.top=`${r.top}px`,L.classList.add(`is-visible`)}}),z=null,Fe=()=>{F(`#legend-lines`).innerHTML=Object.entries(u).map(([e,t])=>`
  <div class="legend-row">
  <button class="legend-line" data-line="${e}" style="--c:${t.color}" aria-pressed="false">
    <span class="badge badge--sm ${t.construction?`badge--construction`:``} ${t.express?`badge--express`:``}" style="--c:${t.color}">${t.code}</span><b>Line ${t.code} · ${t.name}${I(t)}${t.express?` <small>express loop</small>`:``}${t.construction?` <small>under construction</small>`:``}</b>
  </button>
  <a class="legend-about" href="#/line/${t.code}" aria-label="About Line ${t.code} · ${t.name}">About →</a>
  </div>`).join(``)};Fe(),F(`#key-future`).hidden=!Object.values(c).some(e=>e.kind===`unexplored`),F(`#legend-lines`).addEventListener(`click`,e=>{let t=e.target.closest(`.legend-line`);t&&(z=z===t.dataset.line?null:t.dataset.line,R.focusLine(z),document.querySelectorAll(`.legend-line`).forEach(e=>e.setAttribute(`aria-pressed`,e.dataset.line===z)))});var B=F(`#lines-view`),V=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),Ie=()=>{B.innerHTML=`<div class="lv-wrap">`+Object.entries(u).map(([e,t])=>{let n=h[e];return`
  <section class="lv-line" style="--c:${t.color}">
     <h2 class="lv-head"><a class="lv-line-link" href="#/line/${t.code}"><span class="badge badge--sm ${t.construction?`badge--construction`:``} ${t.express?`badge--express`:``}" style="--c:${t.color}">${t.code}</span>
      <span class="lv-name">Line ${t.code} · ${V(t.name)}${I(t,`zh lv-zh`)}</span></a>
      <a class="lv-more" href="#/line/${t.code}">About this line →</a>
      <small>${t.loop?t.express?`Express loop`:`Loop line`:`${V(c[n[0]].name)} – ${V(c[n[n.length-1]].name)}`}${t.construction?` · under construction`:``}</small></h2>
    <ol class="lv-stops">
      ${n.map(t=>{let n=c[t],r=(m[t]??[]).filter(t=>t!==e);return`<li class="lv-stop ${n.kind===`unexplored`?`is-unexplored`:``} ${r.length||n.kind===`airport`?`is-hub`:``} ${n.kind===`unexplored`?``:`is-written`}">
          <a href="#/station/${t}?line=${e}">
            <span class="lv-dot"></span>
            <span class="lv-text"><b>${n.kind===`airport`?`✈&#xFE0E; `:n.intercity?`<span class="hs-icon" title="Pioneer: intercity high-speed trains">${g(`highspeed`,16)}</span> `:``}${V(n.name)}${I(n)}</b></span>
            ${r.map(e=>`<span class="badge badge--sm" style="--c:${u[e].color}">${u[e].code}</span>`).join(``)}
          </a></li>`}).join(``)}
    </ol>
  </section>`}).join(``)+`</div>`};Ie();var Le=F(`.orient`);function Re(){document.body.classList.contains(`is-lines`)?B.prepend(Le):B.before(Le)}function H(e){let t=e===`lines`;B.hidden=!t,F(`#view-map`).setAttribute(`aria-pressed`,!t),F(`#view-lines`).setAttribute(`aria-pressed`,t),document.body.classList.toggle(`is-lines`,t),Re();try{localStorage.setItem(`view`,e)}catch{}}F(`#view-map`).onclick=()=>H(`map`),F(`#view-lines`).onclick=()=>H(`lines`);var ze=null;try{ze=localStorage.getItem(`view`)}catch{}H(ze??`map`);var U=Object.entries(c).map(([e,t])=>({kind:`Station`,label:t.name,sub:t.about??t.district??``,href:`#/station/${e}`,text:`${t.name} ${t.zh?.hans??``} ${t.zh?.hant??``} ${t.ja??``} ${t.district??``} ${t.about??``}`}));U.push(...Object.values(u).map(e=>({kind:`Line`,label:`Line ${e.code} · ${e.name}`,sub:e.about??``,href:`#/line/${e.code}`,text:`line ${e.code} ${e.name} ${e.zh?.hans??``} ${e.zh?.hant??``} ${e.ja??``} ${e.about??``}`}))),U.push(...f.map(e=>{let t=c[e.station],n=t?.exits?.find(t=>t.id===e.exit);return{kind:`Article`,label:e.org?`${e.title} · ${e.org}`:e.title,sub:`${t?.name??``}${n?` · ${n.label}`:``}`,href:`#/station/${e.station}/${e.slug}`,text:`${e.title} ${e.org??``} ${e.summary??``}`}}));var W=F(`#search`),G=F(`#search-input`),Be=F(`#search-results`),K=[],q=0;function J(){let e=G.value.trim().toLowerCase();K=e?U.filter(t=>t.text.toLowerCase().includes(e)).slice(0,12):U.filter(e=>e.kind===`Station`).slice(0,12),q=Math.min(q,Math.max(K.length-1,0)),Be.innerHTML=K.length?K.map((e,t)=>`
    <li role="option" aria-selected="${t===q}" data-i="${t}">
      <span class="sr-kind">${e.kind}</span><span class="sr-label">${V(e.label)}</span><span class="sr-sub">${V(e.sub)}</span>
    </li>`).join(``):`<li class="sr-empty">No stations or articles match.</li>`}function Ve(e){e&&(Ue(),e.external?window.open(e.href,`_blank`,`noopener`):location.hash=e.href)}function He(){W.hidden=!1,G.value=``,q=0,J(),G.focus()}function Ue(){W.hidden=!0}F(`#search-open`).onclick=He,G.addEventListener(`input`,()=>{q=0,J()}),G.addEventListener(`keydown`,e=>{e.key===`ArrowDown`&&(q=Math.min(q+1,K.length-1),J(),e.preventDefault()),e.key===`ArrowUp`&&(q=Math.max(q-1,0),J(),e.preventDefault()),e.key===`Enter`&&Ve(K[q])}),Be.addEventListener(`click`,e=>{let t=e.target.closest(`[data-i]`);t&&Ve(K[+t.dataset.i])}),W.addEventListener(`click`,e=>{e.target===W&&Ue()}),addEventListener(`keydown`,e=>{e.key===`/`&&W.hidden&&!/input|textarea/i.test(document.activeElement?.tagName)?(e.preventDefault(),He()):e.key===`Escape`&&!W.hidden&&(e.stopImmediatePropagation(),Ue())},!0);function We(){document.querySelectorAll(`[data-script]`).forEach(e=>e.setAttribute(`aria-pressed`,e.dataset.script===o()))}document.querySelectorAll(`[data-script]`).forEach(e=>{e.onclick=()=>i(e.dataset.script)});var Ge={hans:[`一座想象中的城市。`,`点击车站开始探索。`,`为什么是一座城市 →`,`zh-Hans`],hant:[`一座想像中的城市。`,`點選車站開始探索。`,`為什麼是一座城市 →`,`zh-Hant`],ja:[`想像上の都市。`,`駅をタップして探索してください。`,`なぜ都市なのか →`,`ja`]};function Ke(){let[e,t,n,r]=Ge[o()];F(`.orient-tr`).innerHTML=`<span lang="${r}">${e}<span class="wide-only">${t}</span><a href="#/station/central/why-a-city?lang=${r}">${n}</a></span>`}Ke();try{localStorage.removeItem(`orient`)}catch{}a(()=>{We(),Ke(),R.setScript(),Fe(),Ie(),Re(),Y.classList.contains(`is-open`)&&$e()}),We();function qe(){document.querySelectorAll(`.sound-btn`).forEach(e=>{e.setAttribute(`aria-pressed`,!b()),e.title=b()?`Chime off`:`Chime on`})}var Je=()=>n([`chime`]);document.querySelectorAll(`.sound-btn`).forEach(n=>{n.onclick=()=>{ee(!b()),qe(),b()?e():(t(),Je())}}),document.querySelectorAll(`.chime-test`).forEach(e=>{e.onclick=async()=>{t();let n=await Je();e.classList.remove(`is-playing`),e.offsetWidth,e.classList.add(`is-playing`),e.title=n?`Playing the arrival chime`:`This browser blocked audio`}}),qe();for(let e of[`pointerdown`,`touchend`,`keydown`])addEventListener(e,()=>{b()||(t(),x())},{passive:!0,capture:!0});function Ye(e,t,r){if(b())return;let i=h[r],a=!!u[r].loop,[o,s]=Me(r),c=null,l=!1;if(e&&i.includes(e)){let n=i.indexOf(e),r=i.indexOf(t),u=i.length,d=r===n+1||a&&n===u-1&&r===0,f=r===n-1||a&&n===0&&r===u-1;(d||f)&&(l=!0,c=a?d?`cw`:`acw`:d?s:o)}c??=Ne(t,r).towards;let d=l?[P.closing(),P.departure(e,r,c),P.arrival(t,r,c)]:[P.arrival(t,r,c)];n([`chime`,...d])}F(`.legend-close`).onclick=()=>{F(`#legend`).open=!1},F(`#zoom-in`).onclick=()=>R.zoom.in(),F(`#zoom-out`).onclick=()=>R.zoom.out(),F(`#zoom-reset`).onclick=()=>R.zoom.reset();var Y=F(`#page`),X=F(`#page-body`),Xe=F(`#nt-host`),Z={station:null,line:null};function Q(e=location.hash){let[t,n=``]=e.replace(/^#/,``).split(`?`),[,r,i,a]=t.split(`/`),o=new URLSearchParams(n).get(`line`);return r===`line`&&we(i)?{lineId:we(i)}:r===`station`&&c[i]?{id:i,slug:a,line:o}:null}function Ze(e){return!Y.classList.contains(`is-open`)&&(Y.style.setProperty(`--door`,e),Y.hidden=!1,requestAnimationFrame(()=>Y.classList.add(`is-open`)),Y.focus({preventScroll:!0}),!0)}var Qe=()=>`<footer class="page-foot">© Roger Luo ${new Date().getFullYear()}</footer>`;function $e(){let e=Q();if(!e){nt();return}if(e.lineId){let t=u[e.lineId];Z={station:null,line:e.lineId},X.innerHTML=Te(e.lineId)+Qe(),ge(X,Xe),F(`.page-hint`).textContent=`← → for the other lines · Esc for map`,X.scrollTop=0,Y.scrollTop=0,document.title=`Line ${t.code} · ${t.name} · roger_dsc`,L.classList.remove(`is-visible`),Ze(t.color),requestAnimationFrame(()=>{let e=X.querySelector(`.line-map`);e&&e.scrollWidth>e.clientWidth+2&&(e.classList.add(`is-scrollable`),e.addEventListener(`scroll`,()=>e.classList.add(`was-scrolled`),{once:!0}))});return}let t=m[e.id]??[],n=e.line&&t.includes(e.line)?e.line:Z.line&&t.includes(Z.line)?Z.line:t.find(e=>!u[e].construction)??t[0],r=new URLSearchParams(location.hash.split(`?`)[1]??``).get(`lang`)??`en`,i=e.slug?Oe(e.id,e.slug,r):ve(e.id,n),a=new URLSearchParams(location.hash.split(`?`)[1]??``).get(`section`);if(!i){let t=e.slug&&f.find(t=>t.slug===e.slug);location.replace(t?`#/station/${t.station}/${e.slug}${r===`en`?``:`?lang=${r}`}`:`#/station/${e.id}`);return}let o=Y.classList.contains(`is-open`);F(`.page-hint`).textContent=`← → to ride the line · Esc for map`,!e.slug&&e.id!==Z.station&&Ye(Z.station,e.id,n);let s=o&&!e.slug&&Z.station&&Z.station!==e.id;Z={station:e.id,line:n},X.innerHTML=i+Qe(),ge(X,Xe),X.scrollTop=0,Y.scrollTop=0,a&&tt(a),document.title=`${c[e.id].name} · roger_dsc`,L.classList.remove(`is-visible`),o?s&&!Pe&&et():Ze(u[n].color)}function et(){X.querySelector(`.nameboard`)?.querySelectorAll(`.nb-name, .nb-art .picto, .nb-band > *`).forEach((e,t)=>e.animate([{transform:`translateY(0.25em)`,opacity:0},{transform:`none`,opacity:1}],{duration:420,delay:t>1?50:0,easing:`cubic-bezier(.25, .8, .25, 1)`,fill:`backwards`}))}function tt(e){let t=e=>e.replace(/[*_]/g,``).trim().toLowerCase(),n=[...X.querySelectorAll(`.prose summary, .prose h2, .prose h3`)].find(n=>t(n.textContent)===t(e));if(!n)return;let r=n.closest(`details`);r&&(r.open=!0),requestAnimationFrame(()=>{n.scrollIntoView({block:`start`}),(r??n).classList.add(`is-flash`)})}function nt(){if(!Y.classList.contains(`is-open`))return;e(),Y.classList.remove(`is-open`);let t=Z.station;Z={station:null,line:null},document.title=`roger_dsc`,setTimeout(()=>{Y.hidden=!0},Pe?0:350),document.querySelector(`.station[data-id="${t}"]`)?.focus({preventScroll:!0})}X.addEventListener(`click`,e=>{let t=e.target.closest(`[data-script]`);if(t){i(t.dataset.script);return}let n=e.target.closest(`[data-jump]`);if(!n)return;let r=document.getElementById(n.dataset.jump);r&&(r.scrollIntoView({behavior:Pe?`auto`:`smooth`,block:`center`}),r.classList.remove(`is-flash`),r.offsetWidth,r.classList.add(`is-flash`))});var rt=e=>e?.slug?f.find(t=>t.slug===e.slug)?.parent:null;function it(){let e=Q(),t=rt(e);return t?`#/station/${e.id}/${t}`:e?.slug?`#/station/${e.id}`:``}function at(){let e=Q(),t=rt(e),n=t?f.find(e=>e.slug===t)?.title??``:``,r=t?n.length<=30?n:n.split(` `)[0]:e?.slug?c[e.id].name:null,i=t&&r===n&&n.length>14?`Back`:r;F(`.back-to`).textContent=r??`map`,F(`.back-to-short`).textContent=i??`Map`,F(`#page-close`).setAttribute(`aria-label`,`Back to ${r??`map`}`),F(`.page-hint`).hidden=!!e?.slug}F(`#page-close`).onclick=()=>{location.hash=it()},addEventListener(`hashchange`,at),at();var ot=`trail`,st=()=>{try{return JSON.parse(sessionStorage.getItem(ot))??[]}catch{return[]}},ct=e=>{try{sessionStorage.setItem(ot,JSON.stringify(e.slice(-40)))}catch{}},$=e=>(e||``).replace(/^#/,``).split(`?`)[0].replace(/\/$/,``);function lt(e){let t=Q(e);if(!t)return`Map`;if(t.lineId)return u[t.lineId].name;if(!t.slug)return c[t.id].name;let n=f.find(e=>e.slug===t.slug)?.title??c[t.id].name;return n.length>30?`${n.slice(0,28).trim()}…`:n}var ut=location.hash,dt=!1;addEventListener(`hashchange`,()=>{let e=st();dt?dt=!1:$(ut)!==$(location.hash)&&e.push(ut),ct(e),ut=location.hash,ft()});function ft(){let e=st().at(-1),t=F(`#page-prev`),n=e!==void 0&&$(e)!==$(location.hash)&&$(e)!==$(it())&&!!Q();if(t.hidden=!n,n){let n=lt(e);t.querySelector(`.prev-name`).textContent=n,t.setAttribute(`aria-label`,`Previous page: ${n}`)}}F(`#page-prev`).onclick=()=>{let e=st(),t=e.pop();ct(e),dt=!0,location.hash=t??``},ft(),addEventListener(`keydown`,e=>{if(!Y.classList.contains(`is-open`))return;if(e.key===`Escape`){location.hash=it();return}let t=Q();if(!t||t.slug||![`ArrowLeft`,`ArrowRight`].includes(e.key))return;if(t.lineId){let n=Object.values(u).map(e=>e.code),r=(n.indexOf(u[t.lineId].code)+(e.key===`ArrowRight`?1:-1)+n.length)%n.length;location.hash=`#/line/${n[r]}`;return}let n=h[Z.line],r=n.indexOf(t.id)+(e.key===`ArrowRight`?1:-1);u[Z.line].loop&&(r=(r+n.length)%n.length);let i=n[r];i&&(location.hash=`#/station/${i}?line=${Z.line}`)}),addEventListener(`hashchange`,$e),$e();