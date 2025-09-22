import { ITService } from '../types/booking';

export const itServices: ITService[] = [
  {
    id: 'web-dev',
    name: 'Custom Web Development',
    category: 'Development',
    description: 'Full-stack web application development with modern technologies',
    duration: '2-8 weeks',
    price: 2500,
    features: ['React/Vue.js Frontend', 'Node.js Backend', 'Database Design', 'API Integration', 'Responsive Design'],
    rating: 4.9,
    reviews: 127,
    availability: 'available',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Development',
    category: 'Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    duration: '3-12 weeks',
    price: 3500,
    features: ['iOS & Android', 'Cross-platform', 'App Store Deployment', 'Push Notifications', 'Analytics'],
    rating: 4.8,
    reviews: 89,
    availability: 'available',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Services',
    category: 'Infrastructure',
    description: 'Seamless migration of your systems to AWS, Azure, or Google Cloud',
    duration: '1-6 weeks',
    price: 4000,
    features: ['AWS/Azure/GCP', 'Data Migration', 'Security Setup', 'Cost Optimization', '24/7 Support'],
    rating: 4.7,
    reviews: 156,
    availability: 'limited',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Audit',
    category: 'Security',
    description: 'Comprehensive security assessment and vulnerability testing',
    duration: '1-3 weeks',
    price: 1800,
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Security Report', 'Compliance Check', 'Recommendations'],
    rating: 4.9,
    reviews: 203,
    availability: 'available',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics & BI',
    category: 'Analytics',
    description: 'Business intelligence solutions and data visualization dashboards',
    duration: '2-6 weeks',
    price: 3200,
    features: ['Dashboard Creation', 'Data Modeling', 'ETL Processes', 'Reporting Tools', 'Training Included'],
    rating: 4.6,
    reviews: 94,
    availability: 'available',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'it-consulting',
    name: 'IT Strategy Consulting',
    category: 'Consulting',
    description: 'Strategic IT planning and digital transformation guidance',
    duration: '1-4 weeks',
    price: 2200,
    features: ['Technology Roadmap', 'Digital Strategy', 'Process Optimization', 'Vendor Selection', 'Implementation Plan'],
    rating: 4.8,
    reviews: 78,
    availability: 'available',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'devops',
    name: 'DevOps Implementation',
    category: 'Infrastructure',
    description: 'CI/CD pipeline setup and infrastructure automation',
    duration: '2-5 weeks',
    price: 2800,
    features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Monitoring Setup', 'Automation Scripts', 'Team Training'],
    rating: 4.7,
    reviews: 112,
    availability: 'limited',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Platform',
    category: 'Development',
    description: 'Complete e-commerce solution with payment integration',
    duration: '4-10 weeks',
    price: 4500,
    features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Admin Dashboard', 'SEO Optimization'],
    rating: 4.9,
    reviews: 145,
    availability: 'available',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const serviceCategories = [
  'All Services',
  'Development',
  'Infrastructure',
  'Security',
  'Analytics',
  'Consulting'
];

export const timeSlots = [
  { time: '09:00', available: true, price: 0 },
  { time: '10:00', available: true, price: 0 },
  { time: '11:00', available: false, price: 0 },
  { time: '14:00', available: true, price: 0 },
  { time: '15:00', available: true, price: 0 },
  { time: '16:00', available: true, price: 0 },
];