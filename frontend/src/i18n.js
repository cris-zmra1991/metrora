import { createI18n } from 'vue-i18n'

// Mensajes traducidos
const messages = {
  en: {
    services: 'Services',
    pricing: 'Pricing',
    login: 'Login',
    signup: 'Sign up',
    landing: {
      title: {
        line1: 'Your digital ally in web development',
        line2: 'for growing businesses'
      },
      description: 'Entrepreneurs, online stores, and small agencies are already transforming their digital presence with professional, fast, and customized websites. We create custom web solutions to help you sell more, grow online, and stand out from the competition.',
      cta: 'Get your free quote today',
    },
    benefits: {
      title: "Why choose our services?",
      description: "Small businesses, startups, and growing agencies are turning to professional web solutions to stand out in the digital world. We can help you take that first big step.",
      analytics: {
        title: "Websites optimized for results",
        description: "We create attractive, functional designs focused on attracting customers and generating sales from day one."
      },
      scheduler: {
        title: "Web solutions tailored to your business",
        description: "We design and develop specific features for online stores, product catalogs, or professional services."
      },
      team: {
        title: "Close support and ongoing collaboration",
        description: "You'll be supported throughout every stage of the project. We work with you from the initial idea to the launch to ensure your site meets your goals."
      }
    },
    hero2: {
      title: "Everything you need to be online, in one place",
      subtitle: "A complete web development solution designed for entrepreneurs, small businesses, and growing agencies. Regardless of your technical knowledge or budget, we help you create a professional online presence.",
      description: "Because we believe that every business, regardless of size or stage, deserves a website that represents them with quality, connects with their audience, and enables them to achieve their goals.",
      cta: "Request your free quote today",
    },
    contact: {
      title: "Need support?",
      description: "Send us your inquiry and someone from the team will get back to you.",
      email: "Email address",
      message: "Your message",
      submit: "Send message",
    },
  },
  es: {
    services: 'Servicios',
    pricing: 'Precios',
    login: 'Iniciar sesión',
    signup: 'Registrarse',
    landing: {
      title: {
        line1: 'Tu aliado digital en el desarrollo ',
        line2: 'web para negocios en crecimiento'
      },
      description: 'Emprendedores, tiendas online y pequeñas agencias ya están transformando su presencia digital con sitios web profesionales, rápidos y personalizados. Creamos soluciones web a medida para ayudarte a vender más, crecer online y destacar frente a tu competencia.',
      cta: 'Obtén tu cotización gratis hoy',
    },
    benefits: {
      title: "¿Por qué elegir nuestros servicios?",
      description: "Pequeños negocios, emprendimientos y agencias en crecimiento están apostando por soluciones web profesionales para destacar en el entorno digital. Nosotros te ayudamos a dar ese primer gran paso.",
      analytics: {
        title: "Sitios web optimizados para resultados",
        description: "Creamos diseños atractivos, funcionales y enfocados en captar clientes y generar ventas desde el primer día."
      },
      scheduler: {
        title: "Soluciones web adaptadas a tu negocio",
        description: "Diseñamos y desarrollamos funcionalidades específicas para tiendas online, catálogos de productos o servicios profesionales."
      },
      team: {
        title: "Soporte cercano y colaboración continua",
        description: "Estarás acompañado en cada etapa del proyecto. Trabajamos contigo desde la idea hasta el lanzamiento para asegurarnos de que tu sitio cumpla tus objetivos."
      },
    },
    hero2: {
      title: "Todo lo que necesitas para estar en línea, en un solo lugar",
      subtitle: "Una solución completa de desarrollo web pensada para emprendedores, negocios pequeños y agencias en crecimiento. Sin importar tus conocimientos técnicos o presupuesto, te ayudamos a tener una presencia profesional en Internet.",
      description: "Porque creemos que todos los negocios, sin importar su tamaño o etapa, merecen un sitio web que los represente con calidad, conecte con su audiencia y les permita alcanzar sus metas.",
      cta: "Solicita tu cotización gratuita hoy mismo",
    },
    contact: {
      title: "¿Necesitas soporte?",
      description: "Envíanos tu consulta y alguien del equipo se pondrá en contacto contigo.",
      email: "Correo electrónico",
      message: "Tu mensaje",
      submit: "Enviar mensaje",
    },
  }
}

// Crear instancia de Vue I18n
const i18n = createI18n({
  locale: 'en', // Idioma por defecto
  fallbackLocale: 'en', // Si falta una traducción
  messages
})

export default i18n


