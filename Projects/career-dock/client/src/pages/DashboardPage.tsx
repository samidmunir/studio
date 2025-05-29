import UserPanel from "../components/UserPanel";
import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

const DashboardPage = () => {
  const { user } = useUser();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const res = await fetch(
      `http://localhost:3000/api/record/get-user-records`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user?.id }),
      }
    );
    const data = await res.json();
    // console.log(data);
    setRecords(data);
    return records;
  };

  // const handleDelete = async (recordId: string) => {
  //   await fetch(`http://localhost:3000/api/record/delete/${recordId}`, {
  //     method: "DELETE",
  //   });
  //   fetchRecords();
  // };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <>
      <UserPanel records={records} />
    </>
  );
};

export default DashboardPage;
