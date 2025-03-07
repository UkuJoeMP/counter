import React from "react";

const SecondCounter = (props) => {
    const {numOne, numTwo, numThree, numFour, numFive, numSix} = props
    return (
        <div className="d-flex justify-content-center">
            <div className="d-flex flex-row-reverse justify-content-center bg-black text-white countersize py-2">
                    <i className="fa-regular fa-clock fa-3x"></i>
                </div>
            <div className="d-flex flex-row-reverse justify-content-center bg-black text-white countersize py-2">
                    <div className="px-3 numberBg runded border-start border-end border-secondary ms-2 numberSize">
                        <h1>{numOne}</h1>
                    </div>
                    <div className="px-3 numberBg runded border-start border-end border-secondary ms-2 numberSize">
                        <h1>{numTwo}</h1>
                    </div>
                    <div className="px-3 numberBg runded border-start border-end border-secondary ms-2 numberSize">
                        <h1>{numThree}</h1>
                    </div>
                    <div className="px-3 numberBg runded border-start border-end border-secondary ms-2 numberSize">
                        <h1>{numFour}</h1>
                    </div>
                    <div className="px-3 numberBg runded border-start border-end border-secondary ms-2 numberSize">
                        <h1>{numFive}</h1>
                    </div>
                    <div className="px-3 numberBg runded border-start border-end border-secondary ms-2 numberSize">
                        <h1>{numSix}</h1>
                    </div>
            </div>
        </div>
    )
}
export default SecondCounter