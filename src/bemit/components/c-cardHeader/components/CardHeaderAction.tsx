import { CommonProps } from '@generic/PolymorphicGeneric';


interface CardHeaderActionProps extends CommonProps { }

const CardHeaderAction = ({
    children,
    className,
}: CardHeaderActionProps) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default CardHeaderAction;