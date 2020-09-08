import React from 'react';
import Pagination from 'react-js-pagination';

function SpeakersToolbar() {
    return (
        <div className="container border border-primary mt-2 mb-3">
            <div className="row mt-2">
                <div className="col-sm">
                    <fieldset>
                        <Pagination
                            activePage={3}
                            itemsCountPerPage={7}
                            totalItemsCount={100}
                            pageRangeDisplayed={3}
                            onChange={(newPage) => {}}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </fieldset>
                </div>
                <fieldset>
                    <p>
                        <label>Page Size&nbsp;&nbsp;</label>
                        <select
                            id="pageLimitSize"
                            name="pageLimitSize"
                            value={
                                15
                            }
                            onChange={(e) => {

                            }}
                        >
                            <option value="5">5</option>
                            <option value="15">15</option>
                            <option value="50">50</option>
                        </select>
                    </p>
                </fieldset>
                <div className="col-sm">
                    <fieldset>
                        <p>
                            <label>Event Year&nbsp;&nbsp;</label>
                            <select
                                id="eventYear"
                                name="eventYear"
                                value={'all'}
                                onChange={(e) => {}}
                            >
                                <option value="">All Years</option>
                                <option value="2017">Year 2017</option>
                                <option value="2018">Year 2018</option>
                                <option value="2019">Year 2019</option>
                            </select>
                        </p>
                    </fieldset>
                </div>
                <div className="col-sm">
                    <fieldset>
                        <p>
                            <label>Theme&nbsp;&nbsp;</label>
                            <select
                                id="theme"
                                name="theme"
                                value={'all'}
                                onChange={(e) => {}}
                            >

                                <option value="2017">Light Theme</option>
                                <option value="2018">Dark Theme</option>

                            </select>
                        </p>
                    </fieldset>
                </div>
                <div className="col-sm">
                    <fieldset>
                        <p>
                            <label>Sort&nbsp;&nbsp;</label>
                            <select
                                id="sortby"
                                name="sortby"
                                value="ASC"
                                onChange={(e) => {}}
                            >
                                <option value="ASC">Ascending</option>
                                <option value="DESC">Descending</option>
                            </select>
                        </p>
                    </fieldset>
                </div>
                <div className="col-sm">
                    <fieldset>
                        <p>
                            <input
                                type="checkbox"
                                name="fav"
                                value="Bike"
                            ></input>
                            <label htmlFor="fav"> &nbsp;&nbsp;Show Favorites</label>
                        </p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}

export default SpeakersToolbar;
