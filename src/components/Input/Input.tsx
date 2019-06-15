import * as React from 'react';

/**
 * Material Design Floating Label Outlined Inputs
 */

type InProps = {
    onFocus: (e: Event) => void,
    onBlur: (e: Event) => void,
    type: string,
    field: string,
    nameLabel: string,
    id: string,
    onHandleFocus: any,
    onHandleBlur: any
}

const Input = ({
    type,
    field, // textarea or input field
    nameLabel,
    id,
    onHandleFocus,
    onHandleBlur
}: InProps) => {

    const textareaClassNames = field === "textarea" ? 'form__input__text--textarea ' : '';

    return (
        <div className="form__row">
            <div className={`form__input__text ${textareaClassNames} form__input__text--outlined`}>
                {field === "input" && <input type={type} className="form__input__text--input" id={id} onFocus={onHandleFocus} onBlur={onHandleBlur} />}
                {field === "textarea" && <textarea className="form__input__text--input" id={id} onFocus={onHandleFocus} onBlur={onHandleBlur} ></textarea>}
                <div className="form__notched__outline">
                    <div className="form__notched__outline--leading"></div>
                    <div className="form__notched__outline--notch">
                        <label className="form__floating__label" htmlFor={id}>{nameLabel}</label>
                    </div>
                    <div className="form__notched__outline--trailing"></div>
                </div>
            </div>
        </div>
    )
}

export default Input;
