import type { FeatureDispatch, FeatureState } from "@/types/features";
import { useDispatch, useSelector } from "react-redux";

export const useAppSelector = useSelector.withTypes<FeatureState>();
export const useAppDispatch = useDispatch.withTypes<FeatureDispatch>();
