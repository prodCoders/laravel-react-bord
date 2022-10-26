import React, { useState ,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form } from "formik";

export default function Header(props) {

    const [show, setShow] = useState(false);

    const [cities, setCities] = useState(null);
    const [city, setCity] = useState(null);
    const [categories, setCategories] = useState(null);

    const fetchData = async (url,param) => {
        const response = await axios.get(url,{ params: param })
        return response.data.data;
    }

    const fetchPostData = async (url,value) => {
        const response = await axios.post(url, value)

        console.log(response?.data);
        alert(response?.data?.message)

        return response.data.data;
    }

    useEffect(async () => {
        setCities(await fetchData('/ajax/getCities'));
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setCategories(null);
    }
    const handleChange = async (event) => {
        setCity(event.target.value);
        setCategories(await fetchData('/ajax/getCategories',{'city':event.target.value}))
    }

    const getAds = async (category_id) => {
        props.updateData(await fetchData('/ajax/getAds',{city_id:city,category_id}))
    }

    const addAds = async (value) => {
        value.city_id = city;
        await fetchPostData('/ajax/ads',value)
    }

    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <span className="fs-4">Bulletin board</span>
                </a>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <a onClick={handleShow} className="py-2 text-dark text-decoration-none" href="#" >Добавить объявление</a>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Добавить обьявление</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Formik
                                initialValues={{ name: "", city_id: ""}}
                                onSubmit = {(values) => addAds(values)}
                            >
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Заголовок</label>
                                        <Field name="name" type="text" className="form-control" maxlength="200"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Описание</label>
                                        <Field name="description" type="text" className="form-control" maxlength="500" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Цена</label>
                                        <Field name="price" type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Город</label>
                                        <Field as="select" name="city_id" className="form-control" value={city} onChange={handleChange}>
                                            <option value="">Выберите город</option>
                                            {cities && cities.map(city => {
                                                return (
                                                    <option value={city.id}>{city.name}</option>
                                                )
                                            }) }
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput">Категория</label>
                                        <Field as="select" name="category_id" className="form-control">
                                            <option value="">Выберите категорию</option>
                                            {categories && categories.map(category => {
                                                return (
                                                    <option value={category.id}>{category.name}</option>
                                                )
                                            }) }
                                        </Field>
                                    </div>
                                    <button type="submit">Submit</button>
                                </Form>
                            </Formik>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </nav>
            </div>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <Formik
                    initialValues={{ category_id: ""}}
                    onSubmit = {(values) => getAds(values.category_id)}>
                    <Form>
                        <div className="row">
                            <div className="col">
                                <Field as="select" className="form-control"
                                       onChange={handleChange} value={city}>
                                    <option value="">Выберите город</option>
                                    {cities && cities.map(city => {
                                        return (
                                            <option value={city.id}>{city.name}</option>
                                        )
                                    }) }
                                </Field>
                            </div>
                            <div className="col">
                                <Field as="select" name="category_id" className="form-control">
                                    <option value="">Выберите категорию</option>
                                    {categories && categories.map(category => {
                                        return (
                                            <option value={category.id}>{category.name}</option>
                                        )
                                    }) }
                                </Field>
                            </div>
                            <div className="col">
                                <button type="submit">Search</button>
                            </div>
                        </div>
                    </Form>
                </Formik>
                <h1 className="display-4 fw-normal">Bulletin board</h1>
                <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers
                    with this Bootstrap example. It’s built with default Bootstrap components and utilities with little
                    customization.</p>
            </div>
        </header>
    );

}
