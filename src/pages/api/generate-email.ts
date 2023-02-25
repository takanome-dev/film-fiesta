import compileMjml from 'mjml';
import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlSection,
  MjmlText,
  render,
} from 'mjml-react';

import Example from '@/server/emails/example';

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { html, errors } = compileMjml(`
  <mjml>
  <mj-body width="500px">
    <mj-section background-color="#EFEFEF">
      <mj-column>
        <mj-text font-size="20px">
          Hello World!
        </mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`);

  if (errors) {
    return res.status(500).json({
      errors,
    });
  }

  return res.send(html);
}
