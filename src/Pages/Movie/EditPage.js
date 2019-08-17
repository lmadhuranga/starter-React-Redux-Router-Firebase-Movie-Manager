import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { create, update, fetchMovie } from '../../redux/actions/movieActions';
import { moduleConfig } from './config'

class EditPage extends Component {

    constructor(props){ 
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

    isUpdate(){
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
        if(id) {
            history.push(`/${moduleConfig.url}/view/${id}`);
        }
        else {
            history.push(`/${moduleConfig.url}`);
        }
    }
    
    handleSaveData(e) {
        const movieId = this.isUpdate(); 
        let { movie } = this.state;
        if(movieId){
            e.preventDefault();
            this.props.update(movieId, movie);
            this.redirect(movieId);
        }
        else {
            e.preventDefault();
            this.props.create(movie);
            this.redirect();
        }
    }

    componentDidMount(){
        const movieId = this.isUpdate();
        if(movieId) {
            this.props.fetchMovie(movieId);
        }
    }

    UNSAFE_componentWillReceiveProps(props) {
        this.setState({movie:props.movie});
    }

    render() {  
        let { movie } = this.state;
        // Check data loaded only update page
        if(movie.id===0 && this.isUpdate())
            return(<div>Loading...</div>);
        let headLine = <h3 >Create Post</h3>;
        if(this.isUpdate()) {
            headLine = <h3 >Update { movie.title } Post</h3>;
        }
        return (
            <div className="container movie-page">
                { headLine }
                <form className="" onSubmit={this.handleSaveData.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title"></label>
                        <input className="form-control" type="text" ref="name" defaultValue={ movie.name } name="name" placeholder="Name" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="quality"></label>
                        <input className="form-control" type="text" ref="quality" defaultValue={ movie.quality } name="quality" placeholder="Quality" onChange={this.handleInput}/> 
                    </div> 
                    <div className="form-group">
                        <label htmlFor="path"></label>
                        <input className="form-control" type="text" ref="path" defaultValue={ movie.path } name="path" placeholder="Path" onChange={this.handleInput}/> 
                    </div>
                    <button className="btn btn-primary btn-sm" type="submit">Save </button>
                </form>
            </div>
        );
        
    }
}

const mapStateToprops = state => ({
    movie: state.movies.item
});

export default connect( mapStateToprops, { create, update, fetchMovie })(EditPage);