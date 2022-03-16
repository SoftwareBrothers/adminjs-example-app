import React, { FC, useCallback, useState } from 'react';
import { Box, Button, Modal, ModalProps } from '@adminjs/design-system';

const ModalExample: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = useCallback(() => setShowModal(true), []);

  const modalProps: ModalProps = {
    variant: 'primary',
    label: 'Modal header',
    icon: 'CollapseAll',
    title: 'Modal title',
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttons: [{ label: 'Cancel' }, { label: 'Delete', variant: 'danger' }],
    onClose: () => setShowModal(false),
    onOverlayClick: () => setShowModal(false),
  };

  return (
    <Box>
      <Button onClick={handleButtonClick}>Show modal</Button>
      {showModal && <Modal {...modalProps}></Modal>}
    </Box>
  );
};

export default ModalExample;
