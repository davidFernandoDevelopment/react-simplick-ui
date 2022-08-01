import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '../c-card/Card';

import CardContent from '../c-cardContent/CardContent';
import CardMedia from '../c-cardMedia/CardMedia';
import Text from '../c-text/Text';

import CardActionArea from './CardActionArea';

export default {
    title: "Components/Cards/CardActionArea",
    component: CardActionArea,
    argTypes: {
        centerRipple: {
            table: {
                category: "Inherit from TouchRipple",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The ripple of the TouchRipple component will appear centered"
        },
        disabled: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The button is disabled"
        },
        disableRipple: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The Ripple TouchRipple component is hidden"
        }
    }
} as ComponentMeta<typeof CardActionArea>;

const Template: ComponentStory<typeof CardActionArea> =
    (args) =>
        <WrapperThemeComponent style={{ width: "250px" }}>
            <Card>
                <CardActionArea
                    disabled={args.disabled}
                    centerRipple={args.centerRipple}
                    disableRipple={args.disableRipple}
                >
                    <CardMedia
                        style={{ width: "250px" }}
                        src="https://picsum.photos/id/0/367/267"
                        alt="example"
                    />
                </CardActionArea>
                <CardContent>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Optio cum hic suscipit
                        dolore alias aliquam officia minima
                        perspiciatis? Est unde cum, beatae omnis
                        delectus similique cumque deserunt sed
                        totam a!.
                    </Text>
                </CardContent>
            </Card>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "CardActionArea";
Basic.args = {
    disabled: false,
    centerRipple: false,
    disableRipple: false
};