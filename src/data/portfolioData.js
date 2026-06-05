export const personalInfo = {
  name: "Mukilan Muthukumar K",
  role: "Artificial Intelligence & Data Science Engineer | Full-Stack Enthusiast",
  description: "Transforming complex ideas into modern, scalable web applications and intelligent AI solutions.",
  about: "I am a student specializing in Artificial Intelligence and Data Science at Sri Eshwar College of Engineering. I have a strong passion for blending intelligent machine learning models with robust full-stack web applications. My work primarily revolves around the MERN stack and Computer Vision, aiming to build seamless, user-centric experiences."
};

export const skills = {
  webDev: [
    { name: "MongoDB", icon: "Database", description: "NoSQL database for flexible data schemas, storing application data efficiently in JSON-like documents." },
    { name: "Express.js", icon: "Server", description: "Minimalist web framework for Node.js, simplifying API routing and backend controller logic." },
    { name: "React", icon: "Code2", description: "Declarative component-driven frontend library, constructing responsive and highly interactive interfaces." },
    { name: "Node.js", icon: "Box", description: "V8 JavaScript runtime, running high-performance scalable server environments and backend processes." },
    { name: "FastAPI", icon: "Zap", description: "Modern, high-performance web framework for Python, leveraging type hints for automated OpenAPI validation." },
    { name: "Vite", icon: "Wand2", description: "Ultra-fast frontend build tool and dev server, optimizing assets and enabling instant hot module replacement." },
    { name: "WebRTC", icon: "Video", description: "Real-time communication protocol, enabling low-latency browser-to-browser streaming of video and data feeds." },
  ],
  aiMl: [
    { name: "Computer Vision", icon: "Eye", description: "Empowering systems to process, analyze, and extract high-level semantic insights from digital images and videos." },
    { name: "YOLOv8", icon: "Target", description: "State-of-the-art object detection framework, enabling real-time detection, tracking, and pixel segmentation." },
    { name: "UNet", icon: "Layers", description: "Convolutional network architecture for semantic segmentation, isolating image features with pixel-perfect accuracy." },
    { name: "ResNet", icon: "Network", description: "Deep residual network model, resolving vanishing gradients via skip connections for image classification." },
    { name: "OpenCV", icon: "Image", description: "Open-source computer vision library, providing rich algorithms for image processing and matrix calculations." },
    { name: "Deep Learning", icon: "BrainCircuit", description: "Training multi-layer artificial neural networks to model complex data patterns and extract predictive features." },
    { name: "LLM Integration", icon: "MessageSquare", description: "Incorporating state-of-the-art models like Gemini via APIs to enable intelligent conversational responses." },
  ],
  tools: [
    { name: "Python", icon: "FileCode", description: "Versatile high-level programming language, ideal for AI/ML, data analytics, and backend prototyping." },
    { name: "C", icon: "FileCode2", description: "Powerful low-level programming language, enabling direct memory management and high hardware efficiency." },
    { name: "C++", icon: "Terminal", description: "Object-oriented language extending C, crucial for game development, system software, and speed-intensive code." },
    { name: "Java", icon: "Cpu", description: "Class-based object-oriented language running on the JVM, widely used in enterprise backends and Android apps." },
    { name: "Flask", icon: "FlaskConical", description: "Micro web framework for Python, enabling quick and modular deployment of lightweight REST APIs." },
    { name: "IoT", icon: "Wifi", description: "Connecting hardware microcontrollers and sensors with networks to monitor and control environmental parameters." },
    { name: "Location APIs", icon: "MapPin", description: "Integrating maps and geofencing APIs to track real-time coordinates and dispatch localized alerts." },
    { name: "Vercel", icon: "Cloud", description: "Cloud hosting platform optimized for serverless functions, static pages, and instant web deployments." },
    { name: "Render", icon: "CloudCog", description: "Cloud application platform, simplifying backend service hosting, database hosting, and cron operations." },
  ]
};

