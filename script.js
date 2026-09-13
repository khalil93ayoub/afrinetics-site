const products = [{"slug":"basic","title":"Afrinetics Basic","shortTitle":"Basic T-Shirt","tagline":"Timeless. Versatile. Essential.","description":"The Afrinetics Basic T-Shirt is crafted for clean everyday wear, soft comfort, and a direct identity statement.","image":"/assets/seamless/basic-shirt.png","alt":"Afrinetics Basic black t-shirt","available":true,"price":"€24.99","features":["100% cotton","Soft feel","Everyday fit"],"photos":[{"label":"Front and back","src":"/assets/product-photos/basic-grid.jpg","alt":"Model wearing Afrinetics Basic t-shirt front and back"},{"label":"Front view","src":"/assets/product-photos/basic-front.jpg","alt":"Front view of Afrinetics Basic t-shirt on model"},{"label":"Side view","src":"/assets/product-photos/basic-side.jpg","alt":"Side view of Afrinetics Basic t-shirt on model"},{"label":"View grid","src":"/assets/product-photos/basic-views.jpg","alt":"Grid of Afrinetics Basic t-shirt model views"}]},{"slug":"sayajin","title":"Afrinetics Sayajin","shortTitle":"Sayajin T-Shirt","tagline":"Unleash your inner warrior.","description":"A high-energy graphic drop built around power, focus, and relentless purpose.","image":"/assets/seamless/sayajin-shirt.png","alt":"Afrinetics Sayajin sleeveless black t-shirt","available":false,"features":["Graphic drop","Training spirit","Coming soon"],"photos":[{"label":"Front and back","src":"/assets/product-photos/sayajin-grid.jpg","alt":"Model wearing Afrinetics Sayajin t-shirt front and back"},{"label":"Front view","src":"/assets/product-photos/sayajin-front.jpg","alt":"Front view of Afrinetics Sayajin t-shirt on model"},{"label":"Side view","src":"/assets/product-photos/sayajin-side.jpg","alt":"Side view of Afrinetics Sayajin t-shirt on model"},{"label":"View grid","src":"/assets/product-photos/sayajin-views.jpg","alt":"Grid of Afrinetics Sayajin t-shirt model views"}]},{"slug":"legacy","title":"Afrinetics Legacy","shortTitle":"Legacy T-Shirt","tagline":"Honor the past. Build the future.","description":"A heritage-driven piece inspired by discipline, origin, and the strength carried forward.","image":"/assets/seamless/legacy-shirt.png","alt":"Afrinetics Legacy grey sleeveless t-shirt","available":false,"features":["Heritage design","Statement graphic","Coming soon"],"photos":[{"label":"Front and back","src":"/assets/product-photos/legacy-grid.jpg","alt":"Model wearing Afrinetics Legacy t-shirt front and back"},{"label":"Front view","src":"/assets/product-photos/legacy-front.jpg","alt":"Front view of Afrinetics Legacy t-shirt on model"},{"label":"Side view","src":"/assets/product-photos/legacy-side.jpg","alt":"Side view of Afrinetics Legacy t-shirt on model"},{"label":"View grid","src":"/assets/product-photos/legacy-views.jpg","alt":"Grid of Afrinetics Legacy t-shirt model views"}]},{"slug":"unbreakable","title":"Afrinetics Unbreakable","shortTitle":"Unbreakable T-Shirt","tagline":"Unbreakable mind. Unstoppable spirit.","description":"A bold sleeveless hoodie concept made for fearless movement and steady confidence.","image":"/assets/seamless/unbreakable-shirt.png","alt":"Afrinetics Unbreakable sleeveless hoodie","available":false,"features":["Sleeveless hoodie","Bold graphic","Coming soon"],"photos":[{"label":"Front and back","src":"/assets/product-photos/unbreakable-grid.jpg","alt":"Model wearing Afrinetics Unbreakable sleeveless hoodie front and back"},{"label":"Front view","src":"/assets/product-photos/unbreakable-front.jpg","alt":"Front view of Afrinetics Unbreakable sleeveless hoodie on model"},{"label":"Side view","src":"/assets/product-photos/unbreakable-side.jpg","alt":"Side view of Afrinetics Unbreakable sleeveless hoodie on model"}]}];

const byId = (id) => document.getElementById(id);

function setupReveal() {
  const sections = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { threshold: 0.12 });
  sections.forEach((section) => observer.observe(section));
}

function productCard(product, index) {
  return '<a class="product-card' + (index === 0 ? ' product-card--featured' : '') + '" href="product/' + product.slug + '/">' +
    '<div class="product-card__image"><span class="' + (product.available ? 'available' : 'soon') + '">' + (product.available ? 'Available' : 'Coming soon') + '</span>' +
    '<img src="' + product.photos[0].src + '" alt="' + product.photos[0].alt + '"></div>' +
    '<div class="product-card__footer"><div><span>Afrinetics</span><h3>' + product.shortTitle + '</h3><p>' + product.tagline + '</p></div>' +
    '<strong>' + (product.available ? product.price : 'Next drop') + ' <b>↗</b></strong></div></a>';
}

