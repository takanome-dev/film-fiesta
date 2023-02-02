import React, { useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { MdBugReport } from 'react-icons/md';

import Feedback from '@/components/feedback';
import { Button } from '@/components/ui/button';

interface ErrorProps {
  handleRefetch: () => any;
  resourceName: string;
}

const Error: React.FC<ErrorProps> = ({ handleRefetch, resourceName }) => {
  const [openFeedback, setOpenFeedback] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border-l-8 border-l-red-500 bg-slate-200 px-4 py-2 dark:bg-slate-500">
        <p className="">Failed to fetch {resourceName}. Please try again.</p>
        <Button className="py-2" onClick={handleRefetch}>
          Retry
          <BsArrowRepeat size={20} className="ml-2" />
        </Button>
        <Button
          className="ml-4 py-2"
          onClick={() => setOpenFeedback(!openFeedback)}
        >
          Report
          <MdBugReport size={20} className="ml-2" />
        </Button>
      </div>
      <Feedback open={openFeedback} setOpen={setOpenFeedback} />
    </div>
  );
};

export default Error;
