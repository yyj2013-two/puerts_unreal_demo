import * as UE from "ue";
import { rpc, edit_on_instance } from 'ue'
import Logger from "./Logging";
class TS_EquipmentCtrl extends UE.ActorComponent {
    Constructor() {
    }

    ReceiveBeginPlay(): void {
        
    }

    Update_Slots():void{
        Logger.Info("Update_Slots", this);
        this.SR_Update_Slots();
    }

    @rpc.flags(rpc.FunctionFlags.FUNC_Net | rpc.FunctionFlags.FUNC_NetServer)
    SR_Update_Slots():void{
        Logger.Info("SR_Update_Slots", this); 
    }
}

export default TS_EquipmentCtrl; 
