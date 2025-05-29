import EditProductForm from "../components/EditProductForm";
import { useParams } from "react-router-dom";

const EditProductPage = () => {
  const params = useParams();
  // console.log(params);
  return (
    <main>
      <EditProductForm recordId={params.id || ""} />
    </main>
  );
};

export default EditProductPage;
