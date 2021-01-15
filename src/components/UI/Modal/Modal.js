import React from 'react';

import './modal.scss';

class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
    }

    render() {
        return (
            <>  
                {this.props.show && 
                <div 
                className="modal-block-backdrop" 
                onClick={this.props.modalClosed}/>}
                <div 
                className={this.props.show ? "modal-block-content modal-block-opened" : "modal-block-content modal-block-closed"}
                style={{
                    transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : this.props.show ? '1' : '0'
                }}>
                        {this.props.children}
                </div>
            </>
        );
    }
};

export default Modal;