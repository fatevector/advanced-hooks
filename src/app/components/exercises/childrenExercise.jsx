import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ComponentsList = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = {
            ...child.props,
            value: index + 1
        };
        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ComponentsList>
                <Component />
                <Component />
                <Component />
            </ComponentsList>
        </CollapseWrapper>
    );
};

const Component = ({ value }) => {
    return <div>Компонент списка {value}</div>;
};

Component.propTypes = {
    value: PropTypes.number
};

export default ChildrenExercise;
