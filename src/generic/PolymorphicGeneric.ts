import { SystemStyleProperties } from './systemStyleProperties';

export interface CommonProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    sx?: SystemStyleProperties;
}

interface AsProp<C extends React.ElementType> {
    as?: C;
};

type BaseProps<C extends React.ElementType> = CommonProps & AsProp<C>;


// WITHOUT REF PROP
export type Props<C extends React.ElementType, P = {}> =
    & P
    & BaseProps<C>
    & Omit<React.ComponentPropsWithoutRef<C>, keyof (BaseProps<C> & P)>;

export type CPolymorphic<D extends React.ElementType, P = {}> =
    <C extends React.ElementType = D>(props: Props<C, P>) => React.ReactElement | null;


// WITH REF PROP
export type SVGProps<C extends SVGElement, P = {}> =
    & P
    & CommonProps
    & Omit<React.SVGProps<C>, keyof (CommonProps & P)>;
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
export type PropsRef<C extends React.ElementType, P = {}> =
    & Props<C, P>
    & { ref?: PolymorphicRef<C>; };

export type CPolymorphicRef<D extends React.ElementType, P = {}> =
    <C extends React.ElementType = D> (props: PropsRef<C, P>) => React.ReactElement | null;


























// type AsProp<C extends React.ElementType> = {
//     as?: C;
// };

// type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// type PolymorphicComponent<C extends React.ElementType, Props = {}> =
//     & React.PropsWithChildren<Props & AsProp<C>>
//     & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>["ref"];
// type PolymorphicComponentPropsWithRef<C extends React.ElementType, P> = PolymorphicComponent<C, P> & { ref?: PolymorphicRef<C>; };


// export type Props<C extends React.ElementType, P> = PolymorphicComponent<C, P>;
// export type ComponentWithRef<P> =
//     <C extends React.ElementType> (props: PolymorphicComponentPropsWithRef<C, P>) => React.ReactElement | null;




// const Text: ComponentWithRef<TextProps> = React.forwardRef(
//     <C extends React.ElementType = 'span'>({
//         as,
//         children,
//         color,
//         variant,
//         className,
//         style,
//         ...restProps
//     }: Props<C, TextProps>, ref?: PolymorphicRef<C>) => {
//         const Component = as || 'span';
//         const classes = variant ? `o-${variant}` : '';


//         return (
//             <Component
//                     ref= { ref };
//         {...restProps}
// className = {`${classes} ${className}`}
// style = { style }
//     >
//     { children }
//     < /Component>
//             );
//         }
//     );