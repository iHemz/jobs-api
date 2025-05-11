import { toggleTheme } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Button } from "@/styledComponents";
import { IoMoonOutline, IoSunnyOutline } from "@/utils/icons";

export function ThemeToggler() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  const Icon = isDark ? IoSunnyOutline : IoMoonOutline;
  const dispatch = useAppDispatch();

  return (
    <Button $isIcon onClick={() => dispatch(toggleTheme())}>
      <Icon />
    </Button>
  );
}
