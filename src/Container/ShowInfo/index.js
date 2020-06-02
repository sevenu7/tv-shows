import React, { Component } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import InnerHtml from "dangerously-set-html-content";
import dummyImage from "../../assets/no-img-portrait-text.png";
import InfoCard from "../../Components/InfoCard";
import { fetchShow } from "../../services";

class ShowInfo extends Component {
  state = {
    show: this.props.location.show,
  };

  componentDidMount() {
    const { show } = this.state;
    const id = this.props.match.params.id;
    if (!show) {
      fetchShow(id)
        .then((res) => this.setState({ show: res.data }))
        .catch(() => this.setState({ error: true }));
    }
  }

  render() {
    const { show } = this.state;
    return show ? (
      <Container>
        <Row>
          <Col sm={12} md={8} lg={8} xl={8}>
            <h2>{show.name}</h2>
            <img
              className="infoImage"
              src={show.image ? show.image.medium : dummyImage}
              alt={show.name}
            />
            <InnerHtml html={show.summary} />
          </Col>
          <Col sm={12} md={4} lg={4} xl={4}>
            <InfoCard show={show} />
          </Col>
        </Row>
      </Container>
    ) : (
      <Spinner className="spinner" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
}

export default ShowInfo;
