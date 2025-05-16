import { Div, JobDetailWrapper } from "@/styledComponents";
import { Skeleton } from "@mui/material";

export function JobDetailsCardSkeleton({ isDark }: { isDark: boolean }) {
  return (
    <JobDetailWrapper $dark={isDark}>
      <Div className="detail-header">
        <Skeleton variant="circular" width={40} height={40} />
        <Div>
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
        </Div>
      </Div>
      <Skeleton variant="rectangular" height={1} />
      <Div className="detail-body">
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={20} />
      </Div>
      <Div className="btns">
        <Skeleton variant="rounded" width={80} height={20} />
        <Skeleton variant="rounded" width={80} height={20} />
      </Div>
    </JobDetailWrapper>
  );
}
