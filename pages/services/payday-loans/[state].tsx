import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '../../../components/home/CTA'
import StateRequirements from '../../../components/states/StateRequirements'
import StateFAQ from '../../../components/states/StateFAQ'
import StateTestimonials from '../../../components/states/StateTestimonials'
import StateStats from '../../../components/states/StateStats'
import StateAdvantages from '../../../components/states/StateAdvantages'
import { statesList, getStateBySlug, StateInfo } from '../../../data/states'

interface StatePageProps {
  state: StateInfo
}

const StatePaydayLoanPage: NextPage<StatePageProps> = ({ state }) => {
  if (!state) return <div>State not found</div>

  const { name, abbreviation, slug } = state
  const title = `Payday Loans in ${name} (${abbreviation}) | BigSkyCash.org`
  const description = `Get fast and reliable payday loans in ${name}. Apply online for quick approval and receive funds as soon as the next business day. Serving all cities in ${abbreviation}.`
  const keywords = `payday loans ${name}, ${name} payday loans, quick cash ${name}, emergency loans ${abbreviation}, fast loans ${name}, online loans ${abbreviation}, cash advance ${name}, short term loans ${abbreviation}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://bigskycash.org/services/payday-loans/${slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bigskycash.org/services/payday-loans/${slug}`} />
      </Head>

      <main>
        <section className="bg-primary-700 text-white py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="heading-xl mb-6">Payday Loans in {name} ({abbreviation})</h1>
                <p className="text-xl mb-8">Fast, reliable payday loans for {name} residents. Get the cash you need when you need it most.</p>
                <Link href="#apply-now" className="btn-secondary">
                  Apply Now
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src={`https://source.unsplash.com/featured/?${name},city`}
                  alt={`Payday Loans in ${name}`} 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg text-center mb-6">Fast & Reliable Payday Loans in {name}</h2>
              <p className="text-lg mb-6">
                When financial emergencies strike in {name}, BigSkyCash is here to help. Our payday loans provide a quick and convenient 
                solution for {name} residents who need cash fast. Whether you're dealing with unexpected medical bills, car repairs, 
                or other urgent expenses, our simple online application process makes it easy to get the funds you need.
              </p>
              <p className="text-lg mb-6">
                We understand that life in {name} comes with its own unique financial challenges. That's why we've designed our 
                payday loan service to be accessible to residents across the state, from the biggest cities to the smallest towns.
              </p>
            </div>
          </div>
        </section>

        <StateAdvantages state={state} />

        <section className="section bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image 
                  src={`https://source.unsplash.com/featured/?money,cash`}
                  alt={`Quick Payday Loans in ${name}`} 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="heading-lg mb-6">How to Get a Payday Loan in {name}</h2>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Complete Our Online Application</h3>
                      <p>Fill out our simple online form with your personal and financial information. It only takes a few minutes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Get an Instant Decision</h3>
                      <p>After submitting your application, you'll receive a decision almost immediately.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Review and Accept Terms</h3>
                      <p>If approved, carefully review your loan terms and electronically sign your agreement.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Receive Your Funds</h3>
                      <p>Once approved, funds are typically deposited into your bank account as soon as the next business day.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <StateRequirements state={state} />

        <StateStats state={state} />

        <section className="section" id="apply-now">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-lg mb-6">Apply for a {name} Payday Loan Today</h2>
              <p className="text-lg mb-8">Get the financial relief you need with our quick and easy application process.</p>
              <div className="bg-primary-600 text-white p-8 rounded-lg">
                <h3 className="heading-md mb-4">Ready to get started?</h3>
                <p className="mb-6">Our online application takes just minutes to complete, and you could have funds in your account as soon as tomorrow.</p>
                <button className="btn-secondary">Start Your Application</button>
              </div>
            </div>
          </div>
        </section>

        <StateTestimonials state={state} />

        <StateFAQ state={state} />

        <CTA />
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = statesList.map((state) => ({
    params: { state: state.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stateSlug = params?.state as string
  const state = getStateBySlug(stateSlug)

  if (!state) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      state,
    },
  }
}

export default StatePaydayLoanPage
