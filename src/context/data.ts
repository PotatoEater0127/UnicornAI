import { v1 as uuidv1 } from "uuid";

import { CREATOR, Message } from "./type";

export const FAKE_RESPONSE =
  "Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig armchairs elemental teacup tell. Dungeons thieves kiss red patronum dirigible treats cursed petrificus three.";

export const defaultChats: Message[] = [
  {
    creator: CREATOR.AI,
    id: uuidv1(),
    content: FAKE_RESPONSE,
  },
  {
    creator: CREATOR.USER,
    id: uuidv1(),
    content: FAKE_RESPONSE,
  },
  {
    creator: CREATOR.AI,
    id: uuidv1(),
    content: FAKE_RESPONSE,
  },
  {
    creator: CREATOR.USER,
    id: uuidv1(),
    content: FAKE_RESPONSE,
  },
  {
    creator: CREATOR.AI,
    id: uuidv1(),
    content: FAKE_RESPONSE,
  },
  {
    creator: CREATOR.USER,
    id: uuidv1(),
    content: FAKE_RESPONSE,
  },
];
