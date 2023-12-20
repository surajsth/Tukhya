import React, { useState } from 'react'
import Festival from './Festival';
import Jatra from './Jatra';
import Places from './Places';
import Nearby from './Nearby';

function Show() {
    const [activeTab, setActiveTab] = useState({
        tab1: true,
        tab2: false,
        tab3: false,
        tab4: false,
    });
    const handleTab1 = () => {
        setActiveTab({
            tab1: true,
            tab2: false,
            tab3: false,
            tab4: false,
        });
    };
    const handleTab2 = () => {
        setActiveTab({
            tab1: false,
            tab2: true,
            tab3: false,
            tab4: false,
        });
    };
    const handleTab3 = () => {
        setActiveTab({
            tab1: false,
            tab2: false,
            tab3: true,
            tab4: false,
        });
    };
    const handleTab4 = () => {
        setActiveTab({
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: true,
        });
    };
    return (
        <>
            <div className="uk-container tabview mt-3" >
                <div className="insidePopup--div">
                    <ul>
                        <li
                            className={activeTab.tab1 === true ? "active" : ""}
                            onClick={handleTab1}
                        >
                            <i className="fa fa-file-text-o mr-1 icon"></i>Festival{" "}
                        </li>
                        <li
                            className={activeTab.tab2 === true ? "active" : ""}
                            onClick={handleTab2}
                        >
                            <i className="fa fa-file-text-o mr-1 icon"></i>Jatra{" "}
                        </li>
                        <li
                            className={activeTab.tab3 === true ? "active" : ""}
                            onClick={handleTab3}
                        >
                            <i className="fa fa-file-text-o mr-1 icon"></i>Place{" "}
                        </li>
                        <li
                            className={activeTab.tab4 === true ? "active" : ""}
                            onClick={handleTab4}
                        >
                            <i className="fa fa-file-text-o mr-1 icon"></i>Nearby Place{" "}
                        </li>

                    </ul>
                </div>
            </div>



            <div className="content-section main-content">
                {activeTab.tab1 && <Festival />}
                {activeTab.tab2 && <Jatra />}
                {activeTab.tab3 && <Places />}
                {activeTab.tab4 && <Nearby />}
            </div>
        </>
    )
}

export default Show