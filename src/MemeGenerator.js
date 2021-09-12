import React from 'react'

//class component because it holding data and making calls to API (business logic)
class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
           topText: "",
           bottomText: "",
           randomImg: "http://i.imgflip.com/1bij.jpg",
           loading: false,
           allMemeImgs: []
        }
    }

    //as soon as the component mounts, loading is set to true, 
    //then fetching data from url and getting the response as json data
    //followed by setting loading to false once data has been received
    //
    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({
                loading: false,
                allMemeImgs: memes
            })
        })
    }

    //get the name and value from the input boxes (targets of the event)
    //using arrow functions, you don't need to bind this
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
       
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
        
        
    }

    render(){
        return(
            <main role="main" className="meme-gen-component">
                <form className="meme-form" onSubmit={this.handleSubmit}>

                    <label htmlFor="topText">
                        <input 
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                        placeholder="Top text"
                        id="topText"
                        />
                    </label>
                    <label htmlFor="bottomText">
                        <input 
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                        id="bottomText"
                        placeholder="Bottom Text"
                        />
                    </label>
                    <br></br>
                    <button aria-label="Generate new meme image"> Gen</button>

                </form>

            <section className="meme">
                <img src={this.state.randomImg} alt="Random meme"/>
                <h2 aria-label="Top text" className="top">{this.state.topText}</h2>
                <h2 aria-label="Bottom text" className="bottom">{this.state.bottomText}</h2>
            </section>
            </main>
        )
    }
}


export default MemeGenerator