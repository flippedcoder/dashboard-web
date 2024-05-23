import { SyntheticEvent } from 'react'
import datadogLogger from '../../utils/loggers/datadog'
import logRocketLogger from '../../utils/loggers/logrocket'

const OrderForm = () => {
  const onSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    logRocketLogger.error(
      `Form submitted with: email: ${formData.get(
        'email'
      )} firstName: ${formData.get('firstName')} contactTime: ${formData.get(
        'contactTime'
      )}`
    )
    datadogLogger.info(
      `Form submitted with: email: ${formData.get(
        'email'
      )} firstName: ${formData.get('firstName')} contactTime: ${formData.get(
        'contactTime'
      )}`
    )

    throw new Error(
      `order submission incomplete with infoemail: ${formData.get(
        'email'
      )} firstName: ${formData.get('firstName')} contactTime: ${formData.get(
        'contactTime'
      )}`
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'stretch',
        padding: '32px',
        width: '350px',
      }}
    >
      <div>
        <label>First Name: </label>
        <input name="firstName" type="text" required />
      </div>
      <div>
        <label>Last Name: </label>
        <input name="lastName" type="text" required />
      </div>
      <div>
        <label>Quantity: </label>
        <input name="quantity" type="number" min={0} max={12} />
      </div>
      <div>
        <label>Email: </label>
        <input name="email" type="email" />
      </div>
      <div>
        <label>Password: </label>
        <input name="password" type="password" />
      </div>
      <div>
        <label>Best Contact Time: </label>
        <input name="contactTime" type="datetime-local" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default OrderForm
