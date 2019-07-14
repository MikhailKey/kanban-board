import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import idGenerator from "react-id-generator";
import {allTasksLoaded, allTasksError} from '../../actions';
import './rowPage.sass'
import RowItem from '../rowItem';
class RowPage extends Component {
    render() {
        const {allTasks, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorMessage/>
        }
        return (
            <div className = 'row-wrap'>
                <div className = "row-properties">
                    <div className="row-space"></div>
                    <h4 className="row-property">Статус</h4>
                    <h4 className="row-property">Старт</h4>
                    <h4 className="row-property">Финиш</h4>
                    <h4 className="row-property">Исполнитель</h4>
                </div>
                {
                allTasks.map((task) => <RowItem key={idGenerator()} task={task}/>
                      
                    )  
            }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.error,
        allTasks: state.allTasks,
        loading: state.loading,
    }
}
const mapDispatchToProps =  {
    allTasksLoaded,
    allTasksError
};
export default connect(mapStateToProps, mapDispatchToProps)(RowPage);