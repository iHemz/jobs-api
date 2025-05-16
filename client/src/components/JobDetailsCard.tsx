import {
  DangerButton,
  Div,
  JobDetailWrapper,
  StatusBox,
  SuccessButton,
} from "@/styledComponents";
import type { JobProps, JobStatus } from "@/types/jobs";
import { startCase } from "@/utils/common";
import { FaCalendar, FaLocation, FaWork } from "@/utils/icons";
import { Divider } from "@mui/material";
import type React from "react";
import { useNavigate } from "react-router-dom";

interface Props extends JobProps {
  isDark: boolean;
}

export function JobDetailsCard({
  _id: id,
  company,
  position,
  jobLocation,
  isDark,
  createdAt,
  jobType,
  status,
}: Props) {
  const navigate = useNavigate();
  return (
    <JobDetailWrapper $dark={isDark}>
      <Div className="detail-header">
        <p className="avatar">J</p>
        <Div>
          <h5>{position}</h5>
          <p>{company}</p>
        </Div>
      </Div>
      <Divider sx={{ backgroundColor: isDark ? "#ccc" : "#20202c" }} />
      <Div className="detail-body">
        <TitleWithIcon title={jobLocation} icon={FaLocation} />
        <TitleWithIcon title={createdAt} icon={FaCalendar} />
        <TitleWithIcon title={jobType} icon={FaWork} />
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

function StatusCard({ status }: { status: JobStatus }) {
  return (
    <StatusBox $status={status}>
      <p>{startCase(status)}</p>
    </StatusBox>
  );
}
