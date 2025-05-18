import { deleteJob, setJobState } from "@/features";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
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
import dayjs from "dayjs";
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
  const dispatch = useAppDispatch();
  const { isLoading, isCurrentJob } = useAppSelector((state) => ({
    isLoading: state.job.isLoading,
    isCurrentJob: state.job.id === id,
  }));

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
        <TitleWithIcon
          title={dayjs(createdAt).format("MMM DD, YYYY")}
          icon={FaCalendar}
        />
        <TitleWithIcon title={jobType} icon={FaWork} />
        <StatusCard status={status} />
      </Div>
      <Div className="btns">
        <SuccessButton
          onClick={() => {
            dispatch(
              setJobState({
                id,
                job: { company, position, jobLocation, jobType, status },
              })
            );
            navigate(`/app/edit-job/${id}`);
          }}
        >
          Edit
        </SuccessButton>
        <DangerButton onClick={() => void dispatch(deleteJob(id))}>
          {isLoading && isCurrentJob ? "Deleting..." : "Delete"}
        </DangerButton>
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
