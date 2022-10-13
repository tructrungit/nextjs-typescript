import { Box } from "@mui/system";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export default function Header() {
  return (
    <div>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  );
}
