import { JobDetailsCard } from "@/components";
import { getJobs } from "@/features";
import { closeFilters, openFilters } from "@/features/tools/toolsSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { JobDetailsCardSkeleton } from "@/skeletons";
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
import { useEffect } from "react";

export function Jobs() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { tools, jobs: allJobs } = useAppSelector((state) => state);
  const { isFiltersOpen, isDarkTheme } = tools;
  const { jobs, isLoading, totalJobs, search, searchStatus, jobType, sort } =
    allJobs;

  const onClose = () => void dispatch(closeFilters());

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    dispatch(getJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchStatus, jobType, sort]);

  return (
    <JobSection>
      <Div>
        <h5>{totalJobs} Jobs found</h5>
        <Tooltip title="Filters">
          <IconButton size="small" onClick={() => dispatch(openFilters())}>
            <FilterList className="menu-icon" sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Div>
      <Div className="jobs-wrapper">
        {isLoading
          ? Array.from(new Array(12)).map((_, index) => (
              <JobDetailsCardSkeleton key={index} isDark={isDarkTheme} />
            ))
          : jobs.map((job) => (
              <JobDetailsCard key={job._id} isDark={isDarkTheme} {...job} />
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
