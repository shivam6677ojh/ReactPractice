import React, { useState } from 'react'

const GITHUB_API_BASE = 'https://api.github.com/users'

const Task2 = () => {
	const [username, setUsername] = useState('')
	const [user, setUser] = useState(null)
	const [repos, setRepos] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const handleSearch = async (e) => {
		e.preventDefault()
		const trimmed = username.trim()
		if (!trimmed) {
			setError('Please enter a GitHub username')
			setUser(null)
			setRepos([])
			return
		}

		setLoading(true)
		setError('')
		setUser(null)
		setRepos([])

		try {
			const userResponse = await fetch(`${GITHUB_API_BASE}/${trimmed}`)

			if (userResponse.status === 404) {
				setError('User not found (404). Please try another username.')
				return
			}

			if (!userResponse.ok) {
				throw new Error('Failed to fetch user')
			}

			const userData = await userResponse.json()

			const reposResponse = await fetch(
				`${GITHUB_API_BASE}/${trimmed}/repos?sort=created&per_page=5`,
			)

			let reposData = []
			if (reposResponse.ok) {
				reposData = await reposResponse.json()
			}

			setUser(userData)
			setRepos(reposData)
            setUsername('')
		} catch (err) {
			setError('Something went wrong while fetching data. Please try again.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 flex items-start justify-center py-10">
			<div className="w-full max-w-3xl px-4">
				<h1 className="text-3xl font-bold mb-6">GitHub Search</h1>

				<form
					onSubmit={handleSearch}
					className="flex flex-col sm:flex-row gap-3 mb-6"
				>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter GitHub username..."
						className="flex-1 rounded-md border border-gray-300 bg-black text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
					>
						Search
					</button>
				</form>

				{loading && (
					<p className="text-gray-600 mb-4">Loading user information...</p>
				)}

				{error && !loading && (
					<p className="text-red-600 font-medium mb-4">{error}</p>
				)}

				{user && !loading && (
					<div className="bg-gray-900 text-white rounded-xl p-6 shadow-lg mb-8 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
						<img
							src={user.avatar_url}
							alt={user.login}
							className="w-24 h-24 rounded-full object-cover border-2 border-gray-700"
						/>
						<div className="flex-1">
							<h2 className="text-2xl font-semibold mb-1">{user.login}</h2>
							<p className="text-sm text-gray-300 mb-3">
								{user.bio || 'No bio available'}
							</p>
							<div className="flex flex-wrap gap-3 text-xs">
								<span className="px-3 py-1 rounded-full bg-gray-800">
									{user.followers} Followers
								</span>
								<span className="px-3 py-1 rounded-full bg-gray-800">
									{user.following} Following
								</span>
								<span className="px-3 py-1 rounded-full bg-gray-800">
									{user.public_repos} Repos
								</span>
							</div>
						</div>
					</div>
				)}

				{user && repos.length > 0 && !loading && (
					<div>
						<h3 className="text-xl font-semibold mb-3">Latest Repositories</h3>
						<ul className="space-y-3">
							{repos.map((repo) => (
								<li
									key={repo.id}
									className="bg-gray-900 text-white rounded-md px-4 py-2 shadow flex items-center justify-between hover:bg-gray-800 transition-colors"
								>
									<span className="truncate mr-3">{repo.name}</span>
									<a
										href={repo.html_url}
										target="_blank"
										rel="noreferrer"
										className="text-xs text-blue-400 hover:underline whitespace-nowrap"
									>
										View
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default Task2

