
import * as UE from 'ue'
import {$ref, $unref} from 'puerts'
import './ObjectExt' 
import {rpc, edit_on_instance} from 'ue'
import { makeUClass } from "puerts";
import TS_EquipmentCtrl from './TS_EquipmentCtrl'

class TS_Player extends UE.Character 
{
    Equipment_Ctrl:TS_EquipmentCtrl
    Constructor() 
    {
        let ctrlClass = makeUClass(TS_EquipmentCtrl);
        this.Equipment_Ctrl = this.CreateDefaultSubobjectGeneric<TS_EquipmentCtrl>(
            "TS_EquipmentCtrl", ctrlClass);
        this.Equipment_Ctrl.RegisterComponent();
        this.Equipment_Ctrl.SetIsReplicated(true);
    }
    //F按键
    PickUp():void{
        this.Equipment_Ctrl.Update_Slots();
    }
}

export default TS_Player;