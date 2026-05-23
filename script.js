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
