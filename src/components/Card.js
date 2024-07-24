import React from 'react';

function Card({ title, description, links }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xp mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="paragraph-link"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Card;