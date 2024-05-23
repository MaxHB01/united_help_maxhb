interface LayoutCenterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

import './centered.scss';

export default function CenteredLayout({children, className, ...rest} : LayoutCenterProps) {
    return (
        <main className={`centered${(className) ? ' ' + className : ''}`} {...rest}>
            {children}
        </main>
    );
}