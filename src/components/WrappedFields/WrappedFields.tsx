import * as React from 'react';
import './styles/index.scss';

const WrappedFields = (Input) => {
  return class extends React.Component {

    // Focus
    onHandleFocus = (e) => {
      if (e.target.closest(".form__input__text--outlined") && !e.target.closest(".form__input__text--outlined").classList.contains('form__input__text--disabled')) {
        let container = e.target.closest(".form__input__text--outlined");
        let notch = container.querySelector(".form__notched__outline--notch");
        let label = notch.querySelector(".form__floating__label");
        let transformedWidth;

        if (!notch.classList.contains("form__notched__outline--notch__notched")) {
          label.style.transform = "scale(0.75, 0.75)";
          label.style.transition = "none";
          transformedWidth = label.getBoundingClientRect().width + 10;
          label.style.removeProperty("transform");
          label.style.removeProperty("transition");
          notch.style.width = transformedWidth + "px";
        }

        container.classList.add("form__input__text--focused");
        notch.classList.add("form__notched__outline--notch__notched");
      }
    }

    // blur
    onHandleBlur = (e) => {
      if (e.target.matches(".form__input__text--input") && e.target.closest(".form__input__text--outlined")) {
          let container = e.target.closest(".form__input__text--outlined");
          let notch = container.querySelector(".form__notched__outline--notch");

          container.classList.remove("form__input__text--focused");

          if (!e.target.value) {
            notch.classList.remove("form__notched__outline--notch__notched");
            notch.style.removeProperty("width");
          }
      }
  }

    render () {
      return (
        <div className="basic__information">
            <form className="form__app" autoComplete="off" >
                <Input {...this.props} type="text" field="input" nameLabel="test input" id="test-input" onHandleFocus={this.onHandleFocus} onHandleBlur={this.onHandleBlur} />
                <Input {...this.props} type="text" field="textarea" nameLabel="test textarea" id="test-textarea" onHandleFocus={this.onHandleFocus} onHandleBlur={this.onHandleBlur} />
            </form>
        </div>
      )
    }
  }
}

export default WrappedFields;
