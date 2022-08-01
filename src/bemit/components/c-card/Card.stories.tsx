import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import Avatar from '../c-avatar/Avatar';
import CardHeader from '../c-cardHeader/CardHeader';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';

import Card from './Card';
import CardMedia from '../c-cardMedia/CardMedia';
import CardActions from '../c-cardActions/CardActions';
import User from '../c-icons/icons/User';
import CardContent from '../c-cardContent/CardContent';
import MoreVert from '../c-icons/icons/i-moreVert/MoreVert';

export default {
    title: "Components/Cards/Card",
    component: Card,
    argTypes: {
        spacing: {
            table: {
                defaultValue: { summary: 0 }
            },
            description: "Card padding spacing"
        },
        variant: {
            table: {
                category: "Inherit from Paper",
                type: { summary: "outline | elevation" },
                defaultValue: { summary: "elevation" }
            },
            control: "radio",
            description: "Variant with border or shadow."
        },
        square: {
            table: {
                category: "Inherit from Paper",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Remove the component's border-radius."
        },
        elevation: {
            table: {
                category: "Inherit from Paper",
                defaultValue: { summary: 1 }
            },
            if: { arg: "variant", eq: "elevation" },
            description: "Shading level is used only if the variant is elevation"
        }
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> =
    (args) =>
        <WrapperThemeComponent
            style={{ width: "350px" }}
        >
            <Card
                spacing={args.spacing}
                variant={args.variant}
                square={args.square}
                elevation={args.elevation}
            >
                <CardHeader
                    title="David Sanchez"
                    subtitle="Frontend developer"
                    avatar={<Avatar
                        size="large"
                        alt="david"
                        src="https://avatars.githubusercontent.com/u/64740931"
                    />}
                    action={<IconButton size="small" edge='end'>
                        <MoreVert />
                    </IconButton>}
                />
                <CardMedia
                    variant="ratio-9-16"
                    src="https://picsum.photos/id/0/367/267"
                    alt="example"
                />
                <CardContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Dolorem, minus quis praesentium atque neque
                    temporibus quo fugit illum, magnam laborum sunt.
                    Cum odio error a tempora non! Molestiae, natus unde!
                </CardContent>
                <CardActions>
                    <IconButton size="small">
                        <User />
                    </IconButton>
                    <IconButton size="small">
                        <Notification />
                    </IconButton>
                </CardActions>
            </Card>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "Card";
Basic.args = {
    spacing: 0,
    variant: "elevation",
    square: false,
    elevation: 1
};