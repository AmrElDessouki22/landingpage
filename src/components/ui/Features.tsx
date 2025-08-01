import { TruckIcon, ClockIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-accent font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience the best delivery service
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <TruckIcon className="h-12 w-12 text-accent" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">Fast Delivery</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Get your packages delivered in no time with our reliable service.
                </dd>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <ClockIcon className="h-12 w-12 text-accent" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">24/7 Support</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Our support team is available around the clock to help you.
                </dd>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <CreditCardIcon className="h-12 w-12 text-accent" aria-hidden="true" />
              </div>
              <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">Secure Payments</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Your transactions are safe with our top-notch security measures.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
