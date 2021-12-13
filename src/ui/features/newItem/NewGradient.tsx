import React from "react";
import s from './NewGradient.module.scss'
import {FormValuesType, SettingForm} from "../../../components/form/SettingForm";
import {addNewGradient} from "../../../bll/gradients-reducer";
import {useAppDispatch} from "../../../bll/store";
import {v4 as uuidv4} from "uuid";
import {Link, useNavigate} from "react-router-dom";

export const NewGradient: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const changeCallback = (values: FormValuesType) => {
        console.log(values)
        const newGradient = {...values, id: setId()}
        dispatch(addNewGradient({gradient: newGradient}))
        navigate('/')
    }

    function setId(): string {
        return uuidv4()
    }

    return (
        <div className={s.containerNew}>
            <div className={s.text}>please enter your colors of gradient or push <Link to={'/'}>this</Link> for go out</div>
            <SettingForm changeCallback={changeCallback}/>
        </div>
    )
}

