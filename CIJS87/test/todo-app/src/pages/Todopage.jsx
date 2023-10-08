import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap'
import Swal from "sweetalert2";
import 'boxicons';
function Todopage() {
    const [todo, setTodo] = useState([]);
    const [item, setItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(-1);
    const getTodo = () => {
        if (localStorage.getItem('todo')) {
            setTodo(JSON.parse(localStorage.getItem('todo')));
        }
    }
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    const todoList = todo.map((item, index) =>
        <Row key={item.id}>
            <Row className='mb-1'>
                <Col className='col-md-1'>{
                    item.status === false ?
                        <input className="form-check-input" type="checkbox" onChange={(e) => updateTodo(item.id, e)} name="" id="" />
                        :
                        <input type="checkbox" checked disabled name="" id="" />
                }</Col>
                <Col className='col-md-10'>{item.todo}</Col>
                <Col className='col-md-1' style={{ paddingLeft: "24px" }}><button className='btn btn-danger btn-sm' onClick={() => deleteTodo(item.id)}><box-icon name='trash' color='#ffffff'></box-icon></button></Col>
            </Row>
            <hr />
        </Row>
    )
    useEffect(() => {
        getTodo();
    }, [])
    const addTodo = () => {
        Toast.fire({
            icon: 'success',
            title: 'Add successfully'
        }).then(() => {
            var item1 = {
                id: Date.now(),
                todo: item,
                status: false,
            };
            var temp = [];
            if (localStorage.getItem('todo')) {
                temp = JSON.parse(localStorage.getItem('todo'));
            }
            temp = [...temp, item1];
            localStorage.setItem('todo', JSON.stringify(temp));
            setTodo([...todo, item1]);
        })
    }

    const deleteTodo = (i) => {
        Swal.fire({
            icon: 'question',
            title: 'Delete this todo?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: 'success',
                    title: 'Delete successfully'
                }).then(() => {
                    var temp = JSON.parse(localStorage.getItem('todo'));
                    temp = temp.filter((todo) => todo.id !== i);
                    localStorage.setItem('todo', JSON.stringify(temp));
                    setTodo(temp);
                });
            } else if (result.isDenied) { }
        })
    }
    const updateTodo = (i, e) => {
        Swal.fire({
            icon: 'question',
            title: 'Finish this todo?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirm',
            denyButtonText: `Cancel`,
        }).then((result) => {
            if (result.isConfirmed) {
                Toast.fire({
                    icon: 'success',
                    title: 'Finish successfully'
                }).then(() => {
                    var item = JSON.parse(localStorage.getItem('todo'));
                    item.map((todo) => {
                        if (todo.id === i) {
                            todo['status'] = true;
                        }
                    })
                    localStorage.setItem('todo', JSON.stringify(item));
                    changepage(currentPage);
                });
            } else if (result.isDenied) { }
        })
    }
    const deleteAll = () => {
        Swal.fire({
            icon: 'question',
            title: 'Delete all todos?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Delete All',
            denyButtonText: `Cancel`,
        }).then((result) => {
            Toast.fire({
                icon: 'success',
                title: 'Delete successfully'
            }).then(() => {
                localStorage.removeItem('todo');
                setTodo([]);
            });
        })
    }
    const changepage = (status) => {
        var item = JSON.parse(localStorage.getItem('todo')) || [];
        let filteredItems;

        switch (status) {
            case 0:
                filteredItems = item.filter((todo) => todo.status === false);
                break;
            case 1:
                filteredItems = item.filter((todo) => todo.status === true);
                break;
            default:
                filteredItems = item;
                break;
        }
        setCurrentPage(status);
        setTodo(filteredItems);
    };

    return (
        <div>
            <Container style={{ width: "40%" }}>
                <h1 className='text-center'>#todo</h1>
                <Nav justify variant="underline">
                    <Nav.Item>
                        <Nav.Link onClick={() => changepage(-1)} active={currentPage === -1}>All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => changepage(0)} active={currentPage === 0}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => changepage(1)} active={currentPage === 1}>
                            Completed
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='mt-4 row w-100'>
                    <div className='row mt-3 ms-4'>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder='Todo' onChange={(e) => setItem(e.target.value)} id="" />
                        </div>
                        <div className="col-md">
                            <button className='btn btn-primary w-100' onClick={addTodo}>Add</button>
                        </div>
                    </div>
                    <div className="row mt-3 ms-5">
                        {todo && (
                            <Row>
                                {todoList}
                            </Row>
                        )}
                        <Row className='mt-3'>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                {
                                    todo.length === 0 ?
                                        <button disabled className='btn btn-danger w-100' onClick={deleteAll}>Xóa tất cả</button>
                                        :
                                        <button className='btn btn-danger w-100' onClick={deleteAll}>Xóa tất cả</button>
                                }
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Todopage;
