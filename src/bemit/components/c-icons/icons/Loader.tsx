import { CommonProps } from '../../../../generic/PolymorphicGeneric';
import IconBase, { IconBaseProps } from '../IconBase';
import './_Loader.scss';

interface LoaderProps extends IconBaseProps, CommonProps { }

const Loader = (props: LoaderProps) => {
    return (
        <IconBase
            className='icon-loader'
            {...props}
        >
            <path
                d="M36 22C35.012 29.8926 28.2531 36 20.0621 36C11.1913 36 4 28.8366 4 20C4 11.1634 11.1913 4 20.0621 4V8C20.0621 8 20.0621 8 20.0621 8C13.4089 8 8.0155 13.3726 8.0155 20C8.0155 26.6274 13.4089 32 20.0621 32C26.0312 32 30.9863 27.6754 31.9421 22H36Z"
            />
        </IconBase>
    );
};

export default Loader;