interface IItemProps {
  id: number;
  description: string;
}
interface IProps {
  item: IItemProps;
  list: IItemProps[];
  setList: React.Dispatch<React.SetStateAction<IItemProps[]>>;
}

const DeleteItem = (props: IProps) => {
  const { item, list, setList } = props;
  const { id } = item;

  const deleteItem = async (id: number) => {
    try {
      const deletedItem = await fetch(`http://localhost:5000/list/${id}`, {
        method: "DELETE",
      });

      setList(list.filter((item) => item.id !== id));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </>
  );
};

export default DeleteItem;
