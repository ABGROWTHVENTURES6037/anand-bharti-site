/* Shared helpers: builds the college, course and exam cards from data.js */
(function () {
  var F = window.FORM_URL;
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  var BTN = 'w-full bg-primary hover:bg-navy-light text-on-primary font-label-md text-label-md py-2.5 rounded-lg font-semibold text-center transition-colors';
  var CARD = 'bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all p-space-lg flex flex-col justify-between gap-space-md';
  var TAG = 'bg-surface-container-high px-space-xs py-1 rounded font-label-md text-label-md font-semibold text-primary';

  function formBtn(label) {
    return '<a href="' + F + '" target="_blank" rel="noopener noreferrer" class="' + BTN + '">' + esc(label || "Know More") + '</a>';
  }
  function chips(list) {
    return '<div class="flex flex-wrap gap-1">' + list.map(function (x) { return '<span class="' + TAG + '">' + esc(x) + '</span>'; }).join("") + '</div>';
  }
  window.SiteUI = {
    esc: esc,
    formBtn: formBtn,
    collegeCard: function (c) {
      var st = c.streams.map(function (s) { return window.STREAMS[s]; });
      return '<div class="' + CARD + '"><div class="space-y-space-xs">' +
        '<div class="flex items-center justify-between gap-space-xs"><span class="' + TAG + '">' + esc(c.type) + '</span>' +
        '<span class="font-label-md text-label-md text-text-muted flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>' + esc(c.city) + ', ' + esc(c.state) + '</span></div>' +
        '<h3 class="font-headline-sm text-headline-sm text-primary font-bold">' + esc(c.name) + '</h3>' +
        '<p class="font-body-sm text-body-sm text-text-muted">' + esc(c.note) + '</p>' + chips(st) +
        '<p class="font-body-sm text-body-sm text-on-surface-variant"><strong class="text-primary">Entrance exams:</strong> ' + esc(c.exams.join(", ")) + '</p></div>' +
        formBtn("Know More") + '</div>';
    },
    courseCard: function (c) {
      return '<div class="' + CARD + '"><div class="space-y-space-xs">' +
        '<div class="flex items-center justify-between gap-space-xs"><span class="' + TAG + '">' + esc(c.level) + '</span>' +
        '<span class="font-label-md text-label-md text-text-muted flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>' + esc(c.years) + '</span></div>' +
        '<h3 class="font-headline-sm text-headline-sm text-primary font-bold">' + esc(c.name) + '</h3>' +
        '<p class="font-body-sm text-body-sm text-on-surface-variant"><strong class="text-primary">Eligibility:</strong> ' + esc(c.eligibility) + '</p>' +
        '<p class="font-body-sm text-body-sm text-on-surface-variant"><strong class="text-primary">Entrance exams:</strong> ' + esc(c.exams.join(", ")) + '</p>' +
        '<p class="font-body-sm text-body-sm text-on-surface-variant"><strong class="text-primary">Career options:</strong> ' + esc(c.careers) + '</p></div>' +
        formBtn("Know More") + '</div>';
    },
    examCard: function (e) {
      return '<div class="' + CARD + '"><div class="space-y-space-xs">' +
        '<span class="' + TAG + '">' + esc(window.EXAM_FIELDS[e.field]) + '</span>' +
        '<h3 class="font-headline-sm text-headline-sm text-primary font-bold">' + esc(e.name) + '</h3>' +
        '<p class="font-body-sm text-body-sm text-text-muted">' + esc(e.full) + '</p>' +
        '<p class="font-body-sm text-body-sm text-on-surface-variant"><strong class="text-primary">Conducted by:</strong> ' + esc(e.body) + '</p>' +
        '<p class="font-body-sm text-body-sm text-on-surface-variant"><strong class="text-primary">Used for:</strong> ' + esc(e.for) + '</p></div>' +
        formBtn("Know More") + '</div>';
    },
    param: function (k) { return new URLSearchParams(location.search).get(k) || ""; },
    fill: function (sel, map) {
      var el = document.getElementById(sel); if (!el) return;
      Object.keys(map).forEach(function (k) { var o = document.createElement("option"); o.value = k; o.textContent = map[k]; el.appendChild(o); });
    }
  };

  /* Home page blocks */
  var ex = document.getElementById("home-exams");
  if (ex) ex.innerHTML = window.EXAMS.slice(0, 8).map(window.SiteUI.examCard).join("");
  var co = document.getElementById("home-courses");
  if (co) co.innerHTML = window.COURSES.filter(function (c) { return ["B.Tech / BE","MBBS","MBA / PGDM","BA LLB (Integrated)","BCA","B.Des"].indexOf(c.name) > -1; }).map(window.SiteUI.courseCard).join("");
})();
