import Article from "../components/Article"



export default function Articles() {
    return (
        <div className="continer">
            <div className="mx-6 mb-20">
                <div className="flex justify-center">
                    <h1 className="relative my-10 p-5 font-semibold text-4xl w-fit max-md:text-2xl chapter">Important Articles</h1>
                </div>
                <div className="flex gap-4 max-md:flex-col">
                    <div className="">
                        <img className="w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGtlc03RB1FnAbwwBJBbSh7TTtTJtxVI3GA&s" alt="" />
                        <div className="p-4">
                            <span className="text-red-500">February 4, 2023</span>
                            <h3 className="font-semibold text-2xl">Top Tips for Finding the Perfect Rental</h3>
                            <p className="text-sm text-gray-500">Discover expert advice on how to find the ideal rental property that meets your needs and budget.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 max-md:gap-6">
                        <Article
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLGVEcUCIzkqtndS_zwnHaLqKotuC2iD8BQ&s"
                            date="May 7, 2023"
                            title="Car Rental Hacks for a Smooth Journey"
                            description="Learn insider tips for getting the best deals and making the most of your rental car experience." />
                        <Article
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn3GPH_RjbTSicnyM-c8aIDB6HJKZrFxZEkw&s"
                            date="April 25, 2023"
                            title="Managing Your Rental Items: A Comprehensive Guide"
                            description="Get valuable insights on how to effectively manage and maintain your rented items." />
                        <Article
                            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsL6DVXOScfes7E37af2YbzFAmRuqdhvQdCQ&s"
                            date="January 2, 2023"
                            title="Navigating the Rental Market: Insights for New Renters"
                            description="Explore key considerations and useful tips for individuals new to the rental market." />
                    </div>
                </div>
            </div>
        </div>
    );
}

