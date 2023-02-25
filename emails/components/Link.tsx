import React from 'react';

import { colors } from '../theme';

import type { MjmlText, HrefProps } from 'mjml-react';

type LinkProps = HrefProps & React.ComponentProps<typeof MjmlText>;
type StyleProps = Pick<
  LinkProps,
  | 'color'
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontWeight'
  | 'letterSpacing'
  | 'height'
  | 'textDecoration'
  | 'align'
> & {
  textTransform?: React.CSSProperties['textTransform'] | undefined;
};

const getHrefPropsFromProps = (props: LinkProps): HrefProps =>
  JSON.parse(
    JSON.stringify({
      href: props.href,
      rel: props.rel,
      target: props.target,
    })
  );

const getStylePropsFromProps = (props: LinkProps): StyleProps =>
  JSON.parse(
    JSON.stringify({
      color: props.color,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontStyle: props.fontStyle,
      fontWeight: props.fontWeight,
      letterSpacing: props.letterSpacing,
      height: props.height,
      textDecoration: props.textDecoration,
      textTransform:
        props.textTransform as React.CSSProperties['textTransform'],
      align: props.align,
    })
  );

export default function Link({ children, ...props }: LinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener"
      {...getHrefPropsFromProps(props)}
      style={{
        color: colors.blue400,
        ...getStylePropsFromProps(props),
      }}
    >
      {children}
    </a>
  );
}
