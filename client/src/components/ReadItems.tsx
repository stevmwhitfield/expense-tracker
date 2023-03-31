import { useEffect, useState } from "react";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

interface IItemProps {
  id: number;
  description: string;
}

const ReadItems = () => {
  const [list, setList] = useState<IItemProps[]>([]);

  const getList = async () => {
    try {
      const res = await fetch("http://localhost:5000/list");
      const data = await res.json();

      setList(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  if (list.length < 1) {
    return (
      <>
        <p>No items in list.</p>
      </>
    );
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: IItemProps) => {
            return (
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>
                  <UpdateItem item={item} />
                </td>
                <td>
                  <DeleteItem item={item} list={list} setList={setList} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ReadItems;
