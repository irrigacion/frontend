import { Root } from './modal.root';
import { Trigger } from './modal.trigger';
import { Content } from './modal.content';

type ModalComposition = typeof Root & {
	Trigger: typeof Trigger;
	Content: typeof Content;
};

const Modal = Root as ModalComposition;
Modal.Trigger = Trigger;
Modal.Content = Content;

export { Modal };
