import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Card({ title, description, skills = [], links = [] }) {
  const [markdownContent, setMarkdownContent] = useState('');
  const [subtitle, setSubtitle] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/projects/${description}`);
        const text = await response.text();
        // const firstLine = text.split('\n')[0].replace(/^#\s*/, ''); // Remove leading '#' if present
        // setSubtitle(firstLine);
        // setMarkdownContent(text.split('\n').slice(1).join('\n')); // Remove first line from content
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error fetching markdown:', error);
        setMarkdownContent('Failed to load description.');
        setSubtitle('');
      }
    };

    fetchMarkdown();
  }, [description]);

  // Custom component for rendering links in markdown
  const CustomLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="paragraph-link">
      {children}
    </a>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl">{title}</h2>
          {/* {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>} */}
        </div>
        <div className="flex items-center">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="mx-2 text-gray-400">•</span>}
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-link"
              >
                {link.text}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="text-gray-600 markdown-content">
        <ReactMarkdown
          components={{
            a: CustomLink,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Card;