import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const AdminHomeForm = () => (
  <Form>
    <Form.Field>
      <label>New Product</label>
      <input placeholder='Item Name' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <input placeholder='Description' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='This is a legit menu item' />
    </Form.Field>
    <Button type='Add to menu'>Add to menu</Button>
  </Form>
)

export default AdminHomeForm;
