import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    let totalPrice = 0;

    for(let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if(cart.value > 0){
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
    }

    return(
        <table className="table table-hover">
            <h4 style={{color:'white'}}>CAMISAS</h4>
            {cart.Cart.map( item =>{
                return(
                    <tr key={item.id}>
                        <th><button onClick={()=>dispatch(cartActions.DeleteItem(cart, item))} className="badge bg-danger">Retirar</button></th>
                        <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.nome} width="50px"/></th>
                        <th><span className="badge badge-pill bg-warning" style={{color:'white'}}>{item.quantity}X</span></th>
                        <th style={{color:'white'}}>R$ {item.price.toFixed(2)}</th>
                        <th><button onClick={()=>dispatch(cartActions.AddItem(cart, item))} className="badge badge-pill bg-primary">+</button></th>
                        <th><button onClick={()=>dispatch(cartActions.RemoveItem(cart, item))} className="badge badge-pill bg-danger">-</button></th>
                        <th style={{color:'white'}}>R$ {(item.price * item.quantity).toFixed(2)}</th>
                    </tr>
                )
            })}
            <tr>
            <th colSpan="2" scope="col" style={{color:'white'}}>TOTAL</th>
            <th colSpan="3" style={{color:'white'}}>{cart.value} ITENS</th>
            <th colSpan="2" style={{color:'white'}}>R$ {totalPrice.toFixed(2)}</th>
            </tr>
        </table>
    )
}

export default Cart;