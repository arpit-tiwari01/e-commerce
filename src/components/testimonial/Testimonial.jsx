const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Customer Reviews</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                <p className="leading-relaxed">I had an excellent experience shopping on this site. The product quality is top-notch and the delivery was fast. I will definitely be shopping here again!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Alex Johnson</h2>
                                <p className="text-gray-500">Verified Buyer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                <p className="leading-relaxed">The customer service is fantastic! I had a query about my order and they responded quickly and resolved my issue. Highly recommend this site for its great service.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Jordan Lee</h2>
                                <p className="text-gray-500">Frequent Shopper</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/men/3.jpg" />
                                <p className="leading-relaxed">Amazing selection of products at great prices. The checkout process was smooth, and I received my items in perfect condition. Will definitely recommend to friends.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Taylor Smith</h2>
                                <p className="text-gray-500">Happy Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
