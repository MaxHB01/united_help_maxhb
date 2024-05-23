import {ToolTip} from "@components";
import "./skeleton-card.scss"

interface SkeletonCardProps {
    children: React.ReactNode;
    loading: boolean;
    className?: string;
}

export default function SkeletonCard({children, loading, className, ...rest} : SkeletonCardProps) {

    return <div className={`skeleton-card${(loading) ? ' loading' : ''} ${(className) ? ' ' + className : ''}`} {...rest}>
            {children}
    </div>
}