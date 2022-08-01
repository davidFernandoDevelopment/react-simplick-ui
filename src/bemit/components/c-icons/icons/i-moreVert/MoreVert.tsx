import { IconBaseProps } from '../../base/IconBase';
import { CommonProps } from '@generic/PolymorphicGeneric';
import IconBaseCSS from '../../base/IconBaseCSS';

interface Props extends IconBaseProps, CommonProps { }

const MoreVert = (props: Props) => {

    return (
        <IconBaseCSS className='i-moreVert' {...props}>
            <span className='i-moreVert__point'></span>
            <span className='i-moreVert__point'></span>
            <span className='i-moreVert__point'></span>
        </IconBaseCSS>
    );
};

export default MoreVert;