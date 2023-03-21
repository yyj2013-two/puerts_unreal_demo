"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TS_BaseGun_1 = require("./TS_BaseGun");
const UE = require("ue");
require("./ObjectExt");
class TS_Rifle extends TS_BaseGun_1.default {
    Constructor() {
        this.MaxBulletDistance = 5000;
        this.Damage = 2;
        this.FireRate = 0.1;
        this.GunMesh = this.CreateDefaultSubobjectGeneric("GunMesh", UE.StaticMeshComponent.StaticClass());
        //warning: Load asset in constructor would cause crash in packaged application, only works in editor.
        //this.GunMesh.StaticMesh = UE.StaticMesh.Load("/Game/BlockBreaker/Meshes/SM_Rifle");
        this.RootComponent = this.GunMesh;
    }
    ReceiveBeginPlay() {
        console.log("==== Refile beginplay");
        super.ReceiveBeginPlay();
        this.GunMesh.StaticMesh = UE.StaticMesh.Load("/Game/BlockBreaker/Meshes/SM_Rifle");
    }
}
exports.default = TS_Rifle;
//# sourceMappingURL=TS_Rifle.js.map