import { pdfUrl } from '../actions/resume_link';

const ResumePreview = () => {
  return (
    <div
      style={{ height: '600px', border: '1px solid #ddd', margin: '20px 0' }}
    >
      <iframe
        src={pdfUrl}
        width='100%'
        height='100%'
        style={{ border: 'none' }}
        title='Resume Preview'
      ></iframe>
    </div>
  );
};

export default ResumePreview;
