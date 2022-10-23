import './index.css'

import { VscTrash } from "react-icons/vsc";

import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem} from '../../../redux/ducks/cart/cartSlice'

export const CartItem = ({ item }) => {

    const valueFormated = (value) =>{
        return new Intl.NumberFormat(
            'pt-BR', 
            { style: 'currency', currency: 'BRL' }).format(value)
    }

    let priceItem = item.price?.slice(1)

    const dispatch = useDispatch()
    return (
        <div className="item-content">
            <div className="card-product-image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="item-description">
                <div >
                    <div className="product-title">
                        <span>{item.title}</span>

                    <span
                        className='trash'
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(removeItem(item.id))}
                    ><VscTrash/></span>
                    </div>

                    <div className="product-size">
                        VALOR: { valueFormated(priceItem) }
                    </div>
                </div>

                <div className='item-quantity'>
                    <div className='box-quantity'>
                        <span 
                            className='btn-icon'
                            onClick={() => dispatch(decrementQuantity(item.id))}   
                        > - </span>
                        <span> {item.quantity} </span>
                        <span 
                            className='btn-icon'
                            onClick={() => dispatch(incrementQuantity(item.id))}   
                        > + </span>
                    </div> 
                    <span style={{ marginTop: '12px' }}> 
                        Total: { valueFormated(item.quantity * priceItem) }
                    </span>
                </div>
            </div>    
        </div>
    )
}