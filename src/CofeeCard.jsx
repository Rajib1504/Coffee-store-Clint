import { IoEyeOutline } from "react-icons/io5";
import { IoEyedropOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CofeeCard = ({ cofee, setCofees, cofees }) => {
  console.log(cofee);
  const { _id, price, photo, details, category, taste, supplier, name, chef } =
    cofee || {};
  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   console.log("delete confirm");
        fetch(`http://localhost:5000/cofee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your cofee has been deleted.",
                icon: "success",
              });

              const remaing = cofees.filter((cof) => cof._id !== _id);
              setCofees(remaing);
            }
          });
      }
    });
  };
  return (
    <div className=" shadow-lg rounded-xl w-[548px] h-[192px] flex justify-between items-center bg-[#F5F4F1] pr-4">
      <figure>
        <img className="w-[185px] ml-4" src={`${photo}`} alt="" />
      </figure>
      <div className="flex flex-col gap-1 justify-center  items-center">
        <div>
          <span className="font-semibold"> Name</span>:<span>{name}</span>
        </div>
        <div>
          <span className="font-semibold text-left"> Chef</span>:
          <span>{chef}</span>
        </div>
        <div>
          <span className="font-semibold"> Price</span>:<span>{price}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 mx-1 justify-center items-center">
        <button className="btn btn-sm  bg-[#D2B48C] ">
          <IoEyeOutline className="text-white" />
        </button>
        <Link to={`/updateCofee/${_id}`}>
          <button className="btn btn-sm bg-black ">
            <IoEyedropOutline className="text-white" />
          </button>
        </Link>
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-sm bg-red-500 "
        >
          <MdDeleteOutline className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CofeeCard;
