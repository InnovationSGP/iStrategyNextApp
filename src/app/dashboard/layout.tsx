"use client";
import { useGetMessages } from "@/pages/api/routes/messagesRoutes";
import { useSession } from "next-auth/react";
import BlogComponent from "../components/BlogComponent";
import ErrorComponent from "../components/Error";
import Loading from "../components/Loading";
import { SecureNavigation } from "./AdminPanel";
import { SessionBanner } from "./page";
interface DashboardLayoutProps {}
interface Children {
  children: React.ReactNode;
}

function DashboardLayout<DashboardLayoutProps>({ children }: Children) {
  const session = useSession();
  const { data, status } = session as any;
  if (status === "loading") <Loading />;

  return (
    <div>
      <>
        <SecureNavigation />
        <SessionBanner data={data} />
        {children}
      </>
    </div>
  );
}

export default DashboardLayout;
