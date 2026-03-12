import { TALENTS } from './data.js'

const grid = document.getElementById('talent-grid')
if (grid) {
  TALENTS.forEach((t) => {
    const card = document.createElement('article')
    card.className = 'talent-card'
    card.innerHTML = `
      <h3>${escapeHtml(t.name)}</h3>
      <p class="tagline">${escapeHtml(t.tagline)}</p>
      <span class="category">${escapeHtml(t.category)}</span>
    `
    grid.appendChild(card)
  })
}

function escapeHtml(str) {
  const div = document.createElement('div')
  div.textContent = str
  return div.innerHTML
}
