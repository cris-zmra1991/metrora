import { createI18n } from 'vue-i18n'

// Mensajes traducidos
const messages = {
  en: {
    logo: 'metrora',
    product: 'Product',
    socialMedia: 'Social Media',
    pricing: 'Pricing',
    agencies: 'Agencies',
    academy: 'Academy',
    login: 'Login',
    signup: 'Sign up',
    landing: {
      title: {
        line1: 'The digital Swiss Army Knife',
        line2: 'for social media marketers'
      },
      description: 'More than 2 million professionals, agencies and brands use Metrora as their one-stop shop for social media and online ad management.',
      cta: 'Create your free account',
      partners: {
        text: 'Google, Meta, X and Pinterest Partner'
      }
    }
  },
  es: {
    logo: 'metrora',
    product: 'Producto',
    socialMedia: 'Redes Sociales',
    pricing: 'Precios',
    agencies: 'Agencias',
    academy: 'Academia',
    login: 'Iniciar sesión',
    signup: 'Registrarse',
    landing: {
      title: {
        line1: 'La navaja suiza digital',
        line2: 'para los marketers de redes sociales'
      },
      description: 'Más de 2 millones de profesionales, agencias y marcas usan Metrora como su solución integral para redes sociales y gestión de anuncios online.',
      cta: 'Crea tu cuenta gratis',
      partners: {
        text: 'Socio de Google, Meta, X y Pinterest'
      }
    }
  }
}

// Crear instancia de Vue I18n
const i18n = createI18n({
  locale: 'en', // Idioma por defecto
  fallbackLocale: 'en', // Si falta una traducción
  messages
})

export default i18n
