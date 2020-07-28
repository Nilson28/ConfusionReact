import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const RenderDish = ({dish}) => {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const RenderComments = ({comments}) => {
    const listComments = comments.map((comment) => {
        return (
            <ul key={comment.id} className="list-unstyled">
                <li><p>{comment.comment}</p></li>
                <li><p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(comment.date))}</p></li>
            </ul>
        );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {listComments}
        </div>
    );
}

const DishDetail = (props) => {

    if(props.dish != null){
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
    
        )
    }
    else{
        return(
            <div></div>
        );
    }    
}

export default DishDetail;
