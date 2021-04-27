//UTsGameInstance::OnStart里头，把QuickStart改为UsingWidget

import * as UE from 'ue'
import {argv} from 'puerts'

let world = argv.getByName("World") as UE.World;

let widgetClass = UE.Class.Load("/Game/StarterContent/TestWidgetBlueprint.TestWidgetBlueprint_C");

let widget = UE.UMGManager.CreateWidget(world, widgetClass) as UE.TestWidgetBlueprint_C;

widget.AddToViewport(0);

widget.Button1.OnClicked.Add(() => {
    console.log("button clicked!");
    console.log("inputed text:" + widget.TextBox.GetText());
});