import { Footer, Header } from "@/components";
import AppShell from "@/layouts/AppShell";
import { Navbar } from "@/layouts/Navbar";
import { getAccessToken } from "@/utils/auth";
import { Navigate } from "react-router-dom";

export function ProtectedRoute() {
  const authToken = getAccessToken();

  if (!authToken) {
    return <Navigate to="/auth/login" />;
  }

  return <AppShell header={Header} footer={Footer} aside={Navbar} />;
}
