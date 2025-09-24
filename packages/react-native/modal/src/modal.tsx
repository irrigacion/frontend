import { Root } from './modal.root';
import { Trigger } from './modal.trigger';
import { Content } from './modal.content';
import { Header } from './modal.header';

type ModalComposition = typeof Root & {
	Trigger: typeof Trigger;
	Header: typeof Header;
	Content: typeof Content;
};

const Modal = Root as ModalComposition;
Modal.Trigger = Trigger;
Modal.Header = Header;
Modal.Content = Content;

export { Modal };
