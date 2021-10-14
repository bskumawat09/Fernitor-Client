import Products from '../products/Products';
import './Collection.css'

const Collection = () => {
    return (
        <section id="collection" className="py-5">
            <div className="container">
                <div className="title text-center">
                    <h2 className="position-relative d-inline-block">Top Categories</h2>
                </div>

                <div className="row g-0">
                    <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                        <button
                            type="button"
                            className="btn m-2 text-dark active-filter-btn"
                            data-filter="*">
                            All
                        </button>
                        <button type="button" className="btn m-2 text-dark" data-filter=".best">
                            Chair
                        </button>
                        <button type="button" className="btn m-2 text-dark" data-filter=".feat">
                            Desk
                        </button>
                        <button type="button" className="btn m-2 text-dark" data-filter=".new">
                            Table
                        </button>
                        <button type="button" className="btn m-2 text-dark" data-filter=".new">
                            Bed
                        </button>
                    </div>

                    <div className="collection-list mt-4 row gx-0 gy-3">
                        {
                            <Products limit={4} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection
