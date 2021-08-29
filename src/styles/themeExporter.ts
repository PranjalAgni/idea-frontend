import { themes } from "./theme";

export default themes.filter(theme => theme.mode === "light")[0];