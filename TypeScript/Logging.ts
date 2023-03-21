import * as UE from "ue";
class Logger {
    public static Info(message: string, world:UE.Object = undefined) {
        
        UE.KismetSystemLibrary.PrintString(
            world,
            message,
            true,
            true,
            new UE.LinearColor(1, 1, 1, 1),
            5.0
        );

        console.info(message);
    }

    public static Warning(message: string) {
        UE.KismetSystemLibrary.PrintString(
            null,
            message,
            true,
            true,
            new UE.LinearColor(1, 1, 0, 1)
        );

        console.warn(message);
    }

    public static Error(message: string) {
        UE.KismetSystemLibrary.PrintString(
            null,
            message,
            true,
            true,
            new UE.LinearColor(1, 0, 0, 1)
        );

        console.error(message);
    }
}

export default Logger;
