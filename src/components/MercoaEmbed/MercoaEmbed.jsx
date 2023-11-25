import React from 'react';

const MercoaEmbed = () => {
  return (
    <iframe
      title="Mercoa Embed"
      src="https://mercoa.com/embedded?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6Im9yZ190ZXN0XzZmZDM1ZWVmLTY4NjUtNGI2Yy1hMTg2LTUwMzMzZDA0MjlkOCIsImVudGl0eUlkIjoiZW50X2JmNmRjMTA4LTZmMTYtNDJjNC04ZDlmLWZiNGM2MGVhZWY4NSIsIm9wdGlvbnMiOnsiZW50aXR5Ijp7ImVuYWJsZU1lcmNvYVBheW1lbnRzIjp0cnVlfSwiaW52b2ljZSI6eyJzdGF0dXMiOlsiRFJBRlQiLCJORVciLCJBUFBST1ZFRCIsIlNDSEVEVUxFRCIsIlBFTkRJTkciLCJQQUlEIiwiQ0FOQ0VMRUQiXSwibWFya1BhaWQiOnRydWV9LCJwYWdlcyI6eyJwYXltZW50TWV0aG9kcyI6dHJ1ZSwicmVwcmVzZW50YXRpdmVzIjp0cnVlLCJub3RpZmljYXRpb25zIjp0cnVlfSwidmVuZG9ycyI6eyJkaXNhYmxlQ3JlYXRpb24iOmZhbHNlLCJuZXR3b3JrIjoiYWxsIn19LCJpYXQiOjE3MDA4NzE5NzZ9.pFCDVyQq7UrmsSoBPtl5y0z2OY6Fqg86Ed4gR3cX2HY"
      id="mercoaIframe"
      style={{ display: 'block', width: '80%', height: '100vh', border: 'none', position: 'absolute', left: '275px', top: '75px' }}
      frameBorder="0"
      allow="clipboard-write"
    />
  );
};

export default MercoaEmbed;
