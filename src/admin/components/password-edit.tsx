import React from 'react';
import { BasePropertyComponent, EditPropertyProps } from 'adminjs';

const PasswordEdit: React.FC<EditPropertyProps> = (props) => {
  const { property } = props;

  const defaultProperty = { ...property, components: null };

  return <BasePropertyComponent.Password.Edit {...props} property={defaultProperty} />;
};

export default PasswordEdit;
