import React from "react";

export default function Main(props) {
    return (
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {props.ads && props.ads.map(ads => {
                    return (
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">{ads.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">${ads.price}</h1>
                                    <p>{ads.description}</p>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">Просмотреть...
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </main>
    );

}
