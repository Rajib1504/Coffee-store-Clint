import Swal from "sweetalert2";
const AddCofee = () => {
  const handelAddCofee = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const name = form.name.value;
    const chef = form.chef.value;
    const newCofee = {
      price,
      photo,
      details,
      category,
      taste,
      supplier,
      name,
      chef,
    };
    console.log(newCofee);
    // Creation
    fetch("http://localhost:5000/cofee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCofee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "done",
          });
        }
      });
  };
  return (
    <div>
      <div className="w-full sm:w-[80%] bg-[#F4F3F0]   border-red-600 p-6 mx-auto text-center">
        <div className="text-container">
          <h1 className="text-3xl font-semibold m-3">Add New Cofee</h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            atque natus neque reiciendis nulla dolorum ex nemo aliquid!
            Provident esse id similique praesentium? Cupiditate, libero enim?
            Inventore possimus exercitationem esse?
          </p>
        </div>

        <form className=" p-2 " onSubmit={handelAddCofee}>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Name</h4>
              <input
                name="name"
                type="text"
                className=" w-full p-1"
                placeholder="Enter cofee name"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Chef</h4>
              <input
                name="chef"
                type="text"
                className="  w-full p-1"
                placeholder="Enter cofee chef"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Supplier</h4>
              <input
                name="supplier"
                type="text"
                className="  w-full p-1"
                placeholder="Enter cofee suppler"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Taste</h4>
              <input
                name="taste"
                type="text"
                className="  w-full p-1"
                placeholder="Enter cofee taste"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Category</h4>
              <input
                name="category"
                type="text"
                className="  w-full p-1"
                placeholder="Enter cofee category"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Details</h4>
              <input
                name="details"
                type="text"
                className="  w-full p-1"
                placeholder="Enter cofee details"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Photo</h4>
              <input
                name="photo"
                type="text"
                className="  w-full p-1"
                placeholder="Enter Photo URL"
              />
            </div>
            <div className="text-left m-1">
              <h4 className="font-semibold mb-1">Price</h4>
              <input
                name="price"
                type="text"
                className="  w-full p-1"
                placeholder="Enter cofee price"
              />
            </div>
          </div>
          <button className=" btn btn-block border-2 bg-[#D2B48C] rounded-lg my-4 text-center py-1">
            {" "}
            Add Cofee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCofee;
