import React from 'react'
import "./Table.css";
import{BsFillEyeFill, BsFillPencilFill,BsFillTrashFill} from "react-icons/bs";

export const Table = () => {
    return (
        <div className='table-wrapper'>
            <h2>STORE INVENTION</h2>
            <input type="text" className = 'inp' placeholder='Search Title'/>
            {/* <button className='btn'>Add Product</button> */}
            <table className='table'> 
                <thead>
                    <tr>
                        <th className='expand'>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Check</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fjallraven-FoldSack No.1 <br /> BackPack,Fits 15 Laptops</td>
                        <td>Men's Clothing</td>
                        <td>109.95$</td>
                        <td className='pic'><img src="./bag.jpg" alt="bag" /></td>
                        <td><span className='green'><BsFillEyeFill/></span></td>
                        <td><BsFillPencilFill/></td>
                        <td className='red'><BsFillTrashFill/></td>
                    </tr>
                    <tr>
                        <td>Mens casual premium slim<br /> fit T-shirts</td>
                        <td>Men's Clothing</td>
                        <td>22.3$</td>
                        <td className='pic'><img src="./shirt.jpg" alt="shirt" /></td>
                        <td><span className='green'><BsFillEyeFill/></span></td>
                        <td><BsFillPencilFill/></td>
                        <td className='red'><BsFillTrashFill/></td>
                    </tr>
                    <tr>
                        <td>Mens cotton jacket</td>
                        <td>Men's Clothing</td>
                        <td>55.99$</td>
                        <td className='pic'><img src="./jac.jpg" alt="bag" /></td>
                        <td><span className='green'><BsFillEyeFill/></span></td>
                        <td><BsFillPencilFill/></td>
                        <td className='red'><BsFillTrashFill/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}