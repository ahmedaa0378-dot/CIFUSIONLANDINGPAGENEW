import { Link } from 'react-router-dom';
import { Factory, CheckCircle, ArrowRight } from 'lucide-react';

export function Manufacturing() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Factory className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Transform your manufacturing operations with AI-powered continuous improvement
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industry Challenges We Solve
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Production efficiency and throughput optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Quality control and defect reduction
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Waste minimization and lean manufacturing
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Supply chain optimization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Equipment downtime and maintenance planning
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 min-h-[400px] flex items-center justify-center">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Manufacturing Visual Placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                30% Efficiency Gain
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Average improvement in production efficiency across manufacturing clients
              </p>
            </div>
            <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                50% Defect Reduction
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Significant decrease in quality issues through AI-powered analysis
              </p>
            </div>
            <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                20% Cost Savings
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Reduction in operational costs through waste elimination
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Optimize Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            See how CIFusion.ai can transform your operations
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
