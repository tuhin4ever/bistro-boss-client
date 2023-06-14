import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${item.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selectCourse${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${item.name} deleted.`, "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro - C | My Cart</title>
      </Helmet>
      <div className="h-screen bg-gray-100">
        <div className="uppercase font-semibold h-16 flex justify-evenly items-center bg-gray-200">
          <h3 className="text-3xl">Total items: {cart.length}</h3>
          <h3 className="text-3xl">Total Price: ${total}</h3>
          <Link to='/dashboard/payment'><button className="btn-warning btn-sm">PAY</button></Link>
        </div>
        <div className="p-4">
          <table className="table w-full bg-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2">No.</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td className="py-2">{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost bg-red-600 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
