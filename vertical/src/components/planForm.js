import React, {Component} from 'react';



class PlanForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planlength: '',
            interval:''                        
        };
    }
    addPlan = (e) => {
        e.preventDefault(); 
        this.setState ({ 
            planlength:'',
            interval:''
        })
        this.props.addPlan(e, this.state.planlength, this.state.interval)
    }
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.addPlan(e)}>
                    
                    <input
                        onChange={this.handleInputChange}
                        placeholder="plan length"
                        value={this.state.planlength}
                        name="planlength"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="interval"
                        value={this.state.interval}
                        name="interval"
                    />
                    <button type="submit" >Add a Routine</button>
                </form>
            </div>
        )
    }


}


export default PlanForm;