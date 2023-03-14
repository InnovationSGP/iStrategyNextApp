"use client";
import { IncomingContactMessages } from "@/lib/types";
import { routes } from "@/pages/api/routes/messagesRoutes";
import { ViewMessageModal } from "../../components/Modal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const EachMessage = (props: { message: IncomingContactMessages }) => {
  const readMessage = async (
    id: any,
    data: { read: boolean; responded: boolean }
  ) => {
    try {
      const { EDIT_MESSAGE } = routes();
      await EDIT_MESSAGE(id, data);
      await router.refresh();
      return toast.success("Email is marked read");
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  return (
    <div
      className={`mt-4 p-4 overflow-x-auto shadow-sm cursor-pointer ${
        props.message.read === true ? "bg-gray-300" : "bg-white"
      }  hover:bg-gray-100`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col basis-2/3">
          <p className="text-xs text-black"></p>
          <h2 className="capitalize">Message From {props.message.name}</h2>
          <span className="flex gap-2">
            <button
              className="text-xs text-gray-400 hover:underline pt-1"
              onClick={() => {
                const payload = {
                  read:
                    props.message.read === true
                      ? (false as boolean)
                      : (true as boolean),
                  responded: props.message.responded,
                };
                return readMessage(props.message._id, payload);
              }}
            >
              {props.message.read === true ? `Unread` : "Read"}
            </button>

            <button
              className={`text-xs font-bold text-gray-400 hover:underline pt-1 ${
                props.message.responded === true
                  ? " text-gray-400 cursor-not-allowed"
                  : "text-green-600"
              }`}
              onClick={() => {
                const payload = {
                  read:
                    props.message.responded == true
                      ? true
                      : props.message.responded,
                  responded:
                    props.message.responded === true
                      ? (false as boolean)
                      : (true as boolean),
                };
                return readMessage(props.message._id, payload);
              }}
              disabled={props.message.responded === true ? true : false}
            >
              {props.message.responded === true
                ? `Responded ${new Date(
                    props.message.updatedAt
                  ).toLocaleDateString()}`
                : "Responded?"}
            </button>
          </span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <ViewMessageModal
            name={props.message.name}
            email={props.message.email}
            content={props.message.message}
            header={`Message From ${
              props.message.name ? props.message.name : "Anonymous"
            }`}
            emailBody={"Thank you for contacting me."}
          />
        </div>
      </div>
    </div>
  );
};
