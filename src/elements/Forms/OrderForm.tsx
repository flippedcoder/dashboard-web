const OrderForm = () => (
  <form
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
      <input type="text" required />
    </div>
    <div>
      <label>Last Name: </label>
      <input type="text" required />
    </div>
    <div>
      <label>Quantity: </label>
      <input type="number" min={0} max={12} />
    </div>
    <div>
      <label>Email: </label>
      <input type="email" />
    </div>
    <div>
      <label>Password: </label>
      <input type="password" />
    </div>
    <div>
      <label>Best Contact Time: </label>
      <input type="datetime-local" />
    </div>
    <button onSubmit={() => {}}>Submit</button>
  </form>
)

export default OrderForm
