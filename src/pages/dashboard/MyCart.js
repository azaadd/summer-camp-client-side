import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';



const MyCart = () => {

    const [cart] = useCart();

    return (
        <div className=' '>

            <Helmet>
                <title>Language School | My Cart</title>
            </Helmet>
            <div className='pt-12 ml-8'>
                <button className="btn gap-2">
                     <FaShoppingCart className='text-xl'></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </div>

        </div>
    );
};

export default MyCart;