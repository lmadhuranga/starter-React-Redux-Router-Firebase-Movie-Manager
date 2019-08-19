import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { create, update, fetchMovie } from '../../redux/actions/movieActions';
import { moduleConfig } from './config'

import LoadingCmps from '../Components/LoadingCmps';


class EditPage extends Component {

    constructor(){ 
        super(); 
        this.state = {
            movie: {
                id: 0,
                name:"",
                quality:"",
                path:"",
                downloads:0
            }
        } 
        this.handleInput = this.handleInput.bind(this)
    }

    isEdit(){
        const { params } = this.props.match; 
        return (params.id !== undefined) ? params.id : false;
    } 
    
    handleInput(e){
        // Can't direcctly assign to setState due to error
        const name = e.target.name;
        const value = e.target.value;
        this.setState( prevState => ({ 
            movie : { ...prevState.movie, [name]: value }
        }));
    }

    redirect = (id=false) => { 
        const { history } = this.props;
        let url = (`/${moduleConfig.url}`);
        if(id) {
            url = `/${moduleConfig.url}/view/${id}`;
        }
        history.push(url);
    }
    
    handleSaveData(e) {
        const movieId = this.isEdit(); 
        let { movie } = this.state;
        if(movieId){
            e.preventDefault();
            this.props.update(movieId, movie);
            return this.redirect(movieId);
        }
        else {
            e.preventDefault();
            this.props.create(movie);
            return this.redirect();
        }
    }

    componentDidMount(){
        const movieId = this.isEdit();
        if(movieId) {
            this.props.fetchMovie(movieId);
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({movie:props.movie});
    }

    render() {  
        let { movie} = this.state;
        let { isLoading } = this.props;

        // Check data loaded only update page
        if(isLoading )
            return(<LoadingCmps></LoadingCmps>);
        
        let headLine = <h3 >Create Post</h3>;

        if(this.isEdit()) {
            headLine = <h3 >Update { movie.name } </h3>;
        }
        
        return (
            <div className="container movie-page">
                { headLine }  
                <form className="" onSubmit={ this.handleSaveData.bind(this) }>
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input className="form-control" type="text" ref="name" defaultValue={ movie.name } name="name" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quality">Quality</label>
                        <input className="form-control" type="text" ref="quality" defaultValue={ movie.quality } name="quality" onChange={this.handleInput}/> 
                    </div> 
                    <div className="form-group">
                        <label htmlFor="path">Path</label>
                        <input className="form-control" type="text" ref="path" defaultValue={ movie.path } name="path" onChange={this.handleInput}/> 
                    </div>
                    <button className="btn btn-primary btn-sm" type="submit">Update</button>
                </form>
            </div>
        );
        
    }
}

const mapStateToprops = state => { 
    return ({
        isLoading: state.movies.isLoading,
        movie: state.movies.item
    });
};

export default connect( mapStateToprops, { create, update, fetchMovie })(EditPage);