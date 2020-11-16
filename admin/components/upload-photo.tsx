import {
  BasePropertyProps,
  PropertyInEdit,
  WrapperBox,
  DefaultTheme,
  Label,
  DropArea
} from '@admin-bro/design-system'
import React, { useState } from 'react'
import { unflatten } from 'flat'

const extractMappedFields = (
  params: Record<string, any>,
  mappedFields: Record<string, string>)
  : Record<string, string> | undefined => {
  const fileObject = Object.entries(mappedFields).reduce((m, [fileDataField, dbField]) => {
    if (!params[dbField] || params[dbField] === '') {
      return m
    }
    return {
      ...m,
      [fileDataField]: params[dbField]
    }
  }, {})

  return Object.entries(fileObject).length ? fileObject : undefined
}

const UploadPhoto: React.FC<BasePropertyProps> = (props) => {
  const { property, record, onChange } = props
  const { mappedFields, mimeTypes, maxSize } = property.custom

  const fileObject = unflatten(record.params)[property.name] || extractMappedFields(record.params, mappedFields)

  const onUpload = (files: FileList) => {
    const newRecord = {...record}
    const [file] = files
    
    onChange({
      ...newRecord,
      params: {
        ...newRecord.params,
        [`${property.name}.file`]: file,
        [`${property.name}.name`]: file.name,
        [`${property.name}.size`]: file.size,
        [`${property.name}.type`]: file.type,
      }
    })
    event.preventDefault()
  }

  return (
    <PropertyInEdit property={property}>
      <DropArea
        fileObject={fileObject}
        onUpload={onUpload}
        propertyName={property.name}
        validate= { { maxSize, mimeTypes } }
      />
    </PropertyInEdit>
  )
}

export default UploadPhoto
