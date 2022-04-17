import React from 'react';
import '../Blog/Blog.css'


const Blog = () => {
    return (
        <div>
            <h2 className='container text-center '>Write The Answer Of Question :-</h2>

            <ul>
                <li> <span className='question-style'>Question-1:</span> Difference between authorization and authentication ?</li>
                {/* Ans to the question-1 */}

                <p>Ans: <span className='ans-style'>Authorization- </span> 	Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.	Authorization always takes place after authentication.</p>
                <p><span className='ans-style'>Authentication- </span> Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the use.Authentication is the first step of a good identity and access management process.</p><br />

                {/* Ans to the question no-2 */}

                <li> <span className='question-style'>Question-2:</span> Why are you using firebase and what other options do you have to implement authentication ?</li>
                <p>Ans: I use firebase because it's made my work easier and so comfort.and by using firebase people can many different type of work.so that like most of the people i use firebase.
                    Due to the stateless nature of the REST API, a web application or other component that speaks to a server or locator via the REST API goes through authentication on each request</p><br /> <br />

                {/* Ans to the question no-3 */}

                <li> <span className='question-style'>Question-3:</span> What are services does firebase provide other than authentication ?</li>
                <p>Ans:Other service providers can help in growing business,by specific services like Google cloud,AWS etc.. But Firebase is originally developed by firebase inc and later acquired by Google .firebase provides different kinds of services that help you to develop high-quality mobile and web application to grow business.
                    <span className='new-style'>There are many services which firebase provides,Most useful of them are:
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Google Analytics</li>
                        <li>Cloud Messaging</li>
                        <li>Dynamic Links</li>
                    </span>
                </p>
            </ul>

        </div>
    );
};

export default Blog;