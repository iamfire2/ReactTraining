import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Are you sure you want this?
            </div>
        </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" userPhoto={faker.image.avatar()} commentPost="Dude you nailed it!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" userPhoto={faker.image.avatar()} commentPost="Best trick ever!"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" userPhoto={faker.image.avatar()} commentPost="Never going to top that."/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));