import { Icon } from '@adminjs/design-system';
import type { BasePropertyProps } from 'adminjs';
import React, { FC } from 'react';

const Thumb: FC = (props: BasePropertyProps) => {
  const { record, property } = props;
  const value = record.params[property.name];

  return <Icon icon={value ? 'ThumbsUp' : 'ThumbsDown'} />;
};

export default Thumb;
