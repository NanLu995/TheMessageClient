import { Identity } from "../Identity";
import { IdentityType, MysteriousPersonOption, SecretTaskType } from "../type";

//神秘人
export class MysteriousPerson extends Identity {
  protected _secretTask: SecretTaskType;
  protected _secretTaskText: string;

  get secretTask() {
    return this._secretTask;
  }

  get secretTaskText() {
    return this._secretTaskText;
  }

  constructor(option?: MysteriousPersonOption) {
    super({
      type: IdentityType.GREEN,
      name: option.name || "神秘人",
      color: "#07C160",
    });
    this._secretTask = option?.secretTask;
    this._secretTaskText = option?.secretTaskText;
  }
}
