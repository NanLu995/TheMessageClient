import { Character } from "../Character";
import { Sex, CharacterStatus } from "../type";
import { Skill } from "../../Skills/Skill";
import { CharacterPanting } from "../../../UI/Game/Character/CharacterPanting";

export class GuXiaoMengSP extends Character {
  constructor(UI?: CharacterPanting) {
    super({
      id: 1028,
      name: "SP顾小梦",
      sprite: "images/characters/GuXiaoMengSP",
      status: CharacterStatus.FACE_DOWN,
      sex: Sex.FAMALE,
      skills: [] as Skill[],
      UI: UI,
    });
  }
}
