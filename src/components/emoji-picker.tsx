import EmojiPicker, {
  // EmojiStyle,
  // SkinTones,
  Theme,
  // Categories,
  // Emoji,
  // SuggestionMode,
  // SkinTonePickerLocation,
  type EmojiClickData,
} from 'emoji-picker-react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { MdOutlineAddReaction } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const ReactEmojiPicker = () => {
  const [selectedEmojis, setSelectedEmojis] = useState<string[]>([]);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const { theme } = useTheme();

  console.log({ selectedEmojis });
  const handleSelectEmojis = (emoji: EmojiClickData) => {
    setSelectedEmojis([...selectedEmojis, emoji.unified]);
  };

  // TODO: add transition for modal
  return (
    <Dialog key="emoji-picker">
      <DialogContent className="sm:max-w-[425px]">
        <DialogTrigger asChild>
          <Button
            className="border border-red-500"
            onClick={() => setOpenEmojiPicker(true)}
          >
            <MdOutlineAddReaction className="h-4 w-4" />
          </Button>
          {openEmojiPicker && (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Pick one or more emojis
            </p>
          )}
        </DialogTrigger>
        <div>
          <EmojiPicker
            onEmojiClick={handleSelectEmojis}
            autoFocusSearch={false}
            theme={theme === 'dark' ? Theme.DARK : Theme.LIGHT}
            // searchDisabled
            // skinTonePickerLocation={SkinTonePickerLocation.PREVIEW}
            // height={350}
            // width="50%"
            // emojiVersion="0.6"
            // lazyLoadEmojis={true}
            // previewConfig={{
            //   defaultCaption: "Pick one!",
            //   defaultEmoji: "1f92a" // 🤪
            // }}
            // suggestedEmojisMode={SuggestionMode.RECENT}
            // skinTonesDisabled
            // searchPlaceHolder="Filter"
            // defaultSkinTone={SkinTones.MEDIUM}
            // emojiStyle={EmojiStyle.NATIVE}
            // categories={[
            //   {
            //     name: "Fun and Games",
            //     category: Categories.ACTIVITIES
            //   },
            //   {
            //     name: "Smiles & Emotions",
            //     category: Categories.SMILEYS_PEOPLE
            //   },
            //   {
            //     name: "Flags",
            //     category: Categories.FLAGS
            //   },
            //   {
            //     name: "Yum Yum",
            //     category: Categories.FOOD_DRINK
            //   }
            // ]}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReactEmojiPicker;
