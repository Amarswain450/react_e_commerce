import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
    return (
        <>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control 
                        type="text"
                        placeholder="Search Item..." 
                    />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>
        </>
    )
}

export default SearchBar