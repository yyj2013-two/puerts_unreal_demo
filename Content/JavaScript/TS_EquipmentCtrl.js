"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const ue_1 = require("ue");
const Logging_1 = require("./Logging");
class TS_EquipmentCtrl extends UE.ActorComponent {
    Constructor() {
    }
    ReceiveBeginPlay() {
    }
    Update_Slots() {
        Logging_1.default.Info("Update_Slots", this);
        this.SR_Update_Slots();
    }
    SR_Update_Slots() {
        Logging_1.default.Info("SR_Update_Slots", this);
    }
}
__decorate([
    ue_1.rpc.flags(ue_1.rpc.FunctionFlags.FUNC_Net | ue_1.rpc.FunctionFlags.FUNC_NetServer)
], TS_EquipmentCtrl.prototype, "SR_Update_Slots", null);
exports.default = TS_EquipmentCtrl;
//# sourceMappingURL=TS_EquipmentCtrl.js.map