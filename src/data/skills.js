export const skills = {
    languages: {
        category: 'Languages',
        icon: 'skillsLanguages', // References lottieConfig
        skills: [
            { name: 'Python', level: 'Expert' },
            { name: 'Java', level: 'Advanced' },
            { name: 'C++', level: 'Advanced' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'SQL', level: 'Advanced' }
        ]
    },
    frameworks: {
        category: 'Frameworks & Libraries',
        icon: 'skillsFrameworks',
        skills: [
            { name: 'TensorFlow', level: 'Expert' },
            { name: 'Django', level: 'Advanced' },
            { name: 'Flask', level: 'Advanced' },
            { name: 'React', level: 'Advanced' },
            { name: 'Flutter', level: 'Intermediate' },
            { name: 'LangChain', level: 'Advanced' },
            { name: 'Fast-API', level: 'Advanced' }
        ]
    },
    tools: {
        category: 'Tools & Platforms',
        icon: 'skillsTools',
        skills: [
            { name: 'Git', level: 'Advanced' },
            { name: 'Docker', level: 'Intermediate' },
            { name: 'Google Studio', level: 'Intermediate' },
            { name: 'Firebase', level: 'Intermediate' },
            { name: 'Postman', level: 'Advanced' },
            { name: 'Hugging Face', level: 'Advanced' },
            { name: 'Kaggle', level: 'Advanced' }
        ]
    },
    soft: {
        category: 'Soft Skills',
        icon: null,
        skills: [
            { name: 'Problem-Solving', level: 'Expert' },
            { name: 'Critical Thinking', level: 'Expert' },
            { name: 'Team Collaboration', level: 'Advanced' },
            { name: 'Adaptability', level: 'Advanced' }
        ]
    }
};

export const skillCategories = ['languages', 'frameworks', 'tools'];
