export const experience = [
    {
        id: 1,
        type: 'internship',
        role: 'Tech Intern',
        organization: 'DRDO (Defense Research and Development Organization)',
        location: 'DMSRDE, Kanpur',
        duration: 'Jun 2024 - Jul 2024',
        description: 'Built Suvidha AI, an internal chatbot system for intelligent document processing and semantic search.',
        achievements: [
            'Built Suvidha AI using Fast-API, Vector Search, and Gemini API for context-aware answers',
            'Instrumented semantic search pipelines over large rule PDFs achieving 92% relevance',
            'Shipped production-ready system reducing information lookup time by 80%'
        ],
        impact: {
            metric: '80%',
            description: 'reduction in information lookup time'
        },
        technologies: ['Fast-API', 'Vector Search', 'Gemini API', 'Python', 'NLP']
    },
    {
        id: 2,
        type: 'training',
        role: 'Summer Training',
        organization: 'CSE Pathshala',
        location: 'Advanced Python for ML and AI',
        duration: 'Jul 2024 - Aug 2024',
        description: 'Comprehensive training in machine learning and AI with hands-on project development.',
        achievements: [
            'Formulated AQI prediction system achieving R² = 0.92 in pollution forecasting',
            'Embedded complete ML pipeline with data cleaning, feature engineering, and hyperparameter tuning',
            'Designed modular OOP architecture accelerating experimentation by 30-40%'
        ],
        impact: {
            metric: '0.92 R²',
            description: 'accuracy in AQI forecasting'
        },
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning']
    }
];

export const education = [
    {
        id: 1,
        degree: 'BTech in Computer Science',
        specialization: 'Artificial Intelligence and Machine Learning',
        institution: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        duration: 'Aug 2023 - Present',
        grade: 'CGPA: 9.3',
        status: 'In Progress'
    },
    {
        id: 2,
        degree: 'Senior Secondary (CBSE)',
        institution: 'Dr. Virendra Swaroop Education Centre',
        location: 'Kanpur, Uttar Pradesh',
        duration: 'Apr 2021 - Mar 2022',
        grade: 'Percentage: 95%',
        status: 'Completed'
    }
];
