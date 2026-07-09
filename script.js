const product = {
  sizes: ['M', 'L'],
  price: '€24.99',
  stripePaymentLink: 'https://buy.stripe.com/fZu28rdeA1vc8XFgWbcIE04'
}

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

const featuredBanners = [
  {
    title: 'Afrinetics Basic',
    status: 'Available now',
    badge: '€24.99',
    desktopImage: '/assets/banners/afrinetics-basic-desktop.png?v=20260709-1',
    mobileImage: '/assets/banners/afrinetics-basic-mobile.png?v=20260709-1',
    alt: 'Afrinetics Basic black half-sleeve t-shirt banner'
  },
  {
    title: 'Afrinetics Sayajin',
    status: 'Coming soon',
    badge: 'Coming soon',
    desktopImage: '/assets/banners/afrinetics-sayajin-desktop.png?v=20260709-1',
    mobileImage: '/assets/banners/afrinetics-sayajin-mobile.png?v=20260709-1',
    alt: 'Afrinetics Sayajin sleeveless black t-shirt banner'
  },
  {
    title: 'Afrinetics Legacy',
    status: 'Coming soon',
    badge: 'Coming soon',
    desktopImage: '/assets/banners/afrinetics-legacy-desktop.png?v=20260709-1',
    mobileImage: '/assets/banners/afrinetics-legacy-mobile.png?v=20260709-1',
    alt: 'Afrinetics Legacy grey sleeveless t-shirt banner'
  },
  {
    title: 'Afrinetics Unbreakable',
    status: 'Coming soon',
    badge: 'Coming soon',
    desktopImage: '/assets/banners/afrinetics-unbreakable-desktop.png?v=20260709-1',
    mobileImage: '/assets/banners/afrinetics-unbreakable-mobile.png?v=20260709-1',
    alt: 'Afrinetics Unbreakable sleeveless hoodie banner'
  }
]

function buildStripeCheckoutUrl(size) {
  const selectedSize = product.sizes.includes(size) ? size : product.sizes[0]
  const orderReference = `AG-${selectedSize}-${Date.now().toString(36).toUpperCase()}`
  const checkoutUrl = new URL(product.stripePaymentLink)

  checkoutUrl.searchParams.set('client_reference_id', orderReference)
  checkoutUrl.searchParams.set('utm_source', 'afrinetics_site')
  checkoutUrl.searchParams.set('utm_medium', 'website')
  checkoutUrl.searchParams.set('utm_campaign', 'affirmative_tshirts')
  checkoutUrl.searchParams.set('utm_content', `size_${selectedSize}`)

  return checkoutUrl.toString()
}

function getSelectedSize(form) {
  const formData = new FormData(form)
  const selectedSize = String(formData.get('size') || product.sizes[0]).toUpperCase()

  return product.sizes.includes(selectedSize) ? selectedSize : product.sizes[0]
}

function createCheckoutPanel() {
  const form = document.createElement('form')
  form.className = 'checkout-card'
  form.id = 'checkout-form'

  const sizeOptions = product.sizes
    .map(
      (size, index) => `
        <label class="size-choice">
          <input type="radio" name="size" value="${size}" ${index === 0 ? 'checked' : ''} />
          <span>${size}</span>
        </label>
      `
    )
    .join('')

  form.innerHTML = `
    <div class="checkout-card__header">
      <div>
        <p class="checkout-card__label">Choose size</p>
        <div class="size-options" role="radiogroup" aria-label="Choose t-shirt size">
          ${sizeOptions}
        </div>
      </div>
      <div class="checkout-card__price" aria-label="Price">
        <span>Price</span>
        <strong>${product.price}</strong>
      </div>
    </div>
    <p class="checkout-card__note">
      Same price for M and L. Your selected size is attached to the Stripe checkout.
    </p>
    <button class="button checkout-card__button" type="submit" data-checkout-button>
      Checkout with Stripe
    </button>
  `

  return form
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

function setupCheckout() {
  const form = document.querySelector('#checkout-form')
  const checkoutButton = form?.querySelector('[data-checkout-button]')

  if (!form || !checkoutButton) {
    return
  }

  function updateButtonLabel() {
    const selectedSize = getSelectedSize(form)
    checkoutButton.textContent = `Checkout size ${selectedSize} with Stripe`
  }

  form.addEventListener('change', updateButtonLabel)
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    window.location.href = buildStripeCheckoutUrl(getSelectedSize(form))
  })

  updateButtonLabel()
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

