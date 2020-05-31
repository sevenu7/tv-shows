import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Show({ image, name, show }) {
    return (
        <Col xs={6} sm={4} md={2} lg={2} xl={2} className="thumbnail">
            <Link to={{ pathname: `/show/${show.id}`, show }}>
                <img src={image} alt={name} style={{ width: '100%' }} />
                <div className="thumbnail-desc">{name}</div>
            </Link>
        </Col>
    );
}

export default Show;
