class BuildItVisible extends React.Component{
    constructor(props){
        super(props);
        this.toogleVisibility = this.toogleVisibility.bind(this);
        this.showState = this.showState.bind(this);
        this.state={
            visibility: false
        }
    }
    toogleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
                //this.showState(visibility)
            }
            
        })
    }
    showState(){
        console.log(this.visibility);
    }
    render(){
        return(
            <div>
                <h1>Main text</h1>
                <button onClick={this.toogleVisibility}>
                {this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (
                    <div>
                    <p>Sample text to hide/show.</p>
                    </div>
                )}
            </div>
        )
    }
}
ReactDOM.render(<BuildItVisible />, document.getElementById("app"))


//program bez wykorzystywania klas i konstruktorów:
/*
const source = {
    title: "Visibility Toggle",
    sampleText: "Text which you can see (details)."
}

let visibility = false

const toogleVisibility= ()=>{
    visibility = !visibility;
    renderApp();
}
const renderApp= () =>{
        const jsx = (
            <div>
                <h1>{source.title}</h1>
                <button onClick={toogleVisibility}>
                {visibility ? "Hide details" : "Show details"}</button>
                {visibility && (
                    <div>
                    <p>{source.sampleText}</p>
                    </div>
                )}
            </div>)
        ReactDOM.render(jsx, document.getElementById("app"))
    }

renderApp();
*/