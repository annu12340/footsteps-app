import React from "react"
import { Row, Col, Button } from "antd"

import Searchbar from "./searchbar"
import styles from "../styles/landing.module.css"

export default () => (
  <div className={styles.container}>
    <Row>
      <Col sm={24} lg={14}>
        <h1 className={styles.heading}>Footsteps</h1>
        <p className={styles.subHeading}>Learning Resource Aggregator</p>
        <img
          src={require("../images/road-sign.svg")}
          alt=""
          className={styles.mobileImage}
        />
        <Searchbar />

        <Button className={styles.searchBtn}>Search</Button>
      </Col>
      <Col sm={24} lg={10} className={styles.imageContainer}>
        <img src={require("../images/road-sign.svg")} alt="" />
      </Col>
    </Row>
  </div>
)
