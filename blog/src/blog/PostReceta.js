import React from 'react'
import { Layout, Menu, Divider, Row, Col, Card, Image, Button, Typography, Pagination } from 'antd';
import { ReadOutlined, HomeOutlined, TeamOutlined, WhatsAppOutlined, SearchOutlined, DownloadOutlined } from '@ant-design/icons';

function PostReceta(props) {
    return (
        <Col span={12}>
            <Card title={props.post.titulo} bordered={true}>
                <Image width={350} src={props.post.imagen_url} />
                <br /> <br />
                <p><b>
                    {props.post.ingredientes}
                </b></p>
                {props.post.ingrediente}
                <p><b>
                    {props.post.preparaciones}
                </b></p>
                <p>
                    {props.post.preparacion}
                </p>
                <p><b>
                    {props.post.info}
                </b></p>
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={"large"}>
                    Descargar receta
                                                    </Button>
            </Card>

        </Col>
    )
}

export default PostReceta;