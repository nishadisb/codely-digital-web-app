export const CubeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L90 25 L50 45 L10 25 Z" fill="url(#cube-top)" />
        <path d="M10 25 L50 45 v45 L10 70 Z" fill="url(#cube-left)" />
        <path d="M90 25 L50 45 v45 L90 70 Z" fill="url(#cube-right)" />
        <defs>
            <linearGradient id="cube-top" x1="10" y1="25" x2="90" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#83BEFF" />
                <stop offset="1" stopColor="#006FEA" />
            </linearGradient>
            <linearGradient id="cube-left" x1="10" y1="25" x2="50" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#006FEA" />
                <stop offset="1" stopColor="#081426" />
            </linearGradient>
            <linearGradient id="cube-right" x1="50" y1="45" x2="90" y2="70" gradientUnits="userSpaceOnUse">
                <stop stopColor="#006FEA" />
                <stop offset="1" stopColor="#081426" />
            </linearGradient>
        </defs>
    </svg>
);

export const TorusIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="35" stroke="url(#torus-grad)" strokeWidth="20" />
        <defs>
            <linearGradient id="torus-grad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#83BEFF" />
                <stop offset="0.5" stopColor="#006FEA" />
                <stop offset="1" stopColor="#081426" />
            </linearGradient>
        </defs>
    </svg>
);

export const SphereIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="url(#sphere-grad)" />
        <defs>
            <radialGradient id="sphere-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 35) rotate(90) scale(60)">
                <stop stopColor="#83BEFF" />
                <stop offset="0.7" stopColor="#006FEA" />
                <stop offset="1" stopColor="#081426" />
            </radialGradient>
        </defs>
    </svg>
);

export const StarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5 L61 35 H95 L68 55 L79 85 L50 65 L21 85 L32 55 L5 35 H39 Z" fill="url(#star-grad)" />
        <defs>
            <linearGradient id="star-grad" x1="50" y1="5" x2="50" y2="85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#83BEFF" />
                <stop offset="1" stopColor="#006FEA" />
            </linearGradient>
        </defs>
    </svg>
);