function renderHome() {
  let activeIndex = 0;
  const heroVisual = document.querySelector('.hero__visual');
  const heroImage = byId('hero-product-image');
  const heroStatus = byId('hero-status');
  const heroTitle = byId('hero-product-title');
  const heroPrice = byId('hero-product-price');
  const currentDropTitle = byId('current-drop-title');
  const dropItems = byId('drop-items');
  const productGrid = byId('product-grid');
  if (!heroVisual || !dropItems || !productGrid) return;

  productGrid.innerHTML = products.map(productCard).join('');
  dropItems.innerHTML = products.map((product, index) =>
    '<button class="drop-item' + (index === 0 ? ' is-active' : '') + '" type="button" data-index="' + index + '" aria-pressed="' + (index === 0) + '">' +
    '<span>' + String(index + 1).padStart(2, '0') + '</span><img src="' + product.image + '" alt="" aria-hidden="true"><strong>' + product.title.replace('Afrinetics ', '') + '</strong></button>'
  ).join('');

  function setActive(index) {
    activeIndex = index;
    const product = products[index] || products[0];
    heroVisual.style.backgroundImage = 'url("' + (product.photos[1] ? product.photos[1].src : product.photos[0].src) + '")';
    heroImage.src = product.image;
    heroImage.alt = product.alt;
    heroStatus.innerHTML = '<b></b> ' + (product.available ? 'Available now' : 'Coming soon');
    heroTitle.textContent = product.shortTitle;
    heroPrice.textContent = product.available ? product.price : 'Next drop';
    currentDropTitle.textContent = product.shortTitle;
    dropItems.querySelectorAll('.drop-item').forEach((item) => {
      const isActive = Number(item.dataset.index) === index;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
  }

  dropItems.querySelectorAll('.drop-item').forEach((item) => {
    item.addEventListener('click', () => setActive(Number(item.dataset.index)));
  });
  setActive(0);

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => setActive((activeIndex + 1) % products.length), 5200);
  }
}

function buildCheckoutUrl(size) {
  const selected = size === 'L' ? 'L' : 'M';
  const url = new URL('https://buy.stripe.com/fZu28rdeA1vc8XFgWbcIE04');
  url.searchParams.set('client_reference_id', 'AG-' + selected + '-AFRINETICS');
  url.searchParams.set('utm_source', 'afrinetics_site');
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', 'affirmative_tshirts');
  url.searchParams.set('utm_content', 'size_' + selected);
  return url.toString();
}

function renderProduct() {
  const slug = document.body.dataset.product;
  const product = products.find((item) => item.slug === slug) || products[0];
  const mainImage = byId('product-main-image');
  const thumbs = byId('product-thumbs');
  const kicker = byId('product-kicker');
  const title = byId('product-title');
  const tagline = byId('product-tagline');
  const description = byId('product-description');
  const features = byId('product-features');
  const purchase = byId('product-purchase');
  if (!mainImage || !thumbs) return;

  kicker.textContent = product.title;
  title.textContent = product.shortTitle;
  tagline.textContent = product.tagline;
  description.textContent = product.description;
  features.innerHTML = product.features.map((feature) => '<span>' + feature + '</span>').join('');
  mainImage.src = product.photos[0].src;
  mainImage.alt = product.photos[0].alt;
  thumbs.innerHTML = product.photos.map((photo, index) =>
    '<button class="' + (index === 0 ? 'is-active' : '') + '" type="button" aria-label="Show ' + photo.label + '" aria-pressed="' + (index === 0) + '">' +
    '<img src="' + photo.src + '" alt="" aria-hidden="true"></button>'
  ).join('');
  thumbs.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener('click', () => {
      mainImage.src = product.photos[index].src;
      mainImage.alt = product.photos[index].alt;
      thumbs.querySelectorAll('button').forEach((item, itemIndex) => {
        item.classList.toggle('is-active', itemIndex === index);
        item.setAttribute('aria-pressed', String(itemIndex === index));
      });
    });
  });

  if (product.available) {
    purchase.innerHTML = '<div class="checkout-box"><div class="checkout-box__top"><div><span>Choose size</span><div class="size-options"><button class="is-active" type="button" data-size="M" aria-pressed="true">M</button><button type="button" data-size="L" aria-pressed="false">L</button></div></div><strong>' + product.price + '</strong></div><p>Your selected size will be attached to the secure Stripe checkout.</p><a class="button button--accent" id="checkout-link" href="' + buildCheckoutUrl('M') + '">Checkout size M <span>↗</span></a></div>';
    purchase.querySelectorAll('[data-size]').forEach((button) => button.addEventListener('click', () => {
      const size = button.dataset.size;
      purchase.querySelectorAll('[data-size]').forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      const checkout = byId('checkout-link');
      checkout.href = buildCheckoutUrl(size);
      checkout.innerHTML = 'Checkout size ' + size + ' <span>↗</span>';
    }));
  } else {
    purchase.innerHTML = '<div class="coming-box"><span class="status-dot"><b></b> Coming soon</span><p>This drop is being prepared. Keep an eye on the next release.</p><a class="button button--light" href="mailto:khalil93paypal@gmail.com?subject=Afrinetics%20notify%20me">Notify me <span>↗</span></a></div>';
  }

  const related = byId('related-grid');
  if (related) {
    related.innerHTML = products.filter((item) => item.slug !== product.slug).slice(0, 3).map((item) =>
      '<a class="related-card" href="../' + item.slug + '/"><img src="' + item.photos[0].src + '" alt="' + item.photos[0].alt + '"><span>' + (item.available ? 'Available' : 'Coming soon') + '</span><strong>' + item.shortTitle + ' ↗</strong></a>'
    ).join('');
  }
}

setupReveal();
if (document.body.dataset.product) renderProduct();
else renderHome();