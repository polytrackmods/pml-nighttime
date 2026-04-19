import { PolyMod, MixinType, SettingType } from "https://cdn.polymodloader.com/cb/polytrackmods/PolyModLoader/0.6.0/PolyTypes.js";

class nightMod extends PolyMod {
    preInit = (pml) => {
        /**
         *                     (0,
                    i.gn)(this, T, "f").add(new r.dth(3891597,11714755,4.7)),
                    document.addEventListener("fullscreenchange", ( () => {
                        (0,
                        i.gn)(this, y, "m", F).call(this)
                    }
                    )),
         */
        pml.registerGlobalMixin({
            type: MixinType.REPLACEBETWEEN,
            tokenStart: `i.gn)(this, T, "f").add(new r.dth(3891597, 11714755, 4.7))`,
            tokenEnd: `i.gn)(this, T, "f").add(new r.dth(3891597, 11714755, 4.7))`,
            func: `i.gn)(this, T, "f").add(new r.dth(3891597, 11714755, window.polyModLoader.getSetting("Nighttime") == "false" ? 4.7 : -10))`,
        });
    }
    init = (pml) => {
        this.pml = pml; // so pml is accessible outside of init (not neccesary)
        pml.registerSettingCategory("Night Mod");
        pml.registerSetting("Nighttime", "Nighttime", SettingType.BOOL, true);
    }
    postInit = () => {
        // post init
    }
    simInit = () => {
        // sim init here
    } 
}

export let polyMod = new nightMod();