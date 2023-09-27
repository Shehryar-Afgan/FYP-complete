import React, { useState } from 'react'
import Sidebar from '../Navbar/Sidebar'
import { Link } from "react-router-dom";
const TestCategory = () => {
    const [data,setData]=useState('Math');
    function onChangeValue(event) {
        setData(event.target.value);
        console.log(event.target.value);
    }
    return (
        <>
            <div className='row p-0 m-0'>
                <div className='col-3 m-0 me-5 p-0' style={{ minHeight: "100vh" }}>
                    <Sidebar />
                </div>
                <div className='col mt-5'>
                    <div className='container'>
                        <div className='d-flex flex-column align-items-center'>
                            <h1>Test Categories</h1>
                            <div style={{marginTop:'20%',padding:'40px',background: "rgba( 255, 255, 255, 0.25 )",
boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
backdropFilter: "blur( 4px )",
borderRadius: "10px",
border: "1px solid rgba( 255, 255, 255, 0.18 )"}}>
                                <p style={{textAlign:'center',fontSize:'24px'}}>Choose a Test Type:</p>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '30px'}}>
                                    <div>
                                        <Link className='btn btn-success mt-3 px-5' to='/gat/test'>
                                            Medical
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='btn btn-success mt-3 px-5' to='/gat/englishtest'>
                                            Engineering
                                        </Link>
                                    </div>
                                    {/* <div>
                                        <label>
                                            <input type="radio" value="Math" checked={data==='Math'} onChange={onChangeValue} />
                                            Medical
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" value="English" checked={data==='English'} onChange={onChangeValue} />
                                            Engineering
                                        </label>
                                    </div> */}
                                    {/* <input type="radio" value="Medical" name="test" placeholder='Medical' />
                                    <input type="radio" value="Engineering" name="test" /> Engineering */}
                                </div>
                            </div>
                            
                            
                            {/* <div className='d-flex justify-content-center'>
                                {
                                    data=='Math'?<Link className='btn btn-success mt-3 px-5' to='/gat/test'>
                                    Begin
                                </Link>:
                                <Link className='btn btn-success mt-3 px-5' to='/gat/englishtest'>
                                    Begin
                                </Link>
                                }
                                
                            </div> */}

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default TestCategory