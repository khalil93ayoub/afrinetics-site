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
    platform: 'instagram',
    icon: `
      <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    `,
    href: 'https://www.instagram.com/afri_netics/'
  },
  {
    label: 'Facebook',
    platform: 'facebook',
    icon: `
      <svg width="22" height="22" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M14.2 8.2V6.8c0-.7.5-1.2 1.3-1.2H17V3.1c-.7-.1-1.6-.2-2.5-.2-2.6 0-4.3 1.6-4.3 4.5v.8H7.5v3h2.7V21h3.4v-9.8h2.8l.5-3h-3.3Z" />
      </svg>
    `,
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
  anchor.className = `social-link social-link--${link.platform}`
  anchor.href = link.href
  anchor.target = '_blank'
  anchor.rel = 'noreferrer'
  anchor.ariaLabel = `Open Afrinetics on ${link.label}`
  anchor.innerHTML = link.icon

  return anchor
}

function setupProductGallery() {
  const mainImage = document.querySelector('#product-showcase')
  const thumbnails = [...document.querySelectorAll('.gallery-thumb')]
  const stageButton = document.querySelector('[data-gallery-open]')
  const lightbox = document.querySelector('#image-lightbox')
  const lightboxImage = lightbox?.querySelector('.lightbox__image')
  const lightboxClose = lightbox?.querySelector('.lightbox__close')

  if (!mainImage || thumbnails.length === 0) {
    return
  }

  function setActiveThumbnail(selected) {
    thumbnails.forEach((thumbnail) => {
      const isActive = thumbnail === selected
      thumbnail.classList.toggle('is-active', isActive)
      thumbnail.setAttribute('aria-pressed', String(isActive))
    })
  }

  function showImage(thumbnail) {
    const nextSrc = thumbnail.dataset.galleryImage
    const nextAlt = thumbnail.dataset.galleryAlt

    if (!nextSrc || !nextAlt) {
      return
    }

    mainImage.src = nextSrc
    mainImage.alt = nextAlt
    setActiveThumbnail(thumbnail)
  }

  function closeLightbox() {
    if (!lightbox) {
      return
    }

    lightbox.hidden = true
    document.body.classList.remove('has-lightbox')
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => showImage(thumbnail))
  })

  stageButton?.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) {
      return
    }

    lightboxImage.src = mainImage.src
    lightboxImage.alt = mainImage.alt
    lightbox.hidden = false
    document.body.classList.add('has-lightbox')
    lightboxClose?.focus()
  })

  lightboxClose?.addEventListener('click', closeLightbox)

  lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox()
    }
  })
}

document
  .querySelector('#product-grid')
  .replaceChildren(...products.map(createProductCard))

document
  .querySelector('#social-links')
  .replaceChildren(...socialLinks.map(createSocialLink))

setupProductGallery()
