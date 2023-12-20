import React from 'react'

function Location() {
    return (
        <>
            <div className="uk-container mapouter" style={{
                position: 'relative',
                textAlign: "right",
                height: "510px",
                width: "100%"
            }}>
                <div className="gmap_canvas">
                    <iframe width="770" height="510" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=tokha  ganeshthan&t=&z=10&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        style={{
                            overflow: "hidden",
                            background: "none !important",
                            height: "510px",
                            width: "100%"
                        }}>
                    </iframe>
                </div></div>
        </>
    )
}

export default Location