export interface ButtonProps {
    onClick?: () => void,
    className?: string,
    children?: React.ReactNode,
    modifier?: string,
    withArrow?: boolean,
    submit?: boolean,
    disabled?: boolean
}
