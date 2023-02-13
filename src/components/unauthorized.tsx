import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import { Button } from '@/components/ui/button';

const Unauthorized = () => (
  <div className="grid grid-cols-2 items-center gap-8">
    <Image
      src="https://media.giphy.com/media/4VY613vurPreyrIHux/giphy.gif"
      alt="Access denied gif"
      className="h-full w-full rounded-lg object-center shadow"
      width={300}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8WQ8AAncBeri2L5wAAAAASUVORK5CYII="
    />
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-semibold">Access Denied</h1>
      <p className="text-lg">
        Sorry, you are not authorized to view this page.
      </p>

      <Button variant="subtle" className="mt-4" onClick={Router.back}>
        <BsArrowLeft className="mr-2" />
        Go Back
      </Button>
    </div>
  </div>
);

export default Unauthorized;
