"use client";
import { useSession } from "next-auth/react";
import { FC, Suspense } from "react";
import ErrorComponent from "../components/Error";
import { useGetMessages } from "@/pages/api/routes/messagesRoutes";
import { Badge } from "./component/Badge";
import { Messages } from "./component/Messages";
import Loading from "../loading";

const Session: FC<any> = () => {
  const { messages, isError, isLoading } = useGetMessages();
  const session = useSession();
  const { data, status } = session as any;
  if (status === "loading") <Loading />;
  if (isError) return <ErrorComponent />;

  return (
    <div>
      <div className="flex flex-col p-10 sm:flex-row">
        <div className="basis-1/2 p-4">
          <Suspense fallback={<Loading />}>
            <div>
              {isLoading ? <Loading /> : <Messages messages={messages} />}
            </div>
          </Suspense>
        </div>
        <div className="basis-1/2">
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default Session;
