import Header from "../components/header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import backpack from '/src/assets/backpack.png'
import StartRating from '../components/StartRating'
import backpackb from '/src/assets/backpack-black.png'
import backpackazu from '/src/assets/mochilazu.png'

// import TreeView from 'treeview-react-bootstrap';
import TreeView from 'react-treeview';

function handleClick(i) {
    let [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
    collapsedBookkeeping[i] = !collapsedBookkeeping[i];
    this.setState({ collapsedBookkeeping: collapsedBookkeeping });
};

function collapseAll() {
    this.setState({
        collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
    });
};

export default function Catalogo() {
    const dataSource = [
        ['Apple', 'Orange'],
        ['Facebook', 'Google'],
        ['Celery', 'Cheeseburger'],
    ];

    const collapsedBookkeeping = 1;

    return (

        <div className="min-h-screen flex flex-col">
            <Header />
            <Search />

            <div className="container-cat">
                <div className="row">
                    <div className="cat-menu col-3">

                        <div className="px-16 ">
                            <button onClick={collapseAll}>Categorías</button>
                            {dataSource.map((node, i) => {
                                // Let's make it so that the tree also toggles when we click the
                                // label. Controlled components make this effortless.
                                const label =
                                    <span className="node" onClick={handleClick.bind(null, i)}>
                                        Tela {i}
                                    </span>;
                                return (
                                    <TreeView
                                        key={i}
                                        nodeLabel={label}
                                        collapsed={collapsedBookkeeping[i]}
                                        onClick={handleClick.bind(null, i)}>
                                        {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
                                    </TreeView>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cat-body col-9">
                        <div className="row">
                            <ul className="nav justify-content-center nav-underline">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Mochilas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Botellas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Playeras</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row cat-cards">
                            <div className="card col" style={{ 'width': '18rem;' }}>
                                <img src={backpack} style={{ 'width': '10rem', 'margin': 'auto' }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-text card-mochila-text">Mochila blanca ST</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div class="col-9">
                                            <StartRating /></div>
                                        <div class="col-3">
                                            <p class="card-text"><small class="text-body-secondary">$259.00</small></p>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <a href="#" className="btn btn-dark btn-add-cart">Agregar al Carrito (0)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card col" style={{ 'width': '18rem;' }}>
                                <img src={backpackb} style={{ 'width': '10rem', 'margin': 'auto' }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-text card-mochila-text">Mochila Negra ST</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div class="col-9">
                                            <StartRating /></div>
                                        <div class="col-3">
                                            <p class="card-text"><small class="text-body-secondary">$259.00</small></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <a href="#" className="btn btn-dark btn-add-cart">Agregar al Carrito (0)</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card col" style={{ 'width': '18rem;' }}>
                                <img src={backpackazu} style={{ 'width': '10rem', 'margin': 'auto' }} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-text card-mochila-text">Mochila Azul ST</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div class="col-9">
                                            <StartRating /></div>
                                        <div class="col-3">
                                            <p class="card-text"><small class="text-body-secondary">$259.00</small></p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <a href="#" className="btn btn-dark btn-add-cart">Agregar al Carrito(0)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

