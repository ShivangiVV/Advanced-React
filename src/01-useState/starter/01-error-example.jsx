const ErrorExample = () => {
  let count = 0
  const onHandleCLick = () => {
    count = count + 1
    console.log(count)
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={onHandleCLick} className="btn">
        {' '}
        Click Me
      </button>
    </div>
  )
}

export default ErrorExample
