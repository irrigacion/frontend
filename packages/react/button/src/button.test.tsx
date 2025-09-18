import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
	it('renders with label', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText('Click me')).toBeInTheDocument();
	});

	it('accepts additional props', () => {
		render(<Button disabled>Submit</Button>);
		expect(screen.getByText('Submit')).toBeDisabled();
	});
});
