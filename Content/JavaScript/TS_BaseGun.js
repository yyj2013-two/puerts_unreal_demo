"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const puerts_1 = require("puerts");
class TS_BaseGun extends UE.Actor {
    MaxBulletDistance;
    Damage;
    FireRate;
    GunMesh;
    PS_BulletImpact;
    Constructor() {
        //warning: Load asset in constructor would cause crash in packaged application, only works in editor.
        //this.PS_BulletImpact = UE.ParticleSystem.Load("/Game/BlockBreaker/ParticleSystems/PS_BulletImpact");
    }
    //@no-blueprint
    Shoot(StartLocation, EndLocation) {
        let IsServer = UE.KismetSystemLibrary.IsDedicatedServer(this);
        //console.log("======= BaseGun Shoot", IsServer);
        //console.log("========= qqqq 555", StartLocation.ToString())
        let hitResultOut = (0, puerts_1.$ref)(undefined);
        //if (UE.KismetSystemLibrary.LineTraceSingle(this, StartLocation, EndLocation, 0, false, undefined, 0, hitResultOut, true, undefined, undefined, 0)) 
        if (UE.GameplayHelper.LineTrace(this, StartLocation, EndLocation, UE.ECollisionChannel.ECC_Visibility, hitResultOut)) {
            //console.log("======= LineTrace", IsServer);
            let hitResult = (0, puerts_1.$unref)(hitResultOut);
            UE.GameplayStatics.SpawnEmitterAtLocation(this, this.PS_BulletImpact, hitResult.Location, new UE.Rotator(0, 0, 0), new UE.Vector(1, 1, 1), true, UE.EPSCPoolMethod.AutoRelease, true);
            if (hitResult.HitObjectHandle.Actor) {
                //console.log("======= ApplyDamage", IsServer);
                UE.GameplayStatics.ApplyDamage(hitResult.HitObjectHandle.Actor, this.Damage, undefined, undefined, undefined);
            }
        }
    }
    ReceiveBeginPlay() {
        console.log("+++++ BaseGun beginplay");
        this.PS_BulletImpact = UE.ParticleSystem.Load("/Game/BlockBreaker/ParticleSystems/PS_BulletImpact");
    }
}
exports.default = TS_BaseGun;
//# sourceMappingURL=TS_BaseGun.js.map