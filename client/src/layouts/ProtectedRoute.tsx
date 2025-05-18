import { Footer, Header } from "@/components";
import AppShell from "@/layouts/AppShell";
import { Navbar } from "@/layouts/Navbar";
import type { AuthVerifier } from "@/types/auth";
import { Navigate, useLoaderData } from "react-router-dom";

export function ProtectedRoute() {
  const { success } = useLoaderData() as AuthVerifier;

  if (!success) {
    return <Navigate to="/auth/login" />;
  }

  return <AppShell header={Header} footer={Footer} aside={Navbar} />;
}
