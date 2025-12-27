import Lottie from 'lottie-react';

// Wrapper component for Lottie animations
// This component gracefully handles missing animations
const LottiePlayer = ({ animationUrl, style, className }) => {
    // For now, we'll show a placeholder
    // You can replace this with actual Lottie data when you have the animations

    if (!animationUrl) {
        return (
            <div
                className={`flex items-center justify-center ${className || ''}`}
                style={style}
            >
                <div className="text-gray-400 dark:text-gray-600 text-center">
                    <div className="text-4xl mb-2">✨</div>
                    <div className="text-xs">Lottie Animation</div>
                </div>
            </div>
        );
    }

    // When you have actual Lottie JSON data, you can use it like this:
    // return <Lottie animationData={animationData} loop={true} style={style} className={className} />;

    return (
        <div
            className={`flex items-center justify-center ${className || ''}`}
            style={style}
        >
            <div className="text-gray-400 dark:text-gray-600 text-center">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-xs">Lottie Animation</div>
            </div>
        </div>
    );
};

export default LottiePlayer;
