interface ExperienceItem {
  company: string;
  position: string;
  description: string[];
  period: string;
  isActive?: boolean;
  icon?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  description?: string[];
  period: string;
  isCompleted?: boolean;
  grade?: string;
  icon?: string;
  imagePath?: string;
  altText?: string;
  href?: string;
  thesis?: {
    title: string;
    description: string;
    link?: string;
  };
}
interface CertificationItem {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  expirationDate?: string; // Opcional para certificaciones sin expiración
  credentialID?: string;
  credentialURL?: string;
  skillsVerified: string[];
  icon?: string;
  isPermanent?: boolean;
  verification?: {
    method: 'URL' | 'PDF' | 'Code';
    link?: string;
    code?: string;
  };
}

export interface ProjectProps {
  name: string;
  description: string;
  url: string;
  image: string;
  tags?: string[];
  metrics?: string[];
}

// En archivo timeline-data.ts
export const experienceItem: ExperienceItem[] = [
    
  {
    company: "Kairos",
    position: "Desarrollador java",
    description: [
      "✔️ Creacion y mantenimiento de modulos en java",
      "✔️ Microservicios creados con Spring ",
      "✔️ Optimización de microservicios y refactorizacion de codigo java",
      "✔️ Actualización de codigo a versiones más actuales de java"
    ],
    period: "2025 - presente",
    icon:`<svg width="40px" height="40px" viewBox="-204.8 -204.8 1433.60 1433.60" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M852.8 901.6h-688c-66.4 0-120-53.6-120-120V368.8c0-66.4 53.6-120 120-120h688c66.4 0 120 53.6 120 120v413.6c0 65.6-53.6 119.2-120 119.2z" fill="#D6AB7F"></path><path d="M146.4 687.2h730.4c35.2 0 68-11.2 95.2-31.2V368c0-66.4-53.6-120-120-120h-688c-66.4 0-120 53.6-120 120v283.2c29.6 23.2 64.8 36 102.4 36z" fill="#0D1014"></path><path d="M852.8 909.6h-688c-70.4 0-128-57.6-128-128V368.8c0-70.4 57.6-128 128-128h688c70.4 0 128 57.6 128 128v413.6c0 69.6-57.6 127.2-128 127.2z m-688-652.8c-61.6 0-112 50.4-112 112v413.6c0 61.6 50.4 112 112 112h688c61.6 0 112-50.4 112-112V368.8c0-61.6-50.4-112-112-112h-688z" fill="#6A576D"></path><path d="M508.8 729.6c-22.4 0-40-17.6-40-40v-45.6h80v45.6c0 21.6-17.6 40-40 40z" fill="#FFFFFF"></path><path d="M508.8 737.6c-26.4 0-48-21.6-48-48V640c0-4.8 3.2-8 8-8h80c4.8 0 8 3.2 8 8v49.6c0 26.4-21.6 48-48 48z m-32-90.4v41.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-41.6h-64z" fill="#6A576D"></path><path d="M247.2 214.4H148.8c-62.4 0-113.6 50.4-114.4 113.6L32 523.2c-0.8 64 50.4 116 114.4 116h730.4c64 0 115.2-52 114.4-116l-2.4-196c-0.8-62.4-52-113.6-114.4-113.6H247.2" fill="#938993"></path><path d="M877.6 647.2H146.4c-32.8 0-64-12.8-87.2-36.8C36 587.2 24 556 24 523.2l2.4-196c0.8-67.2 56-120.8 122.4-120.8h726.4c67.2 0 121.6 54.4 122.4 120.8l2.4 196c0 32.8-12 64-35.2 88-23.2 23.2-54.4 36-87.2 36zM148.8 222.4c-58.4 0-105.6 47.2-106.4 105.6L40 523.2c0 28.8 10.4 56 30.4 76 20 20.8 47.2 32 76 32h730.4c28.8 0 56-11.2 76-32s31.2-47.2 30.4-76l-2.4-196c-0.8-58.4-48.8-105.6-106.4-105.6H148.8z" fill="#6A576D"></path><path d="M509.6 505.6h-1.6c-37.6 0-68 31.2-68 67.2v70.4h137.6v-70.4c0.8-36-29.6-67.2-68-67.2z" fill="#EC7BB0"></path><path d="M577.6 647.2H440c-2.4 0-4-0.8-5.6-2.4-1.6-1.6-2.4-3.2-2.4-5.6l0.8-66.4c0-41.6 34.4-75.2 76-75.2h1.6c41.6 0 76 33.6 76 75.2l-0.8 66.4c0 4.8-3.2 8-8 8z m-129.6-16h121.6v-58.4c0-32.8-27.2-59.2-60-59.2h-1.6c-32.8 0-60 26.4-60 59.2v58.4zM680.8 222.4c-4.8 0-8-3.2-8-8 0-26.4-6.4-45.6-19.2-58.4-25.6-25.6-76.8-25.6-136-25.6h-17.6c-59.2 0-110.4 0-136 25.6-12.8 12.8-19.2 32-19.2 58.4 0 4.8-3.2 8-8 8s-8-3.2-8-8c0-31.2 8-53.6 24-69.6 30.4-30.4 84-30.4 147.2-30.4h17.6c62.4 0 116.8 0 147.2 30.4 16 16 24 38.4 24 69.6 0 4-4 8-8 8z" fill="#6A576D"></path></g></svg>`
  },
  {
    company: "DFLL Distribuciones farmaceuticas",
    position: "Full stack developer [java, spring, php, laravel, typescript y react] y analista de datos.",
    description: [
      "✔️ Desarrollo y Mantenimiento de Módulos Clave",
      "✔️ Optimización de Bases de Datos [Normalización , expansión y abtracción de los servivios, para un mayor control y aprovechamiento de los datos.]",
      "✔️ Implementacion de algoritmos de Recomendación de Productos y analisis del negocio.",
      "✔️ Optimizaciones Clave Implementadas [Creacion de microservicios, implementación de memoria cache, centralización de errores, etc... ]",
      "✔️ Seguridad y Cumplimiento [Cifrado de datos, persistencia de datos, cumplimiento de normas sanitarias y contables en el sistema de gestión de ventas y compras. etc..]",
      "✔️ Mejora de Procesos [Gestión de recetas medicas por medio de analisis de imagenes, crecimiento de ganancias por medio del analisis  de ventas, conección con sistemas externos para monitorear cambios de precios de proveedores. etc ]"
    ],
    period: "2019 - 2025",
    isActive: true,
    icon: `<svg width="40px" height="40px" viewBox="-204.8 -204.8 1433.60 1433.60" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M852.8 901.6h-688c-66.4 0-120-53.6-120-120V368.8c0-66.4 53.6-120 120-120h688c66.4 0 120 53.6 120 120v413.6c0 65.6-53.6 119.2-120 119.2z" fill="#D6AB7F"></path><path d="M146.4 687.2h730.4c35.2 0 68-11.2 95.2-31.2V368c0-66.4-53.6-120-120-120h-688c-66.4 0-120 53.6-120 120v283.2c29.6 23.2 64.8 36 102.4 36z" fill="#0D1014"></path><path d="M852.8 909.6h-688c-70.4 0-128-57.6-128-128V368.8c0-70.4 57.6-128 128-128h688c70.4 0 128 57.6 128 128v413.6c0 69.6-57.6 127.2-128 127.2z m-688-652.8c-61.6 0-112 50.4-112 112v413.6c0 61.6 50.4 112 112 112h688c61.6 0 112-50.4 112-112V368.8c0-61.6-50.4-112-112-112h-688z" fill="#6A576D"></path><path d="M508.8 729.6c-22.4 0-40-17.6-40-40v-45.6h80v45.6c0 21.6-17.6 40-40 40z" fill="#FFFFFF"></path><path d="M508.8 737.6c-26.4 0-48-21.6-48-48V640c0-4.8 3.2-8 8-8h80c4.8 0 8 3.2 8 8v49.6c0 26.4-21.6 48-48 48z m-32-90.4v41.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-41.6h-64z" fill="#6A576D"></path><path d="M247.2 214.4H148.8c-62.4 0-113.6 50.4-114.4 113.6L32 523.2c-0.8 64 50.4 116 114.4 116h730.4c64 0 115.2-52 114.4-116l-2.4-196c-0.8-62.4-52-113.6-114.4-113.6H247.2" fill="#938993"></path><path d="M877.6 647.2H146.4c-32.8 0-64-12.8-87.2-36.8C36 587.2 24 556 24 523.2l2.4-196c0.8-67.2 56-120.8 122.4-120.8h726.4c67.2 0 121.6 54.4 122.4 120.8l2.4 196c0 32.8-12 64-35.2 88-23.2 23.2-54.4 36-87.2 36zM148.8 222.4c-58.4 0-105.6 47.2-106.4 105.6L40 523.2c0 28.8 10.4 56 30.4 76 20 20.8 47.2 32 76 32h730.4c28.8 0 56-11.2 76-32s31.2-47.2 30.4-76l-2.4-196c-0.8-58.4-48.8-105.6-106.4-105.6H148.8z" fill="#6A576D"></path><path d="M509.6 505.6h-1.6c-37.6 0-68 31.2-68 67.2v70.4h137.6v-70.4c0.8-36-29.6-67.2-68-67.2z" fill="#EC7BB0"></path><path d="M577.6 647.2H440c-2.4 0-4-0.8-5.6-2.4-1.6-1.6-2.4-3.2-2.4-5.6l0.8-66.4c0-41.6 34.4-75.2 76-75.2h1.6c41.6 0 76 33.6 76 75.2l-0.8 66.4c0 4.8-3.2 8-8 8z m-129.6-16h121.6v-58.4c0-32.8-27.2-59.2-60-59.2h-1.6c-32.8 0-60 26.4-60 59.2v58.4zM680.8 222.4c-4.8 0-8-3.2-8-8 0-26.4-6.4-45.6-19.2-58.4-25.6-25.6-76.8-25.6-136-25.6h-17.6c-59.2 0-110.4 0-136 25.6-12.8 12.8-19.2 32-19.2 58.4 0 4.8-3.2 8-8 8s-8-3.2-8-8c0-31.2 8-53.6 24-69.6 30.4-30.4 84-30.4 147.2-30.4h17.6c62.4 0 116.8 0 147.2 30.4 16 16 24 38.4 24 69.6 0 4-4 8-8 8z" fill="#6A576D"></path></g></svg>`
  },
  {
    company: "Sepi Esime Zacatenco",
    position: "Desarrollador java e ingeniero mecánico",
    description: [
      "✔️ Diseño mecánico de una maquina de disco abrasivo ",
      "✔️ Desarrollo de la interfaz de control por medio de java Fx ",
      "✔️ Control de la maquina de disco abrasivo por medio de una raspberry-pi"
    ],
    period: "2019 - 2022",
    icon: `<svg width="40px" height="40px" viewBox="-204.8 -204.8 1433.60 1433.60" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M852.8 901.6h-688c-66.4 0-120-53.6-120-120V368.8c0-66.4 53.6-120 120-120h688c66.4 0 120 53.6 120 120v413.6c0 65.6-53.6 119.2-120 119.2z" fill="#D6AB7F"></path><path d="M146.4 687.2h730.4c35.2 0 68-11.2 95.2-31.2V368c0-66.4-53.6-120-120-120h-688c-66.4 0-120 53.6-120 120v283.2c29.6 23.2 64.8 36 102.4 36z" fill="#0D1014"></path><path d="M852.8 909.6h-688c-70.4 0-128-57.6-128-128V368.8c0-70.4 57.6-128 128-128h688c70.4 0 128 57.6 128 128v413.6c0 69.6-57.6 127.2-128 127.2z m-688-652.8c-61.6 0-112 50.4-112 112v413.6c0 61.6 50.4 112 112 112h688c61.6 0 112-50.4 112-112V368.8c0-61.6-50.4-112-112-112h-688z" fill="#6A576D"></path><path d="M508.8 729.6c-22.4 0-40-17.6-40-40v-45.6h80v45.6c0 21.6-17.6 40-40 40z" fill="#FFFFFF"></path><path d="M508.8 737.6c-26.4 0-48-21.6-48-48V640c0-4.8 3.2-8 8-8h80c4.8 0 8 3.2 8 8v49.6c0 26.4-21.6 48-48 48z m-32-90.4v41.6c0 17.6 14.4 32 32 32s32-14.4 32-32v-41.6h-64z" fill="#6A576D"></path><path d="M247.2 214.4H148.8c-62.4 0-113.6 50.4-114.4 113.6L32 523.2c-0.8 64 50.4 116 114.4 116h730.4c64 0 115.2-52 114.4-116l-2.4-196c-0.8-62.4-52-113.6-114.4-113.6H247.2" fill="#938993"></path><path d="M877.6 647.2H146.4c-32.8 0-64-12.8-87.2-36.8C36 587.2 24 556 24 523.2l2.4-196c0.8-67.2 56-120.8 122.4-120.8h726.4c67.2 0 121.6 54.4 122.4 120.8l2.4 196c0 32.8-12 64-35.2 88-23.2 23.2-54.4 36-87.2 36zM148.8 222.4c-58.4 0-105.6 47.2-106.4 105.6L40 523.2c0 28.8 10.4 56 30.4 76 20 20.8 47.2 32 76 32h730.4c28.8 0 56-11.2 76-32s31.2-47.2 30.4-76l-2.4-196c-0.8-58.4-48.8-105.6-106.4-105.6H148.8z" fill="#6A576D"></path><path d="M509.6 505.6h-1.6c-37.6 0-68 31.2-68 67.2v70.4h137.6v-70.4c0.8-36-29.6-67.2-68-67.2z" fill="#EC7BB0"></path><path d="M577.6 647.2H440c-2.4 0-4-0.8-5.6-2.4-1.6-1.6-2.4-3.2-2.4-5.6l0.8-66.4c0-41.6 34.4-75.2 76-75.2h1.6c41.6 0 76 33.6 76 75.2l-0.8 66.4c0 4.8-3.2 8-8 8z m-129.6-16h121.6v-58.4c0-32.8-27.2-59.2-60-59.2h-1.6c-32.8 0-60 26.4-60 59.2v58.4zM680.8 222.4c-4.8 0-8-3.2-8-8 0-26.4-6.4-45.6-19.2-58.4-25.6-25.6-76.8-25.6-136-25.6h-17.6c-59.2 0-110.4 0-136 25.6-12.8 12.8-19.2 32-19.2 58.4 0 4.8-3.2 8-8 8s-8-3.2-8-8c0-31.2 8-53.6 24-69.6 30.4-30.4 84-30.4 147.2-30.4h17.6c62.4 0 116.8 0 147.2 30.4 16 16 24 38.4 24 69.6 0 4-4 8-8 8z" fill="#6A576D"></path></g></svg>`
  }
];


    export const educationData: EducationItem[] = [
  {
    institution: "Universidad Autonoma Metropolitana",
    degree: "Ingeniería en Matemáticas aplicadas",
    fieldOfStudy: "Matemáticas aplicadas",
    description: [
      "Especialización en fisica cuántica e inteligencia artificial",
    ],
    period: "2022 - presente",
    imagePath:'/src/assets/uam.png',
    isCompleted: false,
    grade: "",
    icon: "fa-graduation-cap",
    // thesis: {
    //   title: "Sistemas de recomendación basados en deep learning",
    //   description: "Desarrollo de un modelo de recomendación para e-commerce",
    //   link: "https://example.com/thesis"
    // }
  },
  {
    institution: "Instituto Politécnico Nacional",
    degree: "Ingenieria en sistemas automotrices",
    fieldOfStudy: "Sistemas de control eléctrico",
    description: [
      "Analisis de sistemas mecanicos y electricos",
      "Diseño y analisis de elementos mecánicos",
      "Modelado de sitemas mecánicos"
    ],
    period: "2012 - 2016",
    imagePath:'/src/assets/ipn.png',
    isCompleted: true,
    icon: "fa-certificate"
  }
];


