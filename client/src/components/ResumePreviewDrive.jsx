const ResumePreview = ({ pdfUrl }) => {
  return (
    <div
      style={{
        height: '90rem',
        border: '1px solid #ddd',
        boxShadow: '.1px .1px 10px #aaa',
      }}
    >
      <iframe
        src={pdfUrl.replace('/view', '/preview')}
        width='100%'
        height='100%'
        title='Resume Preview'
        style={{ border: 'none' }}
      ></iframe>

      <a
        href={pdfUrl}
        download='Resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumePreview;
