import React from 'react';
import'./Question.css'
const Question = () => {
    return (
        <div className='question'>
            <h1>How react works?</h1>
            <p>
            In the field of web development, React is the most popular front-end JavaScript library. React is a flexible JavaScript library that is created for user interfaces.
            React components do not necessarily require the execution of steps. Whenever a rendering of the React element takes place, it feels like saving a screenshot of the JSX right at that time. Therefore, React components rely heavily on JSX. React is ideal for creating user interfaces.
            </p>
            <h1>whats the different btween Prop and State</h1>
           <p> 1.State can be used only with the state components/class component</p>
            <p>1.1:Props are read-only.</p>
            <p>2.State is both read and write.</p>
            <p>2.2:Props are used to pass data from one component to another.</p>
            <p>3.The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            <h1>How use state works</h1>
            <p>The state is the most complex thing in React, and it's something both beginners and experienced developers struggle to understand.StateWORKS executable files are fast and efficient.
            State allows us to manage changing data in an application.useState does not work in class component. </p>
        </div>
    );
};

export default Question;