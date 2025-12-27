/**
 * LOTTIE ANIMATIONS CONFIGURATION
 * 
 * This is your central place to manage all Lottie animations.
 * Simply replace the URLs with your chosen animations from LottieFiles.
 * 
 * How to use:
 * 1. Go to https://lottiefiles.com/
 * 2. Find an animation you like
 * 3. Click "Lottie JSON" to get the URL or download the JSON file
 * 4. Replace the URL below or use a local path like '/animations/hero.json'
 * 
 * Recommended animation themes:
 * - Hero: Abstract AI, neural networks, particles, data flow
 * - About: Human + technology, brain, innovation
 * - Skills (Languages): Code, programming, syntax
 * - Skills (Frameworks): Building blocks, architecture
 * - Skills (Tools): Tools, gears, platforms
 * - Contact: Communication, email, connection
 */

export const lottieAnimations = {
    // HERO SECTION - Main landing animation
    hero: {
        url: 'https://lottie.host/embed/placeholder-hero.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '100%', height: '100%' }
    },

    // ABOUT SECTION - Human + Technology theme
    about: {
        url: 'https://lottie.host/embed/placeholder-about.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '100%', height: '100%' }
    },

    // SKILLS SECTION - Languages category
    skillsLanguages: {
        url: 'https://lottie.host/embed/placeholder-code.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '80px', height: '80px' }
    },

    // SKILLS SECTION - Frameworks category
    skillsFrameworks: {
        url: 'https://lottie.host/embed/placeholder-framework.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '80px', height: '80px' }
    },

    // SKILLS SECTION - Tools category
    skillsTools: {
        url: 'https://lottie.host/embed/placeholder-tools.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '80px', height: '80px' }
    },

    // CONTACT SECTION - Communication theme
    contact: {
        url: 'https://lottie.host/embed/placeholder-contact.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '300px', height: '300px' }
    },

    // BACKGROUND PARTICLES (optional)
    particles: {
        url: 'https://lottie.host/embed/placeholder-particles.json', // Replace with your animation
        loop: true,
        autoplay: true,
        style: { width: '100%', height: '100%', opacity: 0.3 }
    }
};

// Alternative: If you download JSON files locally, use this format:
// import heroAnimation from './animations/hero.json';
// export const lottieAnimations = {
//   hero: {
//     animationData: heroAnimation,
//     loop: true,
//     autoplay: true
//   }
// };
