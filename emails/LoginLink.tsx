import {
  MjmlColumn,
  MjmlDivider,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from 'mjml-react';

import BaseLayout from './components/BaseLayout';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import { colors } from './theme';

export default function LoginLink({ url }: { url: string }): JSX.Element {
  return (
    <BaseLayout width={600}>
      <Header />
      <MjmlWrapper cssClass="container">
        <MjmlSection cssClass="smooth">
          <MjmlColumn>
            <MjmlText cssClass="paragraph">Welcome to Dub!</MjmlText>
            <MjmlText cssClass="paragraph">
              Please click the magic link below to sign in to your account.
            </MjmlText>
            <Button href={url} text="Sign In" />
            <MjmlText cssClass="paragraph">
              If you&apos;re on a mobile device, you can also copy the link
              below and paste it into the browser of your choice.
            </MjmlText>
            <MjmlText cssClass="paragraph">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                rel="nofollow"
                style={{
                  textDecoration: 'none',
                  color: `${colors.blue} !important`,
                }}
              >
                {url.replace(/^https?:\/\//, '')}
              </a>
            </MjmlText>
            <MjmlText cssClass="paragraph">
              If you did not request this email, you can safely ignore it.
            </MjmlText>
            <MjmlDivider
              cssClass="light-mode"
              borderColor="black"
              borderWidth="1px"
              padding="24px 24px 0px"
            />
          </MjmlColumn>
        </MjmlSection>
      </MjmlWrapper>
      <Footer />
    </BaseLayout>
  );
}
