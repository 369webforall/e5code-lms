import React from "react";
import UpdateForm from "../../ui/UpdateForm";

interface Props {
  params: { id: string };
}

const UpdateStudent = ({ params }: Props) => {
  return (
    <div>
      <UpdateForm id={params.id} />
    </div>
  );
};

export default UpdateStudent;
