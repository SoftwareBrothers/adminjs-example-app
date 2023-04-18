import { Box, Tab, Tabs, Header } from '@adminjs/design-system';
import React, { FC, useState } from 'react';

const TabsPage: FC = () => {
  const [selectedTab, setSelectedTab] = useState('first');

  return (
    <Box variant="grey" id="tabs">
      <Header as="a" href="#tabs">
        Tabs
      </Header>
      <Box variant="container">
        <Tabs currentTab={selectedTab} onChange={setSelectedTab}>
          <Tab id="first" label="First tab">
            First
          </Tab>
          <Tab id="second" label="Second tab">
            Second
          </Tab>
          <Tab id="third" label="Third tab">
            Third
          </Tab>
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabsPage;
