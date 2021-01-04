import React from 'react';
import { BasePropertyComponentProps } from 'admin-bro';

const ArticleInList: React.FC<BasePropertyComponentProps> = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];

  return (
    <span>
      {value ? (
        <i className="far fa-thumbs-up" />
      ) : (
        <i className="far fa-thumbs-down" />
      )}
    </span>
  );
};

export default ArticleInList;
