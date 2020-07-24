import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


export default class DishdetailComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: this.props.dish
        }

    }

    renderComments = (dish) => {

        const comments = this.props.dish.comments.map((comment) => {
            return (
                <div key={comment.id} className="col-12 col md-5 m-1">
                    <ul className="list-unstyled">
                        <li><p>{comment.comment}</p></li>
                        <li><p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {month: 'short', day: 'numeric', year: 'numeric'}).format(new Date(comment.date))}</p></li>
                    </ul>
                </div>
            );
        });

        if (dish != null)
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>

        )
    }
}
