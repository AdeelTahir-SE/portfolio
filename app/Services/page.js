import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - My Portfolio</title>
        <meta name="description" content="Services offered by My Portfolio" />
      </Head>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-purple-900 dark:text-purple-400 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
              We offer a wide range of services to meet your needs.
            </p>
          </div>
          <div className="mt-10">
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">React App</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Building responsive and modern React applications using the latest technologies.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">Next.js App</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Developing high-performance and SEO-friendly applications using Next.js.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">Node.js Backend Project</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Developing robust and scalable backend solutions using Node.js.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">Node.js CLI App</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Creating command-line interface applications with Node.js.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">Fully Functional and Responsive App</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Building fully functional and responsive applications tailored to your needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">Figma to React</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Converting Figma designs into fully functional React applications.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer">
                <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-400">REST API Creation and Integration</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Designing and implementing RESTful APIs for seamless integration and data exchange.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
