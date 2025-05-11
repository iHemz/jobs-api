import { JobCard } from "@/components/JobCard";
import { useAppSelector } from "@/hooks/useStore";
import { DashboardWrapper, Div } from "@/styledComponents";
import type { JobCategory } from "@/types/common";

const jobsStats: Array<{ category: JobCategory; count: number }> = [
  { category: "pending" as const, count: 0 },
  { category: "scheduled" as const, count: 0 },
  { category: "declined" as const, count: 0 },
];

export function Dashboard() {
  const isDark = useAppSelector((state) => state.tools.isDarkTheme);
  return (
    <DashboardWrapper>
      <Div>
        {jobsStats.map((job) => (
          <JobCard
            key={job.category}
            category={job.category}
            count={job.count}
            isDark={isDark}
          />
        ))}
      </Div>
    </DashboardWrapper>
  );
}
