'use client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftComponent from "../component/leftportion.jsx"
import RightComponent from "../component/rightportion.jsx"
import styles from './page.module.css';

<img src="/photo.jpg" alt="MAYANK MEWARA" className={styles.profileImage} />
export default function Page() {
  return(
    <Container>
    <Row><Col><LeftComponent/>
      </Col>
    <Col><RightComponent/>
      </Col></Row>
      </Container>
    
  );
}