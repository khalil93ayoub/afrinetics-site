const products = [
  {
    size: 'M',
    price: '24,99 €',
    href: 'https://www.ebay.de/itm/366348426609?var=636132495995'
  },
  {
    size: 'L',
    price: '29,99 €',
    href: 'https://www.ebay.de/itm/366348426609?var=636132495994'
  }
]

const socialLinks = [
  {
    label: 'Instagram',
    shortLabel: 'IG',
    href: 'https://www.instagram.com/afri_netics/'
  },
  {
    label: 'Facebook',
    shortLabel: 'f',
    href: 'https://www.facebook.com/afrinetic'
  }
]

function createProductCard(product) {
  const card = document.createElement('article')
  card.className = 'product-card'

  card.innerHTML = `
    <p class="product-card__size">${product.size}</p>
    <div class="product-card__details">
      <p class="product-card__shipping">Free shipping in Germany</p>
      <p class="product-card__price">${product.price}</p>
    </div>
    <a class="button" href="${product.href}" target="_blank" rel="noreferrer">
      Buy on eBay
    </a>
  `

  return card
}

function createSocialLink(link) {
  const anchor = document.createElement('a')
  anchor.className = 'social-link'
  anchor.href = link.href
  anchor.target = '_blank'
  anchor.rel = 'noreferrer'
  anchor.ariaLabel = link.label
  anchor.textContent = link.shortLabel

  return anchor
}

document
  .querySelector('#product-grid')
  .replaceChildren(...products.map(createProductCard))

document
  .querySelector('#social-links')
  .replaceChildren(...socialLinks.map(createSocialLink))
