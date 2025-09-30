import { Content } from './modal.content';
import { Footer } from './modal.footer';
import { Header } from './modal.header';
import { Root } from './modal.root';
import { Trigger } from './modal.trigger';

type ModalComposition = typeof Root & {
	Trigger: typeof Trigger;
	Header: typeof Header;
	Content: typeof Content;
	Footer: typeof Footer;
};

const Modal = Root as ModalComposition;
Modal.Trigger = Trigger;
Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;

export { Modal };
