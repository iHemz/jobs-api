import { useAppSelector } from "@/hooks/useStore";
import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
};

export default function ProfileMenuButton({ onClick, open }: Props) {
  const { user, isDark } = useAppSelector(
    (state) => ({
      user: state.user.user,
      isDark: state.tools.isDarkTheme,
    }),
    (prev, next) => prev.user === next.user && prev.isDark === next.isDark
  );

  return (
    <Tooltip title="Account settings">
      <IconButton
        onClick={onClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ width: "fit-content", position: "fixed", bottom: 20 }}
      >
        <Avatar sx={{ width: 32, height: 32, mr: 1 }}>{user?.name?.[0]}</Avatar>
        <Typography sx={{ color: isDark ? "white" : "black" }}>
          {user?.name}
        </Typography>
      </IconButton>
    </Tooltip>
  );
}
