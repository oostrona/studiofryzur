(() => {
  'use strict';

  const hoursEl = document.getElementById('hours');
  const data = hoursEl ? JSON.parse(hoursEl.textContent) : null;
  const wrap = document.querySelector('.week-wrap');
  const rows = Array.from(document.querySelectorAll('.week .day'));
  const WEEKDAYS = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
  // "on Monday", "on Tuesday"... for sentences like "W poniedziałek od 12:00."
  const ON_DAY = { 1: 'W poniedziałek', 2: 'We wtorek', 3: 'W środę', 4: 'W czwartek', 5: 'W piątek', 6: 'W sobotę', 7: 'W niedzielę' };

  // ---------- today on the plait, in Europe/Warsaw time ----------
  function warsawNow() {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Warsaw', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    return { day: WEEKDAYS[get('weekday')], minutes: Number(get('hour')) * 60 + Number(get('minute')) };
  }

  function nextOpening(day) {
    for (let k = 1; k <= 7; k++) {
      const d = ((day - 1 + k) % 7) + 1;
      if (data.days[d]) return { k, d, open: data.days[d][0] };
    }
    return null;
  }

  function sentenceFor(day, minutes) {
    const today = data.days[day];
    //   keeps each time on the line of its preposition ("od 7:00")
    if (today && minutes >= today[0] * 60 && minutes < today[1] * 60) return `Teraz otwarte, do ${today[1]}:00.`;
    if (today && minutes < today[0] * 60) return `Dziś otwieramy o ${today[0]}:00.`;
    const next = nextOpening(day);
    const first = today ? 'Na dziś już zamknięte.' : 'Dziś zamknięte.';
    if (!next) return first;
    return `${first} ${next.k === 1 ? 'Jutro' : ON_DAY[next.d]} od ${next.open}:00.`;
  }

  function renderToday() {
    if (!data) return;
    const { day, minutes } = warsawNow();
    rows.forEach((row) => {
      const d = Number(row.dataset.day);
      const isToday = d === day;
      // on Sunday the plait shows the coming week, so nothing is dimmed
      row.classList.toggle('is-past', day !== 7 && d < day);
      row.classList.toggle('is-today', isToday);
      if (isToday) row.setAttribute('aria-current', 'date');
      else row.removeAttribute('aria-current');
      const note = row.querySelector('[data-note]');
      if (!note) return;
      note.hidden = !isToday;
      note.textContent = isToday ? sentenceFor(day, minutes) : '';
    });
  }
  renderToday();
  setInterval(renderToday, 60 * 1000);

  // ---------- pulling a strand: which days suit mornings or afternoons ----------
  const pulls = Array.from(document.querySelectorAll('.pull[data-pull]'));
  const result = document.querySelector('[data-pull-result]');
  const shiftOf = (hours) => (hours ? (hours[0] < 12 ? 'rano' : 'popo') : null);
  const STANDARD_CLOSE = { rano: 15, popo: 20 };

  function pullSentence(key) {
    const days = Object.keys(data.days).map(Number).filter((d) => shiftOf(data.days[d]) === key)
      .map((d) => {
        const close = data.days[d][1];
        return data.names[d] + (close !== STANDARD_CLOSE[key] ? ` do ${close}:00` : '');
      });
    const list = days.length > 1 ? `${days.slice(0, -1).join(', ')} i ${days.at(-1)}` : days.join('');
    const shift = data.shifts[key];
    return `${shift.label} (${shift.hours}): ${list}.`;
  }

  pulls.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (!data || !wrap) return;
      const key = btn.dataset.pull;
      const on = btn.getAttribute('aria-pressed') !== 'true';
      // keyboard presses (detail 0) switch instantly; pointer presses fade the strands
      wrap.classList.toggle('is-instant', e.detail === 0);
      pulls.forEach((b) => b.setAttribute('aria-pressed', String(b === btn && on)));
      if (on) wrap.dataset.pull = key;
      else delete wrap.dataset.pull;
      rows.forEach((row) => row.classList.toggle('is-match', on && row.dataset.shift === key));
      if (result) result.textContent = on ? pullSentence(key) : '';
    });
  });

  // ---------- mobile call bar: after the first call button scrolls away, until the close ----------
  const bar = document.querySelector('[data-callbar]');
  const heroCall = document.querySelector('.btn-hero');
  const close = document.getElementById('dojazd');
  if (bar && heroCall && 'IntersectionObserver' in window) {
    const link = bar.querySelector('a');
    let heroGone = false;
    let closeInView = false;
    const sync = () => {
      const visible = heroGone && !closeInView;
      bar.classList.toggle('is-visible', visible);
      bar.setAttribute('aria-hidden', String(!visible));
      if (link) link.tabIndex = visible ? 0 : -1;
    };
    new IntersectionObserver(([entry]) => {
      heroGone = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      sync();
    }).observe(heroCall);
    if (close) {
      new IntersectionObserver(([entry]) => {
        closeInView = entry.isIntersecting;
        sync();
      }, { rootMargin: '0px 0px -40% 0px' }).observe(close);
    }
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
