import { Link } from 'react-router-dom';
import { Plane, CheckCircle, ArrowRight } from 'lucide-react';

export function Aerospace() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-2xl flex items-center justify-center">
              <Plane className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Aerospace Solutions
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Maintain safety standards while optimizing complex aerospace processes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Aerospace Challenges We Solve
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Safety and compliance management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Complex supply chain coordination
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Quality assurance and traceability
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Maintenance, repair, and overhaul optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Production scheduling and resource allocation
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 min-h-[400px] flex items-center justify-center">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Aerospace Visual Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Elevate Your Aerospace Operations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            See how CIFusion.ai can help maintain safety while driving efficiency
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
