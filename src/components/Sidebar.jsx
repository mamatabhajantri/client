import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faShoppingCart, faUndo, faUsers, faTruck, faStore, faCogs, faCalculator, faChartLine, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className='dash1'>Dashboard</h2>
      <nav className='list-item'>
        <ul>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faBox} className="icon" /> Inventory
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" /> Order
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUndo} className="icon" /> Returns
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUsers} className="icon" /> Customers
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTruck} className="icon" /> Shipping
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faStore} className="icon" /> Channel
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCogs} className="icon" /> Integrations
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCalculator} className="icon" /> Calculators
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} className="icon" /> Reports
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} className="icon" /> Account
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
