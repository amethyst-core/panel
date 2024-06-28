import React from 'react';

interface ContentProps {
  section: string;
}

const ContentComponent: React.FC<ContentProps> = ({ section }) => {
  let content;

  switch (section) {
    case 'section1':
      content = <div>Section 1 content</div>;
      break;
    case 'section2':
      content = <div>Section 2 content</div>;
      break;
    case 'section3':
      content = <div>Section 3 content</div>;
      break;
    default:
      content = <div>No content selected</div>;
  }

  return <div>{content}</div>;
};

export default ContentComponent;