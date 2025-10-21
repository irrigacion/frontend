import { CardBody } from './card.body';
import { CardFooter } from './card.footer';
import { CardHeader } from './card.header';
import { Root } from './card.root';

type CardComposition = typeof Root & {
	Header: typeof CardHeader;
	Body: typeof CardBody;
	Footer: typeof CardFooter;
};

const Card = Root as CardComposition;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export * from './card.types';
export { Card };
