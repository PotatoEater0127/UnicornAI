import { AIBubble, UserBubble } from "../Bubble";
import * as Styled from "./index.styles";

function Main() {
  return (
    <Styled.Container>
      <Styled.Bubbles>
        <AIBubble>
          Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig
          armchairs elemental teacup tell. Dungeons thieves kiss red patronum
          dirigible treats cursed petrificus three.
        </AIBubble>
        <UserBubble>
          Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig
          armchairs elemental teacup tell. Dungeons thieves kiss red patronum
          dirigible treats cursed petrificus three.
        </UserBubble>
        <AIBubble>
          Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig
          armchairs elemental teacup tell. Dungeons thieves kiss red patronum
          dirigible treats cursed petrificus three.
        </AIBubble>
        <UserBubble>
          Potter ipsum wand elf parchment wingardium. Pigwidgeon hedwig
          armchairs elemental teacup tell. Dungeons thieves kiss red patronum
          dirigible treats cursed petrificus three.
        </UserBubble>
      </Styled.Bubbles>
    </Styled.Container>
  );
}

export default Main;
