export const BUSINESS = {
  name: 'Mr Dennis Phones',
  // Ghana format: country code 233, then your number WITHOUT the leading 0
  // Example: 024 123 4567 becomes 233241234567
  whatsapp: '233245051351',
}

export const whatsappLink = (message = 'Hello, I am interested in a phone.') =>
    `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`

export const DATA_STORE_URL = "https://simpledatagh.com/store/swift-data-bundles";