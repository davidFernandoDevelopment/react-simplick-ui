import { CommonProps } from '@generic/PolymorphicGeneric';


interface CardHeaderContentProps extends CommonProps { }

const CardHeaderContent = ({
    children,
    className,
}: CardHeaderContentProps) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default CardHeaderContent;