// Home page sidebar: open the Payments and Superannuation links in the same tab.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('#sidebar a[target="_blank"], #sidebar-content a[target="_blank"]');
  if (!a) return;
  var href = a.getAttribute('href') || '';
  if (href.charAt(0) !== '/') return;
  e.preventDefault();
  e.stopPropagation();
  window.location.assign(href);
}, true);
