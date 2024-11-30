import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import CofeeCard from "../../CofeeCard";
import { useState } from "react";

function App() {
  const allCofees = useLoaderData();
  const [cofees, setCofees] = useState(allCofees);
  console.log(allCofees);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 place-items-center w-3/4 mx-auto">
        {cofees.map((cofee) => (
          <CofeeCard
            key={cofee._id}
            cofees={cofees}
            setCofees={setCofees}
            cofee={cofee}
          ></CofeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
