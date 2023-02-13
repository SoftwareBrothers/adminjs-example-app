import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { useSelector } from 'react-redux';
import {
  Box,
  H5,
  H2,
  Label,
  Illustration,
  Input,
  FormGroup,
  Button,
  Text,
  MessageBox,
  MadeWithLove,
  themeGet,
} from '@adminjs/design-system';
import { ReduxState, useTranslation } from 'adminjs';

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled(Box)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const StyledLogo = styled.img`
  max-width: 200px;
  margin: ${themeGet('space', 'md')} 0;
`;

const IllustrationsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & svg [stroke="#3B3552"] { 
    stroke: rgba(255, 255, 255, 0.5)
  }
  & svg [fill="#3040D6"] { 
    fill: rgba(255, 255, 255, 1);
  }
`

export type LoginProps = {
  credentials: Credentials;
  action: string;
  errorMessage?: string;
  children?: any;
};

export type Credentials = {
  email: string;
  password: string;
};

export const Login: React.FC<LoginProps> = (props) => {
  const { action, credentials, errorMessage } = props;
  const { translateLabel, translateButton, translateProperty, translateMessage } = useTranslation();
  const branding = useSelector((state: ReduxState) => state.branding);
  const message = `Email: ${credentials.email} | Password: ${credentials.password}`;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper flex variant="grey">
        <Box bg="white" height="480px" flex boxShadow="login" width={[1, 2 / 3, 'auto']}>
          <Box
            bg="primary100"
            color="white"
            p="x3"
            width="380px"
            flexGrow={0}
            display={['none', 'none', 'block']}
            position="relative"
          >
            <H2 fontWeight="lighter">{translateLabel('loginWelcome')}</H2>
            <Text fontWeight="lighter" mt="default">
              {translateMessage('loginWelcome')}
            </Text>
            <IllustrationsWrapper p="xxl">
              <Box display="inline" mr="default">
                <Illustration variant="Planet" width={82} height={91} />
              </Box>
              <Box display="inline">
                <Illustration variant="Astronaut" width={82} height={91} />
              </Box>
              <Box display="inline" position="relative" top="-20px">
                <Illustration variant="FlagInCog" width={82} height={91} />
              </Box>
            </IllustrationsWrapper>
          </Box>
          <Box as="form" action={action} method="POST" p="x3" flexGrow={1} width={['100%', '100%', '480px']}>
            <H5 marginBottom="xxl">
              {branding.logo ? <StyledLogo src={branding.logo} alt={branding.companyName} /> : branding.companyName}
            </H5>
            <MessageBox my="lg" message={message} variant="info" />
            {errorMessage && (
              <MessageBox
                my="lg"
                message={errorMessage.split(' ').length > 1 ? errorMessage : translateMessage(errorMessage)}
                variant="danger"
              />
            )}
            <FormGroup>
              <Label required>{translateProperty('email')}</Label>
              <Input name="email" placeholder={translateProperty('email')} defaultValue={credentials.email} />
            </FormGroup>
            <FormGroup>
              <Label required>{translateProperty('password')}</Label>
              <Input
                type="password"
                name="password"
                placeholder={translateProperty('password')}
                autoComplete="new-password"
                defaultValue={credentials.password}
              />
            </FormGroup>
            <Text mt="xl" textAlign="center">
              <Button variant="contained">{translateButton('login')}</Button>
            </Text>
          </Box>
        </Box>
        {branding.withMadeWithLove ? (
          <Box mt="xxl">
            <MadeWithLove />
          </Box>
        ) : null}
      </Wrapper>
    </React.Fragment>
  );
};

export default Login;
