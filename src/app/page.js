'use client';

import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#111', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <Container>
        <Row>
          
          <Col md={4}>
            <h2 style={{ fontWeight: 'bold' }}>INDIA</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
            <p style={{ fontSize: '12px', marginTop: '40px' }}>
              © 2025 Tokyo <br />
              Created by Ib-Themes
            </p>
          </Col>

    
          <Col md={8} style={{ textAlign: 'center', marginTop: '40px' }}>
            <Image
              src="/photo.jpg" 
              alt="Mayank Mewara"
              width={200}
              height={200}
              style={{ borderRadius: '50%' }}
            />
            <h1>Mayank Mewara</h1>
            <h4>JIET College Student</h4>
            <p>Pursuing Data Science | Aspiring Web Developer</p>
            <div>
              <span style={{ margin: '0 10px', textDecoration: 'underline', cursor: 'pointer' }}>Facebook</span>
              <span style={{ margin: '0 10px', textDecoration: 'underline', cursor: 'pointer' }}>Twitter</span>
              <span style={{ margin: '0 10px', textDecoration: 'underline', cursor: 'pointer' }}>Instagram</span>
              <span style={{ margin: '0 10px', textDecoration: 'underline', cursor: 'pointer' }}>TikTok</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
