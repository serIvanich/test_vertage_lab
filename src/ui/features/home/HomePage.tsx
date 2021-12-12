import React from "react";
import {ColorsGradient} from "../gradient/ColorsGradient";
import s from './HomePage.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../../bll/store";
import {deleteGradient, GradientType} from "../../../bll/gradients-reducer";
import {Link} from "react-router-dom";

export const HomePage: React.FC = () => {
const dispatch = useAppDispatch()
    const gradients = useSelector<AppRootStateType, GradientType[]>(state => state.gradients)
    const removeGradient = (id: string) => {
       dispatch(deleteGradient({id}))
    }


    return (
        <div className={s.containerHome}>
            <div className={s.buttonAddGradient}>
                <Link to='new'>add new gradient</Link>
            </div>
            <div className={s.infoContainer}>
                colors gradient : <b>{gradients.length}</b>
            </div>
            <div className={s.containerGradient}>

                {
                    gradients.length
                        ? gradients.map((item, ind) => (<ColorsGradient key={ind}
                                                                                     gradient={item}
                                                                                     removeGradient={removeGradient}/>))
                        : 'you do not have gradient'
                }

            </div>
        </div>
    )
}