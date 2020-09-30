import React from 'react'
import { Row, Card, Image } from 'antd';

// class Post extends React.Component {
//     render() {
//         return (
//             <Row>
//                 <Card title={this.props.post.titulo} bordered={true}>
//                     <Image width={200} src={this.props.post.imagen_url} />
//                     <br />
//                     <p>
//                         {this.props.post.contenido}
//                     </p>
//                 </Card>

//             </Row>
//         )
//     }
// }

function Post(props) {
        return (
            <Row>
                <Card title={props.post.titulo} bordered={true}>
                    <Image width={200} src={props.post.imagen_url} />
                    <br />
                    <p>
                        {props.post.contenido}
                    </p>
                </Card>

            </Row>
        )
    }

export default Post;