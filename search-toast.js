document.addEventListener('DOMContentLoaded', function () {
  // Fallback: falls bootstrap nicht vorhanden ist, nichts tun
  if (typeof bootstrap === 'undefined') return;

  const form = document.getElementById('searchForm');
  const input = document.getElementById('searchInput');
  const toastEl = document.getElementById('searchToast');
  if (!form || !input || !toastEl) return;

  const toast = bootstrap.Toast.getOrCreateInstance(toastEl);

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Seite nicht neuladen

    // Client-seitige Sanitization
    let q = input.value || '';
    q = q.trim().slice(0, 200); // Länge begrenzen

    // Zeige Toast (keine Darstellung des Inputs als HTML)
    toast.show();

    // Fokus zurück auf Input
    input.focus();
  });
});