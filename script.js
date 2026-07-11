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
    shortTitle: 'Basic T-Shirt',
    tagline: 'Timeless. Versatile. Essential.',
    description:
      'The Afrinetics Basic T-Shirt is crafted for clean everyday wear, soft comfort, and a direct identity statement.',
    headline: 'Pure roots, clean style, and everyday pride made for confident movement.',
    status: 'Available now',
    badge: '€24.99',
    image: '/assets/seamless/basic-shirt.png?v=20260709-2',
    alt: 'Afrinetics Basic black half-sleeve t-shirt banner',
    available: true,
    features: ['100% cotton', 'Soft feel', 'Everyday fit'],
    photos: [
      {
        label: 'Front and back',
        src: '/assets/product-photos/basic-grid.jpg?v=20260711-1',
        alt: 'Model wearing Afrinetics Basic t-shirt front and back'
      },
      {
        label: 'Front view',
        src: '/assets/product-photos/basic-front.jpg?v=20260711-1',
        alt: 'Front view of Afrinetics Basic t-shirt on model'
      },
      {
        label: 'Side view',
        src: '/assets/product-photos/basic-side.jpg?v=20260711-1',
        alt: 'Side view of Afrinetics Basic t-shirt on model'
      },
      {
        label: 'View grid',
        src: '/assets/product-photos/basic-views.jpg?v=20260711-1',
        alt: 'Grid of Afrinetics Basic t-shirt model views'
      }
    ]
  },
  {
    title: 'Afrinetics Sayajin',
    shortTitle: 'Sayajin T-Shirt',
    tagline: 'Unleash your inner warrior.',
    description:
      'A high-energy graphic drop built around power, focus, and relentless purpose.',
    headline: 'Power in every thread, made for warriors who rise with purpose.',
    status: 'Coming soon',
    badge: 'Coming soon',
    image: '/assets/seamless/sayajin-shirt.png?v=20260709-2',
    alt: 'Afrinetics Sayajin sleeveless black t-shirt banner',
    available: false,
    features: ['Graphic drop', 'Training spirit', 'Coming soon'],
    photos: [
      {
        label: 'Front and back',
        src: '/assets/product-photos/sayajin-grid.jpg?v=20260711-1',
        alt: 'Model wearing Afrinetics Sayajin t-shirt front and back'
      },
      {
        label: 'Front view',
        src: '/assets/product-photos/sayajin-front.jpg?v=20260711-1',
        alt: 'Front view of Afrinetics Sayajin t-shirt on model'
      },
      {
        label: 'Side view',
        src: '/assets/product-photos/sayajin-side.jpg?v=20260711-1',
        alt: 'Side view of Afrinetics Sayajin t-shirt on model'
      },
      {
        label: 'View grid',
        src: '/assets/product-photos/sayajin-views.jpg?v=20260711-2',
        alt: 'Grid of Afrinetics Sayajin t-shirt model views'
      }
    ]
  },
  {
    title: 'Afrinetics Legacy',
    shortTitle: 'Legacy T-Shirt',
    tagline: 'Honor the past. Build the future.',
    description:
      'A heritage-driven piece inspired by discipline, origin, and the strength carried forward.',
    headline: 'Built on legacy, driven by discipline, and worn with unshakable pride.',
    status: 'Coming soon',
    badge: 'Coming soon',
    image: '/assets/seamless/legacy-shirt.png?v=20260709-2',
    alt: 'Afrinetics Legacy grey sleeveless t-shirt banner',
    available: false,
    features: ['Heritage design', 'Statement graphic', 'Coming soon'],
    photos: [
      {
        label: 'Front and back',
        src: '/assets/product-photos/legacy-grid.jpg?v=20260711-2',
        alt: 'Model wearing Afrinetics Legacy t-shirt front and back'
      },
      {
        label: 'Front view',
        src: '/assets/product-photos/legacy-front.jpg?v=20260711-2',
        alt: 'Front view of Afrinetics Legacy t-shirt on model'
      },
      {
        label: 'Side view',
        src: '/assets/product-photos/legacy-side.jpg?v=20260711-2',
        alt: 'Side view of Afrinetics Legacy t-shirt on model'
      },
      {
        label: 'View grid',
        src: '/assets/product-photos/legacy-views.jpg?v=20260711-2',
        alt: 'Grid of Afrinetics Legacy t-shirt model views'
      }
    ]
  },
  {
    title: 'Afrinetics Unbreakable',
    shortTitle: 'Unbreakable T-Shirt',
    tagline: 'Unbreakable mind. Unstoppable spirit.',
    description:
      'A bold sleeveless hoodie concept made for fearless movement and steady confidence.',
    headline: 'Bold spirit, fearless heart, and unshaken pride stitched into every seam.',
    status: 'Coming soon',
    badge: 'Coming soon',
    image: '/assets/seamless/unbreakable-shirt.png?v=20260709-2',
    alt: 'Afrinetics Unbreakable sleeveless hoodie banner',
    available: false,
    features: ['Sleeveless hoodie', 'Bold graphic', 'Coming soon'],
    photos: [
      {
        label: 'Front and back',
        src: '/assets/product-photos/unbreakable-grid.jpg?v=20260711-1',
        alt: 'Model wearing Afrinetics Unbreakable sleeveless hoodie front and back'
      },
      {
        label: 'Front view',
        src: '/assets/product-photos/unbreakable-front.jpg?v=20260711-1',
        alt: 'Front view of Afrinetics Unbreakable sleeveless hoodie on model'
      },
      {
        label: 'Side view',
        src: '/assets/product-photos/unbreakable-side.jpg?v=20260711-1',
        alt: 'Side view of Afrinetics Unbreakable sleeveless hoodie on model'
      }
    ]
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

function createCheckoutPanel(compact = false) {
  const form = document.createElement('form')
  form.className = `checkout-card${compact ? ' checkout-card--compact' : ''}`
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

function createCollectionCard(item, index) {
  const card = document.createElement('article')
  const cardImage = item.photos?.[0] || { src: item.image, alt: item.alt }

  card.className = 'collection-card'
  card.dataset.productIndex = String(index)
  card.innerHTML = `
    <button class="collection-card__media" type="button" aria-label="View ${item.title}">
      <span class="collection-card__status">${item.available ? 'Available' : 'Coming soon'}</span>
      <img src="${cardImage.src}" alt="${cardImage.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
    </button>
    <div class="collection-card__body">
      <p>Afrinetics</p>
      <h3>${item.shortTitle}</h3>
      <span>${item.tagline}</span>
      <strong>${item.available ? product.price : 'Coming soon'}</strong>
      <button class="button collection-card__button" type="button">
        ${item.available ? 'Buy Now' : 'Notify Me'}
      </button>
    </div>
  `

  return card
}

function renderProductDetail(index = 0) {
  const selectedItem = featuredBanners[index] || featuredBanners[0]
  const detail = document.querySelector('#product-detail')
  const kicker = document.querySelector('#product-detail-kicker')
  const title = document.querySelector('#product-detail-title')
  const tagline = document.querySelector('#product-detail-tagline')
  const copy = document.querySelector('#product-detail-copy')
  const features = document.querySelector('#detail-features')
  const thumbs = document.querySelector('#detail-thumbs')
  const stage = document.querySelector('#detail-stage')
  const purchase = document.querySelector('#product-detail-purchase')

  if (!detail || !kicker || !title || !tagline || !copy || !features || !thumbs || !stage || !purchase) {
    return
  }

  kicker.textContent = selectedItem.title
  title.textContent = selectedItem.shortTitle
  tagline.textContent = selectedItem.tagline
  copy.textContent = selectedItem.description

  features.replaceChildren(
    ...selectedItem.features.map((feature) => {
      const item = document.createElement('span')
      item.textContent = feature
      return item
    })
  )

  stage.replaceChildren()

  if (selectedItem.photos.length > 0) {
    const heroImage = document.createElement('img')
    heroImage.className = 'detail-stage__image'
    heroImage.src = selectedItem.photos[0].src
    heroImage.alt = selectedItem.photos[0].alt
    stage.append(heroImage)

    thumbs.replaceChildren(
      ...selectedItem.photos.map((photo, photoIndex) => {
        const thumb = document.createElement('button')
        thumb.className = `detail-thumb${photoIndex === 0 ? ' is-active' : ''}`
        thumb.type = 'button'
        thumb.setAttribute('aria-label', `Show ${photo.label}`)
        thumb.setAttribute('aria-pressed', String(photoIndex === 0))
        thumb.innerHTML = `<img src="${photo.src}" alt="" aria-hidden="true" />`
        thumb.addEventListener('click', () => {
          heroImage.src = photo.src
          heroImage.alt = photo.alt
          thumbs.querySelectorAll('.detail-thumb').forEach((button) => {
            const isActive = button === thumb
            button.classList.toggle('is-active', isActive)
            button.setAttribute('aria-pressed', String(isActive))
          })
        })
        return thumb
      })
    )
  } else {
    thumbs.replaceChildren(
      ...['Front view', 'Side view', 'Back view', 'Model set'].map((label) => {
        const placeholder = document.createElement('button')
        placeholder.className = 'detail-thumb-placeholder'
        placeholder.type = 'button'
        placeholder.textContent = label
        return placeholder
      })
    )

    const imagePlaceholder = document.createElement('div')
    imagePlaceholder.className = 'detail-image-placeholder'
    imagePlaceholder.innerHTML = '<span>Image placeholder</span>'
    stage.append(imagePlaceholder)
  }

  if (selectedItem.available) {
    purchase.replaceChildren(createCheckoutPanel(true))
    setupCheckout()
  } else {
    const notify = document.createElement('a')
    notify.className = 'button notify-button'
    notify.href = 'mailto:khalil93paypal@gmail.com?subject=Afrinetics%20notify%20me'
    notify.textContent = 'Notify Me'
    purchase.replaceChildren(notify)
  }

  document.querySelectorAll('.collection-card').forEach((card) => {
    card.classList.toggle('is-active', Number(card.dataset.productIndex || 0) === index)
  })
}

function setupCollection() {
  const grid = document.querySelector('#collection-grid')

  if (!grid) {
    return
  }

  const cards = featuredBanners.map(createCollectionCard)
  grid.replaceChildren(...cards)

  cards.forEach((card) => {
    const index = Number(card.dataset.productIndex || 0)
    card.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', () => {
        renderProductDetail(index)
        document.querySelector('#product-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })
  })

  renderProductDetail(0)
}

function setupBannerHero() {
  const bannerStack = document.querySelector('#banner-stack')
  const bannerControls = document.querySelector('#banner-controls')

  if (!bannerStack || !bannerControls) {
    return
  }

  let activeBannerIndex = 0

  function setActiveBanner(nextIndex) {
    const selectedIndex = Number(nextIndex) || 0
    const selectedItem = featuredBanners[selectedIndex] || featuredBanners[0]

    activeBannerIndex = selectedIndex

    const card = bannerStack.querySelector('.banner-card')
    card?.querySelector('.banner-card__badge')?.replaceChildren(document.createTextNode(selectedItem.badge))
    card?.querySelector('.banner-card__meta')?.replaceChildren(document.createTextNode(selectedItem.status))
    card?.querySelector('.seamless-card__headline')?.replaceChildren(document.createTextNode(selectedItem.headline))
    card?.querySelector('.seamless-card__title')?.replaceChildren(document.createTextNode(selectedItem.title))

    ;[...bannerStack.querySelectorAll('.seamless-product')].forEach((productButton) => {
      const isActive = Number(productButton.dataset.bannerIndex || 0) === selectedIndex
      productButton.classList.toggle('is-active', isActive)
      productButton.setAttribute('aria-pressed', String(isActive))
    })

    ;[...bannerControls.querySelectorAll('.banner-dot')].forEach((control) => {
      const isActive = Number(control.dataset.bannerIndex || 0) === selectedIndex
      control.classList.toggle('is-active', isActive)
      control.setAttribute('aria-pressed', String(isActive))
    })
  }

  const productButtons = featuredBanners
    .map(
      (item, index) => `
        <button
          class="seamless-product${index === 0 ? ' is-active' : ''}"
          type="button"
          data-banner-index="${index}"
          aria-label="Bring ${item.title} forward"
          aria-pressed="${index === 0}"
        >
          <img src="${item.image}" alt="${item.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />
          <span>${item.title.replace('Afrinetics ', '')}</span>
        </button>
      `
    )
    .join('')

  const bannerCard = document.createElement('div')
  bannerCard.className = 'banner-card is-active'
  bannerCard.setAttribute('role', 'group')
  bannerCard.setAttribute('aria-label', 'Interactive Afrinetics product lineup')
  bannerCard.innerHTML = `
    <picture>
      <source media="(max-width: 720px)" srcset="/assets/seamless/background-mobile.jpg?v=20260709-2" />
      <img
        class="seamless-card__background"
        src="/assets/seamless/background-desktop.jpg?v=20260709-2"
        alt=""
        loading="eager"
        aria-hidden="true"
      />
    </picture>
    <span class="banner-card__badge"></span>
    <span class="seamless-card__headline"></span>
    <span class="seamless-card__divider" aria-hidden="true"></span>
    <div class="seamless-card__lineup">${productButtons}</div>
    <span class="seamless-card__title"></span>
    <span class="banner-card__meta"></span>
  `

  bannerCard.querySelectorAll('.seamless-product').forEach((productButton) => {
    const productIndex = Number(productButton.dataset.bannerIndex || 0)
    productButton.addEventListener('pointerenter', () => setActiveBanner(productIndex))
    productButton.addEventListener('click', () => setActiveBanner(productIndex))
    productButton.addEventListener('focus', () => setActiveBanner(productIndex))
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

  bannerStack.replaceChildren(bannerCard)
  bannerControls.replaceChildren(...controls)
  setActiveBanner(0)
}

document
  .querySelector('#social-links')
  ?.replaceChildren(...socialLinks.map(createSocialLink))

setupBannerHero()
setupCollection()
