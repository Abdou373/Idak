import Header from '../sections/Header';
import Cover from '../sections/Cover';
import Categories from '../sections/Categories';
import Listings from '../sections/Listing';
import Stat from '../sections/Stat';
import Locations from '../sections/Locations';
import Article from '../sections/Articles';
import Footer from '../sections/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Cover />
            <Categories />
            <Listings />
            <Stat />
            <Locations />
            <Article />
            <Footer />
        </div>
    )
}