'use client'

import { useState } from 'react'
import MembersContent from './MembersContent'
import { useAuth } from './AuthContext'

export default function MembersAreaGate({ posts, requiredPassword }) {
  const [enteredPassword, setEnteredPassword] = useState('')
  const { login, user, isLoading } = useAuth();
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (enteredPassword === requiredPassword) {
      login({ user: true });
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  if(isLoading) return <div className="text-center">Loading...</div>

  if (user) return <MembersContent posts={posts} />

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto text-center">
      <h2 className="text-2xl mb-4">Enter Members Area</h2>
      <input
        type="password"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
        placeholder="Enter password"
        className="border rounded px-4 py-2 w-full mb-2"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
        Submit
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  )
}
