import { toggleTheme } from "@/features";
import { useAppDispath, useAppSelector } from "@/hooks/useStore";
import { Button } from "@/styledComponents";
import { IoMoonOutline, IoSunnyOutline } from "@/utils/icons";

export function ThemeToggler() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const Icon = isDark ? IoSunnyOutline : IoMoonOutline;
  const dispatch = useAppDispath();

  return (
    <Button $isIcon onClick={() => dispatch(toggleTheme())}>
      <Icon />
    </Button>
  );
}
