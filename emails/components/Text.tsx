import { MjmlText } from 'mjml-react';
import React from 'react';

import { cn } from '@/lib/utils/classname';

type TextProps = {
  maxWidth?: number;
} & React.ComponentProps<typeof MjmlText>;

export default function Text({ children, maxWidth, ...props }: TextProps) {
  if (maxWidth) {
    return (
      <MjmlText {...props} cssClass={cn('button', props.cssClass)}>
        <div style={{ maxWidth }}>{children}</div>
      </MjmlText>
    );
  }
  return (
    <MjmlText {...props} cssClass={cn('button', props.cssClass)}>
      {children}
    </MjmlText>
  );
}
