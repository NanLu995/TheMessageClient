import { _decorator, Component, Label, Graphics, tween, UIOpacity, Node, UITransform, Size, Tween } from "cc";
import { GameLog } from "./GameLog";
import { GameObjectContainer } from "../Container/GameObjectContainer";
import { GameLogTextObject } from "./GameLogTextObject";
const { ccclass, property } = _decorator;

@ccclass("GameLogWindow")
export class GameLogWindow extends GameObjectContainer<GameLogTextObject> {
  init() {}
  onDataAdded(data: GameLog): void {}
  onDataRemoved(data: GameLog): void {}
  onAllDataRemoved(): void {}
}

