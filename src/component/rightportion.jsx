'use client';

export default function RightPortion() {
  return (
    <div className="rightportion">
      <img 
        src="/profile.jpg" 
        alt="MAYANK MEWARA" 
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover'
        }}
      />
      <h1>MAYANK MEWARA</h1>
      <p>
        Aspiring web developer with a passion for creating dynamic and responsive web applications.
        Currently honing skills in React, JavaScript, and web design principles.
      </p>
    </div>
  );
}