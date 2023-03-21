"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
require("./ObjectExt");
const puerts_1 = require("puerts");
const TS_EquipmentCtrl_1 = require("./TS_EquipmentCtrl");
class TS_Player extends UE.Character {
    Constructor() {
        let ctrlClass = puerts_1.makeUClass(TS_EquipmentCtrl_1.default);
        this.Equipment_Ctrl = this.CreateDefaultSubobjectGeneric("TS_EquipmentCtrl", ctrlClass);
        this.Equipment_Ctrl.RegisterComponent();
        this.Equipment_Ctrl.SetIsReplicated(true);
    }
    //F按键
    PickUp() {
        this.Equipment_Ctrl.Update_Slots();
    }
}
exports.default = TS_Player;
//# sourceMappingURL=TS_Player.js.map