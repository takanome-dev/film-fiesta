import React, { useState } from 'react';

import { Button } from '@/components/ui/button';

interface Emoji {
  name: string;
  emoji: string;
}

const emojis: Emoji[] = [
  { name: 'like', emoji: '👍' },
  { name: 'dislike', emoji: '👎' },
  { name: 'clap', emoji: '👏' },
  { name: 'love', emoji: '❤️' },
  { name: 'hooray', emoji: '🎉' },
  { name: 'confused', emoji: '😕' },
  { name: 'rocket', emoji: '🚀' },
];

const EmojiPicker = () => {
  const [selectedEmojis, setSelectedEmojis] = useState<Emoji[]>([]);

  console.log({ selectedEmojis });
  const handleSelectEmojis = (emoji: Emoji) => {
    setSelectedEmojis([...selectedEmojis, emoji]);
  };

  const handleRemoveEmoji = (emoji: Emoji) => {
    setSelectedEmojis(selectedEmojis.filter((e) => e !== emoji));
  };

  const handleToggleEmoji = (emoji: Emoji) => {
    if (selectedEmojis.includes(emoji)) {
      handleRemoveEmoji(emoji);
    } else {
      handleSelectEmojis(emoji);
    }
  };

  // TODO: add transition for modal
  return (
    <div className="flex">
      {emojis.map((emoji) => (
        <Button
          key={emoji.name}
          variant="ghost"
          onClick={() => handleToggleEmoji(emoji)}
        >
          {emoji.emoji}
        </Button>
      ))}
    </div>
  );
};

export default EmojiPicker;
