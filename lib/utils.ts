import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertBlobToUrl = (blob: Blob) => {
  if (!blob) return;
  const urlCreator = window.URL || window.webkitURL;
  const imageUrl = urlCreator.createObjectURL(blob);
  return imageUrl;
};

export const blockedWords = [
  "pornography",
  "nudity",
  "explicit content",
  "child abuse",
  "violence",
  "gore",
  "blood",
  "torture",
  "mutilation",
  "abuse",
  "weapons",
  "war",
  "terrorism",
  "racism",
  "extremism",
  "self-harm",
  "drug use",
  "profanity",
  "hate speech",
  "graphic injury",
  "sexual content",
  "adult content",
  "assault",
  "violent crime",
  "disturbing imagery",
  "boobs",
  "tits",
  "ass",
  "nude",
  "no clothes",
  "cleavage",
];

export const isSafePrompt = (inputPrompt: string) => {
  const lowerCasePrompt = inputPrompt.toLowerCase();

  return !blockedWords.some((word) => lowerCasePrompt.includes(word));
};
