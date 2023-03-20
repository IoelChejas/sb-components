import './mylabel.css'

export interface MyLabelProps {
    /**
     * Mensaje de la etiqueta
     */
    label: string;

    /**
     * Tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitaliza
     */
    allCaps: boolean;

    /**
     * Color de la etiqueta
     */
    color: 'primary' | 'secondary' | 'tertiary';

    /**
     * Color de la fuente
     */
    fontColor?: string; 

    /**
     * Color de fondo
     */
    backgroundColor?: string; 
}

export const MyLabel = ({ 
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
    return (
        <span 
            className={`label ${size} ${allCaps && 'capitalize'} text-${color}`}
            style={{
                color: fontColor,
                backgroundColor
            }}
        >
            {label}
        </span>
    )
}
