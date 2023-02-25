import { MjmlButton } from 'mjml-react';
import React from 'react';

import { cn } from '@/lib/utils/classname';

import {
  colors,
  fontSize,
  borderRadius,
  lineHeight,
  fontWeight,
} from '../theme';

interface ButtonProps extends React.ComponentProps<typeof MjmlButton> {
  text?: string;
  children?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { text, children, ...rest } = props;

  return (
    <MjmlButton
      lineHeight={lineHeight.tight}
      fontSize={fontSize.base}
      fontWeight={fontWeight.bold}
      innerPadding="16px 24px 18px"
      align="left"
      backgroundColor={colors.blue}
      color={colors.black}
      borderRadius={borderRadius.base}
      cssClass={cn('button', props.cssClass)}
      {...rest}
    >
      {text && text}
      {children && children}
    </MjmlButton>
  );
}
