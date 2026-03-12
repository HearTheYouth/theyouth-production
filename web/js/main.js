// Huidige nav-link markeren
const path = window.location.pathname
document.querySelectorAll('.site-header nav a[href]').forEach((a) => {
  const href = a.getAttribute('href')
  const isActive =
    path === href ||
    (path === '/' && (href === '/' || href === '/index.html')) ||
    (path.endsWith(href) && href !== '/')
  if (isActive) a.classList.add('active')
})
