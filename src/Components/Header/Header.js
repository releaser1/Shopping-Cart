import React, {useState}  from 'react';
import '../Header/header.css'
import { FaShoppingCart } from 'react-icons/fa';
import { Modal, Button} from 'react-bootstrap'






function Header  (props)  {

    /* Basket Code */
    const {shopItems, onAdd, onRemove } = props
    const itemsPrice = shopItems.reduce((a, c) => a + c.qty * c.price, 0);
    const totalPrice = itemsPrice;
    /* Basket Code */
    
    /* for Modal Boostrap */
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /* End Modal Boostrap */

    


    function Example() {

        
      
        return (
          <>      
            <Modal show={show} onHide={handleClose}  className="main-main">
              <Modal.Header closeButton className="modal-main">
                <Modal.Title className="modal-text-top">Items in your cart</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-products">
                  
              {shopItems.map((item) => (
                <div className="basket-data" key={item.id}>
                 <div className="shoping-items-cart">
                  <div className="flexbox-item shoping-items-img">
                    <img className="img-example" src={item.image} alt={''}></img>
                  </div>
                  <div className="flexbox-item shoping-items-name-qty">
                    <h1 className="item-name">{item.name}</h1>
                    <div className="item-qty">
                      <button className="item-qty-btn" onClick={() => onRemove(item)}>-</button>
                      <span className="item-qty-indicator">{item.qty}</span>
                      <button className="item-qty-btn" onClick={() => onAdd(item)}>+</button>
                    </div>
                  </div>
                  <div className="flexbox-item shoping-items-price">
                    <span className="one-item-price">{item.qty} x ${item.price.toFixed(2)}</span>
                  </div>
                 </div>

                </div>
                ))}

                <div className="total-price-container">
                        <h3 className="total-price"> Total cost is: ${totalPrice.toFixed(2)}</h3>
                </div>

              </Modal.Body>

    
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose} className="modal-main">
                  Checkout
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
      return (
        <div className="header">
            <div className="inner-header">
                <div className="logo-container">
                    <h1>Millenium<span>Store</span></h1>
                </div>
                <ul className="navigation">
                    
                    <a href="/#" className="li-hover"><li className="li-hover">Home</li></a>
                    <a href="/#" className="li-hover"><li className="li-hover">About</li></a>
                    <a href="/#" className="li-hover"><li className="li-hover">Shop</li></a>
                    <a href="/#" className="li-hover"><li className="li-hover">Contact</li></a>
                    <a href="/#" className="li-hover"><li onClick={handleShow}><span className="counting-number">{props.countShopItems}</span><FaShoppingCart /></li></a>
                    <Example />
                </ul>
            </div>
        </div>
    );
};

export default Header;

