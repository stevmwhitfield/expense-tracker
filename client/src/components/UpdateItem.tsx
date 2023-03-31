import { useState } from "react";

interface IItemProps {
  id: number;
  description: string;
}

const UpdateItem = ({ item }: { item: IItemProps }) => {
  const { id } = item;

  const editItem = async (id: number) => {
    try {
      const newDescription = prompt("Enter a new description", "");
      if (newDescription === null) {
        return;
      }
      const body = { description: newDescription };
      const res = await fetch(`http://localhost:5000/list/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <>
      <button onClick={() => editItem(id)}>Edit</button>
    </>
  );
};

export default UpdateItem;
