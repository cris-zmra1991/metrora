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
      },
    },
    benefits: {
      title: "Why choose our app?",
      description: "Thousands of companies are already optimizing their social media with us.",
      analytics: {
        title: "Advanced Analytics",
        description: "View clear metrics and make informed decisions."
      },
      scheduler: {
        title: "Smart Scheduling",
        description: "Easily schedule content and save time."
      },
      team: {
        title: "Efficient Collaboration",
        description: "Work with your team from the same platform."
      }
    },
    hero2: {
      title: "One for all and all in one",
      subtitle: "A single tool for all social media tasks: for everyone, whatever your skills, knowledge, and resources.",
      description: "Because we believe that all people, businesses, and companies, no matter their size or budget, deserve to have a prominent place in the digital world in order to connect with their audiences and make their goals a reality.",
      cta: "Create your free account",
    },
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
      },
    },
    benefits: {
      title: "¿Por qué elegir nuestra aplicación?",
      description: "Miles de empresas ya están optimizando sus redes sociales con nosotros.",
      analytics: {
        title: "Análisis Avanzado",
        description: "Visualiza métricas claras y toma decisiones informadas."
      },
      scheduler: {
        title: "Planificación Inteligente",
        description: "Programa contenido fácilmente y ahorra tiempo."
      },
      team: {
        title: "Colaboración Eficiente",
        description: "Trabaja con tu equipo desde una misma plataforma."
      },
    },
    hero2: {
      title: "Uno para todos y todos en uno",
      subtitle: "Una única herramienta para todas las tareas en redes sociales: para todos, sin importar tus habilidades, conocimientos o recursos.",
      description: "Porque creemos que todas las personas, negocios y empresas, sin importar su tamaño o presupuesto, merecen tener un lugar destacado en el mundo digital para conectar con su audiencia y hacer realidad sus objetivos.",
      cta: "Crea tu cuenta gratuita",
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


