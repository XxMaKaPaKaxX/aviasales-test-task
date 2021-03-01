import React from 'react';

const TransfersControlPanel = ({ checkboxStatus, toggleStatus }) => {
    return (
        <div className="transfers-panel d-flex flex-column bg-light py-2 rounded shadow-4">
            <h4 className="text-uppercase px-3">Liczba przesiadek</h4>
            <div className="input-control px-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="all"
                    checked={checkboxStatus.all}
                    onChange={(e) => toggleStatus(e)}
                />
                <label class="form-check-label mx-3" for="all">Wszystkie</label>
            </div>

            <div className="input-control px-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="without"
                    checked={checkboxStatus.without}
                    onChange={(e) => toggleStatus(e)}
                />
                <label class="form-check-label mx-3" for="all">Bez przesiadek</label>
            </div>

            <div className="input-control px-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="one"
                    checked={checkboxStatus.one}
                    onChange={(e) => toggleStatus(e)}
                />
                <label class="form-check-label mx-3" for="all">1 przesiadka</label>
            </div>

            <div className="input-control px-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="two"
                    checked={checkboxStatus.two}
                    onChange={(e) => toggleStatus(e)}
                />
                <label class="form-check-label mx-3" for="all">2 przesiadki</label>
            </div>

            <div className="input-control px-3">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="three"
                    checked={checkboxStatus.three}
                    onChange={(e) => toggleStatus(e)}
                />
                <label class="form-check-label mx-3" for="all">3 przesiadki</label>
            </div>

        </div>
    );
}

export default TransfersControlPanel;