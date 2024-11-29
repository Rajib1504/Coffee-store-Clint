import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import CofeeCard from "../../CofeeCard";

function App() {
  const cofees = useLoaderData();
  console.log(cofees);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 place-items-center w-3/4 mx-auto">
        {cofees.map((cofee) => (
          <CofeeCard key={cofee._id} cofee={cofee}></CofeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