export const projects = [
  {
    id: 2,
    title: "QuerySphere",
    domain: "AI & Search",
    period: "3 Months",
    targetUser: "Researchers & Knowledge Seekers",
    technologies: ["LLM Integration", "Vector Databases", "Python"],
    description: "An advanced, AI-powered search engine that fundamentally changes how users retrieve information. Moving beyond traditional keyword matching, QuerySphere integrates Large Language Models (LLMs) with sophisticated Vector Databases to understand the semantic context and intent behind user queries. It retrieves, filters, and synthesizes highly relevant information from massive datasets, providing users with precise, context-aware, and conversational answers."
  },
  {
    id: 3,
    title: "HemoLink",
    domain: "Healthcare & Emergency Response",
    period: "3 Months",
    targetUser: "Blood Donors, Patients, Healthcare Professionals, & Volunteers",
    technologies: ["MERN Stack", "React Native", "MongoDB"],
    description: "An integrated, community-driven healthcare platform designed to streamline life-saving blood donations and provide real-time emergency support. HemoLink connects patients, verified donors, and doctors through a robust system that handles emergency blood requests and tracks donation history via digital donor cards. Beyond blood matching, the platform acts as a comprehensive wellness hub featuring medication reminders, prescription tracking, and AI-powered smart tools—including a health guidance chatbot, food scanning, and fitness challenges—to promote overall health awareness."
  },
  {
    id: 5,
    title: "AI PCB Defect Detection System",
    domain: "Manufacturing & AI",
    period: "3 Months",
    targetUser: "Quality Control Teams & Factory Managers",
    technologies: ["YOLOv8", "UNet", "ResNet", "Python"],
    description: "An intelligent quality control system engineered specifically for the electronics manufacturing sector. This project leverages advanced deep learning architectures to automate the inspection of Printed Circuit Boards (PCBs). By combining YOLOv8 for rapid, real-time object detection with UNet and ResNet for precise image segmentation and classification, the system identifies micro-defects (like soldering errors or short circuits) with high accuracy. This significantly reduces manual inspection time and minimizes manufacturing errors."
  },
  {
    id: 7,
    title: "PitchSync",
    domain: "Sports Management",
    period: "3 Months",
    targetUser: "Turf Owners & Players",
    technologies: ["MongoDB", "Express.js", "React", "Node.js (MERN)", "Vercel", "Render"],
    description: "A comprehensive, full-stack cricket turf booking and match management platform designed to bridge the gap between sports facility owners and amateur players. The application features robust role-based access control, providing turf owners with a specialized dashboard to manage bookings, track revenue, and monitor availability. For players, it offers a seamless interface to check real-time turf availability, book slots, and utilize an integrated live scoring system to track match statistics. The backend is optimized and deployed across Vercel and Render for high availability and scalable performance."
  },
  {
    id: 8,
    title: "Travel Tapes",
    domain: "Social & Productivity",
    period: "3 Months",
    targetUser: "Travelers",
    technologies: ["MERN Stack (MongoDB", "Express.js", "React", "Node.js)"],
    description: "A visually engaging multimedia travel journal application tailored for explorers to document and share their journeys. Moving away from standard list-based journals, Travel Tapes is engineered with a unique, interactive \"scrapbook\" aesthetic that focuses on rich visual storytelling. Users can create detailed multimedia logs that combine text, geographic locations, and images into a cohesive narrative, offering a highly personalized and immersive user experience."
  },
  {
    id: 9,
    title: "Smart Safety & CCTV",
    domain: "Industrial Safety",
    period: "3 Months",
    targetUser: "Industrial & Factory Managers",
    technologies: ["FastAPI", "WebRTC", "ONNX", "React", "Vite"],
    description: "A high-performance, real-time industrial safety monitoring platform. It streams live CCTV video feeds with ultra-low latency using WebRTC to a responsive React and Vite frontend. The backend, powered by FastAPI, processes these streams through highly optimized ONNX machine learning models. The system continuously analyzes the footage for safety compliance—such as detecting if workers are wearing hardhats or if unauthorized personnel have entered restricted zones—and triggers instant alerts for facility managers."
  },
  {
    id: 10,
    title: "RoadSoS",
    domain: "Emergency Response",
    period: "3 Months",
    targetUser: "Road Users & Emergency Services",
    technologies: ["Location APIs", "Real-time Geofencing", "Mobile/Web integration"],
    description: "A critical emergency response application designed to protect road users. RoadSoS utilizes precise Location APIs and real-time geofencing to instantly connect individuals in distress with the nearest emergency services. In the event of an accident or breakdown, the system tracks the user's exact coordinates and dispatches automated, critical alerts to relevant authorities and emergency contacts, facilitating a rapid and coordinated rescue response."
  }
];

export const achievements = [
  {
    id: 1,
    title: "Smart India Hackathon (SIH) 2025",
    date: "2025",
    description: "Selected to participate with the team 'Miles & Memories'."
  },
  {
    id: 2,
    title: "CREONIX'25 National Level Hackathon",
    date: "September 27-28, 2025",
    description: "Secured a position in final round. Organized by Easwari Engineering College and Nokia."
  },
  {
    id: 3,
    title: "NPTEL Certification - Database Management System",
    date: "Jul - Sep 2025",
    description: "Successfully cleared the 8-week Database Management System course offered by IIT Kharagpur, reinforcing core relational schema concepts."
  },
  {
    id: 4,
    title: "MERN Stack Internship",
    date: "December 2025",
    description: "Successfully completed a MERN Stack internship with Better Tomorrow Training Institute, pressure-testing API routing and database structures."
  },
  {
    id: 5,
    title: "NPTEL Elite Certification - Design Thinking",
    date: "Jan - Feb 2026",
    description: "Earned NPTEL Elite Certification (81% score) for 'Design Thinking - A Primer' course by IIT Madras."
  }
];
