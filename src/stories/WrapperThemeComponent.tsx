interface Props {
    theme: 'light' | 'dark';
    children: React.ReactNode;
}

export const WrapperThemeComponent = ({ theme, children }: Props) => {
    return (
        <div className={`${theme === 'dark' ? 'theme-mode-dark' : ''}`}>
            {children}
        </div>
    );
};