import { CommonProps } from '@generic/PolymorphicGeneric';


interface CardHeaderAvatarProps extends CommonProps { }

const CardHeaderAvatar = ({
    children,
    className,
}: CardHeaderAvatarProps) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default CardHeaderAvatar;