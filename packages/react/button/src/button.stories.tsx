import { Button } from './button';
import { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Componentes/Button',
	component: Button,
	tags: ['autodocs'],
} as Meta<typeof Button>;

const Template: StoryObj<typeof Button> = {
	render: (args) => <Button {...args} />,
};

export const Default: StoryObj<typeof Button> = {
	...Template,
	args: {
		children: 'Test 1',
	},
};

export const Disabled: StoryObj<typeof Button> = {
	...Template,
	args: {
		children: 'Test 2',
		disabled: true,
	},
};
