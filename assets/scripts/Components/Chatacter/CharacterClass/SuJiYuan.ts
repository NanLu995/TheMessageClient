import { Character } from "../Character";
import { Sex, CharacterStatus } from "../type";
import { CharacterObject } from "../CharacterObject";
import { ZiZhengQingBai } from "../../Skill/SkillClass/ZiZhengQingBai";
import { MiaoShouKuaiJi } from "../../Skill/SkillClass/MiaoShouKuaiJi";

export class SuJiYuan extends Character {
  constructor(gameObject?: CharacterObject) {
    super({
      id: 39,
      name: "速记员",
      sprite: "images/characters/SuJiYuan",
      status: CharacterStatus.FACE_UP,
      sex: Sex.FAMALE,
      gameObject: gameObject,
    });
    this.setSkills([new ZiZhengQingBai(this), new MiaoShouKuaiJi(this)]);
  }
}
