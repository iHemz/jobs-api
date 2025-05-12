import { JobDetailsCard } from "@/components";
import { closeFilters, openFilters } from "@/features/tools/toolsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { Div, JobSection } from "@/styledComponents";
import { Close, FilterList } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export function Jobs() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { isFiltersOpen, isDarkTheme } = useAppSelector((state) => state.tools);

  const onClose = () => void dispatch(closeFilters());

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <JobSection>
      <Div>
        <h5>10 Jobs found</h5>
        <Tooltip title="Filters">
          <IconButton size="small" onClick={() => dispatch(openFilters())}>
            <FilterList className="menu-icon" sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Div>
      <Div className="jobs-wrapper">
        {Array.from(new Array(12)).map((_, index) => (
          <JobDetailsCard
            key={index}
            isDark={isDarkTheme}
            id={index.toString()}
            company="Company"
            jobTitle="Job Title"
            location="Location"
            date="Date"
            category="Category"
            status="pending"
          />
        ))}
      </Div>
      <Dialog
        open={isFiltersOpen}
        onClose={onClose}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: isDarkTheme
                ? theme.palette.background.paper
                : theme.palette.background.default,
              color: isDarkTheme
                ? theme.palette.background.default
                : theme.palette.background.paper,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle>Job Filters</DialogTitle>
          <DialogActions>
            <IconButton size="small" onClick={onClose}>
              <Close
                sx={{
                  width: 32,
                  height: 32,
                  color: isDarkTheme ? "white" : "black",
                }}
              />
            </IconButton>
          </DialogActions>
        </Box>
      </Dialog>
    </JobSection>
  );
}
