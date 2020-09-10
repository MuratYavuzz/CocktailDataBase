import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Card className="text-center" style={{ margin: "auto" }}>
          <CardImg
            top
            style={{ width: "55%", margin: "auto" }}
            src="https://c1.wallpaperflare.com/preview/286/573/109/error-not-found-404-lego.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h2>PAGE NOT FOUND :(</h2>
            </CardTitle>
            <Button outline color="primary" href="/">
              Take Me Home
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
