import React, { useState } from "react";
import Image from "next/image";
import { BsArrowRepeat } from "react-icons/bs";
import { MdBugReport } from "react-icons/md";

import Feedback from "~/components/feedback";
import { Button } from "~/components/ui/button";

interface ErrorProps {
  handleRefetch: () => void;
  resourceName: string;
}

const Error: React.FC<ErrorProps> = ({ handleRefetch, resourceName }) => {
  const [openFeedback, setOpenFeedback] = useState(false);

  return (
    <div className="grid h-[500px] grid-cols-2 items-center gap-8">
      <Image
        src="https://media.giphy.com/media/l3fZLMbuCOqJ82gec/giphy.gif"
        alt="Access denied gif"
        className="h-full w-full rounded-lg object-fill shadow"
        width={300}
        height={600}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8WQ8AAncBeri2L5wAAAAASUVORK5CYII="
      />
      <div className="flex flex-col items-center">
        <p className="text-lg">
          Failed to fetch {resourceName}. Please try again.
        </p>
        <div className="mt-8">
          <Button className="py-2 focus:ring-0" onClick={handleRefetch}>
            Retry
            <BsArrowRepeat size={20} className="ml-2" />
          </Button>
          <Button
            className="ml-4 py-2 focus:ring-0"
            onClick={() => setOpenFeedback(!openFeedback)}
          >
            Report
            <MdBugReport size={20} className="ml-2" />
          </Button>
        </div>
      </div>
      <Feedback open={openFeedback} setOpen={setOpenFeedback} />
    </div>
  );
};

export default Error;
