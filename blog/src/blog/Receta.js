import React from 'react'
import { Layout, Menu, Divider, Row, Col, Card, Image, Button, Typography, Pagination } from 'antd';
import { ReadOutlined, HomeOutlined, TeamOutlined, WhatsAppOutlined, SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import "./Receta.css";
import PostReceta from "./PostReceta.js";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const { Text } = Typography;

const posts = [
    {
        titulo: "ENSALADA DE PASTA CON ATÚN Y KALE",
        ingredientes: "Ingredientes",
        ingrediente: <ul>
            <li>1 manojo de jale troceado</li>
            <li>400 g de pasta de codito</li>
            <li>3 latas de atún troceado</li>
            <li>1 taza de jitomate deshidratado</li>
            <li>3 cdas. de balsámico</li>
            <li>5 cdas. de aceite de oliva</li>
            <li>2 cdas. de miel</li>
            <li>1 cda. de sal</li>
        </ul>,
        preparaciones: "Preparación",
        preparacion: <ol>
            <li>Cuece la pasta en agua hirviendo con sal, cuando esté suave, escurre.</li>
            <li>Mezcla con el resto de los ingredientes, salpimienta y sirve.</li>
        </ol>,
        info: "Tiempo: 30 min - Porción: 4 porciones",

        imagen_url: "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/03/ensalada-de-pasta-con-atun-kale.jpg"
    },
    {
        titulo: "ENSALADA TRADICIONAL MEDITERRÁNEA",
        ingredientes: "Ingredientes",
        ingrediente: <ul>
            <li>Rábanos al gusto</li>
            <li>1/2 Jitomates cherry rojo y amarillo</li>
            <li>1 pepino</li>
            <li>Mix de hojas verdes</li>
            <li>Jugo de 1 limón</li>
            <li>1/4 de taza de aceite de oliva</li>
            <li>1/4 de taza de hojas de hierbabuena</li>
        </ul>,
        preparaciones: "Preparación",
        preparacion: <ol>
            <li>Mezcla los alimentos comenzando con las hojas verdes y los rábanos. Agrega, posteriormente, los rábanos y al final los jitomates.</li>
            <li>Para finalizar, baña con jugo de limón.</li>
        </ol>,
        info: "Tiempo: 15 min - Porción: 4 porciones",
        imagen_url: "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/ensalada-mediterranea.jpg"
    },
    {
        titulo: "ENSALADA MEXICANA CON POLLO",
        ingredientes: "Ingredientes",
        ingrediente: <ul>
            <li>4 tazas de corazones de lechuga fileteados</li>
            <li>2 cucharadas de aceite de oliva</li>
            <li>1 taza de granos de elote dorados</li>
            <li>1 aguacate en cubos</li>
            <li>1 taza de queso panela en cubos</li>
            <li>3 cucharadas de cebolla morada picada</li>
            <li>1 taza de tiras de tortilla fritas</li>
            <li>4 huevos de codorniz</li>
            <li>1 taza de frijoles cocidos</li>
        </ul>,
        preparaciones: "Preparación",
        preparacion: <ol>
            <li>Salpimienta el pollo, barniza con la mostaza y sella en una plancha de rayas con el aceite hasta que estén cocidas, deja reposar y rebana.</li>
            <li>Mezcla los ingredientes de la vinagreta y salpimienta. Integra con la lechuga y divide en cuatro platos.</li>
            <li>Acomoda el resto de los ingredientes sobre la lechuga y sirve.</li>
        </ol>,
        info: "Tiempo: 30 min - Porción: 4 porciones",
        imagen_url: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/10/ensalada-mexicanacon-pollo.jpg"
    },
    {
        titulo: "ENSALADA DE PASTA CON ATÚN Y KALE",
        ingredientes: "Ingredientes",
        ingrediente: <ul>
            <li>1/2 sandía en rodajas</li>
            <li>1/2 pepinillo en láminas</li>
            <li>1 naranja en supremas</li>
            <li>1/2 taza de queso azul</li>
            <li>1 chile en rodajas</li>
            <li>1/2 cebolla morada fileteada</li>
            <li>1/4 de taza de aceite de oliva</li>
            <li>1/4 de taza de hojas de hierbabuena</li>
            <li>1/4 de taza de hojas de hierba</li>
            <li>1 cda. de sal</li>
            <li>2 limones</li>
        </ul>,
        preparaciones: "Preparación",
        preparacion: <ol>
            <li>Coloca una cama de sandía y sobre ésta intercala el pepinillo con la naranja.</li>
            <li>Desmorona queso sobre la fruta y termina con la hierba- buena, serrano, cebolla, pimienta, limón y aceite de oliva.</li>
        </ol>,
        info: "Tiempo: 15 min - Porción: 4 porciones",
        imagen_url: "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/07/Ensalada-de-sandia-con-chile-670x375.jpg"
    }
]

function Receta() {
    return (
        <Layout style={{ fontFamily: "Source sans" }}>
            <header>
                <div className="logo" />
                <div class="imagen">
                    <img src="https://st2.depositphotos.com/1914485/11691/v/950/depositphotos_116912588-stock-illustration-healty-food-cartoon-representing.jpg" height={200} width={200} ></img></div>
                <Menu style={{ textAlign: "center", fontSize: 20 }} theme="white" mode="horizontal" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1">Inicio</Menu.Item>
                    <Menu.Item key="2">Empresa</Menu.Item>
                    <Menu.Item key="3">Receta</Menu.Item>
                    <Menu.Item key="4">Contacto</Menu.Item>
                </Menu>
            </header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['9']}
                        defaultOpenKeys={['receta']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="inicio" icon={<HomeOutlined />} title="Inicio">
                            <Menu.Item key="1">Vida Saludable</Menu.Item>
                            <Menu.Item key="2">Rutina</Menu.Item>
                            <Menu.Item key="3">Suscripción</Menu.Item>
                        </SubMenu>
                        <SubMenu key="empresa" icon={<TeamOutlined />} title="Empresa">
                            <Menu.Item key="4">Fundación</Menu.Item>
                            <Menu.Item key="5">Donaciones</Menu.Item>
                        </SubMenu>
                        <SubMenu key="receta" icon={<ReadOutlined />} title="Receta">
                            <Menu.Item key="9">Ensaladas</Menu.Item>
                            <Menu.Item key="10">Plato Principal</Menu.Item>
                            <Menu.Item key="11">Postres</Menu.Item>
                            <Menu.Item key="12">Bebidas</Menu.Item>
                        </SubMenu>
                        <SubMenu key="contacto" icon={<WhatsAppOutlined />} title="Contacto">
                            <Menu.Item key="13">E-mail</Menu.Item>
                            <Menu.Item key="14">Telefóno</Menu.Item>
                            <Menu.Item key="15">Redes Sociales</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px', margin: '16px 0' }}>

                    <Content>
                        <div className="site-layout-background">
                        <div align ="right">  <Button icon={<SearchOutlined />}>Buscar receta</Button></div>   
                            <br /> <br /> <br />
                            <Row>
                                {posts.map(post => {
                                    return (
                                        <PostReceta post={post} />
                                    )
                                })}
                            </Row>
                            <br/>
                            <div align ="center"> <Pagination defaultCurrent={1} total={50} /></div>                          
                        </div>
                        <div className="site-layout-background">
                            <Divider><Text mark>CURIOSIDADES SOBRE LAS ENSALADAS</Text></Divider>
                            <Row>
                                <Col span={24}>
                                    <Card>
                                        <p>
                                            El nombre de la ensalada César: seguramente habrás escuchado de esta ensalada alguna vez. Se debe a su creador, el Chef César Cardini, del restaurante Cardini en Tijuana, México.

                                            La ensalada griega no la conocen los griegos: se le llama así a la ensalada de ingredientes secos, sin embargo, en Grecia no la preparan.

                                            Sólo se come con tenedor: según la etiqueta, sólo necesitas un tenedor especial para comer ensalada. Sin embargo, esta costumbre se debe a que antes los cuchillos se fabricaban con un material que se deterioraba con el vinagre utilizado en las ensaladas, y a pesar de que hoy hay cuchillos resistentes, la costumbre se ha quedado hasta nuestros días.

                                            Hidratación segura: al componerse, en su mayoría, de alimentos frescos, las ensaladas refrescan e hidratan en un 90%.
                                            </p>
                                    </Card>

                                </Col>
                            </Row>

                            <Divider><Text mark>BENEFICIOS DE COMER ENSALADAS SALUDABLES</Text></Divider>
                            <Row>
                                <Col span={12}>
                                    <Card>
                                        <ol>
                                            <li>Los vegetales usualmente contenidos en las ensaladas son una excelente fuente de vitaminas que regulan los procesos orgánicos, como el buen funcionamiento del sistema nervioso.</li>
                                            <li>Tienen acción depurativa, son desintoxicantes y diuréticas, debido a su alto contenido en agua y potasio, además de su bajo aporte de sodio.</li>
                                            <li>Cuentan con aceites esenciales que ayudan a dilatar los vasos renales.</li>
                                            <li>Al ser bajas en grasas, son una excelente opción de alimentación para cuidar la talla y el peso.</li>
                                            <li> Disminución del riesgo de padecer enfermedades cardiovasculares a largo plazo, ayudando a reducir el colesterol (LDL).</li>
                                            <li>Al ser ricas en betacarotenos, las ensaladas ayudan a que tu piel se renueve y se mantenga protegida de factores ambientales, tales como el sol o el frío.</li>
                                        </ol>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card>

                                        <iframe width="450" height="270" src="https://www.youtube.com/embed/WaVJLAa0rQA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center", }}>
                        <div><b>Paraguay</b></div>
                        <div><b>Todos los derechos reservados ©</b></div>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Receta;