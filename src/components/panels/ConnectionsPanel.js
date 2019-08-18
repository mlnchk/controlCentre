import React, { useState } from "react";

import Row from "../Row";
import Panel from "../Panel";
import Modal from "../Modal";
import Icon from "../Icon";

const ConnectionsPanel = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Panel size="m" onLongPress={() => setIsModalVisible(true)}>
        <Row>
          <Icon name="airplane" />
          <Icon name="cellular" />
        </Row>
        <Row>
          <Icon name="wifi" />
          <Icon name="bluetooth" />
        </Row>
      </Panel>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
      >
        <Row>
          <Icon withTitle name="airplane" />
          <Icon withTitle name="cellular" />
        </Row>
        <Row>
          <Icon withTitle name="wifi" />
          <Icon withTitle name="bluetooth" />
        </Row>
        <Row>
          <Icon withTitle name="airdrop" />
          <Icon withTitle name="hotspot" />
        </Row>
      </Modal>
    </>
  );
};

export default ConnectionsPanel;
