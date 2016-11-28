import React from 'react';

import {
  Col,
  Row,
  Panel,
} from 'react-bootstrap';

export default function Entry({
  action,
  socialissue,
  level,
  website,
  title,
  type,
  notes,
  insertedon,
  importedby,
}: {
  action: any,
  socialissue: any,
  level: any,
  website: any,
  title: any,
  type: any,
  notes: any,
  insertedon: any,
  importedby: any,
}) {
  return (
    <Row>
      <Col md={12} sm={12}>
        <Panel>
          <div className="panel-body">
            <h2>{title}</h2>
            <p><strong>Action: </strong>{action}</p>
            <p><strong>Social Issue: </strong>{socialissue}</p>
            <p><strong>Level: </strong>{level}</p>
            <p>
              <strong>Website: </strong>
              <a
                target="_blank"
                href={website}
              >{website}</a>
            </p>
            <p><strong>Type: </strong>{type}</p>
            <p><strong>Notes: </strong>{notes}</p>
            <p><strong>Inserted on: </strong>{insertedon}</p>
            <p><strong>Imported by: </strong>{importedby}</p>
          </div>
        </Panel>
      </Col>
    </Row>
  );
}

