export type JobPageProps = {
  pageType: "CREATE" | "EDIT";
};

export type JobStatus = "interview" | "declined" | "pending";

export type JobOfferType =
  | "full-time"
  | "part-time"
  | "contract"
  | "remote"
  | "internship";

export interface JobFormProps {
  company: string;
  position: string;
  status: JobStatus;
  jobType: JobOfferType;
  jobLocation: string;
}

export interface JobProps extends JobFormProps {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobResponse {
  jobs: JobProps[];
  count: number;
  totalPages: number;
}
