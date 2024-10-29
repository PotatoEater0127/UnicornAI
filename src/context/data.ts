import { v1 as uuidv1 } from "uuid";

import { Message } from "./ChatProvider";
import { CREATOR } from "./type";

export const AI_RESPONSE =
  "Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.";

export const defaultChats: Message[] = [
  {
    creator: CREATOR.AI,
    id: uuidv1(),
    content: `1 ${AI_RESPONSE}`,
  },
  {
    creator: CREATOR.USER,
    id: uuidv1(),
    content:
      "2 Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.",
  },
  {
    creator: CREATOR.AI,
    id: uuidv1(),
    content: `3 ${AI_RESPONSE}`,
  },
  {
    creator: CREATOR.USER,
    id: uuidv1(),
    content:
      "4 Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.",
  },
  {
    creator: CREATOR.AI,
    id: uuidv1(),
    content: `5 ${AI_RESPONSE}`,
  },
  {
    creator: CREATOR.USER,
    id: uuidv1(),
    content:
      "6 Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.",
  },
];
