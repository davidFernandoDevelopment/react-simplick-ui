interface Props {
    theme?: 'light' | 'dark';
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const WrapperThemeComponent = ({ theme, children, style }: Props) => {
    return (
        <div
            style={style}
            className={`${theme === 'dark' ? 'theme-mode-dark' : ''}`}
        >
            {children}
        </div>
    );
};