export const projects = [
    {
        id: 1,
        title: 'Health Oracle',
        subtitle: 'Smart Healthcare Diagnostic System',
        description: 'Engineered an intelligent health system predicting risks for 4 major diseases (heart, lung, liver, diabetes) using ML models with 85-92% accuracy.',
        impact: [
            'Achieved 85-92% accuracy across 4 disease prediction models',
            'Integrated Gemini-powered chatbot increasing efficiency by 50%',
            'Improved user engagement by 60% with prediction history and AI insights'
        ],
        techStack: ['Django', 'SQL', 'TensorFlow', 'SMOTE', 'Gemini API', 'Python'],
        githubUrl: '', // Add your GitHub URL here
        liveUrl: 'https://healthoracle-d1hx.onrender.com/',
        featured: true,
        date: 'Dec 2024 - Jan 2025'
    },
    {
        id: 2,
        title: 'Krishi Mitra',
        subtitle: 'Web3 Full Stack Mobile App for Farmers',
        description: 'Established a blockchain-based agriculture platform with 100 Cr Shankh tokens on Ethereum testnet to revolutionize agricultural transactions.',
        impact: [
            'Deployed 100 Cr Shankh tokens on Ethereum Sepolia testnet',
            'Achieved 91% accuracy with location-aware crop prediction',
            'Streamlined communication between developers and testers'
        ],
        techStack: ['Flutter', 'Sepolia', 'Metamask API', 'ERC20', 'Machine Learning', 'Blockchain'],
        githubUrl: '', // Add your GitHub URL here
        liveUrl: '',
        featured: true,
        date: 'Oct 2024'
    },
    {
        id: 3,
        title: 'Suvidha AI',
        subtitle: 'Internal DRDO Chatbot System',
        description: 'Built an intelligent chatbot using Fast-API, Vector Search, and Gemini API for accurate, context-aware answers to GFR 2017 & PM 2025 queries.',
        impact: [
            'Achieved 92% relevance in internal test queries',
            'Reduced information lookup time by 80%',
            'Implemented semantic search over large rule PDFs with precise citations'
        ],
        techStack: ['Fast-API', 'Vector Search', 'Gemini API', 'Python', 'NLP', 'Document Processing'],
        githubUrl: 'https://github.com/Dhruv852/suvidha',
        liveUrl: '',
        featured: true,
        date: 'Jun 2024 - Jul 2024'
    },
    {
        id: 4,
        title: 'AQI Prediction System',
        subtitle: 'Air Quality Index Forecasting',
        description: 'Formulated a comprehensive ML pipeline for air quality prediction using multiple models with advanced feature engineering.',
        impact: [
            'Achieved R² = 0.92 in pollution level forecasting',
            'Accelerated experimentation by 30-40% with modular OOP architecture',
            'Implemented complete ML pipeline with hyperparameter tuning'
        ],
        techStack: ['Python', 'Scikit-learn', 'Random Forest', 'Decision Tree', 'Grid Search', 'Pandas'],
        githubUrl: '',
        liveUrl: '',
        featured: false,
        date: 'Jul 2024 - Aug 2024'
    }
];

// Helper function to add new projects easily
export const addProject = (project) => {
    return {
        id: projects.length + 1,
        featured: false,
        ...project
    };
};
