import React, { useState } from 'react'

const initialProducts = [
	{ id: 1, name: 'Mobile', price: 15000 },
	{ id: 2, name: 'Fridge', price: 10000 },
	{ id: 3, name: 'AC', price: 30000 },
]

const Task3 = () => {
	const [cartIds, setCartIds] = useState([])

	const toggleCart = (productId) => {
		setCartIds((prev) =>
			prev.includes(productId)
				? prev.filter((id) => id !== productId)
				: [...prev, productId],
		)
	}

	const totalPrice = initialProducts
		.filter((product) => cartIds.includes(product.id))
		.reduce((sum, product) => sum + product.price, 0)

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
			<div className="w-full max-w-xl">
				<h1 className="text-2xl font-semibold text-center mb-6">
					Product List
				</h1>

				<div className="overflow-hidden rounded-md shadow-md bg-white">
					<table className="w-full border-collapse text-sm">
						<thead className="bg-gray-100">
							<tr>
								<th className="border border-gray-200 px-4 py-2 text-left">
									Product Name
								</th>
								<th className="border border-gray-200 px-4 py-2 text-left">
									Price
								</th>
								<th className="border border-gray-200 px-4 py-2 text-left">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{initialProducts.map((product) => {
								const inCart = cartIds.includes(product.id)
								return (
									<tr key={product.id}>
										<td className="border border-gray-200 px-4 py-2">
											{product.name}
										</td>
										<td className="border border-gray-200 px-4 py-2">
											{product.price}
										</td>
										<td className="border border-gray-200 px-4 py-2">
											<button
												onClick={() => toggleCart(product.id)}
												className={`px-4 py-1 w-full text-xs font-semibold rounded border transition-colors ${
													inCart
														? 'bg-red-600 border-red-700 text-white hover:bg-red-700'
														: 'bg-green-600 border-green-700 text-white hover:bg-green-700'
												}`}
											>
												{inCart ? 'Remove from Cart' : 'Add to Cart'}
											</button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>

				<div className="mt-6 flex justify-center">
					<div className="w-full max-w-md bg-gray-200 text-center py-3 rounded-md text-lg font-semibold text-gray-800">
						Total Price: {totalPrice}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Task3

