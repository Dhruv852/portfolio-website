import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Logo = ({ className = '', size = 50 }) => {
    return (
        <div className={className} style={{ width: size, height: size }}>
            <DotLottieReact
                src="/dinero-animation.lottie"
                loop
                autoplay
                speed={0.6}
            />
        </div>
    );
};

export default Logo;
