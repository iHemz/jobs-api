import {
  DangerButton,
  Div,
  JobDetailWrapper,
  StatusBox,
  SuccessButton,
} from "@/styledComponents";
import type { JobCategory } from "@/types/common";
import { startCase } from "@/utils/common";
import { FaCalendar, FaLocation, FaWork } from "@/utils/icons";
import { Divider } from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  company: string;
  jobTitle: string;
  location: string;
  isDark: boolean;
  date: string;
  category: string;
  status: JobCategory;
};

export function JobDetailsCard({
  id,
  company,
  jobTitle,
  location,
  isDark,
  date,
  category,
  status,
}: Props) {
  const navigate = useNavigate();
  return (
    <JobDetailWrapper $dark={isDark}>
      <Div className="detail-header">
        <p className="avatar">J</p>
        <Div>
          <h5>{jobTitle}</h5>
          <p>{company}</p>
        </Div>
      </Div>
      <Divider sx={{ backgroundColor: isDark ? "#ccc" : "#20202c" }} />
      <Div className="detail-body">
        <TitleWithIcon title={location} icon={FaLocation} />
        <TitleWithIcon title={date} icon={FaCalendar} />
        <TitleWithIcon title={category} icon={FaWork} />
        <StatusCard status={status} />
      </Div>
      <Div className="btns">
        <SuccessButton onClick={() => navigate(`/app/edit-job/${id}`)}>
          View Job
        </SuccessButton>
        <DangerButton>Remove Job</DangerButton>
      </Div>
    </JobDetailWrapper>
  );
}

function TitleWithIcon({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ComponentType;
}) {
  return (
    <Div className="title-with-icon">
      <Icon />
      <p>{title}</p>
    </Div>
  );
}

function StatusCard({ status }: { status: JobCategory }) {
  return (
    <StatusBox $status={status}>
      <p>{startCase(status)}</p>
    </StatusBox>
  );
}
