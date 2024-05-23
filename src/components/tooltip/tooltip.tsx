type ToolTipProps = {
    text: string;
    accesibilityLabel?: string;
    position: 'top' | 'bottom' | 'left' | 'right';
    children: React.ReactNode;
}

import "./tooltip.scss";

export default function ToolTip({text, position, accesibilityLabel,  children}: ToolTipProps) {
    accesibilityLabel = accesibilityLabel || text;

    return (
        <div className="tooltip" role="tooltip" aria-label={accesibilityLabel}>
            {children}
            <span className={`tooltip-text ${position}`}>{text}</span>
        </div>
    )
}
