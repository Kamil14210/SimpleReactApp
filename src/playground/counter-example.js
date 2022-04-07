class Counter extends React.Component{
    constructor(props){
        super(props);
        this.plusOne = this.plusOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        try{
        const stringCount = localStorage.getItem("count");
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
    catch(e){
        //Do nothing at all
    }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem("count", this.state.count)
        }
    }
    componentWillUnmount(){
        //tego componentu nie musi być
        console.log("componentWillUnmount!")
    }
    plusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count +1
            }
        });
    }
    minusOne(){
        this.setState((prevState)=>{
            return{
                count: prevState.count -1
            }
        });
    }
    reset(){
        this.setState(()=>{
            return{
                count: 0
            }
        });
    }
    render(){
        return(
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.plusOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
        count: 0
}
ReactDOM.render(<Counter/>, document.getElementById("app"))

//poniżej kod bez wykorzystania klas i konstruktora:
/*
let count = 0
const addOne = () => {
    count++;
    //console.log("addOne")
    renderCountApp();
}
const minusOne = () => {
    //console.log("minusOne")
    count--;
    renderCountApp();

}
const reset = () => {
    //console.log("reset")
    count = 0;
    renderCountApp();
}

  const appRoot = document.getElementById("app")

  //ReactDOM.render(template1, appRoot)

  const renderCountApp =() =>{
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {addOne}>+1</button>
            <button onClick = {minusOne}>-1</button>
            <button onClick = {reset}>reset</button>
    
        </div>
    )
    ReactDOM.render(templateTwo, appRoot)

  }

  renderCountApp();
  */