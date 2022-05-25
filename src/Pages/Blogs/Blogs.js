import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <Container>
                <h1 className='mt-4 text-center text-gray-500'>THE BLOGS</h1>
                <hr style={{ width: '20%', margin: '0  auto' }} className='mb-4 ' />

                <div className='blogs-Container shadow'>
                    <h3 className='Blogss mt-3'>How will you improve the performance of a React Application?
                    </h3>
                    <p className='data'>
                        By default, React provides functionalities for single-page applications. However, some improvements are needed in the production level to make things flow faster and provide a better user experience. Lazy loading is an excellent strategy for reducing render time and optimizing performance. Lazy loading refers to loading a component only when it is required. React.memo is a fantastic approach to improve performance by caching functional components.
                        To avoid unwanted re-renders, memorize React components.
                    </p>
                </div>

                <div className='blogs-Container shadow'>
                    <h3 className='Blogss mt-3'>What are the different ways to manage a state in a React application?

                    </h3>
                    <p className='datap'>
                        In your React projects, there are four different forms of state to consider: <br /> <p></p>
                        1.Local state: The data we handle in one or more components is referred to as local state. <br />
                        2.Global state: The data we handle across various components is referred to as global state. <br />
                        3.Server state: Data from an external server that needs to be combined with our UI state. <br />
                        4.URL state: Information about our URLs, such as pathnames and query arguments.
                    </p>
                </div>


                <div className='blogs-Container shadow'>
                    <h3 className='Blogss mt-3'>How does prototypical inheritance work?
                    </h3>
                    <p className='datp'>
                        The ability to access object properties from another object is referred to as prototypical inheritance. A JavaScript prototype is used to add additional properties and methods to an existing object constructor. In this way, we can tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse properties or methods from one JavaScript object to another by using a reference pointer function.
                    </p>
                </div>


                <div className='blogs-Container shadow'>
                    <h3 className='Blogss mt-3'>Why you do not set the state directly in React?
                    </h3>
                    <p className='dtap'>
                        If you have const [products, setProducts] = useState, for example ([]). Why don't you use setProducts instead of products = [...]?
                        It should not be updated directly since if you do, setState() may overwrite your changes. When you directly update the state, this.state is not altered immediately. Instead, it creates a pending state transition, which will only return the current value if accessible after this function has been used. All of your components' states will be out of your control.
                    </p>
                </div>

                <div className='blogs-Container shadow'>
                    <h3 className='Blogss mt-3'>What is a unit test? Why should write unit tests?

                    </h3>
                    <p className='datapp'>
                        Unit testing enables the programmer to rewrite code in the future and confirm that the module continues to perform correctly. It is standard practice to write test cases for all functions and methods so that any modifications that cause an issue may be identified and addressed quickly. Unit testing ensures that code meets quality criteria before it is deployed. This maintains a quality-oriented engineering environment.
                    </p>
                </div>


            </Container>
        </div>
    );
};

export default Blogs;