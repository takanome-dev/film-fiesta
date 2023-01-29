/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { toast } from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import useForm from '@/lib/hooks/useForm';
import { api } from '@/utils/api';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Feedback: React.FC<Props> = ({ open, setOpen }) => {
  const { inputs, clearForm, handleChange } = useForm({
    emojiCode: '',
    message: '',
  });

  const { mutate, error, isLoading } = api.feedback.sendFeedback.useMutation({
    onSuccess: () => toast.success('Thanks for your feedback!'),
  });

  if (error) toast.error(error.message);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(inputs);
    clearForm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Give Feedback</DialogTitle>
            <DialogDescription>
              What do you think of this website?
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="mt-4 mb-8">
              <p className="mb-4">
                Do you have any thoughts you&apos;d like to share?
              </p>
              <Textarea
                name="message"
                placeholder="Type your message here."
                onChange={handleChange}
                value={inputs.message}
              />
            </div>
            {/* TODO: remove if it's not a thing */}
            {/* <div className="">
          <div className="flex gap-1">
            <p>May we follow you up on your feedback?</p>
            </div>
            <div className="mt-4 flex gap-4">
            <div className="flex items-center space-x-2 ">
            <Checkbox id="yes" />
            <label
            htmlFor="yes"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Yes
              </label>
              </div>
            <div className="flex items-center space-x-2 ">
            <Checkbox id="no" />
            <label
            htmlFor="no"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            No
            </label>
            </div>
            </div>
          </div> */}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              Send feedback
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Feedback;
