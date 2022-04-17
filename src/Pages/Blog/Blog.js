import React from 'react';
import '../Blog/Blog.css'


const Blog = () => {
    return (
        <div>
            <h2 className='container text-center '>Write The Answer Of Question :-</h2>

            <ul>
                <li> <span className='question-style'>Question-1:</span> Difference between authorization and authentication ?</li>
                <p>Ans:</p>
                <li> <span className='question-style'>Question-2:</span> Why are you using firebase and what other options do you have to implement authentication ?</li>
                <p>Ans:</p>
                <li> <span className='question-style'>Question-3:</span> What are services does firebase provide other than authentication</li>
                <p>Ans:</p>
            </ul>

        </div>
    );
};

export default Blog;