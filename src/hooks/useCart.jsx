import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useCart = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    // enabled: !!user?.email && !!localStorage.getItem("access-token"),
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         // this is specific custom header for jwt token
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },
    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", response);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
