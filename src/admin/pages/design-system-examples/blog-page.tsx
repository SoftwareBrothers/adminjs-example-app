import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DropZone,
  Header,
  Icon,
  Input,
  Label,
  RichTextEditor,
} from '@adminjs/design-system';
import React, { useState } from 'react';

const BlogPage: React.FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handler = (html) => {
    console.log(html);
  };

  return (
    <Box variant="grey" id="blog">
      <Header as="a" href="#blog">
        Blog
      </Header>
      <Box width={1}>
        {isDrawerVisible && (
          <Drawer>
            <DrawerContent>
              <Header.H3>
                <Button size="icon" rounded mr="lg" onClick={() => setIsDrawerVisible(false)}>
                  <Icon icon="X" />
                </Button>
                Article settings
              </Header.H3>
              <Label>Drop splash screen</Label>
              <DropZone />
            </DrawerContent>
          </Drawer>
        )}
        <Box variant="container">
          <Box flex flexDirection="row-reverse" mb="xl">
            <Button size="icon" onClick={() => setIsDrawerVisible(true)}>
              <Icon icon="Settings" />
            </Button>
            <Button variant="contained" mr="default">
              <Icon icon="Share" />
              Publish
            </Button>
            <Button mr="default">
              <Icon icon="Save" />
              Save
            </Button>
          </Box>
          <Box mb="xxl">
            <Input variant="xxl" borderless width={1} placeholder="Rich text editor example page" />
          </Box>

          <RichTextEditor value="" onChange={handler} />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPage;
