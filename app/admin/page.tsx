"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication for demo purposes
    // In a real app, this would be handled securely
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Invalid username or password")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="admin-input"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="admin-input"
                required
              />
            </div>
            <button type="submit" className="admin-btn w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-red-600">ItSmartSolution Admin</h1>
            <button onClick={() => setIsAuthenticated(false)} className="text-gray-600 hover:text-red-600">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/products">
            <div className="admin-card hover:shadow-lg cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <i className="fas fa-box text-xl"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Products</h2>
                  <p className="text-gray-600">Manage your products</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/admin/services">
            <div className="admin-card hover:shadow-lg cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <i className="fas fa-cogs text-xl"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Services</h2>
                  <p className="text-gray-600">Manage your services</p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/admin/categories">
            <div className="admin-card hover:shadow-lg cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                  <i className="fas fa-folder text-xl"></i>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Categories</h2>
                  <p className="text-gray-600">Manage your categories</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
