export const mockData = {
  personal: {
    name: 'JUNAID ZUBAIR',
    title: 'Full-Stack Developer | AWS Cloud Specialist',
    bio: 'Full-Stack Developer with expertise in the MERN stack, Next.js, and AWS cloud services, dedicated to building high-performance, scalable applications. Specialized in Agentic AI, RAG (Retrieval-Augmented Generation), and AWS Bedrock integration.',
    email: 'junaidzubair376@gmail.com',
    phone: '03213784670',
    location: 'Lahore, Pakistan',
    linkedin: 'https://linkedin.com/in/junaid-zubair-161a51229',
    github: 'https://github.com/Junaid-JnZ'
  },

  experience: [
    {
      role: 'Software Engineer',
      company: 'ExpertsCloud',
      duration: '05/2025 - Present',
      location: 'Bahria Town',
      achievements: [
        'Architected and deployed scalable cloud-based applications using AWS services including EC2, S3, Lambda, DynamoDB, Cognito, IAM, Elastic IP, and Application Load Balancer',
        'Developed advanced AI-powered chatbot systems leveraging AWS Bedrock for Agentic AI implementations, integrating RAG pipelines for intelligent document processing',
        'Built multi-tenant knowledge base systems using AWS Bedrock, Supabase pgvector, and semantic search capabilities',
        'Implemented serverless document processing pipelines using AWS Lambda, S3, and Bedrock Titan Embeddings',
        'Designed secure authentication systems using AWS Cognito, JWT token management, and IAM policies',
        'Led development of multiple AI-powered projects including Founder Dataroom, LenzIQ, and Phantomstrike'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Future Dev Solutions',
      duration: '10/2022 - 04/2025',
      location: 'Johar Town',
      achievements: [
        'Developed and maintained web applications using the MERN stack and Next.js, implementing SSR for enhanced performance and SEO',
        'Led full SDLC activities, covering design, coding, testing, and deployment of diverse web applications',
        'Implemented robust RESTful APIs with Node.js and Express.js, ensuring efficient front-end and back-end communication',
        'Designed highly responsive user interfaces using React.js and HTML/CSS, prioritizing user experience',
        'Implemented Redis cache for application performance optimization',
        'Established secure authentication systems and integrated third-party APIs',
        'Collaborated with cross-functional teams to deliver cutting-edge solutions'
      ]
    }
  ],

  skills: {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python'],
    'Frontend': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Material-UI', 'Redux', 'Vite'],
    'Backend': ['Node.js', 'Express.js', 'AdonisJS', 'Django REST Framework', 'FastAPI'],
    'Databases': ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Redis', 'MySQL'],
    'Cloud & Infrastructure': ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS Bedrock', 'AWS Cognito', 'AWS IAM', 'DynamoDB', 'ECS', 'EKS', 'RDS', 'VPC', 'Serverless'],
    'AI/ML': ['AWS Bedrock', 'Agentic AI', 'RAG', 'Vector Embeddings', 'Semantic Search', 'OpenAI GPT', 'Google Gemini', 'LangChain', 'Pinecone'],
    'Tools & Technologies': ['Git', 'RESTful APIs', 'JWT', 'OAuth', 'pgvector', 'Supabase', 'Stripe', 'WebRTC', 'WebSocket', 'Docker', 'Cypress']
  },

  projects: [
    {
      name: 'ReganByte',
      period: '05/2025 - Present',
      description: 'Built scalable multi-tenant chatbot enabling intelligent Q&A from document knowledge bases. Automated document ingestion pipeline processing PDFs, CSVs, and web content with vector embeddings. Delivered context-aware AI responses using RAG and semantic search capabilities.',
      technologies: ['AWS Bedrock', 'RAG', 'Next.js', 'Supabase', 'Serverless'],
      image: 'https://images.unsplash.com/photo-1763718432504-7716caff6e99',
      link: ''
    },
    {
      name: 'Convo-Note',
      period: '05/2025 - 11/2025',
      description: 'Full-stack healthcare application using AI to transcribe patient-provider conversations and generate structured medical notes (SOAP format). Features real-time audio transcription, AI-powered note generation, vector embeddings, HIPAA-compliant data handling, and subscription billing.',
      technologies: ['React', 'TypeScript', 'AdonisJS', 'MySQL', 'OpenAI Whisper', 'LangChain', 'AWS S3'],
      image: 'https://images.pexels.com/photos/7617612/pexels-photo-7617612.jpeg',
      link: 'https://convo-notes.theexpertscloud.com'
    },
    {
      name: 'Founder Dataroom',
      period: '06/2025 - 12/2025',
      description: 'A secure, multi-tenant document management and sharing platform for founders and companies. Features secure file uploads, Google Drive/OneDrive integration, automated document processing, role-based access control, and subscription management with Stripe.',
      technologies: ['React', 'Material-UI', 'Python', 'AWS Lambda', 'DynamoDB', 'S3', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3',
      link: 'https://foundersdataroom.com'
    },
    {
      name: 'LenzIQ',
      period: '05/2025 - Present',
      description: 'Full-stack IoT camera management platform for remote monitoring of Axis cameras across distributed sites. Features real-time event detection, video recording, alert management, WebRTC streaming, and router telemetry monitoring supporting 2000+ camera units.',
      technologies: ['Django REST', 'React', 'PostgreSQL', 'AWS S3', 'WebRTC', 'WebSocket', 'IoT'],
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
      link: 'https://lenziq-admin-dev.gptglow.com'
    },
    {
      name: 'Phantomstrike',
      period: '05/2025 - Present',
      description: 'Security assessment and reporting platform combining automated scanning with request/review workflow. Implements automated network scanning, AWS cloud configuration scanning, GitHub repository security scanning, and AI readiness assessment capabilities.',
      technologies: ['FastAPI', 'Python', 'React', 'Vite', 'PostgreSQL', 'AWS S3', 'Docker', 'Cypress'],
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      link: 'https://www.phantomstrike.io'
    },
    {
      name: 'Orby POS',
      period: '04/2024 - 04/2025',
      description: 'Complete restaurant solution with admin panel, customer-facing store website, and mobile app. Features menu management, QR-based ordering system, real-time waiter call, and order status tracking for seamless restaurant operations.',
      technologies: ['Next.js', 'PostgreSQL', 'React Native', 'Node.js'],
      image: 'https://customer-assets.emergentagent.com/job_cloud-portfolio-29/artifacts/sos8i6os_image.png',
      link: 'https://orbyqrmenu.co.uk'
    }
  ],

  education: [
    {
      degree: 'BS Computer Science',
      school: 'Punjab University College of Information Technology (PUCIT)',
      period: '10/2018 - 07/2022'
    }
  ],

  certifications: [
    {
      name: 'Operating System and You: Becoming a Power User',
      issuer: 'Google',
      date: '01/2021'
    },
    {
      name: 'Technical Support Fundamentals',
      issuer: 'Google',
      date: '03/2021'
    }
  ]
};

