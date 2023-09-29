export interface ITextSlider {
    data: string[];
    returnValue: (textSliderValue: string) => void;
}

export interface ILink {
    children?: React.ReactNode;
    href: string;
    className?: string;
}
