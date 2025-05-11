import { Div, JobCardWrapper } from "@/styledComponents";
import type { JobCategory } from "@/types/common";
import { JOBS_TYPE } from "@/utils/data";

type Props = {
  category: JobCategory;
  count: number;
  isDark?: boolean;
};

export function JobCard({ category, count, isDark }: Props) {
  const { icon: Icon, class: jobClass, title } = JOBS_TYPE[category];

  return (
    <JobCardWrapper className={jobClass} $dark={isDark}>
      <Div>
        <h3>{count}</h3>
        <Icon />
      </Div>
      <p>{title}</p>
    </JobCardWrapper>
  );
}
