import React from 'react'

import './Propertycard.css'

function Propertycard({ item }) {
    return (
        <div>
            Title: {item.sk}
        </div>
    )
}

export default Propertycard