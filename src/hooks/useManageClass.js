import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';



const useManageClass = () => {
    const { loading} = useAuth();

    

    const { refetch, data: lecture = [] } = useQuery({
        queryKey: ['lactures'],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/lactures`)
            
            return res.json();
        },
        
      })


    return [lecture, refetch];
};

export default useManageClass;