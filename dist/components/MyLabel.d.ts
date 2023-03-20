/// <reference types="react" />
import './mylabel.css';
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
