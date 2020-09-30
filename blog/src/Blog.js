import React from 'react'
import { Layout, Row, Col, Card, Image } from 'antd';
import "antd/dist/antd.css";
import "./Blog.css";
import Post from "./Post.js";

const { Header, Footer, Slider, Content } = Layout;

const posts = [
    {
        titulo: "Titulo 1",
        contenido: "Contenido",
        imagen_url: "https://www.google.com/search?q=flor&tbm=isch&source=iu&ictx=1&fir=AxN3hM9bklMonM%252Ceh7dJTpSsg8uZM%252C_&vet=1&usg=AI4_-kROAY0mmyzt5QXdaP8aHz7mL-3MFA&sa=X&ved=2ahUKEwiUj7L-q4jsAhXhJbkGHZ5sCQcQ9QF6BAgMEFg#imgrc=AxN3hM9bklMonM"
    },
    {
        titulo: "Titulo 2",
        contenido: "Contenido",
        imagen_url: "https://www.google.com/search?q=flor&tbm=isch&source=iu&ictx=1&fir=AxN3hM9bklMonM%252Ceh7dJTpSsg8uZM%252C_&vet=1&usg=AI4_-kROAY0mmyzt5QXdaP8aHz7mL-3MFA&sa=X&ved=2ahUKEwiUj7L-q4jsAhXhJbkGHZ5sCQcQ9QF6BAgMEFg#imgrc=AxN3hM9bklMonM"
    },
    {
        titulo: "Titulo 3",
        contenido: "Contenido",
        imagen_url: "https://www.google.com/search?q=flor&tbm=isch&source=iu&ictx=1&fir=AxN3hM9bklMonM%252Ceh7dJTpSsg8uZM%252C_&vet=1&usg=AI4_-kROAY0mmyzt5QXdaP8aHz7mL-3MFA&sa=X&ved=2ahUKEwiUj7L-q4jsAhXhJbkGHZ5sCQcQ9QF6BAgMEFg#imgrc=AxN3hM9bklMonM"
    }
]

function Blog() {
    return (
        <Layout>
            <header style={{ color: "white", fontSize: 30 }}>
                <div className="Logo" />
                Empresa
            </header>
            <Content>
                <div className="site-layout-content">
                    {posts.map(post => {
                        return (
                            <Post post={post} />
                            // <Row>
                            //     <Card title={post.titulo} bordered={true}>
                            //         <Image width={200} src={post.imagen_url} />
                            //         <br />
                            //         <p>
                            //             {post.contenido}
                            //         </p>
                            //     </Card>

                            // </Row>
                        )
                    })}
                </div>
            </Content>
            <Footer>
                <div>Asuncion</div>
                <br />
                <div>Todos los derechos reservados</div>
            </Footer>
        </Layout>
    )
}

export default Blog;
