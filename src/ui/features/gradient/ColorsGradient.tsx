import React from "react";
import s from './ColorsGradient.module.css'
import {GradientType} from "../../../bll/gradients-reducer";

export const ColorsGradient: React.FC<ColorsGradientPropsType> = ({gradient}) => {

    // const color1 = '#E040FB'
    // const color2 = '#00BCD4'
const {color1, color2} = gradient

    const gradientStyle = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
    }

    return (
        <div>

            <div className={s.gradientContainer} style={gradientStyle}>


                <div style={{color: color2}}>{color1}</div>
                <div className={s.buttonBlock}>
                    <button style={{backgroundColor: color2}}>delete</button>
                    <button style={{backgroundColor: color1}}>edit</button>
                </div>
                <div style={{color: color1}}>{color2}</div>

            </div>
        </div>
    )
}

//types

type ColorsGradientPropsType = {
    gradient: GradientType
}
