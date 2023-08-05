import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useCart = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['selectItems', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/selectItems?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/selectItems?email=${user?.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
      })

      return [cart, refetch]

}
export default useCart;