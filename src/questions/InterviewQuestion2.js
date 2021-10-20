import axios from "axios"
import _ from "lodash";
import {useState} from "react"
import {Container,Row, Col, Form, Button, Alert} from "react-bootstrap"

export default function Question2(){
    let [post, setPost] = useState({
        title: "",
        body: ""
    })

    let [status, setStatus] = useState(null)
    /**
     * @function validate
     * @param {string} title
     * @param {string} body
     * @returns {boolean}
     * 
     * @description validates that a post's title and body are not empty
     */
    function validate(){
        return true
    }
    /**
     * @function isValid
     * @returns {boolean}
     * @description high performance version of validate.
     */
    let isValid = _.memoize(validate);
    
    /**
     * @function updatePost
     * @param {SyntheticEvent} $event 
     * @param {string} field 
     * @description updatePost takes the input value from an onChange event and triggers a state update on the field that is updating. This can be either the title or the body
     */
    function updatePost($event, field){
        
        
    }
    /**
     * @function addPost
     * @param {SyntheticEvent} $event
     * @description Triggers an endpoint to create a new post for the given user.
     */
    function addPost($event){
        $event.preventDefault();
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post, userId: 1}).then(response=>{
                
        })
       
    }
    
    return (
        <Container size="sm">
        <Row>
            <Col><h1>Question 2</h1></Col>
        </Row>
        <Row>
            <Col>
                <p>One of the requirements of our application is that users should be able to create posts. A post is made up of a title and a body. Please use the <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">provided API</a> to post a message. </p>
                <ol className="w-50" style={{margin: "auto"}}>
                    <li>If given an error status, what message would you show the user and how?</li>
                    <li>How can we prevent invalid requests from being fired?</li>
                </ol>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form>
                    <Form.Label className="mt-3 mb-3">
                        Title
                    </Form.Label>
                    <Form.Control type="text" />
                    <Form.Label className="mb-3">
                        Body
                    </Form.Label>
                    <Form.Control as="textarea"  />
                    <Button className="mt-3" variant="primary" type="submit" >
                        Post
                    </Button>
                </Form>
            </Col>
        </Row>
        </Container>
    );
};