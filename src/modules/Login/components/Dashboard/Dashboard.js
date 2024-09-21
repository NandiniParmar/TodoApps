import React from 'react'

const Dashboard = () => {
	return (
		<>
			<div class='min-h-full'>
				<nav class='bg-gray-800'>
					<div class='mx-auto px-4 sm:px-6 lg:px-8'>
						<div class='flex h-16 items-center justify-between'>
							<div class='flex items-center'>
								<div class='flex-shrink-0'>
									<img
										class='h-8 w-8'
										src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
										alt='Your Company'
									/>
								</div>
							</div>
							<div class='hidden md:block'>
								<div class='ml-4 flex items-center md:ml-6'>
									<a
										href='#'
										class='rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline'
										aria-current='page'
									>
										Login
									</a>
									<a
										href='#'
										class='rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline'
										aria-current='page'
									>
										Sign In
									</a>
								</div>
							</div>
						</div>
					</div>
				</nav>

				<header class='bg-white shadow'>
					<div class='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						<h1 class='text-3xl font-bold tracking-tight text-gray-900'>
							Dashboard
						</h1>
					</div>
				</header>
				<main>
					<div class='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						{/* <!-- Your content --> */}
					</div>
				</main>
			</div>
		</>
	)
}

export default Dashboard
