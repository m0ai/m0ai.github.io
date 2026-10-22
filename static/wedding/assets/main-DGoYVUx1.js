(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),window.INVITATION={couple:{groom:{name:`최영준`,shortName:`영준`,birthYear:1997,father:`최대영`,mother:`이순미`,relation:`차남`},bride:{name:`정명진`,shortName:`명진`,birthYear:1996,father:`정원장`,mother:`이영란`,relation:`차녀`}},wedding:{date:`2026-11-01T11:30:00+09:00`,dateText:`2026년 11월 1일 일요일 오전 11시 30분`,dateShort:`2026. 11. 01. SUN · 11:30 AM`,venue:`노보텔 앰배서더 서울 동대문`,hall:`그랜드 볼룸 라온`,address:`서울특별시 중구 을지로 238`,mapQuery:`노보텔 앰배서더 서울 동대문`},familyLocation:{venue:`노보텔 앰배서더 서울 동대문`,room:`19층 미팅룸 D`,address:`서울특별시 중구 을지로 238`,mapQuery:`노보텔 앰배서더 서울 동대문`,latitude:37.566388,longitude:127.004313},message:{title:`서로의 하루를 함께 걷기로 했습니다`,lines:[`서로 다른 두 사람이 만나`,`이제 같은 곳을 바라보며 걸어가려 합니다.`,`저희의 새로운 시작에 함께하시어`,`따뜻한 축복을 더해 주시면 감사하겠습니다.`]},noticePage:{title:`결혼 알림`,lines:[`두 사람이 바라던 대로`,`가까운 가족들과 작은 식을 올립니다.`,`자리가 좁아 모시지 못한 분들께`,`소식만큼은 직접 전하고 싶어 알립니다.`,`두 사람의 앞길에`,`많은 축복과 격려 부탁드립니다.`],dateNote:`가까운 가족들과 작은 식을 올립니다.`,photoTitle:`우리의 결혼식`,photoNote:`예식 후 소중한 순간들을 이곳에 담아 전하겠습니다.`},familyPage:{title:`가족과 함께, 새로운 시작을 합니다`,lines:[`오랜 시간 서로의 곁을 지켜 온 저희 두 사람이`,`이제 가족 여러분 앞에서 평생을 약속합니다.`,`가장 가까운 가족들과 함께하는 소중한 날,`,`따뜻하고 편안한 마음으로 함께해 주세요.`]},familySchedule:[{time:`오전 11시 30분까지`,title:`도착`,place:`19층 미팅룸 D로 와주세요.`},{time:`오후 12시부터`,title:`예식 진행`,place:`19층 미팅룸 D에서 예식을 진행합니다.`},{time:`오후 12시 30분부터`,title:`가족 식사`,place:`가족들과 함께 식사합니다.`},{time:`식사 후`,title:`일정 마무리`,place:`식사를 마친 뒤 각자 편하게 귀가하시면 됩니다.`}],story:{startDate:`2013-11-11T00:00:00+09:00`,startText:`2013. 11. 11`},photos:{main:`./assets/images/main-lettering.webp`,gallery:[{src:`./assets/images/gallery-1.webp`,orientation:`portrait`},{src:`./assets/images/gallery-2.webp`,orientation:`portrait`},{src:`./assets/images/gallery-3.webp`,orientation:`portrait`},{src:`./assets/images/gallery-4.webp`,orientation:`portrait`},{src:`./assets/images/gallery-5.webp`,orientation:`landscape`},{src:`./assets/images/gallery-6.webp`,orientation:`landscape`},{src:`./assets/images/gallery-7.webp`,orientation:`landscape`},{src:`./assets/images/gallery-8.webp`,orientation:`landscape`},{src:`./assets/images/gallery-9.webp`,orientation:`landscape`},{src:`./assets/images/gallery-10.webp`,orientation:`landscape`}],postWedding:[{src:``,orientation:`portrait`},{src:``,orientation:`portrait`},{src:``,orientation:`landscape`}]},transport:[{icon:`SUBWAY`,title:`지하철`,text:`2·4·5호선 동대문역사문화공원역 12번 출구에서 도보 약 3분`},{icon:`BUS`,title:`버스`,text:`동대문역사문화공원 정류장 하차 후 도보 이동`},{icon:`CAR`,title:`자가용`,text:`내비게이션에 ‘노보텔 앰배서더 서울 동대문’을 검색해 주세요. 호텔 주차장을 이용하실 수 있습니다.`}],notice:`축의금과 화환은 정중히 사양합니다. 귀한 걸음과 축하의 마음만 감사히 받겠습니다.`},(()=>{let e=window.INVITATION,t=document.querySelector(`#invitation`),n=document.querySelector(`#toast`),r=document.querySelector(`#photo-modal`),i=e.couple.groom,a=e.couple.bride,o=new Date(e.wedding.date),s=o.getFullYear(),c=o.getMonth()+1,l=o.getDate(),u=[`일요일`,`월요일`,`화요일`,`수요일`,`목요일`,`금요일`,`토요일`][o.getDay()],d=new Date(e.story.startDate),f=Math.floor((o.getTime()-d.getTime())/864e5)+1,p=document.body.dataset.page||`invitation`;document.body.dataset.theme=`classic`;let m={notice:`${i.name} · ${a.name}, 결혼 소식`,family:`${i.name} · ${a.name} 가족 일정`,invitation:`${i.name} · ${a.name}, 결혼합니다`},h=m[p]||m.invitation,g=p===`notice`?`${e.wedding.dateText}, 가족과 함께 조용히 결혼식을 올립니다.`:p===`family`?`${e.wedding.dateText}, ${e.familyLocation.venue} ${e.familyLocation.room}`:`${e.wedding.dateText}, ${e.wedding.venue}`;document.title=h,document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,g),document.querySelector(`meta[property="og:title"]`)?.setAttribute(`content`,h),document.querySelector(`meta[property="og:description"]`)?.setAttribute(`content`,g);let _=(e=``)=>String(e).replace(/[&<>'"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,"'":`&#39;`,'"':`&quot;`})[e]),v=(e,t,n=``)=>e?`<button class="photo ${n}" type="button" data-photo="${_(e)}" aria-label="${_(t)} 크게 보기"><img src="${_(e)}" alt="${_(t)}" loading="lazy"></button>`:`<div class="photo photo--empty ${n}" role="img" aria-label="${_(t)} 자리"><span>OUR PHOTO</span><small>사진을 준비 중입니다</small></div>`,y=new Date(s,c-1,1).getDay(),b=new Date(s,c,0).getDate(),x=Math.ceil((y+b)/7)*7,S=Array.from({length:x},(e,t)=>{let n=t-y+1;return n<1||n>b?`<span></span>`:`<span class="${n===l?`is-wedding`:``}">${n}</span>`}).join(``);`${_(e.wedding.address)}${encodeURIComponent(e.wedding.mapQuery)}${encodeURIComponent(e.wedding.mapQuery)}`;let C=`
    <div class="map-placeholder reveal" aria-label="지도 영역">
      <span>MAP</span><p>${_(e.familyLocation.address)}</p>
    </div>
    <div class="map-buttons reveal">
      <a href="${/Android/i.test(navigator.userAgent)?`intent://route/public?dlat=${e.familyLocation.latitude}&dlng=${e.familyLocation.longitude}&dname=${encodeURIComponent(e.familyLocation.mapQuery)}&appname=https%3A%2F%2Fm0ai.github.io%2Fwedding%2F#Intent;scheme=nmap;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.nmap;end`:`nmap://route/public?dlat=${e.familyLocation.latitude}&dlng=${e.familyLocation.longitude}&dname=${encodeURIComponent(e.familyLocation.mapQuery)}&appname=https%3A%2F%2Fm0ai.github.io%2Fwedding%2F`}">네이버 길찾기</a>
      <a href="https://map.kakao.com/link/to/${encodeURIComponent(e.familyLocation.mapQuery)},${e.familyLocation.latitude},${e.familyLocation.longitude}" target="_blank" rel="noopener">카카오 길찾기</a>
    </div>`,w=(t=!1)=>`
    <footer class="footer section">
      <div class="footer__mark" aria-hidden="true">❧</div>
      <p>${_(i.name)} · ${_(a.name)}</p>
      <span>${_(e.wedding.dateText)}</span>
      ${t?`<button class="share-button" type="button" data-share>소식 공유하기</button>`:``}
      <small>Made with love</small>
    </footer>`;p===`notice`?t.innerHTML=`
      <section class="hero notice-hero section" aria-labelledby="notice-title">
        <div class="botanical botanical--top" aria-hidden="true"><i></i><i></i><i></i></div>
        <p class="eyebrow reveal">WE ARE GETTING MARRIED</p>
        <h1 id="notice-title" class="reveal"><span class="name name--groom">${_(i.name)}</span><span class="amp">&amp;</span><span class="name name--bride">${_(a.name)}</span></h1>
        <p class="hero__date reveal">${_(e.wedding.dateShort)}</p>
        <div class="hero__photo reveal">${v(e.photos.main,`신랑 신부 메인 사진`,`photo--main`)}</div>
        <div class="scroll-cue" aria-hidden="true"><span></span></div>
      </section>

      <section class="section announcement" aria-labelledby="announcement-title">
        <p class="section-kicker reveal">MARRIAGE ANNOUNCEMENT</p>
        <h2 id="announcement-title" class="reveal">${_(e.noticePage.title)}</h2>
        <p class="announcement__copy reveal">${e.noticePage.lines.map(_).join(`<br>`)}</p>
        <div class="family reveal">
          <p><span>${_(i.father)} · ${_(i.mother)}</span>의 ${_(i.relation)} <strong>${_(i.shortName||i.name)}</strong></p>
          <p><span>${_(a.father)} · ${_(a.mother)}</span>의 ${_(a.relation)} <strong>${_(a.shortName||a.name)}</strong></p>
        </div>
      </section>

      <section class="section notice-date" aria-labelledby="notice-date-title">
        <p class="section-kicker reveal">THE DAY</p>
        <h2 id="notice-date-title" class="reveal">${s}년 ${c}월 ${l}일 ${u}</h2>
        <p class="notice-date__time reveal">오전 11시 30분</p>
        <p class="notice-date__family reveal">${_(e.noticePage.dateNote)}</p>
        <button class="line-button reveal" type="button" data-calendar>캘린더에 일정 저장</button>
      </section>

      <section class="section post-wedding" aria-labelledby="post-wedding-title">
        <p class="section-kicker reveal">AFTER THE WEDDING</p>
        <h2 id="post-wedding-title" class="reveal">${_(e.noticePage.photoTitle)}</h2>
        <p class="section-note reveal">${_(e.noticePage.photoNote)}</p>
        <div class="post-wedding__grid reveal">${e.photos.postWedding.map((e,t)=>v(e.src,`예식 후 사진 ${t+1}`,`photo--${e.orientation}`)).join(``)}</div>
      </section>

      ${w(!0)}`:p===`family`?t.innerHTML=`
      <section class="hero family-hero section" aria-labelledby="family-title">
        <div class="botanical botanical--top" aria-hidden="true"><i></i><i></i><i></i></div>
        <p class="eyebrow reveal">FAMILY WEDDING SCHEDULE</p>
        <h1 id="family-title" class="reveal"><span class="name name--groom">${_(i.name)}</span><span class="amp">&amp;</span><span class="name name--bride">${_(a.name)}</span></h1>
        <p class="hero__date reveal">${_(e.wedding.dateShort)}</p>
        <div class="hero__photo reveal">${v(e.photos.main,`신랑 신부 메인 사진`,`photo--main`)}</div>
        <p class="hero__venue reveal">${_(e.familyLocation.venue)}<br><strong>${_(e.familyLocation.room)}</strong></p>
        <div class="scroll-cue" aria-hidden="true"><span></span></div>
      </section>

      <section class="section family-intro" aria-labelledby="family-intro-title">
        <p class="section-kicker reveal">FOR OUR FAMILY</p>
        <h2 id="family-intro-title" class="reveal">${_(e.familyPage.title)}</h2>
        <p class="family-intro__copy reveal">${e.familyPage.lines.map(_).join(`<br>`)}</p>
        <div class="family reveal">
          <p><span>${_(i.father)} · ${_(i.mother)}</span>의 ${_(i.relation)} <strong>${_(i.name)}</strong></p>
          <p><span>${_(a.father)} · ${_(a.mother)}</span>의 ${_(a.relation)} <strong>${_(a.name)}</strong></p>
        </div>
      </section>

      <section class="section schedule-section" aria-labelledby="schedule-title">
        <p class="section-kicker reveal">TIMELINE</p>
        <h2 id="schedule-title" class="reveal">11월 1일 일정</h2>
        <div class="family-schedule reveal">${e.familySchedule.map((e,t)=>`
          <article class="${e.time.includes(`추후`)?`is-pending`:``}">
            <span>${String(t+1).padStart(2,`0`)}</span>
            <div><time>${_(e.time)}</time><h3>${_(e.title)}</h3><p>${_(e.place).replace(`19층`,`<strong class="schedule-floor">19층</strong>`)}</p></div>
          </article>`).join(``)}
        </div>
        <button class="line-button reveal" type="button" data-calendar>캘린더에 예식 저장</button>
      </section>

      <section class="section location" aria-labelledby="family-location-title">
        <p class="section-kicker reveal">LOCATION</p>
        <h2 id="family-location-title" class="reveal">일정 장소</h2>
        <div class="location__summary reveal"><strong>${_(e.familyLocation.venue)}</strong><span>${_(e.familyLocation.room)}</span><p>${_(e.familyLocation.address)}</p></div>
        ${C}
        <div class="transport reveal">${e.transport.map(e=>`<article><span>${_(e.icon)}</span><div><h3>${_(e.title)}</h3><p>${_(e.text)}</p></div></article>`).join(``)}</div>
      </section>

      <section class="section family-note" aria-labelledby="family-note-title">
        <p class="section-kicker reveal">PLEASE NOTE</p>
        <h2 id="family-note-title" class="reveal">오전 11시 30분까지 와주세요</h2>
        <p class="section-note reveal"><strong class="schedule-floor">19층</strong> 미팅룸 D에서 뵙겠습니다.</p>
      </section>

      ${w(!1)}`:t.innerHTML=`
    <section class="hero section" aria-labelledby="invitation-title">
      <div class="botanical botanical--top" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="eyebrow reveal">WEDDING INVITATION</p>
      <h1 id="invitation-title" class="reveal"><span class="name name--groom">${_(i.name)}</span><span class="amp">&amp;</span><span class="name name--bride">${_(a.name)}</span></h1>
      <p class="hero__date reveal">${_(e.wedding.dateShort)}</p>
      <div class="hero__photo reveal">${v(e.photos.main,`신랑 신부 메인 사진`,`photo--main`)}</div>
      <p class="hero__venue reveal">${_(e.wedding.venue)}<br><strong>${_(e.wedding.hall)}</strong></p>
      <div class="hero__issue" aria-hidden="true"><span>13 YEARS</span><b>2013 — 2026</b><i>VOL. 01</i></div>
      <div class="scroll-cue" aria-hidden="true"><span></span></div>
    </section>

    <div class="marquee" aria-hidden="true"><div><span>YOUNGJUN</span><b>×</b><span>MYUNGJIN</span><b>×</b><span>01 NOV 2026</span><b>×</b><span>YOUNGJUN</span><b>×</b><span>MYUNGJIN</span><b>×</b><span>01 NOV 2026</span></div></div>

    <section class="section greeting" aria-labelledby="greeting-title">
      <p class="section-kicker reveal">INVITATION</p>
      <h2 id="greeting-title" class="reveal">${_(e.message.title)}</h2>
      <p class="greeting__copy reveal">${e.message.lines.map(_).join(`<br>`)}</p>
      <div class="family reveal">
        <p><span>${_(i.father)} · ${_(i.mother)}</span>의 ${_(i.relation)} <strong>${_(i.name)}</strong></p>
        <p><span>${_(a.father)} · ${_(a.mother)}</span>의 ${_(a.relation)} <strong>${_(a.name)}</strong></p>
      </div>
    </section>

    <section class="section story" aria-labelledby="story-title">
      <p class="section-kicker reveal">OUR STORY</p>
      <h2 id="story-title" class="reveal">오랜 연애 끝에, 부부가 됩니다</h2>
      <div class="story__days reveal"><strong>${f.toLocaleString(`ko-KR`)}</strong><span>번째 날</span></div>
      <div class="story__timeline reveal">
        <article><time datetime="2013-11-11">${_(e.story.startText)}</time><strong>우리의 첫날</strong><span>처음 연인이 된 날</span></article>
        <div aria-hidden="true"><i>♥</i></div>
        <article><time datetime="2026-11-01">2026. 11. 01</time><strong>부부가 되는 날</strong><span>평생을 약속하는 날</span></article>
      </div>
      <p class="story__copy reveal">2013년 11월 11일부터 함께한 우리,<br>2026년 11월 1일 새로운 이름으로 시작합니다.</p>
    </section>

    <section class="section date-section" aria-labelledby="date-title">
      <p class="section-kicker reveal">THE WEDDING DAY</p>
      <h2 id="date-title" class="reveal">${c}월 ${l}일, ${u}</h2>
      <p class="date-section__time reveal">${_(e.wedding.dateText.split(` `).slice(-3).join(` `))}</p>
      <div class="calendar reveal" aria-label="${s}년 ${c}월 달력">
        <div class="calendar__header"><span>${s}</span><strong>${String(c).padStart(2,`0`)}</strong><span>WEDDING DAY</span></div>
        <div class="calendar__week"><span>일</span><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span></div>
        <div class="calendar__days">${S}</div>
      </div>
      <div class="countdown reveal" aria-label="예식일까지 남은 시간">
        <div><strong data-count="days">--</strong><span>DAYS</span></div><b>:</b>
        <div><strong data-count="hours">--</strong><span>HOUR</span></div><b>:</b>
        <div><strong data-count="minutes">--</strong><span>MIN</span></div><b>:</b>
        <div><strong data-count="seconds">--</strong><span>SEC</span></div>
      </div>
      <p class="countdown-message reveal">${_(i.name)}, ${_(a.name)}의 결혼식이 <strong data-count-message>다가오고 있습니다.</strong></p>
      <button class="line-button reveal" type="button" data-calendar>캘린더에 일정 저장</button>
    </section>

    <section class="section gallery" aria-labelledby="gallery-title">
      <p class="section-kicker reveal">GALLERY</p>
      <h2 id="gallery-title" class="reveal">우리의 순간</h2>
      <p class="section-note reveal">우리가 함께 지나온 계절들을 모았습니다.</p>
      <div class="gallery__grid reveal">${e.photos.gallery.map((e,t)=>{let n=typeof e==`string`?e:e.src,r=typeof e==`string`?`portrait`:e.orientation;return v(n,`웨딩 사진 ${t+1}`,`photo--${r}`)}).join(``)}</div>
    </section>

    <section class="section location" aria-labelledby="location-title">
      <p class="section-kicker reveal">LOCATION</p>
      <h2 id="location-title" class="reveal">오시는 길</h2>
      <div class="location__summary reveal">
        <strong>${_(e.wedding.venue)}</strong>
        <span>${_(e.wedding.hall)}</span>
        <p>${_(e.wedding.address)}</p>
      </div>
      <div class="map-placeholder reveal" aria-label="지도 영역">
        <span>MAP</span><p>${_(e.wedding.address)}</p>
      </div>
      <div class="map-buttons reveal">
        <a href="https://map.naver.com/p/search/${encodeURIComponent(e.wedding.mapQuery)}" target="_blank" rel="noopener">네이버 지도</a>
        <a href="https://map.kakao.com/link/search/${encodeURIComponent(e.wedding.mapQuery)}" target="_blank" rel="noopener">카카오맵</a>
      </div>
      <div class="transport reveal">${e.transport.map(e=>`<article><span>${_(e.icon)}</span><div><h3>${_(e.title)}</h3><p>${_(e.text)}</p></div></article>`).join(``)}</div>
    </section>

    <section class="section wedding-notice" aria-labelledby="wedding-notice-title">
      <p class="section-kicker reveal">WITH GRATITUDE</p>
      <h2 id="wedding-notice-title" class="reveal">마음만 감사히 받겠습니다</h2>
      <div class="no-gift reveal"><span aria-hidden="true">♡</span><p>${_(e.notice)}</p></div>
    </section>

    ${w(!0)}`;let T=e=>{n.textContent=e,n.classList.add(`is-visible`),window.clearTimeout(T.timer),T.timer=window.setTimeout(()=>n.classList.remove(`is-visible`),1800)},E=async e=>{try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.append(t),t.select(),document.execCommand(`copy`),t.remove()}T(`복사했습니다.`)};document.querySelectorAll(`[data-copy]`).forEach(e=>e.addEventListener(`click`,()=>E(e.dataset.copy))),document.querySelectorAll(`[data-photo]`).forEach(e=>e.addEventListener(`click`,()=>{r.querySelector(`img`).src=e.dataset.photo,r.showModal()})),r.querySelector(`.photo-modal__close`).addEventListener(`click`,()=>r.close()),r.addEventListener(`click`,e=>{e.target===r&&r.close()}),document.querySelector(`[data-share]`)?.addEventListener(`click`,async()=>{let e={title:document.title,text:`${i.name} · ${a.name}의 결혼 소식을 전합니다.`,url:location.href};if(navigator.share)try{await navigator.share(e)}catch{}else E(location.href)}),document.querySelector(`[data-calendar]`)?.addEventListener(`click`,()=>{let t=e=>e.toISOString().replace(/[-:]/g,``).replace(/\.\d{3}/,``),n=new Date(o.getTime()+7200*1e3),r=p===`family`?`${i.name} & ${a.name} 가족 일정`:`${i.name} & ${a.name} 결혼식`,s=p===`family`?`${e.familyLocation.venue} ${e.familyLocation.room}`:`${e.wedding.venue} ${e.wedding.hall}`,c=[`BEGIN:VCALENDAR`,`VERSION:2.0`,`BEGIN:VEVENT`,`DTSTART:${t(o)}`,`DTEND:${t(n)}`,`SUMMARY:${r}`,`LOCATION:${s}`,`END:VEVENT`,`END:VCALENDAR`].join(`\r
`),l=document.createElement(`a`);l.href=URL.createObjectURL(new Blob([c],{type:`text/calendar`})),l.download=`wedding.ics`,l.click(),URL.revokeObjectURL(l.href)});let D=()=>{let e=Math.max(0,o.getTime()-Date.now()),t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5)%24,minutes:Math.floor(e/6e4)%60,seconds:Math.floor(e/1e3)%60};Object.entries(t).forEach(([e,t])=>{let n=document.querySelector(`[data-count="${e}"]`);n&&(n.textContent=String(t).padStart(2,`0`))});let n=document.querySelector(`[data-count-message]`);n&&(n.textContent=e?`${t.days}일 남았습니다.`:`오늘입니다.`)};D(),window.setInterval(D,1e3);let O=new IntersectionObserver(e=>e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-shown`),O.unobserve(e.target))}),{threshold:.12});document.querySelectorAll(`.reveal`).forEach(e=>O.observe(e));let k=document.querySelector(`.hero`);k.addEventListener(`pointermove`,e=>{let t=k.getBoundingClientRect();k.style.setProperty(`--pointer-x`,`${(e.clientX-t.left)/t.width*100}%`),k.style.setProperty(`--pointer-y`,`${(e.clientY-t.top)/t.height*100}%`)},{passive:!0});let A=document.querySelector(`.scroll-progress i`),j=!1,M=()=>{let e=document.documentElement.scrollHeight-innerHeight;A.style.transform=`scaleX(${e>0?Math.min(1,scrollY/e):0})`,j=!1};addEventListener(`scroll`,()=>{j||=(requestAnimationFrame(M),!0)},{passive:!0}),M()})();