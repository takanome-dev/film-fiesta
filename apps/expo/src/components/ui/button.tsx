import React from "react";
import { Pressable, Text, type PressableProps } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/classname";

export const buttonVariants = cva(
  "inline-flex flex-row items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 focus:ring-slate-400 disabled:pointer-events-none focus:ring-offset-slate-900 data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default: "bg-slate-50 text-slate-900",
        destructive: "bg-red-500 text-white",
        outline: "bg-transparent border border-slate-400 text-slate-100",
        subtle: "bg-slate-700 text-slate-100",
        ghost: "bg-transparent text-slate-100 data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 text-slate-100",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  title: string;
  octicon?: keyof typeof Octicons.glyphMap;
  color?: string;
  textClass?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    octicon,
    color,
    variant,
    size,
    className,
    textClass,
    ...rest
  } = props;
  return (
    <Pressable
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {octicon && <Octicons name={octicon} size={18} color={color} />}
      <Text
        className={cn(
          "text-sm font-medium",
          octicon ? "ml-2" : "",
          color,
          textClass,
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
};
