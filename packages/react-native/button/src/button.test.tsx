import { render, screen } from '@testing-library/react-native';
import { Button } from './button';

describe('Button (React Native)', () => {
	it('renders with label', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText('Click me')).toBeOnTheScreen();
	});

	it('is disabled when the disabled prop is true', () => {
		render(<Button disabled>Submit</Button>);
		const button = screen.getByText('Submit').closest('TouchableOpacity');
		expect(button).toBeDisabled();
	});
});
