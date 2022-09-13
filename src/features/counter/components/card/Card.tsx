import React from 'react';
import './Card.css';

type Props = {
    words: Array<string>
}

export const Card: React.FC<Props> = ({ words }) => {
  return (
    <div className="card">
        <p className="word word--translated">
            Word
        </p>
    </div>
  )
}
