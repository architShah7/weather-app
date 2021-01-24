import { connect, ConnectedProps } from "react-redux";
import React from "react";
import { RootState } from "../app/store";
import { Button, Card, Col, Layout, Row, Typography } from "antd";
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

type ComponentProps = {};
type ComponentState = {};

const mapState = (state: RootState, props: ComponentProps) => ({});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & ComponentProps;
type State = ComponentState;
class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row gutter={0}>
          <Col span={19} push={5}>
            <Card style={{ height: "100vh" }} bordered={false}>
              <Row>
                <Button
                  type="primary"
                  shape="circle"
                  style={{ marginRight: 10, marginLeft: "78%" }}
                >
                  C
                </Button>
                <Button type="primary" shape="circle" style={{}}>
                  F
                </Button>
              </Row>
              <Row
                gutter={[16, 16]}
                style={{ marginLeft: "14%", marginTop: 30 }}
              >
                <Col span={4}>
                  <Card style={{ height: "200px" }} bordered={true}>
                    Card content 1
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 2
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 3
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 4
                  </Card>
                </Col>
                <Col span={4}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 5
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginLeft: "15%", marginTop: 30 }}>
                <Title level={3}>Today's Highlights</Title>
              </Row>
              <Row
                gutter={[16, 16]}
                style={{ marginLeft: "14%", marginTop: 5 }}
              >
                <Col span={10}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 5
                  </Card>
                </Col>
                <Col span={10}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 5
                  </Card>
                </Col>
              </Row>
              <Row gutter={[16, 16]} style={{ marginLeft: "14%" }}>
                <Col span={10}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 5
                  </Card>
                </Col>
                <Col span={10}>
                  <Card style={{ height: "100%" }} bordered={true}>
                    Card content 5
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={5} pull={19}>
            <Card style={{ height: "100vh" }} bordered={true}>
              Card content 1
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connector(Dashboard);