export const certificationItem:CertificationItem[]=[
  {
    name: "AWS Certified Solutions Architect - Associate",
    issuingOrganization: "Amazon Web Services",
    issueDate: "2023-06-15",
    expirationDate: "2026-06-15",
    credentialID: "AWS123456789",
    credentialURL: "https://www.credly.com/badges/123",
    skillsVerified: [
      "AWS Architecture",
      "Cloud Solutions Design",
      "Cost Optimization"
    ],
    icon: "fa-aws",
    verification: {
      method: 'URL',
      link: 'https://www.credly.com/verify/ABC123'
    }
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuingOrganization: "Google",
    issueDate: "2022-11-30",
    credentialURL: "https://coursera.org/certificate/XYZ456",
    skillsVerified: [
      "Data Cleaning",
      "Data Visualization",
      "SQL",
      "R Programming"
    ],
    icon: "fa-google",
    isPermanent: true
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuingOrganization: "Microsoft",
    issueDate: "2023-03-10",
    expirationDate: "2024-03-10",
    credentialID: "MS987654321",
    skillsVerified: [
      "Azure Administration",
      "Virtual Networking",
      "Storage Management"
    ],
    verification: {
      method: 'Code',
      code: 'MS-123-ABC-456'
    }
  }
]

export const projectItem:ProjectProps []=[
   {
    name: "Sistema de Gestión Farmacéutica",
    description: "Plataforma integral para DFLL con módulos de inventario, ventas y análisis predictivo",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Java", "Spring Boot", "React", "MySQL", "Redis"],
    metrics: ["Reducción 40% tiempo procesos", "15K transacciones/día"]
  },
  {
    name: "Microservicio de Recomendaciones",
    description: "Motor de recomendación de productos para farmacias usando algoritmos ML",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Java 17", "Spring Cloud", "Python", "Apache Kafka"],
    metrics: ["Precisión 89%", "25% aumento en ventas cruzadas"]
  },
  {
    name: "Sistema  POS para celular en Flutter",
    description: "Aplicación móvil para gestión de ventas con integración a microservicios y pasarelas de pago",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Flutter", "gRPC", "Stripe", "MercadoPago", "Spring Boot, laravel , golang"],
    metrics: ["47s tiempo checkout", "0.8% errores manuales"]
  },
  {
    name: "Migración y refactorizacion de codigo java 17 a Java 21",
    description: "Actualización de código legacy",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Java 21", "Gradle", "JUnit 5"],
    metrics: ["65% código convertido", "0 breaking changes"]
  },
  {
    name: "API Gateway Farmacéutico",
    description: "Centralización de servicios con seguridad JWT y rate limiting",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Spring Gateway", "OAuth2", "Docker", "Kubernetes"],
    metrics: ["99.98% uptime", "< 150ms latency"]
  },
  {
    name: "Sistema de Monitoreo de Precios",
    description: "Rastreador de cambios en precios de proveedores con alertas",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Java", "Spring Batch", "Web Scraping", "Telegram API"],
    metrics: ["Detección en <5min", "95% precisión"]
  },
  // {
  //   name: "Webhooks Integration Hub",
  //   description: "Sistema de comunicación bidireccional con proveedores y servicios externos",
  //   url: "#",
  //   image: "/images/projects/webhooks-hub.jpg",
  //   tags: ["Golang", "WebSockets", "Kafka", "React"],
  //   metrics: ["1,200 msg/seg", "< 1s procesamiento"]
  // },
  {
    name: "Controlador de Máquina Abrasiva",
    description: "Interfaz JavaFX para control de dispositivo electromecánico (Proyecto ESIME)",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["JavaFX", "Raspberry Pi", "IoT", "Modbus"],
    metrics: ["Reducción 30% tiempo operación", "0 accidentes"]
  },
  {
    name: "Data Warehouse Farmacéutico",
    description: "Modelado avanzado para análisis de datos y business intelligence",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["PostgreSQL", "Apache Spark", "Power BI", "Data Vault"],
    metrics: ["Consultas 10x más rápidas", "Unificación 7 fuentes"]
  },
  {
    name: "Sistema de Facturación CFDI 4.0",
    description: "Motor de generación masiva de facturas electrónicas con validación SAT",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Java", "Spring Batch", "Apache FOP", "SAT WS"],
    metrics: ["300ms/factura", "70% menos errores"]
  },
  {
    name: "Sistema de pasarela de pagos diverso",
    description: "Pasarela de pagos unificada con múltiples proveedores",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Spring Boot", "Stripe", "PayPal", "SPEI","Mercado pago"],
    metrics: ["99.5% éxito transacciones", "Soporte para diversos pagos e integraciones futuras"]
  },
  {
    name: "Flutter POS Offline-First",
    description: "Aplicación móvil para ventas con sincronización diferida",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["Flutter", "HiveDB", "gRPC", "SQLite"],
    metrics: ["Funcionalidad 100% offline", "Sync en <30s"]
  },
  // {
  //   name: "HL7 FHIR Interface Engine",
  //   description: "Adaptador para interoperabilidad entre sistemas médicos",
  //   url: "#",
  //   image: "/images/projects/hl7-fhir.jpg",
  //   tags: ["HAPI FHIR", "Kafka", "Docker Swarm"],
  //   metrics: ["1.5K msg/seg", "Certificación HL7"]
  // },
  {
    name: "Prescription OCR",
    description: "Procesamiento de imágenes de recetas médicas con validación",
    url: "#",
    image: "/src/assets/about-astro.png",
    tags: ["OpenCV", "Tesseract", "Spring Integration"],
    metrics: ["80.7% precisión", "88.3% validación auto"]
  }
]