import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function ConfirmationModal({
  title,
  text,
  icon = "archive",
  handleOptionSelected,
  open,
  modalWrapper,
}) {
  const handleModalWrapper = (bool) => {
    if (handleOptionSelected) {
      handleOptionSelected(bool);
    }
    // close modal always
    modalWrapper(false);
  };

  return (
    <Modal
      basic
      onClose={() => modalWrapper(false)}
      onOpen={() => modalWrapper(true)}
      open={open}
      size="small"
    >
      <Header icon>
        <Icon name={icon} />
        {title}
      </Header>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button
          basic
          color="red"
          inverted
          onClick={() => handleModalWrapper(false)}
        >
          <Icon name="remove" /> Não
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => handleModalWrapper(true)}
        >
          <Icon name="checkmark" /> Sim
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ConfirmationModal;
