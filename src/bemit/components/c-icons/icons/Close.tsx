import IconBase from '../IconBase';
import { IconBaseProps } from '../IconBase';
import { CommonProps } from '../../../../generic/PolymorphicGeneric';

interface Props extends IconBaseProps, CommonProps { }

const Close = (props: Props) => {

    return (
        <IconBase
            {...props}
        >
            <path
                d="M9.08579 8.58579C9.86683 7.80474 11.1332 7.80474 11.9142 8.58579L20.5 17.1716L29.0858 8.58579C29.8668 7.80474 31.1332 7.80474 31.9142 8.58579C32.6953 9.36683 32.6953 10.6332 31.9142 11.4142L23.3284 20L31.9142 28.5858C32.6953 29.3668 32.6953 30.6332 31.9142 31.4142C31.1332 32.1953 29.8668 32.1953 29.0858 31.4142L20.5 22.8284L11.9142 31.4142C11.1332 32.1953 9.86683 32.1953 9.08579 31.4142C8.30474 30.6332 8.30474 29.3668 9.08579 28.5858L17.6716 20L9.08579 11.4142C8.30474 10.6332 8.30474 9.36683 9.08579 8.58579Z"
            />

        </IconBase>
    );
};

export default Close;