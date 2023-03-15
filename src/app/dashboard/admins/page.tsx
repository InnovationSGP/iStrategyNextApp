"use client";
import { FunctionComponent } from "react";
import { useGetUser } from "../../../pages/api/routes/userRoute";
import Loading from "@/app/components/Loading";
import { DeleteModal, EditModal, PlainModal } from "@/app/components/Modal";
import { User } from "@/lib/types";
import Register from "@/app/secure/RegisterComponent";
import EditUser from "../../secure/EditUserComponent";

interface AdminsProps {}

const Admins: FunctionComponent<AdminsProps> = () => {
  const { users, isLoading } = useGetUser();

  if (isLoading) <Loading />;

  return (
    <div>
      <div className="flex justify-center item-center p-4">
        <PlainModal
          header=""
          content={<Register />}
          buttonTWClasses="font-bold px-4 py-2 shadow text-lg bg-primaryBlue text-white"
          buttonText="Add new user"
        />
      </div>

      {users ? (
        users.map((user: User) => <EachUser user={user} key={user._id} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Admins;

function EachUser(props: { user: User }) {
  return (
    <div className="p-2 shadow justify-between items-center flex flex-col sm:flex-row my-4">
      <div className="p-4">
        <div className="text-xl font-bold">
          {props.user.name} -{" "}
          <span className="font-medium text-sm italic">
            {" "}
            {props.user.email}
          </span>{" "}
        </div>
        {props.user.admin ? (
          <div className="text-green-600">Admin</div>
        ) : (
          <div className="text-red-600">Not Admin</div>
        )}
      </div>

      <div className="flex flex-row">
        <EditModal
          header="Edit Acces Rights"
          content={<EditUser user={props.user} />}
        />
        <DeleteModal header="Delete User" delete={"delete user"} />
      </div>
    </div>
  );
}
