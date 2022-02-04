import React from 'react'
import {Box, FormGroup, Label, Table, TableBody, TableCell, TableHead, TableRow} from '@adminjs/design-system'
import {unflatten} from "adminjs";

const ProductsList = (props) => {
  const params = unflatten(props.record.params);

  return (
    <FormGroup mb={24}>
      <Label>Products list</Label>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!params.products.length && (
              <TableRow>
                <TableCell colSpan={5} style={{ textAlign: 'center' }}>No records</TableCell>
              </TableRow>
            )}
            {params.products.length > 0 && params.products.map(({quantity, product}) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell>{product.price / 100}</TableCell>
                <TableCell>{(product.price * quantity) / 100}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </FormGroup>
  )
}

export default ProductsList
