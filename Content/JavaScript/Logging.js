"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class Logger {
    static Info(message, world = undefined) {
        UE.KismetSystemLibrary.PrintString(world, message, true, true, new UE.LinearColor(1, 1, 1, 1), 5.0);
        console.info(message);
    }
    static Warning(message) {
        UE.KismetSystemLibrary.PrintString(null, message, true, true, new UE.LinearColor(1, 1, 0, 1));
        console.warn(message);
    }
    static Error(message) {
        UE.KismetSystemLibrary.PrintString(null, message, true, true, new UE.LinearColor(1, 0, 0, 1));
        console.error(message);
    }
}
exports.default = Logger;
//# sourceMappingURL=Logging.js.map