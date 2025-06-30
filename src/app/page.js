'use client';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftPortion from "../component/leftportion.jsx"
import RightPortion from "../component/rightportion.jsx"
import styles from './page.module.css';

<img src="/photo.jpg" alt="MAYANK MEWARA" className={styles.profileImage} />
export default function Page() {
  return(
    <Container>
    <Row><Col><LeftPortion/>
      </Col>
    <Col><RightPortion/>
      </Col></Row>
      </Container>
    
  );
}