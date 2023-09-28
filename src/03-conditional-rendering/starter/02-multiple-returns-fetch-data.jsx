import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setuser] = useState(null)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok === true) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const user = await response.json()
        setuser(user)
      } catch (error) {
        setIsError(true)
        console.log(' Error')
      }
      setIsLoading(false)
    }
    fetchdata()
  }, [])
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error</h2>
  }
  const { avatar_url, name, company, bio } = user
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