function setupBannerHero() {
  const bannerStack = document.querySelector('#banner-stack')
  const bannerControls = document.querySelector('#banner-controls')

  if (!bannerStack || !bannerControls) {
    return
  }

  let activeBannerIndex = 0

  function getBannerMotionMetrics() {
    if (window.matchMedia('(max-width: 520px)').matches) {
      return { shiftStep: 2.3, depthStep: 3.8, scaleStep: 0.055, rotateStep: 3 }
    }

    if (window.matchMedia('(max-width: 720px)').matches) {
      return { shiftStep: 2.75, depthStep: 4.2, scaleStep: 0.055, rotateStep: 3 }
    }

    if (window.matchMedia('(max-width: 860px)').matches) {
      return { shiftStep: 4.5, depthStep: 5, scaleStep: 0.06, rotateStep: 4 }
    }

    return { shiftStep: 8.5, depthStep: 8, scaleStep: 0.075, rotateStep: 5 }
  }

  function setActiveBanner(nextIndex) {
    const selectedIndex = Number(nextIndex) || 0
    const metrics = getBannerMotionMetrics()

    activeBannerIndex = selectedIndex

    ;[...bannerStack.querySelectorAll('.banner-card')].forEach((card) => {
      const cardIndex = Number(card.dataset.bannerIndex || 0)
      const isActive = cardIndex === selectedIndex
      const offset = cardIndex - selectedIndex
      const distance = Math.abs(offset)

      card.classList.toggle('is-active', isActive)
      card.setAttribute('aria-pressed', String(isActive))
      card.style.setProperty('--z', String(8 - distance))
      card.style.setProperty('--side-shift', `${offset * metrics.shiftStep}rem`)
      card.style.setProperty('--depth-shift', `${distance * -metrics.depthStep}rem`)
      card.style.setProperty('--turn', `${offset * -metrics.rotateStep}deg`)
      card.style.setProperty('--card-scale', String(Math.max(0.76, 1 - distance * metrics.scaleStep)))
      card.style.setProperty('--card-opacity', String(Math.max(0.52, 1 - distance * 0.12)))
      card.style.setProperty('--card-blur', `${distance * 1.7}px`)
      card.style.setProperty('--card-saturation', String(Math.max(0.68, 1 - distance * 0.08)))
    })

    ;[...bannerControls.querySelectorAll('.banner-dot')].forEach((control) => {
      const isActive = Number(control.dataset.bannerIndex || 0) === selectedIndex
      control.classList.toggle('is-active', isActive)
      control.setAttribute('aria-pressed', String(isActive))
    })
  }

  const bannerCards = featuredBanners.map((item, index) => {
    const button = document.createElement('button')
    button.className = `banner-card${index === 0 ? ' is-active' : ''}`
    button.type = 'button'
    button.dataset.bannerIndex = String(index)
    button.style.setProperty('--offset', String(index))
    button.style.setProperty('--distance', String(index))
    button.setAttribute('aria-label', `Show ${item.title}`)
    button.setAttribute('aria-pressed', String(index === 0))
    button.innerHTML = `
      <picture>
        <source media="(max-width: 720px)" srcset="${item.mobileImage}" />
        <img src="${item.desktopImage}" alt="${item.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
      </picture>
      <span class="banner-card__badge">${item.badge}</span>
      <span class="banner-card__meta">${item.status}</span>
    `

    button.addEventListener('pointerenter', () => setActiveBanner(index))
    button.addEventListener('click', () => setActiveBanner(index))
    button.addEventListener('focus', () => setActiveBanner(index))

    return button
  })

  const controls = featuredBanners.map((item, index) => {
    const control = document.createElement('button')
    control.className = `banner-dot${index === 0 ? ' is-active' : ''}`
    control.type = 'button'
    control.dataset.bannerIndex = String(index)
    control.setAttribute('aria-label', `Show ${item.title}`)
    control.setAttribute('aria-pressed', String(index === 0))
    control.textContent = item.title.replace('Afrinetics ', '')
    control.addEventListener('click', () => setActiveBanner(index))

    return control
  })

  bannerStack.replaceChildren(...bannerCards)
  bannerControls.replaceChildren(...controls)
  setActiveBanner(0)
  window.addEventListener('resize', () => setActiveBanner(activeBannerIndex), { passive: true })
}

const productGrid = document.querySelector('#product-grid')
productGrid?.replaceChildren(createCheckoutPanel())

document
  .querySelector('#social-links')
  ?.replaceChildren(...socialLinks.map(createSocialLink))

setupProductGallery()
setupCheckout()
setupBannerHero()
