import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import './styles.css';


export default function Catalog() {

    return (
        <>
            <Header />
            <main className="ct-catalog-main">
                <section id="ct-catalog-section" className="ct-container">

                    <div className="ct-search-bar-container">
                        <Searchbar />
                    </div>

                    <div className="ct-catalog-cards-container">
                        <div>Teste</div>

                    </div>

                </section>
            </main>
        </>
    );
}